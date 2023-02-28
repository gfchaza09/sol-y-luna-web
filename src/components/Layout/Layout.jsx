import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import WhatsappButton from '../WhatsappButton/WhatsappButton'

const Layout = ({children}) => {
  return (
    <>
        <NavBar />
        {children}
        <WhatsappButton />
        <Footer />
    </>
  )
}

export default Layout;