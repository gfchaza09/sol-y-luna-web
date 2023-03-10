import Image from 'next/image'
import { ButtonBase, Container, Typography } from '@mui/material'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useWindowWidth } from '@/hooks/useWindowWidth'

const Hero = ({title, image, subtitle}) => {

  const [width, setWidth] = useWindowWidth();

  return (
    <Container component="section" sx={{ width:"100vw", maxWidth:"100%" ,height: "100vh", position: "relative", padding: "0px"}}>
        <Image
            src={image}
            alt="hero"
            fill
            style={{width:"100%", height: "100%", top: 0, left: 0, filter: "brightness(60%)", objectFit: "cover"}}
        />
        <Container sx={{color:"#FFFFFF" ,position: "absolute", top: "0", left: "0", bottom: "0", right: "0", textAlign:"center", margin: {mobile: "220px auto", tablet: "400px auto"}}}>
          <Typography component="h1" variant={width >= 640 ? "h1" : "h2"} sx={{marginBottom: "12px"}}>{title}</Typography>
          {
            subtitle && <Typography component="h4" variant="h4" sx={{display: {mobile: "none", tablet: "block"}}}>{subtitle}</Typography>
          }
        </Container>
        <Container sx={{width:"100%", position: "absolute", bottom: "10px", zIndex: 100, display: "flex", justifyContent: "center", alignItems: "center"}}>
          <ButtonBase>
              <ChevronDownIcon width={50} height={50} color="#FFFFFF"/>
          </ButtonBase>
        </Container>
    </Container>
  )
}

export default Hero