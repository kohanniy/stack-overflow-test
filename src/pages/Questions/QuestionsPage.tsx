import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Stack, StackProps, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  reset,
  selectQuestionsQuery,
  setPage,
  setPagesize,
  setSort,
  triggerForGetQuestions,
} from '../../app/slices/questionsSlice';
import { ContainerStyled } from './Styles';
import FullPageLoading from '../../components/FullPageLoading';
import QuestionsList from '../../components/QuestionsList';
import QuestionsPagination from '../../components/QuestionsPagination';
import QuestionsTabs from '../../components/QuestionsTabs';
import { pageSizes, sortingQuestionsOptions } from '../../utils/constants';
import { toString } from '../../utils/utils';

const ResponsiveWrapper = (props: StackProps) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack
      direction={mdDown ? 'column' : 'row'}
      spacing={2}
      justifyContent='space-between'
      alignItems='center'
      {...props}
    />
  );
};

const QuestionsPage = () => {
  const { t } = useTranslation();

  const {
    items: questions,
    total,
    page,
    pagesize,
    error,
    status,
    sort,
  } = useAppSelector(selectQuestionsQuery);
  const dispatch = useAppDispatch();

  const searchParamsObj = { page: String(page), pagesize: String(pagesize), sort };

  const [searchParams, setSearchParams] = useSearchParams(searchParamsObj);
  const navigate = useNavigate();

  const [totalPages, setTotalPages] = useState<number>(0);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setSearchParams({ ...searchParamsObj, page: String(page) });
    dispatch(setPage(page));
    dispatch(triggerForGetQuestions());
  };

  const handlePagesizeChange = (event: SyntheticEvent<Element, Event>, value: string | number) => {
    const pagesize = toString(value);
    setSearchParams({ ...searchParamsObj, pagesize });
    dispatch(setPagesize(value));
    dispatch(triggerForGetQuestions());
  };

  const handleSortChange = (event: SyntheticEvent<Element, Event>, value: string | number) => {
    const sort = toString(value);
    setSearchParams({ ...searchParamsObj, sort });
    dispatch(setSort(value));
    dispatch(triggerForGetQuestions());
  };

  const handleResetSettings = () => {
    dispatch(reset());
    navigate('/');
    dispatch(triggerForGetQuestions());
  };

  // get questions
  useEffect(() => {
    if (questions.length === 0 && status === 'idle') {
      const page = Number(searchParams.get('page'));
      const pagesize = Number(searchParams.get('pagesize'));
      const sort = searchParams.get('sort');

      dispatch(setPage(page));
      dispatch(setPagesize(pagesize));
      dispatch(setSort(sort));

      dispatch(triggerForGetQuestions());
    }
  }, [dispatch, questions.length, searchParams, status]);

  // calculate the number of pages
  useEffect(() => {
    setTotalPages(Math.ceil(total / pagesize));
  }, [pagesize, total]);

  return (
    <ContainerStyled maxWidth='lg' component='section' sx={{ flexGrow: 1 }}>
      <ResponsiveWrapper>
        <Typography variant='h5' component='h2'>
          {t('questions')}
        </Typography>
        {questions.length > 0 && status === 'success' && (
          <QuestionsTabs items={sortingQuestionsOptions} value={sort} onChange={handleSortChange} />
        )}
      </ResponsiveWrapper>
      {status === 'loading' && <FullPageLoading />}
      {status === 'error' && <Typography sx={{ color: 'error.main' }}>{error!.message}</Typography>}
      {questions.length === 0 && status === 'success' && (
        <ResponsiveWrapper>
          <Typography>{t('nothing_found')}</Typography>
          <Button variant='contained' onClick={handleResetSettings}>
            {t('reset_settings')}
          </Button>
        </ResponsiveWrapper>
      )}
      {status === 'success' && questions.length > 0 && (
        <>
          <QuestionsList questions={questions} />
          <ResponsiveWrapper>
            <QuestionsPagination page={page} count={totalPages} onChange={handlePageChange} />
            <Stack direction='row' spacing={1.5} alignItems='center'>
              <QuestionsTabs items={pageSizes} onChange={handlePagesizeChange} value={pagesize} />
              <Typography variant='caption'>{t('questions_on_page')}</Typography>
            </Stack>
          </ResponsiveWrapper>
        </>
      )}
    </ContainerStyled>
  );
};

export default QuestionsPage;
