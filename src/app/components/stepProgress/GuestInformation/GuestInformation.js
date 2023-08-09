'use client'

import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material'
import { useState } from 'react'
import styles from '../../../styles/components.module.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Select, MenuItem } from '@mui/material';
import nationalities from './../GuestInformation/nationalitiesArray'
import { MuiFileInput } from 'mui-file-input'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import {InformationBlockOrange, InformationBlockBlue} from '../GuestInformation/InformationBlock'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const GuestInformation = ({ currentStep, handleStepChange, steps }) => {

  const [selectedNationality, setSelectedNationality] = useState('');

  const handleNationalityChange = (event) => {
    setSelectedNationality(event.target.value);
  };


  const [imageValue, setImageValue] = useState(null)
  const [attachmentValue, setAttachmentValue] = useState(null)
  const handleChangePic = (newValue) => {
    setImageValue(newValue)
  }
  const handleChangePassport = (newValue) => {
    setAttachmentValue(newValue)
  }


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [modalAttachmentValue, setModalAttachmentValue] = useState(null)
  const [modalDesctiptionValue, setModalDesctiptionValue] = useState(null)
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModal2Open = () => {
    setIsModal2Open(true);
  };
  const handleModal2Close = () => {
    setIsModal2Open(false);
  };
  const handleModalAttachmentValue = (newValue) => {
    setModalAttachmentValue(newValue)
  }
  const handleModalDescriptionValue = (newValue) => {
    setModalDesctiptionValue(newValue)
  }

  const handleAddAttachment = () => {
    // Close the modal
    handleModalClose();
  };
  const handleSaveAttachment = () => {
    // Close the modal
    handleModal2Close();
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.firstBox}>
          <h1>Additional Information</h1>
          <InformationBlockOrange />

          <div className={styles.doubleInput}>
            <div className={styles.firstInput}>
                    <p>Date of Birth</p>
                    <MobileDatePicker defaultValue={dayjs('2022-04-17')} sx={{width:'100%'}}/>
            </div>
            <div className={styles.secondInput}>
              <p>Nationality</p>
              <Select value={selectedNationality} onChange={handleNationalityChange} sx={{width: '100%'}}> 
                  {nationalities.map((nationality) => (
                    <MenuItem key={nationality} value={nationality}>
                      {nationality}
                    </MenuItem>
                  ))}
                </Select>
            </div>
          </div>

          <div className={styles.singleInput}>
            <p>Profile Picture</p>
            <MuiFileInput value={imageValue} onChange={handleChangePic} sx={{width: '100%'}} />
          </div>
          <div className={styles.singleInput}>
            <p>Passport Number</p>
            <TextField sx={{width: '100%'}} />
          </div>
          <div className={styles.singleInput}>
            <p>Passport Attachment</p>
            <MuiFileInput value={attachmentValue} onChange={handleChangePassport} sx={{width: '100%'}} />
          </div>
          <div className={styles.singleInput}>
            <p>Passport Expiry Date</p>
            <MobileDatePicker defaultValue={dayjs('2022-04-17')} sx={{width:'100%'}}/>
          </div>
      </div>
      
      <div className={styles.secondBox}>
        <div className={styles.header}>
            <p>Miscellaneous Attachments</p>
            <Button variant='contained' sx={{}} startIcon={<NoteAddOutlinedIcon/>} onClick={handleModalOpen}>Add</Button>
        </div>
        <InformationBlockBlue />
                    
         <div className={styles.attachmentContainer} onClick={handleModal2Open}>
            <div className={styles.attachmentBox}>
                <div className={styles.leftSide}>
                   <DescriptionOutlinedIcon />
                  <div>
                   <h1>e.Learn-To-Swim-Professional.jpg</h1>
                   <h2>License to participate in water sport certification</h2>
                  </div>
                </div>
                <div className={styles.rightSide}>
                    <DeleteOutlineIcon color='error' sx={{width:'30px', height:'30px'}}/>
                </div>
            </div>
        </div>         

         {/* Modal For Edit Attachment*/}
         <div className={styles.modal}>
            <Dialog open={isModal2Open} onClose={handleModal2Close} className={styles.dialog} >
            <DialogTitle className={styles.dialogTitle}><p>Edit Attachments</p></DialogTitle>
            <DialogContent>
              {/* Input fields for attachment */}
              <div className={styles.modalInput}>
                <p>Upload Attachment</p>
                <MuiFileInput value={modalAttachmentValue} onChange={handleModalAttachmentValue} sx={{width: '100%'}} />
              </div>
              <div className={styles.modalInput}>
                <p>Description*</p>
                <TextField
                placeholder="Describe the file "
                fullWidth
                multiline
                rows={4}
                value={modalDesctiptionValue}
                onChange={handleModalDescriptionValue}
              />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleModal2Close}>Cancel</Button>
              <Button onClick={handleSaveAttachment}>Save</Button>
            </DialogActions>
          </Dialog>
         </div>           

         {/* Modal For Add Attachment*/}
         <div className={styles.modal}>
            <Dialog open={isModalOpen} onClose={handleModalClose} className={styles.dialog} >
            <DialogTitle className={styles.dialogTitle}><p>Add Miscellaneous Attachments</p></DialogTitle>
            <DialogContent>
              {/* Input fields for attachment */}
              <div className={styles.modalInput}>
                <p>Upload Attachment</p>
                <MuiFileInput value={modalAttachmentValue} onChange={handleModalAttachmentValue} sx={{width: '100%'}} />
              </div>
              <div className={styles.modalInput}>
                <p>Description*</p>
                <TextField
                placeholder="Describe the file "
                fullWidth
                multiline
                rows={4}
                value={modalDesctiptionValue}
                onChange={handleModalDescriptionValue}
              />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleModalClose}>Cancel</Button>
              <Button onClick={handleAddAttachment}>Add</Button>
            </DialogActions>
          </Dialog>
         </div>
      </div>
      <div className={styles.buttonContainerFirst}>
          {currentStep < steps.length - 1 && (
            <Button variant="contained" onClick={() => handleStepChange(currentStep + 1)}>
              Next
            </Button>
          )}
        </div>
      <div className={styles.emptyFooter}>

      </div>
      </LocalizationProvider>
  )
}

export default GuestInformation