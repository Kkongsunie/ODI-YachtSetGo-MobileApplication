
import { Button, TextField } from '@mui/material';
import styles from '../../../styles/components.module.css'
import Checkbox from '@mui/material/Checkbox';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }),
);

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};


const TravelArrangements = ({ currentStep, handleStepChange, steps }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.stepTwoContainer}>

          {/* FLIGHT ARRIVAL INFORMATION */}
          <div className={styles.firstFormContainer}>
            <div className={styles.firstFormHeader}>
                <h1>Flight Arrival Information</h1>
            </div>
            <div className={styles.firstFormBody}>
              <div className={styles.singleInput}>
                <p>Airline or FBO</p>
                <TextField sx={{width: '100%'}} />
              </div>
              <div className={styles.singleInput}>
                <p>Flight # / Tail #</p>
                <TextField sx={{width: '100%'}} />
              </div>
              <div className={styles.doubleInput}>
            <div className={styles.firstInput}>
                    <p>Arrival Date</p>
                    <MobileDatePicker defaultValue={dayjs('2022-04-17')} sx={{width:'100%'}}/>
            </div>
            <div className={styles.secondInput}>
                  <p>Arrival Time</p>
                  <TimePicker defaultValue={dayjs('2022-04-17T15:30')} sx={{width:'100%'}} />
            </div>
          </div>
              <div className={styles.singleInput}>
                <p>From</p>
                <TextField sx={{width: '100%'}} />
              </div>
              <div className={styles.singleInput}>
                <p>To </p>
                <TextField sx={{width: '100%'}} />
              </div>
              <div className={styles.singleInput}>
                <p>Departure Time </p>
                <TimePicker defaultValue={dayjs('2022-04-17T15:30')} sx={{width:'100%'}} />
              </div>
            </div>
            <label className={styles.firstFormFooter}>
              <div>
                 <Checkbox sx={{ color: '#009CC2', '&.Mui-checked': {color: '#009CC2',}}}/>
                  Copy Information of Edmar Sanchez
              </div>
              <div >
                <Checkbox sx={{ color: '#009CC2', '&.Mui-checked': {color: '#009CC2',}}}/>
                  I wish to have the crew meet me at the airport
              </div>      
            </label>
          </div>

          {/* FLIGHT DEPARTURE INFORMATION */}
          <div className={styles.secondFormContainer}>
            <div className={styles.firstFormHeader}>
                <h1>Flight Departure Information</h1>
            </div>
            <div className={styles.firstFormBody}>
              <div className={styles.singleInput}>
                <p>Airline or FBO</p>
                <TextField sx={{width: '100%'}} />
              </div>
              <div className={styles.singleInput}>
                <p>Flight # / Tail #</p>
                <TextField sx={{width: '100%'}} />
              </div>
              <div className={styles.singleInput}>
                <p>From</p>
                <TextField sx={{width: '100%'}} />
              </div>
              <div className={styles.singleInput}>
                <p>To </p>
                <TextField sx={{width: '100%'}} />
              </div>
              <div className={styles.singleInput}>
                <p>Departure Time </p>
                <TimePicker defaultValue={dayjs('2022-04-17T15:30')} sx={{width:'100%'}} />
              </div>
            </div>
            <div style={{height:'20px'}}>
              
            </div>
          </div>

          {/* Transportation Requirement */}
          <div className={styles.secondFormContainer}>
            <div className={styles.firstFormHeader}>
                <h1>Transportation Requirement</h1>
            
                  <RadioGroup name="use-radio-group" defaultValue="first" >
                    <div className={styles.radioButtons}>
                      <MyFormControlLabel value="first" label="Limousine" control={<Radio />} />
                      <MyFormControlLabel value="second" label="Taxi" control={<Radio />} />
                      <MyFormControlLabel value="third" label="Minivan" control={<Radio />} />
                    </div>
                      
                </RadioGroup>
                
            </div>
            <div className={styles.firstFormBody}>
              <div className={styles.singleInput}>
                <p>Special Ground Instructions</p>
                <TextField sx={{width: '100%'}} multiline rows={4}/>
              </div>
              <div className={styles.singleInput}>
                <p>Specific Travel Arrangement Notes </p>
                <TextField sx={{width: '100%'}} multiline rows={4}/>
              </div>
              
            </div>
            <div style={{height:'20px'}}></div>
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
          <div style={{height:'15px', width:'100%'}}>.</div>
        </div>
      </LocalizationProvider>
  )
}

export default TravelArrangements