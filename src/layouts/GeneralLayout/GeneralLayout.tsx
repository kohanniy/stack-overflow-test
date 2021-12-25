import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppBar, Typography, Stack } from '@mui/material';
import ElevationScroll from './ElevationScroll';
import { ToolbarStyled } from './Styles';
import { GeneralLayoutProps } from './Types';
import { StackOverflowIcon } from '../../assets/Icons';
import LogoutButton from '../../components/LogoutButton';

const GeneralLayout = (props: GeneralLayoutProps) => {
  const { onLogoutButtonClick } = props;

  const { t } = useTranslation();

  return (
    <>
      <ElevationScroll>
        <AppBar position='sticky' sx={{ bgcolor: 'common.white' }}>
          <ToolbarStyled>
            <StackOverflowIcon width={200} />
            <LogoutButton onClick={onLogoutButtonClick} />
          </ToolbarStyled>
        </AppBar>
      </ElevationScroll>
      <Stack flexGrow={1} component='main' spacing={2}>
        <Outlet />
      </Stack>
      <AppBar position='static' component='footer' color='transparent'>
        <ToolbarStyled>
          <Typography>&copy; {t('madeBy')}</Typography>
        </ToolbarStyled>
      </AppBar>
    </>
  );
};

export default GeneralLayout;
