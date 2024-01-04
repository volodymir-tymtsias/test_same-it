import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { TablePagination } from '@mui/material';
import { getSearchWith } from '../helpers/searchHelper';
import { useAppSelector } from '../app/hooks';

export const CustomTablePagination: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { amount } = useAppSelector(state => state.departments);
  const pageSize = searchParams.get('pageSize') || 5;
  const rowsPerPage = ([5, 10, 25, 50, 100, 500].includes(+pageSize))
    ? +pageSize
    : 5;

  const page = searchParams.get('page') || 1;
  const currentPage = (+page <= Math.ceil(amount / rowsPerPage))
    ? +page - 1
    : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null, 
    newPage: number
  ) => {
    setSearchParams(
      getSearchWith(searchParams, { page: newPage + 1 }),
    );
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchParams(
      getSearchWith(searchParams, { pageSize: event.target.value, page: 1 }),
    );
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, 50, 100, 500]}
      labelRowsPerPage='Відділень на сторінці:'
      component="div"
      count={amount}
      rowsPerPage={rowsPerPage}
      page={currentPage}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
