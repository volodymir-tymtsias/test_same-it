import { Divider, IconButton, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const History = () => {
  return (
    <Paper sx={{ 
        p: 1,
        width: { md: '30%' },
        backgroundColor: 'secondary.light',
      }}
      component="section"
    >
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Історія</Typography>
      <Divider />
      <MenuList dense>
        <MenuItem>
          <ListItemText>20400048799002</ListItemText>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <ListItemText>20400048799002</ListItemText>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <ListItemText>20400048799002</ListItemText>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}