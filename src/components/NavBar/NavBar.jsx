import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import Image from "next/image";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const drawerWidth = 350;
const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Nosotros", href: "/about" },
  { name: "Servicios", href: "/services" },
  { name: "Ubicaciones", href: "/location" },
];

function NavBar(props, toggleTheme, isDarkMode) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      backgroundColor="primary.main"
    >
      <Link href="/">
        <Image
          src="/assets/logo/sol_y_luna_light.png"
          width={38}
          height={38}
          alt="logo"
        />
      </Link>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablepadding="true">
            <ListItemButton
              sx={{ textAlign: "center" }}
              component="a"
              href={item.href}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <ListItemButton disablepadding="true" sx={{ textAlign: "center" }}>
            <Image
              src="assets/icons-themes/moon-dark.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        enableColorOnDark
        component="nav"
        color="primary"
        sx={{
          height: "75px",
          justifyContent: "center",
        }}
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
                src="/assets/logo/sol_y_luna_dark.png"
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
              Sol y Luna Resto
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
            {/* <Link href="#" >
              <Image
                src="assets/icons-themes/moon-dark.svg"
                alt="logo"
                width={20}
                height={20}
                onClick={()=>{toggleTheme}}
              />
            </Link> */}
            <IconButton
              color="inherit"
              aria-label="toggle theme"
              onClick={toggleTheme}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
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
