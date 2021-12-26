import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { ListStyled, ListItemStyled, linkStyles } from './Styles';
import { QuestionsListProps } from './Types';

const QuestionsList = (props: QuestionsListProps) => {
  const { questions } = props;

  return (
    <ListStyled disablePadding {...props}>
      {questions.map((question: { [n: string]: any }) => (
        <ListItemStyled key={question.question_id}>
          <Link
            underline='none'
            sx={linkStyles}
            component={RouterLink}
            to={`/${question.question_id}`}
          >
            {question.title}
          </Link>
        </ListItemStyled>
      ))}
    </ListStyled>
  );
};

export default QuestionsList;
