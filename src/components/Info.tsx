import { Alert, Box, CircularProgress, Divider, Paper, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import * as statusDocumentsAction from '../features/statusDocuments';
import { useSearchParams } from "react-router-dom";

export const Info = () => {
  const dispatch = useAppDispatch();
  const {
    statusDocuments,
    loading,
    hasError,
    responseErrors,
    responseWarnings,
  } = useAppSelector(state => state.statusDocuments);
  const [searchParams] = useSearchParams();
  const trackingNumber = searchParams.get('trackingNumber');

  useEffect(() => {
    if (trackingNumber) {
      dispatch(statusDocumentsAction.clear());
      dispatch(statusDocumentsAction.initStatusDocuments(trackingNumber));
    }
  }, [trackingNumber, dispatch]);

  return (
    <Paper sx={{ 
        p: 1,
        width: {md: '70%' },
        backgroundColor: 'secondary.light'
      }}
      component="section"
    >
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Інформація про відправку</Typography>
      <Divider sx={{ mb: 1 }} />

      {loading && (
        <Box textAlign="center" width="100%">
          <CircularProgress color="inherit" sx={{ m: 2 }} />
        </Box>
      )}

      {!loading 
        && !!statusDocuments.length 
        && statusDocuments[0].StatusCode === '3' 
        && !hasError 
        && trackingNumber && (
        <Alert severity="info">
          Номер TTH не знайдено
        </Alert>
      )}

      {!loading && hasError && (
        <Alert severity="error">
          {!!responseErrors.length && (responseErrors.join(', ') + '. ')}
          {!!responseWarnings.length && (responseWarnings.join(', '))}
        </Alert>
      )}

      {!loading && !trackingNumber && !hasError && (
        <Alert severity="info">
          Введіть номер ТТН для пошуку або виберіть ТТН з історії
        </Alert>
      )}

      {!loading 
        && !!statusDocuments.length
        && statusDocuments[0].StatusCode !== '3' 
        && !hasError 
        && trackingNumber && (
        <>
          <Typography variant="body1" mb={1}>
            <b>Статус доставки: </b>
            {statusDocuments[0].Status}
          </Typography>
        
          <Typography variant="body1" mb={1}>
            <b>Відправлено: </b>
            {statusDocuments[0].WarehouseSender + ', ' + statusDocuments[0].CitySender}
          </Typography>
        
          <Typography variant="body1">
            <b>Отримано: </b>
            {statusDocuments[0].WarehouseRecipient + ', ' + statusDocuments[0].CityRecipient}
          </Typography>
        </>
      )}
    </Paper>
  );
}