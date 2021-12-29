import { TabsUnstyledProps, TabUnstyledProps } from '@mui/material';

export interface TabStyledProps extends TabUnstyledProps {
  selected: boolean;
}

export interface AppTabsProps extends TabsUnstyledProps {
  items: { id: number, value: string | number, label: string | number}[];
}