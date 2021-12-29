import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Stack, Typography, Link, Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { ListStyled, ListItemStyled, AnswerCountContainer } from './Styles';
import {
  PTitleComponent,
  PDescComponent,
  LiComponent,
  CodeComponent,
} from '../../assets/ReactMarkdownComponents';
import Tags from '../Tags';
import { QuestionsListProps } from './Types';
import { convertMnemonics } from '../../utils/utils';

const QuestionsList = (props: QuestionsListProps) => {
  const { questions, onTagClick } = props;

  const { t } = useTranslation();

  return (
    <ListStyled disablePadding>
      {questions.map((question: { [n: string]: any }) => {
        const fullText = question.body_markdown;
        const description = question.body_markdown.slice(0, 141);
        const threeDots = fullText.length <= 140 ? '' : '...';

        return (
          <ListItemStyled divider key={question.question_id}>
            <AnswerCountContainer answerCount={question.answer_count}>
              <Typography component='span' variant='caption'>
                {t('replies')}
              </Typography>
              <Typography component='span' variant='caption'>
                {question.answer_count}
              </Typography>
            </AnswerCountContainer>
            <Stack spacing={1}>
              <Link component={RouterLink} to={`/${question.question_id}`} underline='hover'>
                <ReactMarkdown
                  components={{
                    p: PTitleComponent,
                  }}
                >
                  {convertMnemonics(question.title)}
                </ReactMarkdown>
              </Link>
              <Box>
                <ReactMarkdown
                  linkTarget='_blank'
                  disallowedElements={['pre']}
                  components={{
                    p: PDescComponent,
                    li: LiComponent,
                    code: CodeComponent,
                  }}
                >
                  {convertMnemonics(`${description}${threeDots}`)}
                </ReactMarkdown>
              </Box>
              <Tags tags={question.tags} onTagClick={onTagClick} />
            </Stack>
          </ListItemStyled>
        );
      })}
    </ListStyled>
  );
};

export default QuestionsList;
