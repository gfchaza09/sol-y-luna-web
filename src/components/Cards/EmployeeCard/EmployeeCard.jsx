import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, Typography } from '@mui/material';

import styles from './EmployeeCard.module.css';

const {card__container} = styles;

const EmployeeCard = () => {

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
    <Card variant="cardBackground" className={card__container}>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/9/90/El_empleado_del_mes.jpg" width={width < 375 ? 275 : 340} height={width < 375 ? 275: 340} alt="employee"/>
      <Typography variant='h3' className="h3">Dahiana Meza</Typography>
      <h4><Typography variant='subtitleCard' className='h4'>Chef - Sucursal Centro</Typography></h4>
      <Typography className={width < 375 ? 'caption1' : 'body'}>Dahiana es una talentosa y experimentada  chef, es conocida por su creatividad y pasión por la comida. Con cuatro años de experiencia como chef profesional, su conocimiento de los ingredientes y la cocina es profundo y multifacético. El trabajo de Dahiana se caracteriza por su frescura y originalidad. Nos enorgullece que se parte de la familia Sol y Luna.</Typography>
    </Card>
  )
}

export default EmployeeCard