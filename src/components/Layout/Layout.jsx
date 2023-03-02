import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import WhatsappButton from '../WhatsappButton/WhatsappButton'

const Layout = ({children, selectedTheme, toggleTheme}) => {
  return (
    <>
        <NavBar selectedTheme={selectedTheme} toggleTheme={toggleTheme}/>
        {children}
        <WhatsappButton />
        <Footer />
    </>
  )
}

export default Layout;