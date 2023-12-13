import { Paper, Typography } from "@mui/material";

export const Info = () => {
  return (
    <Paper sx={{ 
        p: 1,
        width: {md: '70%' },
        backgroundColor: 'secondary.light'
      }}
      component="section"
    >
        <Typography variant="body1" mb={1}>
          <b>Статус доставки: </b>
          Одержано
        </Typography>
      
        <Typography variant="body1" mb={1}>
          <b>Відправлено: </b>
          Відділення №17 (до 30 кг): вул.Розумовська, 29
        </Typography>
      
        <Typography variant="body1">
          <b>Отримано: </b>
          Відділення №13 (до 30 кг): просп. Гагаріна, 43
        </Typography>
    </Paper>
  );
}