import { ContainerProps } from '@mui/material';
import { ContainerStyled } from './Styles';

const Section = (props: ContainerProps) => <ContainerStyled component='section' maxWidth='lg' {...props} />;

export default Section;
