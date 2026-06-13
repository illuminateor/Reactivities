import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { Box } from '@mui/material';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>('https://localhost:5001/api/activities')
      .then((response) => setActivities(response.data));
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  const handleSumbitForm = (activity: Activity) => {
    if (activity.id) {
      setSelectedActivity(activity);
      setActivities(
        activities.map((x) => (x.id === activity.id ? activity : x)),
      );
    } else {
      const newActivity = { ...activity, id: activities.length.toString() };
      setSelectedActivity(newActivity);
      setActivities([...activities, newActivity]);
    }
    setEditMode(false);
  };

  const handleDelete = (id: string) => {
    setActivities(activities.filter((x) => x.id !== id));
  };

  return (
    <Box sx={{ bgcolor: '#eeeeee' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          openForm={handleOpenForm}
          editMode={editMode}
          closeForm={handleFormClose}
          submitForm={handleSumbitForm}
          deleteActivity={handleDelete}
        />
      </Container>
    </Box>
  );
}

export default App;
