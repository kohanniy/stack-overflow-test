import { Button } from '@mui/material';
import { QuestionsPageProps } from './Types';

const QuestionsPage = (props: QuestionsPageProps) => {
  const { onLogoutButtonClick } = props;
  return (
    <div>
      <h3>Вопросы</h3>
      <Button onClick={onLogoutButtonClick}>Выйти</Button>
    </div>
  );
};

export default QuestionsPage;
