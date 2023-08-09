'use client'

import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import styles from '../../../styles/components.module.css'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const SpecialOccasions = ({ currentStep, handleStepChange, steps }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleAddSpecialOccasion = () => {
    // Close the modal
    handleModalClose();
  };

  return (
    <div className={styles.stepThreeContainer}>
      {/* Medical Conditions */}
      <div className={styles.step3FirstFormContainer}>
        <div className={styles.step3FirstFormHeader}>
            <p>Special Occations</p>
            <Button variant='contained' sx={{}} startIcon={<NoteAddOutlinedIcon/>} onClick={handleModalOpen}>Add</Button>
        </div>
                    
         <div className={styles.attachmentContainer}>
            <div className={styles.attachmentBox}>
                <div className={styles.step4LeftSide}>
                   <CelebrationOutlinedIcon />
                  <div>
                    <h1>Edmar's Birthday Celebration</h1>
                    <div style={{display:'flex', alignItems:'center'}}>
                      <h2>Prepare decorations on the yacht </h2>
                      <div style={{display:'flex', alignItems:'center'}}>
                        <InsertInvitationOutlinedIcon sx={{padding: '5px', color:'#009CC2'}} />
                        <h3>2023-09-06</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rightSide}>
                    <DeleteOutlineIcon color='error' sx={{width:'30px', height:'30px'}}/>
                </div>
            </div>

            {/* MODAL */}
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={styles.modal}>
            <Dialog open={isModalOpen} onClose={handleModalClose} className={styles.dialog} >
            <DialogTitle className={styles.dialogTitle}><p>Add Special Occasion</p></DialogTitle>
            <DialogContent>
              {/* Input fields for attachment */}
              <div className={styles.modalInput}>
                <p>The Occasion</p>
                <TextField
                placeholder="The Occasion "
                fullWidth
              />
              </div>
              <div className={styles.modalInput}>
                <p>Occassion Date</p>
                <MobileDatePicker defaultValue={dayjs('2022-04-17')} sx={{width:'100%'}}/>
              </div>
              <div className={styles.modalInput}>
                <p>Specific for your request</p>
                <TextField
                placeholder="Specific for your request"
                fullWidth
                multiline
                rows={4}
              />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleModalClose}>Close</Button>
              <Button onClick={handleAddSpecialOccasion}>Confirm</Button>
            </DialogActions>
          </Dialog>
         </div>
    </LocalizationProvider>
        </div>     

         </div>
         <div className={styles.buttonContainer} >
          {currentStep > 0 && (
            <Button variant="contained" onClick={() => handleStepChange(currentStep - 1)}>
              Back
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button variant="contained" onClick={() => handleStepChange(currentStep + 1)}>
              Next
            </Button>
          )}
          </div>
      </div>
  )
}

export default SpecialOccasions