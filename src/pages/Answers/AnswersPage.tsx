import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { Typography, Stack, List } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addAnswer, getQuestionId, selectAnswersQuery } from '../../app/slices/answersSlice';
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
import AddAnswerForm from '../../components/AddAnswerForm';
import SnackbarComponent from '../../components/SnackbarComponent';

const AnswersPage = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { status, error } = useAppSelector(selectRequestState);
  const { question, items: answers, addAnswerStatus } = useAppSelector(selectAnswersQuery);
  const dispatch = useAppDispatch();
  const params = useParams();
  const { t } = useTranslation();

  const handleAddAnswer = (value: string) => {
    dispatch(addAnswer({ id: Number(params.id), body: value }));
  };

  // get answers
  useEffect(() => {
    dispatch(getQuestionId(params.id));
  }, [dispatch, params.id]);

  // when open snackbar
  useEffect(() => {
    if (addAnswerStatus === 'success') {
      setSnackbarOpen(true);
    } else {
      setSnackbarOpen(false);
    }
  }, [addAnswerStatus]);

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
          <Stack>
            <Typography component='p' variant='h6'>
              {t('add_answer')}
            </Typography>
            <AddAnswerForm loadingStatus={addAnswerStatus} onSubmit={handleAddAnswer} />
          </Stack>
          <SnackbarComponent
            open={snackbarOpen}
            onClose={() => setSnackbarOpen(false)}
            severity='success'
            alertText={t('answer_added')}
          />
        </Stack>
      )}
    </Section>
  );
};

export default AnswersPage;
