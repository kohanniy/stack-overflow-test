import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Button, Typography, Stack } from '@mui/material';
import ElevationScroll from './ElevationScroll';
import { ToolbarStyled } from './Styles';
import { GeneralLayoutProps } from './Types';
import { StackOverflowIcon } from '../../assets/Icons';

const GeneralLayout = (props: GeneralLayoutProps) => {
  const { onLogoutButtonClick } = props;

  const { t } = useTranslation();

  return (
    <>
      <ElevationScroll>
        <AppBar position='sticky' color='transparent'>
          <ToolbarStyled>
            <StackOverflowIcon width={200} />
            <Button variant='outlined' onClick={onLogoutButtonClick}>
              {t('logoutButtonText')}
            </Button>
          </ToolbarStyled>
        </AppBar>
      </ElevationScroll>
      <Stack flexGrow={1} component='main' spacing={2}>
        <Outlet />
      </Stack>
      <AppBar position='static' component='footer' color='transparent'>
        <Toolbar>
          <Typography>&copy; {t('madeBy')}</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default GeneralLayout;
