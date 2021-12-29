import { forwardRef } from 'react';
import { Alert as MuiAlert, AlertProps, Snackbar } from '@mui/material';
import { SnackbarComponentProps } from './Types';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

function SnackbarComponent(props: SnackbarComponentProps) {
  const { open, onClose, alertText, severity } = props;

  const handleClose = () => onClose();

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {alertText}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarComponent;
