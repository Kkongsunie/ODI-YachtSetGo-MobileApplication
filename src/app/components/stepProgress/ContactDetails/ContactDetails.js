

import { Button, TextField } from '@mui/material'
import styles from '../../../styles/components.module.css'
import { InformationBlockBlueContacts } from '../GuestInformation/InformationBlock'

const ContactDetails = ({ currentStep, handleStepChange, steps }) => {
  return (
    <div className={styles.step8Container}>
        <div className={styles.step8FirstForm}>
            <div className={styles.step8FirstFormHeader}>
                <h1>Contact Details</h1>
                <InformationBlockBlueContacts />
                <h2>In the event of an emergency prior to the charter please contact:</h2>
            </div>
            <div>
              <div className={styles.singleInput}>
                <p>Name</p>
                <TextField sx={{width: '100%'}} placeholder="Bogart"/>
              </div>
              <div className={styles.singleInput}>
                <p>Telephone </p>
                <TextField sx={{width: '100%'}} />
              </div>
              <div className={styles.singleInput}>
                <p>Email </p>
                <TextField sx={{width: '100%'}} placeholder="example@example.com"/>
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

export default ContactDetails