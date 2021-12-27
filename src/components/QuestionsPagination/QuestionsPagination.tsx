import { Link as RouterLink } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationProps } from '@mui/material';

const QuestionsPagination = (props: PaginationProps) => {
  const { page, count, onChange } = props;

  return (
    <Pagination
      sx={{
        '& .MuiPagination-ul': {
          rowGap: 1,
        }
      }}
      variant='outlined'
      shape='rounded'
      color='primary'
      page={page}
      count={count}
      onChange={onChange}
      renderItem={(item) => (
        <PaginationItem
          component={RouterLink}
          to={`/${item.page === 1 ? '?page=1' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
};

export default QuestionsPagination;
