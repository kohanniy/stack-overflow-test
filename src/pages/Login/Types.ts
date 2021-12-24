import { PaperProps } from "@mui/material";
import { IAccessToken } from "../../utils/types";

export interface PaperStyledProps extends PaperProps {
  error?: boolean;
}

export interface IAuthError {
  message: string;
}

export interface AuthButtonProps {
  buttonText: string;
  children?: JSX.Element;
  className?: 'string';
  onClick: () => void;
  id: string;
}

export interface LoginPageProps {
  onSuccess: ({ access_token }: IAccessToken) => void
}