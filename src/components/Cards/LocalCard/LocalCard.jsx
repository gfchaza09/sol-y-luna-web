import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Card, Typography } from '@mui/material';

import styles from './LocalCard.module.css';
import { useWindowWidth } from '@/hooks/useWindowWidth';

const {card__container, showcard, link} = styles;

const LocalCard = ({data}) => {

  const [showButton, setShowButton] = useState(false);

  const [width, setWidth] = useWindowWidth();

  return (
    <Card variant="cardBackground" onMouseEnter={() => setShowButton(true)} onMouseLeave={()=>setShowButton(false)} className={`${card__container} ${showButton ? `${showcard}` : ''}`}>
      <Image src={data.image} width={width < 375 ? 222 : 340} height={width < 375 ? 110 : 200} alt="local" />
      <Typography variant="h5" component='h5'>{data?.name}</Typography>
      <Typography className={width < 375 ? 'body2' :'body'}>{data.description}</Typography>
      {
        showButton && 
        <Link href={data.href} className={link}>
          <Typography variant='linkCard'>Cómo llegar</Typography> <ChevronRightIcon color={'#D0A554'} width={20} height={20} />
        </Link>
      }
    </Card>
  )
}

export default LocalCard