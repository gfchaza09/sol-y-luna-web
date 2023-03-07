import Image from 'next/image';
import { Card, Typography } from '@mui/material';

import styles from './ServiceCard.module.css';
import { useWindowWidth } from '@/hooks/useWindowWidth';

const {card__container, text__container} = styles;

const ServiceCard = () => {

  const [width, setWidth] = useWindowWidth()

  return (
    <Card variant="cardBackground" className={card__container}>
      <div className={text__container}>
        <Typography variant={width < 375 ? 'h5' : 'h3'} className={width < 375 ? 'h5' : 'h3'}>ÁREA DE JUEGOS</Typography>
        <Typography className={width < 375 ? 'body2' : 'body'}>Tenemos un salón apto para los más pequeños.</Typography>
        <Typography className={width < 375 ? 'body2' : 'body'}>El área cuenta con varias actividades y juegos de entretenimiento para que los niños se diviertan mientras aguardan por su comida.</Typography>
        {
          width > 375 && <Typography variant='footnoteCard'>Disponible en sucursal: Alcanfores</Typography>
        }
      </div>
      <Image src="https://images.unsplash.com/photo-1525402456151-11e51fa1b2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHw1fHxnYW1lcyUyMGtpZHMlMjBoYWxsfGVufDB8fHx8MTY3NzQ3Mzk5MA&ixlib=rb-4.0.3&q=80&w=1080" width={width < 375 ? 288: 448} height={width < 375 ? 182 :284} alt="service"/>
      {
        width < 375 && <Typography className='caption2'>Disponible en sucursal: Alcanfores</Typography>
      }
    </Card>
  )
}

export default ServiceCard