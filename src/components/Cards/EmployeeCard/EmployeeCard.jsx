import Image from 'next/image';
import React from 'react'

import styles from './EmployeeCard.module.css';

const {card__container} = styles;

const EmployeeCard = () => {
  return (
    <div className={card__container}>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/9/90/El_empleado_del_mes.jpg" width={340} height={340} alt="employee"/>
      <h2>Dahiana Meza</h2>
      <h3>Chef - Sucursal Centro</h3>
      <p>Dahiana es una talentosa y experimentada  chef, es conocida por su creatividad y pasión por la comida. Con cuatro años de experiencia como chef profesional, su conocimiento de los ingredientes y la cocina es profundo y multifacético. El trabajo de Dahiana se caracteriza por su frescura y originalidad. Nos enorgullece que se parte de la familia Sol y Luna.</p>
    </div>
  )
}

export default EmployeeCard