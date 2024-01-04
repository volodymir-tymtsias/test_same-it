import { Box, Container, Paper } from "@mui/material"
import { Info } from "../components/Info";
import { History } from "../components/History";
import { ScrollToTop } from "../components/ScrollToTop";
import { Search } from "../components/Search";

export const HomePage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Paper sx={{ p: 1 }} component="main">
          <Search
            textButton="Get status TTN"
            nameValue="trackingNumber"
            label="ТТН"
            placeholder="Введіть ТТН"
          />
          
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

      <ScrollToTop />
    </>
  );
}