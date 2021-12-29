import { Pagination as MuiPagination, PaginationProps } from '@mui/material';

const Pagination = (props: PaginationProps) => {
  const { page, count, onChange } = props;

  return (
    <MuiPagination
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

export default Pagination;
