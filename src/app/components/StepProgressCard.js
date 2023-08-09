'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/components.module.css'
import StepProgress from './StepProgress'
import GuestInformation from './stepProgress/GuestInformation/GuestInformation'
import TravelArrangements from './stepProgress/TravelArrangements/TravelArrangements'
import { steps } from '../components/stepProgressIcons'
import MedicalConditions from './stepProgress/MedicalConditions/MedicalConditions'
import SpecialOccasions from './stepProgress/Special Occations/SpecialOccasions'
import Activities from './stepProgress/Activities/Activities'
import FoodPreferences from './stepProgress/FoodPreferences/FoodPreferences'
import BeveragePreferences from './stepProgress/BeveragePreferences/BeveragePreferences'
import MiscellaneousItems from './stepProgress/MiscellaneousItems/MiscellaneousItems'
import ContactDetails from './stepProgress/ContactDetails/ContactDetails'
import CharterersNotes from './stepProgress/ChartererNotes/CharterersNotes'

const StepProgressCard = () => {

const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (newStep) => {
    setCurrentStep(newStep);
  };
  return (
    <div className={styles.mainBody}>
        <div className={styles.cardContainer}>
                <div className={styles.card}>
                {/* HEADER */}
                <div className={styles.header}>
                    <Image src="/images/guest.png" width={60} height={60} className={styles.guestPic} alt='guest profile'/>
                    <div className={styles.guestInfo}>
                        <div>
                            <h1>Edmar Sanchez</h1>
                            <h2>edmarsanchez09@gmail.com</h2>
                        </div>
                        <div className={styles.chip}>
                            <h1>Primary</h1>
                        </div>
                    </div>
                </div>
                 {/* BODY */}
                <StepProgress currentStep={currentStep} handleStepChange={handleStepChange} />  
                </div>   
        </div>
        <div className={styles.formsContainer}>
          {currentStep === 0 && <GuestInformation  currentStep={currentStep} handleStepChange={handleStepChange} steps={steps}/>}
          {currentStep === 1 && <TravelArrangements  currentStep={currentStep} handleStepChange={handleStepChange} steps={steps}/>}
          {currentStep === 2 && <MedicalConditions  currentStep={currentStep} handleStepChange={handleStepChange} steps={steps}/>}
          {currentStep === 3 && <SpecialOccasions  currentStep={currentStep} handleStepChange={handleStepChange} steps={steps}/>}
          {currentStep === 4 && <Activities  currentStep={currentStep} handleStepChange={handleStepChange} steps={steps}/>}
          {currentStep === 5 && <FoodPreferences  currentStep={currentStep} handleStepChange={handleStepChange} steps={steps}/>}
          {currentStep === 6 && <BeveragePreferences  currentStep={currentStep} handleStepChange={handleStepChange} steps={steps}/>}
          {currentStep === 7 && <MiscellaneousItems  currentStep={currentStep} handleStepChange={handleStepChange} steps={steps}/>}
          {currentStep === 8 && <ContactDetails  currentStep={currentStep} handleStepChange={handleStepChange} steps={steps}/>}
          {currentStep === 9 && <CharterersNotes  currentStep={currentStep} handleStepChange={handleStepChange} steps={steps}/>}
        </div>
        
   </div>
   
    
  )
}

export default StepProgressCard