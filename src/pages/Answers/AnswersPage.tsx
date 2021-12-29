import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getQuestionId, selectAnswers } from '../../app/slices/answersSlice';

const AnswersPage = () => {
  const answers = useAppSelector(selectAnswers);
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log(answers)

  useEffect(() => {
    dispatch(getQuestionId(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      <h3>Один вопрос</h3>
    </div>
  );
};

export default AnswersPage;
