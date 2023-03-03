import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { AppBar, Box, ButtonBase, Drawer, Link, Button, Typography, Toolbar } from "@mui/material";

// Icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import {MoonIcon, SunIcon} from "@heroicons/react/24/outline"
// Components
import { IOSSwitch } from "../IOSSwitch/IOSSwitch";
import WhatsappButton from "../WhatsappButton/WhatsappButton";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Menú", href: "/menu" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Ubicaciones", href: "/ubicaciones" },
];

const NavBar = ({window, selectedTheme, toggleTheme}) => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width: "100%" }}
    >
      <List variant="backgroundMenuHeader" sx={{height: "8vh", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "36px 20px"}}>
        <Link href="/">
          <Image
            src={selectedTheme==="light" ? "/assets/logo/sol_y_luna_light.png" : "/assets/logo/sol_y_luna_dark.png"}
            width={38}
            height={38}
            alt="logo"
          />
        </Link>
        <ButtonBase>
          <XMarkIcon width={44} height={44} onClick={()=>setMobileOpen(true)}/>
        </ButtonBase>
      </List>
      <List variant="backgroundMenu" sx={{ textAlign: "center", width: "100%", height: "92vh" , position: "relative" }}>
        {navItems.map((item, index) => (
          <ListItem key={index} disablepadding="true">
            <ListItemButton
              sx={{ textAlign: "center" }}
              component="a"
              href={item.href}
            >
              <Typography variant="h3" className={router.pathname === item.href ? 'active-link' : ''}>{item.name}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <ListItemButton disablepadding="true" sx={{ textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center" }} color="inherit" aria-label="toggle theme" onClick={toggleTheme}>
            <Typography variant="h3">Modo Claro</Typography>
            <IOSSwitch checked={selectedTheme === "light"}/>
          </ListItemButton>
        </ListItem>
        <WhatsappButton mobile />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          height: "75px",
          justifyContent: "center",
        }}
        variant="backgroundNavbar"
      >
        <Toolbar
          sx={{display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '20px',
            flexDirection: {tablet: 'row', mobile: 'row-reverse'}
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { tablet: "none" } }}
          >
            <Bars3Icon width={44} height={44} color={selectedTheme === "light" ? "#000000" :"#ffffff"}/>
          </IconButton>
          <Box
            sx={{
              display: { mobile: "flex", tablet: "flex" },
              justifyContent: "center",
              marginLeft: {mobile: "0px", laptop: "80px", desktop: "100px"},
            }}
          >
            <Link
              href="/"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: "20px",
                textDecoration: "none",
              }}
            >
              <Image
                src={selectedTheme === "light" ? "/assets/logo/sol_y_luna_light.png" : "/assets/logo/sol_y_luna_dark.png"}
                width={38}
                height={38}
                alt="logo"
              />
              <Typography
                variant="linkNavbar"
                sx={{
                  mr: 1,
                  display: { mobile: "none", tablet2: "block" },
                }}
                >
                Sol y Luna Restaurante
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{ display: { mobile: "none", tablet: "flex" }, alignItems: "center", gap: "36px", marginRight: {mobile: "0px", laptop: "80px", desktop: "100px"}}}
            nowrap="true"
          >
            {navItems.map((item, index) => (
              <Link href={item.href} key={index} sx={{textDecoration: 'none'}}>
                <Typography key={item} variant="linkNavbar" className={`${router.pathname === item.href ? 'active-link' : ''}`}>{item.name}</Typography>
              </Link>
            ))}

            <IconButton
              color="inherit"
              aria-label="toggle theme"
              onClick={toggleTheme}
            >
              {
                selectedTheme === "dark" ? <SunIcon width={20} height={20} color="#ffffff"/> : <MoonIcon width={20} height={20} color="#000000"/>
              }
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
            display: { mobile: "block", tablet: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
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
