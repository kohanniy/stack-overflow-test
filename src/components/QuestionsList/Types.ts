import { StackProps } from '@mui/material';

export interface QuestionsListProps {
  questions: { [n: string]: any }
}

export interface AnswerCountContainerProps extends StackProps {
  answerCount: number;
}