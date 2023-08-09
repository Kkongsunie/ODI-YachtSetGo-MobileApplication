
import styles from '../../../styles/components.module.css'
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export function InformationBlockOrange () {
  return (
    <div className={styles.boxContainerOrange}>
        <div className={styles.boxOrange}>
            <div className={styles.square}>
                  <WarningAmberOutlinedIcon />
            </div>
            <p>
            Passports are required by the law for all 
            members of your charter party if traveling 
            to foreign countries.
            </p>
        </div>
    </div>
  )
}

export function InformationBlockBlue () {
    return (
      <div className={styles.boxContainerBlue}>
          <div className={styles.boxBlue}>
              <div className={styles.square}>
                    <InfoOutlinedIcon />
              </div>
              <p>
              You can upload the license to participate in water sports and other attachments   
              </p>
          </div>
      </div>
    )
  }

  export function InformationBlockBlueActivities () {
    return (
      <div className={styles.boxContainerBlueActivities}>
          <div className={styles.boxBlueActivities}>
              <div className={styles.square}>
                    <InfoOutlinedIcon />
              </div>
              <p>
              In various countries appropriate licensing is required to participate in water sports using power operated personal water craft. Certification may be offered on board or through a local RYA Personal water craft recognized training center.   
              </p>
          </div>
      </div>
    )
  }

      export function InformationBlockBlueContacts () {
        return (
          <div className={styles.boxContainerBlueContacts}>
              <div className={styles.boxBlueActivities}>
                  <div className={styles.square}>
                        <InfoOutlinedIcon />
                  </div>
                  <p>
                  Contact Details 48 Hours Prior to Charter Commencement
                  </p>
              </div>
          </div>
        )
      }