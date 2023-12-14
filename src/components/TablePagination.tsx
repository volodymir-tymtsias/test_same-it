import { TablePagination } from '@mui/material';
import React from 'react';

type Props = {
  amount: number;
};

export const CustomTablePagination: React.FC<Props> = ({ amount }) => {
  const handleChangePage = () => {
    
  };

  const handleChangeRowsPerPage = () => {
    
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, 50, 100, 500]}
      labelRowsPerPage='Відділень на сторінці:'
      component="div"
      count={amount}
      rowsPerPage={5}
      page={1}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
