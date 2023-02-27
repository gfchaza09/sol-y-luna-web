import { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import Image from 'next/image';

import styles from './ReviewCard.module.css';

const {card__container, review__container, data__container, date__container} = styles;

const ReviewCard = () => {

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
    <div className={card__container}>
      <div className={review__container}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/9/90/El_empleado_del_mes.jpg" width={72} height={72} alt="review"/>
        <Typography className={width < 375 ? 'review-text-mobile' : 'review-text'}>El lugar agradable, buena música y la atención muy amable. La comida está rica también y bien servida, también el precio está accesible. Variedad! En familia o pareja está bonito.</Typography>
      </div>
      <div className={data__container}>
        <Typography className='button'>Loki Bright</Typography>
        <div className={date__container}>
          <Typography className='card-date'>31 de julio de 2022</Typography>
          <Typography className='button'>4.5 estrella</Typography>
        </div>
      </div> 
    </div>
  )
}

export default ReviewCard