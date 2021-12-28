import { Pagination, PaginationProps } from '@mui/material';

const QuestionsPagination = (props: PaginationProps) => {
  const { page, count, onChange } = props;

  return (
    <Pagination
      sx={{
        '& .MuiPagination-ul': {
          rowGap: 1,
        },
      }}
      variant='outlined'
      shape='rounded'
      color='primary'
      page={page}
      count={count}
      onChange={onChange}
    />
  );
};

export default QuestionsPagination;
