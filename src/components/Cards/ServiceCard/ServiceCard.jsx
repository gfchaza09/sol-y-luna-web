import Image from 'next/image';
import { Card, Typography } from '@mui/material';

import styles from './ServiceCard.module.css';
import { useWindowWidth } from '@/hooks/useWindowWidth';

const {card__container, text__container, img__container} = styles;

const ServiceCard = () => {

  const [width, setWidth] = useWindowWidth()

  return (
    <Card variant="cardBackground" className={card__container} sx={{borderRadius: "12px"}}>
      <div className={text__container}>
        <Typography variant={width < 375 ? 'h5' : 'h3'} className={width < 375 ? 'h5' : 'h3'}>ÁREA DE JUEGOS</Typography>
        <Typography className={width < 375 ? 'body2' : 'body'}>Tenemos un salón apto para los más pequeños.</Typography>
        <Typography className={width < 375 ? 'body2' : 'body'}>El área cuenta con varias actividades y juegos de entretenimiento para que los niños se diviertan mientras aguardan por su comida.</Typography>
        {
          width > 375 && <Typography variant='footnoteCard'>Disponible en sucursal: Alcanfores</Typography>
        }
      </div>
      <div className={img__container}>
        <Image src="/assets/images/area-de-juegos-min.jpg" fill sizes="100vh" style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        top: "0",
                        left: "0",
                      }} alt="service"/>
      </div>
      {
        width < 375 && <Typography className='caption2'>Disponible en sucursal: Alcanfores</Typography>
      }
    </Card>
  )
}

export default ServiceCard