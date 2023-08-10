

import styles from '../styles/components.module.css';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const EmailIInput = ({ onDelete }) => {
  return (
    <div className={styles.singleInput}>
      <p>Email Address:</p>
      <TextField
        sx={{ width: '100%' }}
        placeholder='example@example.com'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={onDelete}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default EmailIInput;
