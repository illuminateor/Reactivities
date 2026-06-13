import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import type { FormEvent } from 'react';

type Props = {
  closeForm: () => void;
  activity?: Activity;
  submitForm: (activity: Activity) => void;
};

export default function ActivityForm({
  closeForm,
  activity,
  submitForm,
}: Props) {
  const handleSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) data.id = activity.id;

    submitForm(data as unknown as Activity);
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
          defaultValue={activity?.date ?? ''}
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
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
