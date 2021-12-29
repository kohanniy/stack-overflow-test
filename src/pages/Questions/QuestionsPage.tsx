import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Stack, StackProps, Typography, useMediaQuery, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  reset,
  selectQuestionsQuery,
  setQuestionsQueryParams,
} from '../../app/slices/questionsSlice';
import { ContainerStyled } from './Styles';
import FullPageLoading from '../../components/FullPageLoading';
import QuestionsList from '../../components/QuestionsList';
import Pagination from '../../components/Pagination';
import AppTabs from '../../components/AppTabs';
import { pageSizes, sortingQuestionsOptions } from '../../utils/constants';
import { toString } from '../../utils/utils';
import { selectRequestState } from '../../app/slices/requestStateSlice';

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
  const [totalPages, setTotalPages] = useState<number>(0);

  const { t } = useTranslation();

  const {
    items: questions,
    total,
    page,
    pagesize,
    sort,
    tagged,
  } = useAppSelector(selectQuestionsQuery);
  const { error, status } = useAppSelector(selectRequestState);
  const dispatch = useAppDispatch();

  const searchParamsObj = { page: String(page), pagesize: String(pagesize), sort, tagged };

  const [searchParams, setSearchParams] = useSearchParams(searchParamsObj);
  const navigate = useNavigate();

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ ...searchParamsObj, page: String(value) });
    dispatch(setQuestionsQueryParams({ page: value }));
  };

  const handlePagesizeChange = (event: SyntheticEvent<Element, Event>, value: string | number) => {
    const pagesize = toString(value);
    setSearchParams({ ...searchParamsObj, pagesize });
    dispatch(setQuestionsQueryParams({ pagesize: value }));
  };

  const handleSortChange = (event: SyntheticEvent<Element, Event>, value: string | number) => {
    const sort = toString(value);
    setSearchParams({ ...searchParamsObj, sort });
    dispatch(setQuestionsQueryParams({ sort: value }));
  };

  const handleTagClick = (tag: string) => {
    setSearchParams({ ...searchParamsObj, tagged: tag });
    dispatch(setQuestionsQueryParams({ tagged: tag }));
  };

  const handleResetTag = () => {
    setSearchParams({ ...searchParamsObj, tagged: '' });
    dispatch(setQuestionsQueryParams({ tagged: '' }));
  };

  const handleResetSettings = () => {
    dispatch(reset());
    navigate('/');
    dispatch(setQuestionsQueryParams({ page, pagesize, sort, tagged }));
  };

  // get questions
  useEffect(() => {
    if (questions.length === 0 && status === 'idle') {
      const page = Number(searchParams.get('page'));
      const pagesize = Number(searchParams.get('pagesize'));
      const sort = searchParams.get('sort');
      const tagged = searchParams.get('tagged');

      dispatch(setQuestionsQueryParams({ page, pagesize, sort, tagged }));
    }
  }, [dispatch, questions.length, searchParams, status]);

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
        <ResponsiveWrapper>
          <Typography>{t('nothing_found')}</Typography>
          <Button variant='contained' onClick={handleResetSettings}>
            {t('reset_settings')}
          </Button>
        </ResponsiveWrapper>
      )}
      {status === 'success' && questions.length > 0 && (
        <Stack spacing={2}>
          <ResponsiveWrapper>
            <AppTabs
              items={sortingQuestionsOptions}
              value={sort}
              onChange={handleSortChange}
            />
            {tagged !== '' && <Chip label={tagged} variant='outlined' onDelete={handleResetTag} />}
          </ResponsiveWrapper>
          <QuestionsList questions={questions} onTagClick={handleTagClick} />
          <ResponsiveWrapper>
            <Pagination page={page} count={totalPages} onChange={handlePageChange} />
            <Stack direction='row' spacing={1} alignItems='center'>
              <AppTabs items={pageSizes} onChange={handlePagesizeChange} value={pagesize} />
              <Typography sx={{ lineHeight: 1 }} variant='caption'>
                {t('questions_on_page')}
              </Typography>
            </Stack>
          </ResponsiveWrapper>
        </Stack>
      )}
    </ContainerStyled>
  );
};

export default QuestionsPage;
