import { useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import ModalComponent from "../Modal/ModalComponent";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import AnimateRender from "../AnimateRender/AnimateRender";

const Layout = ({ children, selectedTheme, toggleTheme }) => {
  const [width, setWidth] = useWindowWidth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AnimateRender>
        <NavBar selectedTheme={selectedTheme} toggleTheme={toggleTheme} />
        {children}
        {width >= 640 && (
          <>
            <WhatsappButton handleOpen={handleOpen} />
            <ModalComponent
              handleClose={handleClose}
              open={open}
              selectedTheme={selectedTheme}
            />
          </>
        )}
        <Footer selectedTheme={selectedTheme} />
      </AnimateRender>
    </>
  );
};

export default Layout;
