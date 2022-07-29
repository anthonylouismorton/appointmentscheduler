import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

function MoreInfoModal(props) {
  const handleNellisGasMaskClose = () => {
    props.setOpenNellisGasMask(false);
  };
  const handleNellisRespiratorClose = () => {
    props.setOpenNellisRespirator(false);
  };
  const handleCreechClose = () => {
    props.setOpenCreech(false);
  };

  return (
    <>
      {props.openNelliGasMask ?
        <Modal
          open={props.openNelliGasMask}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Nellis Gas Mask Fit Test ONLY! [No RP Fit Test] (Mondays 0800 - 1100/1300 - 1600)
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              If you are being fit tested for the M50 gas mask, you are not required to bring gas mask inserts with your appointment. Bioenvironmental Engineering will not fit test anyone wearing contact lenses. CBRN gear and gas mask are issued at Building 811 (Deployment Center) at Nellis AFB.

            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Must be clean shaven.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              No Eating, Drinking, or Smoking--30 mins prior to appointment.
            </Typography>
            <Button onClick={handleNellisGasMaskClose}>Close</Button>
            <Button>Book</Button>
          </Box>
        </Modal>
        : props.openNellisRespirator ?
          <Modal
            open={props.openNellisRespirator}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Nellis Respirator Fit Test ONLY! [No Gas Mask Fit Test](Wednesdays 0800 - 1100/1300 - 1600)
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                ***WE ARE NOT FIT TESTING ON GAS MASK ON THIS DAY, PLEASE USE OUR MONDAY SCHEDULE ***
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Personnel being fitted for industrial respirators MUST have a valid Medical Evaluation Questionnaire (MEQ) completed and signed by a qualified physician PRIOR TO SCHEDULING their appointment. The signed third page of this questionnaire indicating that the individual is medically qualified to wear industrial respirators must be presented to the BE technician conducting the fit test prior to donning the respirator. Please remember that industrial respirator fit tests are required annually, and should be scheduled prior to the required date to ensure compliance.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                No Eating, Drinking, or Smoking--30 mins prior to appointment.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Must be clean shaven.
              </Typography>
              <Button onClick={handleNellisRespiratorClose}>Close</Button>
              <Button>Book</Button>
            </Box>
          </Modal>
          :
          <Modal
            open={props.openCreech}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Creech Fit Test (Wednesdays 0830 - 1430)
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                **Creech AFB fit testing is located in BLDG. 1004 / RM. 15900
                Please disregard address send to the e-mail reminder.**
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                If you are being fit tested for the M50 gas mask, you are not required to bring gas mask inserts with your appointment. Bioenvironmental Engineering will not fit test anyone wearing contact lenses. CBRN gear and gas masks are issued at BLDG 112 at Creech AFB.

                Personnel being fitted for industrial respirators MUST have a valid Medical Evaluation Questionnaire (MEQ) completed from Creech Medical Aid Station and signed by a qualified physician PRIOR TO SCHEDULING their appointment. The signed third page of this questionnaire indicating that the individual is medically qualified to wear industrial respirators must be presented to the BE technician conducting the fit test prior to donning the respirator. Please remember that industrial respirator fit tests are required annually, and should be scheduled prior to the required date to ensure compliance.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Must be clean shaven. BE technician will not fit test anyone with a beard.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                No Eating, Drinking, or Smoking--30 mins prior to appointment.
              </Typography>
              <Button onClick={handleCreechClose}>Close</Button>
              <Button>Book</Button>
            </Box>
          </Modal>
      }
    </>

  );
}

export default MoreInfoModal;