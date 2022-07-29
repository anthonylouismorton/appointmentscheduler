import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


function BookAppointment() {
  return (
    <Box sx={{ width: '25%' }}>
      <Stack spacing={1}>
        <Grid>
          <Typography>702-653-3316</Typography>
          <Typography>Email</Typography>
        </Grid>
        <Grid>
          <Typography>Contact Info</Typography>
        </Grid>
        <Grid>
          <Grid>Mon  08:00 - 17:00</Grid>
          <Grid>Tue  08:00 - 17:00</Grid>
          <Grid>Wed  08:00 - 17:00</Grid>
          <Grid>Thu  08:00 - 17:00</Grid>
          <Grid>Fri  08:00 - 17:00</Grid>
          <Grid>Sat Closed</Grid>
          <Grid>Sun Closed</Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default BookAppointment;