import { TabsUnstyledProps, TabUnstyledProps } from '@mui/material';

export interface TabStyledProps extends TabUnstyledProps {
  selected: boolean;
}

export interface QuestionsTabsProps extends TabsUnstyledProps {
  items: { id: number, value: string | number, label: string | number}[];
}