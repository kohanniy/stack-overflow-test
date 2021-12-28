import { TabsListUnstyled, TabsListUnstyledProps, TabUnstyled } from '@mui/base';
import { styled, alpha } from '@mui/material/styles';
import { TabStyledProps } from './Types';

export const TabsList = styled(TabsListUnstyled)<TabsListUnstyledProps>({
  display: 'flex',
});

export const Tab = styled(TabUnstyled, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<TabStyledProps>(({ selected, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: selected ? alpha(theme.palette.primary.dark, 0.12) : 'transparent',
  outline: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  ...theme.typography.button,
  fontWeight: 400,
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: '32px',
  height: '32px',
  padding: '0 6px',
  margin: '0 3px',
  color: selected ? theme.palette.primary.main : theme.palette.text.primary,
  transition: theme.transitions.create(['color', 'backgroundColor']), 
  border: `1px solid ${selected ? alpha(theme.palette.primary.main, 0.5) : alpha(theme.palette.common.black, 0.23)}`,
}));
