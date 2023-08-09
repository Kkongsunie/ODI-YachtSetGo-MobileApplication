'use client'

import { useState } from 'react';
import styles from '../styles/components.module.css'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import KayakingOutlinedIcon from '@mui/icons-material/KayakingOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


const StepProgresss = () => {

  const [selectedStep, setSelectedStep] = useState(0); // State to track the selected step

  const steps = [
    { icon: <AttachFileOutlinedIcon sx={{color:'#FFFFFF'}} className={styles.icon}/>},
    { icon: <PlaceOutlinedIcon sx={{color:'#FFFFFF'}} className={styles.icon}/>},
    { icon: <MedicalServicesOutlinedIcon sx={{color:'#FFFFFF'}} className={styles.icon}/>},
    { icon: <CelebrationOutlinedIcon sx={{color:'#FFFFFF'}} className={styles.icon} />},
    { icon: <KayakingOutlinedIcon sx={{color:'#FFFFFF'}} className={styles.icon} />},
    { icon: <RestaurantOutlinedIcon sx={{color:'#FFFFFF'}} className={styles.icon} />},
    { icon: <WineBarOutlinedIcon sx={{color:'#FFFFFF'}} className={styles.icon} />},
    { icon: <NoteAddOutlinedIcon sx={{color:'#FFFFFF'}} className={styles.icon} />},
    { icon: <PhoneOutlinedIcon sx={{color:'#FFFFFF'}} className={styles.icon} />},
    { icon: <DescriptionOutlinedIcon sx={{color:'#FFFFFF'}} className={styles.icon} />},
  ];

  const handleStepClick = (index) => {
    setSelectedStep(index);
  };

  return (
    <div className={styles.scroll}>
      <div className={styles.stepContainer}>
      {steps.map((step, index) => (
          <div className={styles.shapeContainer}>
            {index > 0  && <div className={styles.rectangle}></div>}
            <div className={styles.circle}>
                {step.icon} 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepProgresss