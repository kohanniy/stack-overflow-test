import { useScrollTrigger } from '@mui/material';
import { cloneElement, ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

const ElevationScroll = (props: Props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll;
