import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  ButtonBase,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Toolbar,
} from "@mui/material";

// Icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
// Components
import { IOSSwitch } from "../IOSSwitch/IOSSwitch";
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import ModalComponent from "../Modal/ModalComponent";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const navItems = [
  { name: "Inicio", href: "/", hrefLocations: []},
  { name: "Menú", href: "/menu", hrefLocations: []},
  { name: "Nosotros", href: "/nosotros", hrefLocations: []},
  { name: "Servicios", href: "/servicios", hrefLocations: []},
  { name: "Ubicaciones", href: "/ubicaciones", hrefLocations: ["/ubicaciones/alcanfores", "/ubicaciones/centro", "/ubicaciones/boulevard"] },
];

const NavBar = ({ selectedTheme, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const router = useRouter();
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  // Animación navbar transparente
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [width, setWidth] = useWindowWidth();

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true}); 
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [backgroundTransparacy, setBackgroundTransparacy] = useState("00");
  const [color, setColor] = useState("#FFFFFF");
  const [logo, setLogo] = useState({desktop: "/assets/logo/sol_y_luna_light.png", 
  mobile: "/assets/logo/sol_y_luna_light.png"});

  useEffect(() => {
    if (width >= 640) {
      if (clientWindowHeight > 75) {
        setBackgroundTransparacy("FF");
      } else {
        setBackgroundTransparacy("00");
        setColor("#FFFFFF");
        setLogo({...logo, desktop:"/assets/logo/sol_y_luna_dark.png"})
      }
      if (clientWindowHeight > 75 && selectedTheme === "light") {
        setColor("#000000")
        setLogo({...logo, desktop: "/assets/logo/sol_y_luna_light.png"})
      }
      if (clientWindowHeight > 75 && selectedTheme === "dark") {
        setColor("#FFFFFF")
        setLogo({...logo, desktop: "/assets/logo/sol_y_luna_dark.png"})
      }
    } else {
      setLogo({...logo, mobile: `${selectedTheme === "light" ? "/assets/logo/sol_y_luna_light.png" : "/assets/logo/sol_y_luna_dark.png"}`})
    }
  }, [clientWindowHeight, selectedTheme, width]);

  // Configuración del modal de WhatsApp
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const drawer = (
    <Box
      sx={{ textAlign: "center", width: "100%" }}
    >
      <List
        variant="backgroundMenuHeader"
        sx={{
          height: "8vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "36px 20px",
        }}
      >
        <Link href="/">
          <Image
            src={
              selectedTheme === "light"
                ? "/assets/logo/sol_y_luna_light.png"
                : "/assets/logo/sol_y_luna_dark.png"
            }
            width={38}
            height={38}
            alt="logo"
            priority={true}
          />
        </Link>
        <ButtonBase>
          <XMarkIcon
            width={44}
            height={44}
            onClick={() => setMobileOpen(false)}
          />
        </ButtonBase>
      </List>
      <List
        variant="backgroundMenu"
        sx={{
          textAlign: "center",
          width: "100%",
          height: "92vh",
          position: "relative",
        }}
      >
        {navItems.map((item, index) => (
          <ListItem key={index} disablepadding="true">
            <ListItemButton
              sx={{ textAlign: "center" }}
              component="a"
              href={item.href}
            >
              <Typography
                variant="h3"
                sx={(router.pathname === item.href || item.hrefLocations.includes(router.pathname)) ? {fontWeight: 700} : {}}
              >
                {item.name}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <ListItemButton
            disablepadding="true"
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            color="inherit"
            aria-label="toggle theme"
            onClick={toggleTheme}
          >
            <Typography variant="h3">Modo Claro</Typography>
            <IOSSwitch checked={selectedTheme === "light"} />
          </ListItemButton>
        </ListItem>
        <WhatsappButton mobile handleOpen={handleOpen} setmobileOpen={setMobileOpen}/>
        <ModalComponent handleClose={handleClose} open={open} selectedTheme={selectedTheme}/>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box component="header" sx={{ display: "flex"}}>
      <AppBar
        component="nav"
        sx={{
          height: "75px",
          justifyContent: "center",
          background: `${selectedTheme === "light" ? "#ffffff" : "#1C1C1C"}${width >= 640 ? backgroundTransparacy : ""}`,
          color: `${width >= 640 ? color : ""}`,
          transition: "all .4s linear"
        }}
        variant="backgroundNavbar"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "20px",
            flexDirection: { tablet: "row", mobile: "row-reverse" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { tablet: "none" } }}
          >
            <Bars3Icon
              width={44}
              height={44}
            />
          </IconButton>
          <Box
            sx={{
              display: { mobile: "flex", tablet: "flex" },
              justifyContent: "center",
              marginLeft: { mobile: "0px", laptop: "80px", desktop: "100px" },
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
                src={width >= 640 ? logo.desktop : logo.mobile}
                width={38}
                height={38}
                alt="logo"
                priority={true}
              />
              <Typography
                variant="linkNavbar"
                sx={{
                  mr: 1,
                  display: { mobile: "none", tablet2: "block" },
                  color: `${color}`
                }}
              >
                Sol y Luna Restaurante
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: { mobile: "none", tablet: "flex" },
              alignItems: "center",
              gap: "36px",
              marginRight: { mobile: "0px", laptop: "80px", desktop: "100px" },
            }}
            nowrap="true"
          >
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                sx={{ textDecoration: "none", color: `${color}`}}
              >
                <Typography
                  key={item}
                  variant="linkNavbar"
                  sx={router.pathname === item.href ? {fontWeight: 700} : {}}
                >
                  {item.name}
                </Typography>
              </Link>
            ))}

            <IconButton
              color="inherit"
              aria-label="toggle theme"
              onClick={toggleTheme}
            >
              {selectedTheme !== "light" ? (
                <SunIcon width={20} height={20} />
              ) : (
                <MoonIcon width={20} height={20} />
              )}
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
};

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
