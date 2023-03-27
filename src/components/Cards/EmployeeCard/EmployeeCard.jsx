import Image from 'next/image';
import { Card, Container, Typography } from '@mui/material';

import styles from './EmployeeCard.module.css';
import { useWindowWidth } from '@/hooks/useWindowWidth';

const {card__container} = styles;

const EmployeeCard = ({data}) => {

  const [width, setWidth] = useWindowWidth();

  return (
    <Card variant="cardBackground" className={card__container} sx={{borderRadius: "12px"}}>
      <Container sx={{padding: "0px", position: "relative", height: "270px", overflow: "hidden", borderRadius: "6px"}}>
        <Image src={data.img} fill sizes="100vh" alt="employee" style={{ width: "100%", height: "100%",objectFit: "cover"}}/>
      </Container>
      <Typography component="h3" variant='h3' className="h3" sx={{marginTop: "16px"}}>{data.nombre}</Typography>
      <Typography component="h4" variant='subtitleCard' className='h4' sx={{marginTop: "8px", textAlign: "center"}}>{data.cargo} - {data.sucursal}</Typography>
      <Typography sx={{marginTop: "8px", fontWeight: {moible: 400, tablet: 500}, fontSize: {mobile: 14, tablet: 16}, lineHeight: {mobile: "20px",tablet: "22px"}}}>{data.descripcion}</Typography>
    </Card>
  )
}

export default EmployeeCard