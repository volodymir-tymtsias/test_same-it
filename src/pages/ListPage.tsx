import { Alert, Box, CircularProgress, Container, Paper } from "@mui/material"
import { DepartmetsList } from "../components/DepartmetsList";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as departmentsAction from '../features/departments';
import { DataFetchDepartment } from "../types/DataFetchDepartment";
import { ScrollToTop } from "../components/ScrollToTop";
import { Search } from "../components/Search";

export const ListPage = () => {
  const [searchParams] = useSearchParams();
  const appliedQuery = searchParams.get('city') || '';
  const page = searchParams.get('page') || 1;
  const pageSize = searchParams.get('pageSize') || 5;
  const dispatch = useAppDispatch();

  const currentData: DataFetchDepartment = useMemo(() => ({
    page: +page,
    limit: +pageSize,
    city: appliedQuery,
  }), [appliedQuery, page, pageSize]);

  const { 
    amount,
    loaded,
    hasError,
    responseErrors,
    responseWarnings,
  } = useAppSelector(state => state.departments);

  useEffect(() => {
    dispatch(departmentsAction.clear());
    dispatch(departmentsAction.initDepartments(currentData));
  }, [currentData, dispatch]);

  return (
    <>
      <Container maxWidth="xl">
        <Paper sx={{ p: 1 }} component="main">
          <Search
            textButton="Знайти відділення"
            nameValue="city"
            label="Введіть населений пункт"
            placeholder="Населений пункт"
          />

          {!loaded && (
            <Box textAlign="center" width="100%">
              <CircularProgress color="inherit" sx={{ m: 2 }}/>
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