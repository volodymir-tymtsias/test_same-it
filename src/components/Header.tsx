import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Button, 
  Container, 
  GlobalStyles, 
  IconButton, 
  Menu, 
  MenuItem, 
  Toolbar, 
  Typography, 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../images/Logo.png";

const pages = [{
    link: '/',
    value: 'Перевірити ТТН',
  }, 
  {
    link: 'listDepartments',
    value: 'Список відділень',
  },
];

const imgGlobalStyles = <GlobalStyles 
  styles={{
    '.logo': { width: "100%" },
  }} 
/>;

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters id="back-to-top-anchor">
          <Button
            component={RouterLink} 
            to="/"
            sx={{
              width: '80px',
              p: 0,
              m: '10px 20px 10px 0',
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            {imgGlobalStyles}
            <img src={logo} alt="Logo Tracking" className="logo" />
          </Button>

          <Box sx={{ position: 'absolute', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.value} 
                  onClick={handleCloseNavMenu}
                  component={RouterLink} 
                  to={page.link}
                >
                  <Typography textAlign="center">{page.value}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              component={RouterLink} 
              to="/"
              sx={{
                width: '50px',
                p: 0,
                m: '10px auto',
                textDecoration: 'none',
              }}
            >
              {imgGlobalStyles}
              <img src={logo} alt="Logo Tracking" className="logo" />
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.value}
                onClick={handleCloseNavMenu}
                component={RouterLink} 
                to={page.link}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.value}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}