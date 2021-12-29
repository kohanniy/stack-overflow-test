import { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button } from '@mui/material';
import { AddAnswerProps } from './Types';
import { Form } from './Styles';

const AddAnswerForm = (props: AddAnswerProps) => {
  const { onSubmit, loadingStatus } = props;

  const [value, setValue] = useState('');

  const { t } = useTranslation();

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt) => {
    setValue(evt.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    onSubmit(value);
  };

  const resetForm = () => {
    setValue('');
  };

  useEffect(() => {
    if (loadingStatus === 'success') {
      resetForm();
    }
  }, [loadingStatus]);

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <TextField
        sx={{ width: 1 }}
        multiline
        rows={7}
        required
        disabled={loadingStatus === 'loading'}
        onChange={handleChange}
      />
      <Button
        variant='contained'
        disabled={value.length === 0 || loadingStatus === 'loading'}
        type='submit'
      >
        {t('send')}
      </Button>
    </Form>
  );
};

export default AddAnswerForm;
