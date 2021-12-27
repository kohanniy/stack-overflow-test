import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectQuestionsQuery, setPage } from '../../app/slices/questionsSlice';
import { ContainerStyled } from './Styles';
import FullPageLoading from '../../components/FullPageLoading';
import QuestionsList from '../../components/QuestionsList';
import QuestionsPagination from '../../components/QuestionsPagination';
import { useLocation } from 'react-router-dom';

const QuestionsPage = () => {
  const { t } = useTranslation();

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
  };

  // get questions
  useEffect(() => {
    if (questions.length === 0 && status === 'idle') {
      const search = location.search;
      const page = search === '' ? 1 : +search.substring(1).split('=')[1];
      dispatch(setPage(page));
    }
  }, [dispatch, location.search, questions.length, status]);

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
          <QuestionsPagination page={page} count={totalPages} onChange={handlePageChange} />
        </>
      )}
    </ContainerStyled>
  );
};

export default QuestionsPage;
