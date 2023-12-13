import { Container, Paper } from "@mui/material"
import { ListBranch } from "../components/ListBranch";

export const ListPage = () => {
  return (
    <Container maxWidth="xl">
      <Paper sx={{ p: 1 }} component="main">
        <ListBranch />
      </Paper>
    </Container>
  );
}