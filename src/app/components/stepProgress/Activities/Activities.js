

import styles from '../../../styles/components.module.css'
import Checkbox from '@mui/material/Checkbox';
import { InformationBlockBlueActivities } from '../GuestInformation/InformationBlock';
import { Button, TextField } from '@mui/material';

const Activities = ({ currentStep, handleStepChange, steps }) => {
  return (
    <div className={styles.step5Container}>
        <div className={styles.step5FirstForm}>
          <div className={styles.step5FirstFormHeader}>
            <h1>Activities</h1>
            <h2>Please indicate the activities you would like to take part in. Depending on your cruising area certain activities may not be available. Your crew will assist with making all of the arrangements </h2>
          </div>
          <div className={styles.step5FirsFormBody}>
            <label className={styles.step5FirstFormCheckbox}>
                <div>
                  <Checkbox sx={{ color: '#009CC2', '&.Mui-checked': {color: '#009CC2',}}}/>
                  Sailing
                </div>
                <div >
                  <Checkbox sx={{ color: '#009CC2', '&.Mui-checked': {color: '#009CC2',}}}/>
                  Water Ski
                </div>      
                <div >
                  <Checkbox sx={{ color: '#009CC2', '&.Mui-checked': {color: '#009CC2',}}}/>
                  Snorkeling
                </div> 
                <div >
                  <Checkbox sx={{ color: '#009CC2', '&.Mui-checked': {color: '#009CC2',}}}/>
                  Tubing
                </div> 
              </label>
              <InformationBlockBlueActivities /> 
          </div>
        </div>

        <div className={styles.step5SecondForm}>
          <div className={styles.step5FirstFormHeader}>
            <h1>Other Activities</h1>
          </div>
          <div className={styles.step5FirsFormBody}>
              <div className={styles.singleInput}>
                <p>Other activities you would enjoy.</p>
                <TextField sx={{width: '100%'}} multiline rows={4} placeholder="Surfing, Diving, Sports"/>
              </div>
              <div>
          .
        </div>
          </div>
        </div>

        <div className={styles.step5ThirdForm}>
          <div className={styles.step5FirstFormHeader}>
            <h1>Itinerary</h1>
          </div>
          <div className={styles.step5FirsFormBody}>
              <div className={styles.singleInput}>
                <p>Please indicate special ports, dockage requirements or other places of interest you would like to visit during your charter. The crew will assist with making all arrangements and reservations.</p>
                <TextField sx={{width: '100%'}} multiline rows={4} placeholder="Surfing, Diving, Sports"/>
              </div>
              <div>
          .
        </div>
          </div>
        </div>


        <div className={styles.step5FourthForm}>
          <div className={styles.step5FirstFormHeader}>
            <h1>Set the pace</h1>
          </div>
          <div className={styles.step5FourthFormBody}>
            <label className={styles.step5FourthFormCheckbox}>
                <div className={styles.step5FourthFormCheckboxContainer}>
                  <Checkbox sx={{ color: '#009CC2', '&.Mui-checked': {color: '#009CC2',}}}/>
                <p>We like to take one day at a time as the spirit moves us.</p>  
                </div>
                <div className={styles.step5FourthFormCheckboxContainer}>
                  <Checkbox sx={{ color: '#009CC2', '&.Mui-checked': {color: '#009CC2',}}}/>
                 <p> We are active and on the go.</p>
                </div>      
                <div className={styles.step5FourthFormCheckboxContainer}>
                  <Checkbox sx={{ color: '#009CC2', '&.Mui-checked': {color: '#009CC2',}}}/>
                  <p>We are planners and like to schedule ahead of time</p>
                </div> 
                <div className={styles.step5FourthFormCheckboxContainer}>
                  <Checkbox sx={{ color: '#009CC2', '&.Mui-checked': {color: '#009CC2',}}}/>
                  <p>We want to relax and unwind.</p>
                </div> 
              </label>
          </div>
        </div>

        <div className={styles.step5ThirdForm}>
          <div className={styles.step5FirstFormHeader}>
            <h1>Dining ashore during your trip?</h1>
          </div>
          <div className={styles.step5FirsFormBody}>
              <div className={styles.singleInput}>
                <p>If yes, please list the restaurant/s and date/time for reservations.</p>
                <TextField sx={{width: '100%'}} multiline rows={4}/>
              </div>
              <div>
          .
        </div>
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

        <br/>
    </div>
  )
}

export default Activities