'use client'



import { useState } from 'react';
import styles from '../styles/itinerary.module.css';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import SendIcon from '@mui/icons-material/Send';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DropdownLocation from './DropdownLocation';
import { Dialog, DialogActions, DialogContent, DialogTitle, Input, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import EmailIInput from './EmailIInput';


const SelectLocation = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailInputs, setEmailInputs] = useState([]);


  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleAddEmailInput = () => {
    setEmailInputs([...emailInputs, <EmailIInput key={emailInputs.length} />]);
  };

  const handleDeleteEmailInput = (index) => {
    const updatedEmailInputs = emailInputs.filter((_, i) => i !== index);
    setEmailInputs(updatedEmailInputs);
  };

  return (
    <div className={styles.selectLocationContainer}>
        <div className={styles.header}>
              <div className={styles.label}>
                <div style={{fontSize:'23px', fontWeight:600, color:'#5D5A68'}}>Vip Itinerary</div>
                <div style={{fontSize:'12px', fontWeight:500, color:'#CCCCCC'}}>5 locations</div>
              </div>
              <div className={styles.buttons}>
                <SaveOutlinedIcon sx={{ height: "25px", width: "25px", color:"#009CC2" }} />
                <SendIcon onClick={handleModalOpen}  sx={{ height: "25px", width: "25px", color:"#009CC2" }} />
                <CloudDownloadOutlinedIcon sx={{ height: "25px", width: "25px", color:"#009CC2" }} />
                <ContentCopyOutlinedIcon sx={{ height: "22px", width: "22px", color:"#009CC2" }} />
                <DeleteOutlineOutlinedIcon sx={{ height: "25px", width: "25px", color:"#009CC2" }} />
              </div>

               {/* Modal For Send Link */}
                  <Dialog open={isModalOpen} onClose={handleModalClose} className={`${styles.dialog}`}>
                        <DialogTitle className={`${styles.dialogTitle}`}>Send Itinerary</DialogTitle>
                        <DialogContent>
                        <div className={styles.singleInput}>
                          <p>Itinerary Link</p>
                          <TextField
                                disabled
                                label="http://localhost:3000/itenerary/itenerary-plan/1"
                                sx={{ width: '100%', }}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton edge="end" >
                                        <ContentCopyOutlinedIcon />
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                              />
                        </div> 
                        <div className={styles.singleInput}>
                          <p>Itinerary Password</p>
                          <TextField sx={{width: '100%'}} />
                        </div> 
                        <div className={styles.singleInput}>
                          <p>Link Expiration</p>
                          <MobileDatePicker defaultValue={dayjs('2022-04-17')} sx={{width:'100%'}}/>
                        </div>
                        {emailInputs.map((_, index) => (
                              <EmailIInput key={index} onDelete={() => handleDeleteEmailInput(index)} />
                          ))}
                        </DialogContent>
                        <DialogActions className={`${styles.dialogActions}`}>
                          <Button onClick={handleModalClose} variant='contained' color="primary">Close</Button>
                          <Button onClick={handleAddEmailInput} variant='contained'>Add email</Button>
                          <Button onClick={handleModalClose} variant='contained' color="primary">Send Itinerary</Button>
                        </DialogActions>
                 </Dialog>


        </div>
        <div className={styles.selectLocationForm}>
                 <div className={styles.formContainer}>
                        <p>
                          Itinerary Name
                        </p>
                        <Input className={styles.modalInput} disableUnderline placeholder='Itinerary Name' />
                        <DropdownLocation />
                    </div>
              <div>
              <br></br>
              <iframe
                width="350"
                height="268"
                style={{border:'0'}}
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.0075373411187!2d-79.81285682482381!3d32.89796897779572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe6c377ee55555%3A0x5e7d5057abb5d360!2sOnDemand%20Innovation!5e0!3m2!1sen!2sph!4v1691279106318!5m2!1sen!2sph">
              </iframe>
              <br></br>
              </div>                  
      </div>
    </div>
  )
}

export default SelectLocation;