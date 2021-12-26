import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Chip, Stack, Typography, Link } from '@mui/material';
import { ListStyled, ListItemStyled, AnswerCountContainer } from './Styles';
import { QuestionsListProps } from './Types';

const QuestionsList = (props: QuestionsListProps) => {
  const { questions } = props;

  const { t } = useTranslation();

  return (
    <ListStyled disablePadding>
      {questions.map((question: { [n: string]: any }) => (
        <ListItemStyled divider key={question.question_id}>
          <AnswerCountContainer answerCount={question.answer_count}>
            <Typography component='span' variant='caption'>{t('replies')}</Typography>
            <Typography component='span' variant='caption'>{question.answer_count}</Typography>
          </AnswerCountContainer>
          <Stack spacing={1}>
            <Link component={RouterLink} to={`/${question.question_id}`} underline='hover'>
              {question.title}
            </Link>
            <Stack direction='row' spacing={1}>
              {question.tags.map((tag: string) => (
                <Chip size='small' label={tag} key={tag} />
              ))}
            </Stack>
          </Stack>
        </ListItemStyled>
      ))}
    </ListStyled>
  );
};

export default QuestionsList;
