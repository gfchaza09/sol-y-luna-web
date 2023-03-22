import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid'
import { Card, Typography } from '@mui/material';

import styles from './ReviewCard.module.css';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import Link from 'next/link';

const {card__container, review__container, data__container, personaldata__container, date__container, social__network, rating__container, rating} = styles;

const ReviewCard = ({data}) => {

  const [width, setWidth] = useWindowWidth()

  return (
    <Link href={data.socialLink} target="_blank">
      <Card variant='cardBackground' className={card__container} sx={{borderRadius: "12px"}}>
        <div className={review__container}>
          <Image src={data.avatar} width={72} height={72} alt="review"/>
          <div className={data__container}>
            <Typography variant={width < 640 ? 'body2' : 'body1'}>{data.opinion}</Typography>
            <div className={personaldata__container}>
              <div className={date__container}>
                <Typography className='button'>{data.nombre}</Typography>
                <Typography className='card-date'>{data.fecha}</Typography>
              </div>
            </div>
          </div>
          <div className={social__network}>
            <Image src={data.social} alt="social-network" width={28} height={28}/>
          </div>
          <div className={rating__container}>
            <Typography className={'button '+rating}>{data.rating} <StarIcon color='#F5C537' width={22} height={22}/></Typography>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default ReviewCard