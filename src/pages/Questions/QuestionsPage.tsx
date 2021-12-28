import { SyntheticEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectQuestionsQuery, setPage, setPagesize, triggerForGetQuestions } from '../../app/slices/questionsSlice';
import { ContainerStyled } from './Styles';
import FullPageLoading from '../../components/FullPageLoading';
import QuestionsList from '../../components/QuestionsList';
import QuestionsPagination from '../../components/QuestionsPagination';
import { useLocation } from 'react-router-dom';
import QuestionsPageSizeTabs from '../../components/QuestionsPageSizeTabs';
import { PAGE_SIZE_KEY } from '../../utils/constants';

const QuestionsPage = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const {
    items: questions,
    total,
    page,
    pagesize,
    error,
    status,
  } = useAppSelector(selectQuestionsQuery);
  const dispatch = useAppDispatch();

  const location = useLocation();

  const [totalPages, setTotalPages] = useState<number>(0);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
    dispatch(triggerForGetQuestions());
  };

  const handlePagesizeChange = (event: SyntheticEvent<Element, Event>, value: string | number) => {
    const strValue = typeof value === 'string' ? value : String(value);
    localStorage.setItem(PAGE_SIZE_KEY, strValue)
    dispatch(setPagesize(value));
    dispatch(triggerForGetQuestions());
  }

  // get questions
  useEffect(() => {
    if (questions.length === 0 && status === 'idle') {
      const userPageSize = Number(localStorage.getItem(PAGE_SIZE_KEY));
      const currentPageSize = userPageSize ? userPageSize : pagesize;
      const search = location.search;
      const currentPage = Number(search.substring(1).split('=')[1]);
      const page = search === '' ? 1 : currentPage;
      dispatch(setPage(page));
      dispatch(setPagesize(currentPageSize));
      dispatch(triggerForGetQuestions());
    }
  }, [dispatch, location.search, pagesize, questions.length, status]);

  // calculate the number of pages
  useEffect(() => {
    setTotalPages(Math.ceil(total / pagesize));
  }, [pagesize, total]);

  return (
    <ContainerStyled maxWidth='lg' component='section' sx={{ flexGrow: 1 }}>
      <Typography variant='h5' component='h2'>
        {t('questions')}
      </Typography>
      {status === 'loading' && <FullPageLoading />}
      {status === 'error' && <Typography sx={{ color: 'error.main' }}>{error!.message}</Typography>}
      {questions.length === 0 && status === 'success' && (
        <Typography>{t('nothing_found')}</Typography>
      )}
      {status === 'success' && questions.length > 0 && (
        <>
          <QuestionsList questions={questions} />
          <Stack
            direction={mdDown ? 'column' : 'row'}
            spacing={2}
            justifyContent='space-between'
            alignItems='center'
          >
            <QuestionsPagination page={page} count={totalPages} onChange={handlePageChange} />
            <Stack direction='row' spacing={1.5} alignItems='center'>
              <QuestionsPageSizeTabs onChange={handlePagesizeChange} value={pagesize} />
              <Typography variant='caption'>{t('questions_on_page')}</Typography>
            </Stack>
          </Stack>
        </>
      )}
    </ContainerStyled>
  );
};

export default QuestionsPage;
