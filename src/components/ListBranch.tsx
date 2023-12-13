import { Divider, Paper, Typography } from "@mui/material";

export const ListBranch = () => {
  return (
    <Paper sx={{ 
        p: 1,
        backgroundColor: 'secondary.light',
      }}
      component="section"
    >
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Список відділень</Typography>
      <Divider />
      
    </Paper>
  );
}