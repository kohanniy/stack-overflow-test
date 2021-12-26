import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectQuestionsQuery, triggerForGetQuestions } from '../../app/slices/questionsSlice';
import { ContainerStyled } from './Styles';
import FullPageLoading from '../../components/FullPageLoading';
import QuestionsList from '../../components/QuestionsList';

const QuestionsPage = () => {
  const { t } = useTranslation();

  let page = 1;

  const { items: questions, itemsPerPage, error, status } = useAppSelector(selectQuestionsQuery);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!questions) {
      dispatch(triggerForGetQuestions());
    }
  }, [dispatch, questions]);

  return (
    <ContainerStyled maxWidth='lg' component='section' sx={{ flexGrow: 1 }}>
      <Typography variant='h5' component='h2'>
        {t('questions')}
      </Typography>
      {status === 'loading' && <FullPageLoading />}
      {status === 'error' && <Typography sx={{ color: 'error.main' }}>{error!.message}</Typography>}
      {status === 'success' && questions && <QuestionsList questions={questions} />}
    </ContainerStyled>
  );
};

export default QuestionsPage;
