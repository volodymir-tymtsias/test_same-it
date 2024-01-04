import { 
  Divider, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableRow, 
  Typography, 
  styled 
} from "@mui/material";
import { CustomTablePagination } from "./TablePagination";
import { useAppSelector } from "../app/hooks";

export const DepartmetsList = () => {
  const { departments: rows } = useAppSelector(state => state.departments);

  const StyledCell = styled(TableCell)(() => ({
    borderColor: 'white',
  }));

  return (
    <Paper sx={{ 
        p: 1,
        backgroundColor: 'secondary.light',
      }}
      component="section"
    >
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Список відділень</Typography>
      <Divider />

      <TableContainer>
        <Table sx={{ minWidth: 180 }} size="small" aria-label="list branches table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.SiteKey}
              >
                <StyledCell align="left">
                  {`Код: ${row.SiteKey}. ${row.Description}. `
                    + `${row.SettlementTypeDescription} ${row.SettlementDescription}. `
                    + `${row.SettlementRegionsDescription}. ${row.SettlementAreaDescription}`}
                </StyledCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomTablePagination />
    </Paper>
  );
}