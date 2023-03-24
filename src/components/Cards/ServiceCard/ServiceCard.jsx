import Image from 'next/image';
import { Card, Container, Typography } from '@mui/material';

import styles from './ServiceCard.module.css';
import { useWindowWidth } from '@/hooks/useWindowWidth';

const {card__container, img__container} = styles;

const ServiceCard = ({data, disableElement}) => {

  const [width, setWidth] = useWindowWidth()

  return (
    <Card variant={`${!disableElement ? "cardBackground" : "cardHomeBackground"}`} className={card__container} sx={{borderRadius: "12px", padding: {mobile: "30px", tablet: `${disableElement ? "0px 52px 10px 52px" : "52px"}`}}}>
      <Container sx={{padding: "0px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "30px"}}>
        {
          !disableElement && <Typography component="h2" variant={width < 420 ? 'h5' : 'h3'} sx={{textAlign: {mobile: "center", tablet: "left"}}}>{data.servicio.toUpperCase()}</Typography>
        }
        <Container sx={{height: {mobile: `${disableElement? "auto" :"140px"}`, mobile2: "130px", tablet: "auto"},padding: "0px", display: "flex", flexDirection: "column", gap: "20px", marginBottom: "30px"}}>
          <Typography sx={{fontWeight: 400, fontSize: 16, lineHeight: "20px"}}>{data.descripcion1}</Typography>
          {
            data?.descripcion2 && <Typography sx={{fontWeight: 400, fontSize: 16, lineHeight: "20px"}}>{data.descripcion2}</Typography>
          }
        </Container>
        {
          width >= 640 && <Typography variant='footnoteCard'>{data.detalle}</Typography>
        }
      </Container>
      <div className={img__container}>
        <Image src={data.imagen} fill sizes="100vh" style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        top: "0",
                        left: "0",
                      }} alt="servicio"/>
      </div>
      {
        width < 640 && <Typography variant="caption2Card" sx={{marginTop: "36px"}}>{data.detalle}</Typography>
      }
    </Card>
  )
}

export default ServiceCard