import { Alert, Button, ButtonProps, Divider, IconButton, ListItemText, MenuItem, MenuList, Paper, Typography, styled } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { blue } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as historyAction from '../features/history';
import { useSearchParams } from "react-router-dom";
import { getSearchWith } from "../helpers/searchHelper";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: 'primary',
  alignSelf: 'center',
  '&:hover': {
    backgroundColor: blue[400],
  },
}));

export const History = () => {
  const dispatch = useAppDispatch();
  const { trackingNumbers } = useAppSelector(state => state.history);
  const [searchParams, setSearchParams] = useSearchParams();

  const onClearHistoryHandler = () => {
    dispatch(historyAction.clear());
  }

  const onDeleteTrackingHandler = (trackingNumber: string) => () => {
    dispatch(historyAction.deleteTrackings(trackingNumber));
  }

  const onTrackingHandler = (trackingNumber: string) => (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    const target = event.target as HTMLLIElement;
    
    if (target.closest('button')) {
      return;
    }

    setSearchParams(
      getSearchWith(searchParams, { 
       trackingNumber, 
      }),
    );
  }

  return (
    <Paper sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 1,
        width: { md: '30%' },
        backgroundColor: 'secondary.light',
      }}
      component="aside"
    >
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Історія пошуку</Typography>
      <Divider sx={{ mb: 1 }} />

      {!trackingNumbers.length && (
        <Alert severity="info">
          Поки що історія пошуку пуста, введіть ТТН для пошуку
        </Alert>
      )}

      {!!trackingNumbers.length && (
        <MenuList dense>
          {trackingNumbers.map(tracking => (
            <MenuItem 
              key={tracking}
              onClick={onTrackingHandler(tracking)}
            >
              <ListItemText>{tracking}</ListItemText>
              <IconButton 
                edge="end" 
                aria-label="delete" 
                title="Видалити з історії"
                onClick={onDeleteTrackingHandler(tracking)}
              >
                <DeleteIcon />
              </IconButton>
            </MenuItem>
          ))}
        </MenuList>
      )}

      {trackingNumbers.length > 1 && (
        <ColorButton 
          variant="contained"
          onClick={onClearHistoryHandler}
        >Видалити історію</ColorButton>
      )}
    </Paper>
  );
}