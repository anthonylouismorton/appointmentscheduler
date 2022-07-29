import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BookAppointment from './BookAppointemnt'

function Scheduler() {
  const [value, onChange] = useState(new Date());
  return (
    <>
    <Card sx={{ width: '25%' }}>
        <CardActions>
          <Calendar onChange={onChange} value={value} />
        </CardActions>
        <CardContent>
        </CardContent>
    </Card>
    </>
  );
}

export default Scheduler;