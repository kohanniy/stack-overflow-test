import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { Typography, Stack, List } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getQuestionId, selectAnswersQuery } from '../../app/slices/answersSlice';
import { selectRequestState } from '../../app/slices/requestStateSlice';
import Section from '../../components/Section';
import FullPageLoading from '../../components/FullPageLoading';
import rehypeRaw from 'rehype-raw';
import {
  PDescComponent,
  LiComponent,
  CodeAnswersComponent,
  PreStyledComponent,
} from '../../assets/ReactMarkdownComponents';
import Tags from '../../components/Tags';
import { PaperStyled, AnswerStyled } from './Styles';
import { convertMnemonics } from '../../utils/utils';

const AnswersPage = () => {
  const { status, error } = useAppSelector(selectRequestState);
  const { question, items: answers } = useAppSelector(selectAnswersQuery);
  const dispatch = useAppDispatch();
  const params = useParams();
  const { t } = useTranslation();
  console.log(question);

  useEffect(() => {
    dispatch(getQuestionId(params.id));
  }, [dispatch, params.id]);

  return (
    <Section>
      {status === 'loading' && <FullPageLoading />}
      {status === 'error' && <Typography sx={{ color: 'error.main' }}>{error!.message}</Typography>}
      {status === 'success' && (
        <Stack spacing={2}>
          {question && (
            <PaperStyled variant='outlined'>
              <Typography component='h2' variant='h5'>
                {question.title}
              </Typography>
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                linkTarget='_blank'
                components={{
                  p: PDescComponent,
                  li: LiComponent,
                  code: CodeAnswersComponent,
                  pre: PreStyledComponent,
                }}
              >
                {convertMnemonics(question.body_markdown)}
              </ReactMarkdown>
              <Tags tags={question.tags} />
            </PaperStyled>
          )}
          {answers.length > 0 && (
            <Stack spacing={1.5}>
              <Typography component='p' variant='h6'>
                {`${t('replies')}: ${answers.length}`}
              </Typography>
              <List disablePadding>
                {answers.map((answer) => (
                  <AnswerStyled key={answer.answer_id} divider>
                    <ReactMarkdown
                      linkTarget='_blank'
                      components={{
                        p: PDescComponent,
                        li: LiComponent,
                        code: CodeAnswersComponent,
                        pre: PreStyledComponent,
                      }}
                    >
                      {convertMnemonics(answer.body_markdown)}
                    </ReactMarkdown>
                  </AnswerStyled>
                ))}
              </List>
            </Stack>
          )}
        </Stack>
      )}
    </Section>
  );
};

export default AnswersPage;
