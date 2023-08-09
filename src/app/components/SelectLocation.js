
import styles from '../styles/itinerary.module.css'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import SendIcon from '@mui/icons-material/Send';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DropdownLocation from './DropdownLocation';
import Image from 'next/image';
import { Input } from '@mui/material';

const SelectLocation = () => {
  return (
    <div className={styles.selectLocationContainer}>
        <div className={styles.header}>
              <div className={styles.label}>
                <div style={{fontSize:'23px', fontWeight:600, color:'#5D5A68'}}>Vip Itinerary</div>
                <div style={{fontSize:'12px', fontWeight:500, color:'#CCCCCC'}}>5 locations</div>
              </div>
              <div className={styles.buttons}>
                <SaveOutlinedIcon sx={{ height: "25px", width: "25px", color:"#009CC2" }} />
                <SendIcon sx={{ height: "25px", width: "25px", color:"#009CC2" }} />
                <CloudDownloadOutlinedIcon sx={{ height: "25px", width: "25px", color:"#009CC2" }} />
                <ContentCopyOutlinedIcon sx={{ height: "22px", width: "22px", color:"#009CC2" }} />
                <DeleteOutlineOutlinedIcon sx={{ height: "25px", width: "25px", color:"#009CC2" }} />
              </div>
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