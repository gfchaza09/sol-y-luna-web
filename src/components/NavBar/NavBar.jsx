import * as React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AppBar, Box, Divider, Drawer, Link } from "@mui/material";
import Image from "next/image";

// Components
import { IOSSwitch } from "../IOSSwitch/IOSSwitch";
import WhatsappButton from "../WhatsappButton/WhatsappButton";

const drawerWidth = 350;
const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Menú", href: "/menu" },
  { name: "Nosotros", href: "/about" },
  { name: "Servicios", href: "/services" },
  { name: "Ubicaciones", href: "/location" },
];

const NavBar = ({window, selectedTheme, toggleTheme}) => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width: "100%" }}
    >
      <Link href="/">
        <Image
          src={selectedTheme==="light" ? "/assets/logo/sol_y_luna_light.png" : "/assets/logo/sol_y_luna_dark.png"}
          width={38}
          height={38}
          alt="logo"
        />
      </Link>
      <Divider />
      <List sx={{ textAlign: "center", width: "100%", position: "relative" }}>
        {navItems.map((item, index) => (
          <ListItem key={index} disablepadding="true">
            <ListItemButton
              sx={{ textAlign: "center" }}
              component="a"
              href={item.href}
            >
              <Typography variant="h3">{item.name}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <ListItemButton disablepadding="true" sx={{ textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center" }} color="inherit" aria-label="toggle theme" onClick={toggleTheme}>
            <Typography variant="h3">Modo Claro</Typography>
            <IOSSwitch checked={selectedTheme === "light"}/>
          </ListItemButton>
        </ListItem>
        <WhatsappButton />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} backgroundcolor="primary.navbar">
      <AppBar
        component="nav"
        sx={{
          height: "75px",
          justifyContent: "center",
        }}
        backgroundcolor="primary.navbar"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 6, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "flex", sm: "flex" },
              justifyContent: "center",
            }}
          >
            <Link
              href="/"
              sx={{
                display: { xs: "block", md: "block" },
                mr: 1,
                textAlign: "center",
              }}
            >
              <Image
                src={selectedTheme === "light" ? "/assets/logo/sol_y_luna_light.png" : "/assets/logo/sol_y_luna_dark.png"}
                width={38}
                height={38}
                alt="logo"
              />
            </Link>
            <Typography
              className="button-nav"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              Sol y Luna Restaurante
            </Typography>
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "block" }, ml: 2 }}
            nowrap="true"
          >
            {navItems.map((item, index) => (
              <Link href={item.href} key={index}>
                <Button key={item} sx={{ mr: 1 }} className={"button-nav"}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <IconButton
              color="inherit"
              aria-label="toggle theme"
              onClick={toggleTheme}
            >
              {selectedTheme === "dark" ? <Image
                src="assets/icons-themes/sun-dark.svg"
                alt="dark"
                width={20}
                height={20}
              /> : <Image
              src="assets/icons-themes/moon-dark.svg"
              alt="light"
              width={20}
              height={20}
            />}
            </IconButton>  
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
