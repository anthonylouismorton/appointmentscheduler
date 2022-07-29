import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import MoreInfoModal from './MoreInfoModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function FitTestSelection(props) {
  const [open, setOpen] = React.useState(true);
  const [openNelliGasMask, setOpenNellisGasMask] = React.useState(false);
  const [openNellisRespirator, setOpenNellisRespirator] = React.useState(false);
  const [openCreech, setOpenCreech] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleNellisGasMaskOpen = () => setOpenNellisGasMask(true);
  const handleNellisRespiratorOpen = () => setOpenNellisGasMask(true);
  const handleCreechOpen = () => setOpenCreech(true);
  const handleClose = () => setOpen(false);
  const handleScheduler = () => {
    props.setOpenScheduler(true);
  }

  console.log(props)
  return (
    <>
      <Card sx={{ width: '25%' }}>
        <CardActions>
          <Button onClick={handleOpen} size="small">Booking Policy</Button>
        </CardActions>
        <CardContent>
          <MenuList>
            <MenuItem>
              <ListItemText onClick={handleScheduler}>Nellis Gas Mask Fit Test</ListItemText>
              <Button variant="body2" color="text.secondary" onClick={handleNellisGasMaskOpen}>
                More Info
              </Button>
            </MenuItem>
            <MenuItem>
              <ListItemText>Nellis Respirator Fit Test</ListItemText>
              <Button variant="body2" color="text.secondary" onClick={handleNellisRespiratorOpen}>
                More Info
              </Button>
            </MenuItem>
            <MenuItem>
              <ListItemText>Creech Fit Test</ListItemText>
              <Button variant="body2" color="text.secondary" onClick={handleCreechOpen}>
                More Info
              </Button>
            </MenuItem>
          </MenuList>
        </CardContent>
      </Card>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            PLEASE READ SERVICE DESCRIPTION PRIOR TO BOOKING YOUR APPOINTMENT.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Respirator appts must hand carry their Flight Medicine provider signed MEQ to this appt. All NO-SHOWS will result in CoC notification/issued a missed appointment letter.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            All NO-SHOWS will result in CoC notification/issued a missed appointment letter.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            NO WALK-INS
          </Typography>
          <Button onClick={handleClose} size="small">Acknowledge</Button>
        </Box>

      </Modal>
      <MoreInfoModal openNelliGasMask={openNelliGasMask} setOpenNellisGasMask={setOpenNellisGasMask} openNellisRespirator={openNellisRespirator} setOpenNellisRespirator={setOpenNellisRespirator} openCreech={openCreech} setOpenCreech={setOpenCreech}/>
    </>

  );
}

export default FitTestSelection;