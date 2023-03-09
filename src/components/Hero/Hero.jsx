import Image from 'next/image'
import { ButtonBase, Container, Typography } from '@mui/material'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useWindowWidth } from '@/hooks/useWindowWidth'

const Hero = ({title, image, subtitle}) => {

  const [width, setWidth] = useWindowWidth();

  return (
    <Container sx={{ width:"100vw", maxWidth:"100%" ,height: "100vh", position: "relative"}}>
        <Typography component="h1" variant={width >= 640 ? "h1" : "h2"} sx={{color: "#FFFFFF", position: "absolute", top: "0", left:"0", bottom: "0", right: "0", textAlign: "center", margin: "400px auto", zIndex: 100}}>{title}</Typography>
        <Image
            src={image}
            alt="hero"
            fill
            style={{width:"100%", height: "100%", top: 0, left: 0, filter: "brightness(60%)", objectFit: "cover"}}
        />
        {
          subtitle && <Typography component="h4" variant={h4}>{subtitle}</Typography>
        }
        <ButtonBase sx={{position: "absolute", bottom: "10px", left: "49%", zIndex: 100}}>
            <ChevronDownIcon width={50} height={50} color="#FFFFFF"/>
        </ButtonBase>
    </Container>
  )
}

export default Hero