

import { Button, TextField } from '@mui/material'
import styles from '../../../styles/components.module.css'

const CharterersNotes = ({ currentStep, handleStepChange, steps }) => {
  return (
    <div className={styles.step9Container}>
        <div className={styles.step9FirstForm}>
            <div className={styles.step8FirstFormHeader}>
                <h1>Contact Details</h1>
                <h2>Please list any other items that have not been addressed or any other items that you would like to have onboard for your trip.</h2>
            </div>
            <div>
              <div className={styles.singleInput}>
                <p>Other Final Considerations</p>
                <TextField sx={{width: '100%'}} multiline rows={4}/>
              </div>

           
            </div>
        </div>

        <div className={styles.buttonContainerLast} >
          <div className={styles.buttonContainerBack}>
            {currentStep > 0 && (
            <Button variant="contained" onClick={() => handleStepChange(currentStep - 1)}>
              Back
            </Button>
          )}
          </div>
          
          <div className={styles.buttonContainerFinish}>
            <Button  variant="contained" color='success'>
              Finish
            </Button>
          </div>
            
            
          </div>

        <br/>
    </div>
  )
}

export default CharterersNotes