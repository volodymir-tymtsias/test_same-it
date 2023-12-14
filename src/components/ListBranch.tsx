import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography, styled } from "@mui/material";
import { CustomTablePagination } from "./TablePagination";

export const ListBranch = () => {
  const rows = [
    {
      SiteKey: '10119',
      Description: 'Відділення №1: вул. М. Грушевського, 3',
      CityDescription: 'Заболотів (Снятинський р-н)',
      SettlementAreaDescription: 'Івано-Франківська область',
      SettlementRegionsDescription: 'Снятинський р-н',
    },
    {
      SiteKey: '10120',
      Description: 'Відділення №1: вул. М. Грушевського, 3',
      CityDescription: 'Заболотів (Снятинський р-н)',
      SettlementAreaDescription: 'Івано-Франківська область',
      SettlementRegionsDescription: 'Снятинський р-н',
    },
    {
      SiteKey: '10121',
      Description: 'Відділення №1: вул. М. Грушевського, 3',
      CityDescription: 'Заболотів (Снятинський р-н)',
      SettlementAreaDescription: 'Івано-Франківська область',
      SettlementRegionsDescription: 'Снятинський р-н',
    },
  ];

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
                  {`Код: ${row.SiteKey}. ${row.Description}. ${row.CityDescription}. `
                    + `${row.SettlementRegionsDescription}. ${row.SettlementAreaDescription}`}
                </StyledCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomTablePagination amount={100}/>
    </Paper>
  );
}