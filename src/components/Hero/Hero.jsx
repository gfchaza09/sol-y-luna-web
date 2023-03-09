import React from 'react'
import Image from 'next/image'
import { ButtonBase, Container, Typography } from '@mui/material'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const Hero = ({title, image}) => {
  return (
    <Container sx={{ height: "100vh", position: "relative", opacity: 0.8}}>
        <Typography component="h1" variant="h1" sx={{color: "#FFFFFF", position: "absolute", top: "50%", left: "50%", zIndex: 100}}>{title}</Typography>
        <Image
            src={image}
            alt="hero"
            fill
            sizes="100vw 100vh"
        />
        <ButtonBase sx={{position: "absolute", bottom: "0", left: "50%", zIndex: 100}}>
            <ChevronDownIcon width={40} height={40} color="#FFFFFF"/>
        </ButtonBase>
    </Container>
  )
}

export default Hero