import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid'
import { Card, Typography } from '@mui/material';

import styles from './ReviewCard.module.css';
import { useWindowWidth } from '@/hooks/useWindowWidth';

const {card__container, review__container, data__container, personaldata__container, date__container, social__network, rating__container, rating} = styles;

const ReviewCard = () => {

  const [width, setWidth] = useWindowWidth()

  return (
    <Card variant='cardBackground' className={card__container}>
      <div className={review__container}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/9/90/El_empleado_del_mes.jpg" width={72} height={72} alt="review"/>
        <div className={data__container}>
          <Typography variant={width < 640 ? 'body2' : 'body1'}>El lugar agradable, buena música y la atención muy amable. La comida está rica también y bien servida, también el precio está accesible. Variedad! En familia o pareja está bonito.</Typography>
          <div className={personaldata__container}>
            <div className={date__container}>
              <Typography className='button'>Loki Bright</Typography>
              <Typography className='card-date'>31 de julio de 2022</Typography>
            </div>
          </div>
        </div>
        <div className={social__network}>
          <Image src="/assets/social-networks/tripadvisor-review.png" alt="social-network" width={28} height={28}/>
        </div>
        <div className={rating__container}>
          <Typography className={'button '+rating}>4.5 <StarIcon color='#F5C537' width={22} height={22}/></Typography>
        </div>
      </div>
    </Card>
  )
}

export default ReviewCard