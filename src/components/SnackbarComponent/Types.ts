import { AlertColor } from '@mui/material';

export interface SnackbarComponentProps {
  open: boolean;
  onClose: () => void;
  severity: AlertColor;
  alertText: string;
}