
import styles from '../styles/components.module.css'
import { steps } from '../components/stepProgressIcons'



const StepProgress = ({ currentStep, handleStepChange }) => {
    
    return (
        <div>
            <div className={styles.bodyContainer}>
                <div className={styles.stepsContainer}>
                    {steps.map((step, index) => (
                        <div className={styles.shapesContainer} key={index}>
                            {index > 0 && <div className={`${styles.rectangle} ${index <= currentStep ? styles.completed : ''}`}></div>}
                            <div
                                className={`${styles.circle} ${index <= currentStep ? styles.completed : ''} ${index === currentStep && styles.active}`}
                                onClick={() => handleStepChange(index)}
                            >
                                {step.icon}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
                <div className={styles.stepsTitle}>
                    <h1>{steps[currentStep].title}</h1>
                    <h2>{steps[currentStep].subTitle}</h2>
                </div> 
        </div>
        
    )
}

    export default StepProgress

