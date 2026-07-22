import NavBar from './NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';

function App() {
  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
