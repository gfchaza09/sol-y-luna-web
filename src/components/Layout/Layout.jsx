import { useEffect, useState } from 'react'
import Carrusel from '../Slider/Slider'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import WhatsappButton from '../WhatsappButton/WhatsappButton'

const Layout = ({children, selectedTheme, toggleTheme}) => {

  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
        <NavBar selectedTheme={selectedTheme} toggleTheme={toggleTheme}/>
        <Header />
        {children}
        {
          width >= 600 && <WhatsappButton />
        }
        <Footer selectedTheme={selectedTheme}/>
    </>
  )
}

export default Layout;