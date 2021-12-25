import { Toolbar, ToolbarProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  justifyContent: 'space-between',
  gap: theme.spacing(2)
}));