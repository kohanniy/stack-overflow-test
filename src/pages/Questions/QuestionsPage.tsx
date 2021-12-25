import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography, Link } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectQuestionsQuery, triggerForGetQuestions } from '../../app/slices/questionsSlice';
import { ContainerStyled, ListItemStyled, ListStyled, linkStyles } from './Styles';
import FullPageLoading from '../../components/FullPageLoading';

const QuestionsPage = () => {
  const { t } = useTranslation();

  const { items: questions, error, status } = useAppSelector(selectQuestionsQuery);
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
      {status === 'success' && questions && (
        <ListStyled disablePadding>
          {questions.map((question) => (
            <ListItemStyled key={question.question_id}>
              <Link underline='none' sx={linkStyles} component={RouterLink} to={`/${question.question_id}`}>
                {question.title}
              </Link>
            </ListItemStyled>
          ))}
        </ListStyled>
      )}
    </ContainerStyled>
  );
};

export default QuestionsPage;
