import { PaperProps } from "@mui/material";

export interface PaperStyledProps extends PaperProps {
  error?: boolean;
}

export interface IAuthError {
  message: string;
}

export interface IAccessToken { 
  access_token: string 
}

export interface AuthButtonProps {
  buttonText: string;
  children?: JSX.Element;
  className?: 'string';
  onClick: () => void;
  id: string;
}