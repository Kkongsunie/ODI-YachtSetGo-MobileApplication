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


    export const color = '#FFFFFF';
     export  const steps = [
            { icon: <AttachFileOutlinedIcon sx={{color:{color}}} className={styles.icon}/>, 
                title: 'Guest Information & Attachments',
                subTitle: 'Additional Information and Attachments'},
            { icon: <PlaceOutlinedIcon sx={{color:{color}}} className={styles.icon}/>,
                title: 'Travel Arrangements',
                subTitle: 'Flight Arrival and Departure Information'},
            { icon: <MedicalServicesOutlinedIcon sx={{color:{color}}} className={styles.icon}/>,
                title: 'Medical Conditions',
                subTitle: 'Medical Information'},
            { icon: <CelebrationOutlinedIcon sx={{color:{color}}} className={styles.icon} />,
                title: 'Special Occasions',
                subTitle: 'For Birthdays and Other Events'},
            { icon: <KayakingOutlinedIcon sx={{color:{color}}} className={styles.icon} />,
                title: 'Activities',
                subTitle: 'Activities During the Trip'},
            { icon: <RestaurantOutlinedIcon sx={{color:{color}}} className={styles.icon} />,
                title: 'Food Preferences',
                subTitle: 'Breakfast, Lunch, Dinner, and Snacks'},
            { icon: <WineBarOutlinedIcon sx={{color:{color}}} className={styles.icon} />,
                title: 'Beverage Preferences',
                subTitle: 'Cold, Hot, Beer, Spirits, Champagne, and Wine'},
            { icon: <NoteAddOutlinedIcon sx={{color:{color}}} className={styles.icon} />,
                title: 'Miscellaneous Items',
                subTitle: 'Additional items you like'},
            { icon: <PhoneOutlinedIcon sx={{color:{color}}} className={styles.icon} />,
                title: 'Contact Details',
                subTitle: 'In case of emergency'},
            { icon: <DescriptionOutlinedIcon sx={{color:{color}}} className={styles.icon} />,
                title: "Charterer's Notes",
                subTitle: 'Other final considerations'},
        ];  