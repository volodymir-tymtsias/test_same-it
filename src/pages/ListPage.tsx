import { Alert, Box, Button, CircularProgress, Container, Paper, TextField } from "@mui/material"
import { DepartmetsList } from "../components/DepartmetsList";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { getSearchWith } from "../helpers/searchHelper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as departmentsAction from '../features/departments';
import { DataFetchDepartment } from "../types/DataFetchDepartment";
import { ScrollToTop } from "../components/ScrollToTop";

export const ListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const appliedQuery = searchParams.get('q')?.trim() || '';
  const page = searchParams.get('page') || 1;
  const pageSize = searchParams.get('pageSize') || 5;
  const [query, setQuery] = useState(appliedQuery);
  const dispatch = useAppDispatch();
  const currentData: DataFetchDepartment = useMemo(() => ({
    page: +page,
    limit: +pageSize,
    city: appliedQuery,
  }), [appliedQuery, page, pageSize])
  const { 
    amount,
    loaded,
    hasError,
    responseErrors,
    responseWarnings,
  } = useAppSelector(state => state.departments);

  const setQuerySearchParams = () => {
    setSearchParams(
      getSearchWith(searchParams, { q: query.trim() || null, page: 1 }),
    );
  }

  const searchHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setQuery(event.target.value);
  }

  useEffect(() => {
    dispatch(departmentsAction.clear());
    dispatch(departmentsAction.initDepartments(currentData));
  }, [currentData, dispatch]);

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
              label="Введіть населений пункт"
              placeholder="Населений пункт"
              color="secondary"
              size="small"
              sx={{
                width: { xs: '100%', sm: '30%', lg: '20%' },
              }}
              value={query}
              onChange={searchHandler}
            />
            <Button 
              variant="contained" 
              color="secondary"
              onClick={setQuerySearchParams}
            >
              Знайти відділення
            </Button>
          </Box>

          {!loaded && (
            <Box textAlign="center" width="100%">
              <CircularProgress color="inherit" />
            </Box>
          )}

          {loaded && amount === 0 && !hasError && (
            <Alert severity="info">
              Не знайдено результатів пошуку, змініть параметри пошуку
            </Alert>
          )}

          {loaded && hasError && (
            <Alert severity="error">
              {!!responseErrors.length && (responseErrors.join(', ') + '. ')}
              {!!responseWarnings.length && (responseWarnings.join(', '))}
            </Alert>
          )}

          {loaded && !!amount && !hasError && (
            <DepartmetsList />
          )}
        </Paper>
      </Container>
      <ScrollToTop />
    </>
  );
}