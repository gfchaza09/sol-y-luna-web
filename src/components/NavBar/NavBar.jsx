import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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

const drawerWidth = 350;
const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Nosotros", href: "/about" },
  { name: "Servicios", href: "/services" },
  { name: "Ubicaciones", href: "/location" },
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
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
                display: { xs: "none", sm: "block"},
              }}
            >
              Sol y Luna Resto
            </Typography>
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "block"}, ml: 2 }}
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
            <Link href="#">
              <Image
                src="assets/icons-themes/moon-dark.svg"
                alt="logo"
                width={20}
                height={20}
              />
            </Link>
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
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography className="h2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
        </Typography>
        <br />
        <Typography variant="h1">hola mundo como estan hoy?</Typography>
        <Typography variant="h2">hola mundo como estan hoy?</Typography>
        <Typography variant="h3">hola mundo como estan hoy?</Typography>
        <Typography variant="h4">hola mundo como estan hoy?</Typography>
        <Typography variant="h5">hola mundo como estan hoy?</Typography>
        <br />
        <Link href="#">Esto es un link</Link>
        <Typography variant="p">Soy un parrafo</Typography>
        <Button variant="contained">Hola soy un boton</Button>
      </Box> */}
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
