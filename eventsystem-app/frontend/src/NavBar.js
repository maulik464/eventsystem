import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Popover,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [serviceMenu, setServiceMenu] = React.useState(null);
  const serviceMenuOpen = Boolean(serviceMenu);

  const handleServiceMenuOpen = (event) => {
    setServiceMenu(event.currentTarget);
  };

  const handleServiceMenuClose = () => {
    setServiceMenu(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  const handleAccountMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "account-menu-popover" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ color: "#211C84" }} />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#211C84",
              textDecoration: "none",
            }}
          >
            Event System
          </Typography>
          {/* Horizontal Menu */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexGrow: 1,
              color: "black",
            }}
          >
            <Button sx={{ color: "#211C84" }}>Photos</Button>
            <Button sx={{ color: "#211C84" }}>Products</Button>
            <div>
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleServiceMenuOpen}
              >
                Services
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={serviceMenu}
                open={serviceMenuOpen}
                onClose={handleServiceMenuClose}
                TransitionComponent={Fade}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/AllEvents");
                  }}
                >
                  All Events
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/CatererService");
                  }}
                >
                  Caterer Service
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/PhotographerService");
                  }}
                >
                  Photographer Service
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/DecorationList");
                  }}
                >
                  Decorator Service
                </MenuItem>
              </Menu>
            </div>
            <Button sx={{ color: "#211C84" }}>Pricing</Button>
            <Button sx={{ color: "#211C84" }}>Blogs</Button>
          </Box>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                color="black"
                onClick={handleAccountMenuOpen}
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleAccountMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          <ListItem
            sx={{ cursor: "pointer", color: "#211C84" }}
            button
            onClick={() => {
              navigate("/Login");
              handleAccountMenuClose();
            }}
          >
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </Popover>

      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            top: "64px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 1 }}>
          <IconButton onClick={handleClose} color="inherit">
            <CloseIcon sx={{ color: "#211C84" }} />
          </IconButton>
        </Box>

        <List>
          <ListItem
            sx={{ cursor: "pointer", color: "#211C84" }}
            button
            onClick={() => {
              navigate("/Login");
              handleClose();
            }}
          >
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default NavBar;
