import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import type { FormEvent } from 'react';
import { useActivities } from '../../../lib/hooks/useActivities';

type Props = {
  closeForm: () => void;
  activity?: Activity;
};

export default function ActivityForm({ closeForm, activity }: Props) {
  const { updateActivity, createActivity } = useActivities();

  const handleSumbit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) {
      data.id = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
      closeForm();
    } else {
      await createActivity.mutateAsync(data as unknown as Activity);
      closeForm();
    }
  };
  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create Activity
      </Typography>
      <Box
        component="form"
        sx={{ flexDirection: 'column', gap: 3, display: 'flex' }}
        onSubmit={handleSumbit}
      >
        <TextField
          label="Title"
          name="title"
          defaultValue={activity?.title ?? ''}
          fullWidth
        />
        <TextField
          label="Description"
          name="description"
          defaultValue={activity?.description ?? ''}
          multiline
          rows={3}
          fullWidth
        />
        <TextField
          label="Category"
          name="category"
          defaultValue={activity?.category ?? ''}
          fullWidth
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          defaultValue={
            activity?.date
              ? new Date(activity.date).toISOString().split('T')[0]
              : new Date().toISOString().split('T')[0]
          }
          fullWidth
        />
        <TextField
          label="City"
          name="city"
          defaultValue={activity?.city ?? ''}
          fullWidth
        />
        <TextField
          label="Venue"
          name="venue"
          defaultValue={activity?.venue ?? ''}
          fullWidth
        />
        <Box sx={{ justifyContent: 'flex-end', display: 'flex', gap: 3 }}>
          <Button color="inherit" onClick={closeForm}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            type="submit"
            loading={updateActivity.isPending || createActivity.isPending}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
