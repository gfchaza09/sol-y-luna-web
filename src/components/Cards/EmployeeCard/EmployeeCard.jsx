import Image from 'next/image';
import Typography from "@mui/material/Typography";

import styles from './EmployeeCard.module.css';

const {card__container} = styles;

const EmployeeCard = () => {
  return (
    <div className={card__container}>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/9/90/El_empleado_del_mes.jpg" width={340} height={340} alt="employee"/>
      <Typography className="h3">Dahiana Meza</Typography>
      <Typography className='h4'>Chef - Sucursal Centro</Typography>
      <Typography className='body'>Dahiana es una talentosa y experimentada  chef, es conocida por su creatividad y pasión por la comida. Con cuatro años de experiencia como chef profesional, su conocimiento de los ingredientes y la cocina es profundo y multifacético. El trabajo de Dahiana se caracteriza por su frescura y originalidad. Nos enorgullece que se parte de la familia Sol y Luna.</Typography>
    </div>
  )
}

export default EmployeeCard