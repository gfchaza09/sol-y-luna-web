import { useState } from 'react'
import Carrusel from '../Slider/Slider'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import WhatsappButton from '../WhatsappButton/WhatsappButton'
import ModalComponent from '../Modal/ModalComponent'
import { useWindowWidth } from '@/hooks/useWindowWidth'



const Layout = ({children, selectedTheme, toggleTheme}) => {

  const [width, setWidth] = useWindowWidth();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
        <NavBar selectedTheme={selectedTheme} toggleTheme={toggleTheme}/>
        {/* <Header /> */}
        {children}
        {
          width >= 640 && <>
            <WhatsappButton handleOpen={handleOpen} />
            <ModalComponent handleClose={handleClose} open={open} selectedTheme={selectedTheme}/>
          </> 
        }
        <Footer selectedTheme={selectedTheme}/>
    </>
  )
}

export default Layout;