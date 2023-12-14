import { Box, Button, Container, Paper, TextField } from "@mui/material"
import { ListBranch } from "../components/ListBranch";

export const ListPage = () => {
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
            label="Введіть населений пункт"
            placeholder="Населений пункт"
            color="secondary"
            size="small"
            sx={{
              width: { xs: '100%', sm: '30%', lg: '20%' },
            }}
          />
          <Button variant="contained" color="secondary">
            Знайти відділення
          </Button>
        </Box>
        <ListBranch />
      </Paper>
    </Container>
  );
}