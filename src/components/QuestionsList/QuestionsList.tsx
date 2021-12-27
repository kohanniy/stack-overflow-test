import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Chip, Stack, Typography, Link, Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { ListStyled, ListItemStyled, AnswerCountContainer, Tags, TagItem } from './Styles';
import { BackendType } from '../../utils/types';
import { PTitleComponent, PDescComponent, LiComponent } from './ReactMarkdownComponents';

const QuestionsList = (props: BackendType) => {
  const { questions } = props;

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
                  {question.title}
                </ReactMarkdown>
              </Link>
              <Box>
                <ReactMarkdown
                  linkTarget='_blank'
                  disallowedElements={['pre', 'code']}
                  skipHtml
                  components={{
                    p: PDescComponent,
                    li: LiComponent,
                  }}
                >{`${description}${threeDots}`}</ReactMarkdown>
              </Box>
              <Tags disablePadding>
                {question.tags.map((tag: string) => (
                  <TagItem key={tag}>
                    <Chip size='small' label={tag} />
                  </TagItem>
                ))}
              </Tags>
            </Stack>
          </ListItemStyled>
        );
      })}
    </ListStyled>
  );
};

export default QuestionsList;
