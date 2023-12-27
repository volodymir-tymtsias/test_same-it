import { Box, Button, Container, Paper, TextField } from "@mui/material"
import { Info } from "../components/Info";
import { History } from "../components/History";
import { ScrollToTop } from "../components/ScrollToTop";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { getSearchWith } from "../helpers/searchHelper";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const appliedWaybill = searchParams.get('waybill') || '';
  const [waybill, setWaybill] = useState(appliedWaybill);
  const [isErrorFormat, setIsErrorFormat] = useState(false);

  const waybillInputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (isErrorFormat) {
      setIsErrorFormat(false);
    }
    setWaybill(event.target.value);
  }

  const setTTNSearchParams = () => {
    const noError = /^(\d){14}$/.test(waybill.trim());

    setSearchParams(
      getSearchWith(searchParams, { 
        waybill: null, 
      }),
    );

    if (noError) {
      setSearchParams(
        getSearchWith(searchParams, { 
          waybill: waybill.trim() || null, 
        }),
      );
    } else {
      setIsErrorFormat(true);
    }
  }

  return (
    <>
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
              error={isErrorFormat}
              helperText={isErrorFormat
                ? 'Введений ТТН некоректний. ТТН повинен містити тільки цифри та мати довжину 14 символів'
                : ''
              }
              value={waybill}
              onChange={waybillInputHandler}
            />
            <Button 
              variant="contained" 
              color="secondary"
              onClick={setTTNSearchParams}
            >
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
      <ScrollToTop />
    </>
  );
}