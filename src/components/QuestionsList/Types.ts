import { StackProps } from '@mui/material';

export interface AnswerCountContainerProps extends StackProps {
  answerCount: number;
}

export interface QuestionsListProps {
  questions: Array<{ [n: string]: any }>;
  onTagClick: (tag: string) => void;
}