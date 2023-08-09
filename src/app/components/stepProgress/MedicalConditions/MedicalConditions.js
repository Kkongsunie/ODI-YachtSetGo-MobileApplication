'use client'

import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import styles from '../../../styles/components.module.css'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';

const MedicalConditions = ({ currentStep, handleStepChange, steps }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleAddMedicalCondition = () => {
    // Close the modal
    handleModalClose();
  };
  
  return (
    <div className={styles.stepThreeContainer}>
      {/* Medical Conditions */}
      <div className={styles.step3FirstFormContainer}>
        <div className={styles.step3FirstFormHeader}>
            <p>Medical Conditions</p>
            <Button variant='contained' sx={{}} startIcon={<NoteAddOutlinedIcon/>} onClick={handleModalOpen}>Add</Button>
        </div>
                    
         <div className={styles.attachmentContainer}>
            <div className={styles.attachmentBox}>
                <div className={styles.step3LeftSide}>
                   <MedicalInformationOutlinedIcon />
                  <div>
                    <h1>Hypertension</h1>
                  </div>
                </div>
                <div className={styles.rightSide}>
                    <DeleteOutlineIcon color='error' sx={{width:'30px', height:'30px'}}/>
                </div>
            </div>
        </div>   

        {/* MODAL */}
        <div className={styles.modal}>
            <Dialog open={isModalOpen} onClose={handleModalClose} className={styles.dialog} >
            <DialogTitle className={styles.dialogTitle}><p>Add Medical Condition</p></DialogTitle>
            <DialogContent>
              {/* Input fields for attachment */}
              <div className={styles.modalInput}>
                <p>Medical Condition</p>
                <TextField
                placeholder="Medical Condition "
                fullWidth
              />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleModalClose}>Close</Button>
              <Button onClick={handleAddMedicalCondition}>Confirm</Button>
            </DialogActions>
          </Dialog>
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

export default MedicalConditions