import { Box, Button, Container, Paper, TextField } from "@mui/material"
import { Info } from "../components/Info";
import { History } from "../components/History";

export const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <Paper sx={{ p: 1 }} component="main">
        <Box
          component="form"
          sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            mb: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField 
            label="ТТН"
            placeholder="Введіть ТТН"
            color="secondary"
            size="small"
            sx={{
              width: { xs: '100%', sm: '30%', lg: '20%' },
            }}
          />
          <Button variant="contained" color="secondary">
            Get status TTN
          </Button>
        </Box>
        <Box
          component="div"
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'stretch',
            flexDirection: { xs: 'column', md: 'row' },
            mb: 1,
          }}
        >
          <Info />
          <History />
        </Box>
      </Paper>
    </Container>
  );
}