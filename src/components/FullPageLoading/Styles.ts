import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RootContainer = styled(Box)<BoxProps>({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1
});