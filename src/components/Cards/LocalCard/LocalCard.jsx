import { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Card, Typography } from '@mui/material';

import styles from './LocalCard.module.css';

const {card__container, showcard, link} = styles;

const LocalCard = () => {

  const [showButton, setShowButton] = useState(false);

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
    <Card variant="cardBackground" onMouseEnter={() => setShowButton(true)} onMouseLeave={()=>setShowButton(false)} className={`${card__container} ${showButton ? `${showcard}` : ''}`}>
      <Image src="https://images.unsplash.com/photo-1525402456151-11e51fa1b2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzM2NDd8MHwxfHNlYXJjaHw1fHxnYW1lcyUyMGtpZHMlMjBoYWxsfGVufDB8fHx8MTY3NzQ3Mzk5MA&ixlib=rb-4.0.3&q=80&w=1080" width={width < 375 ? 222 : 340} height={width < 375 ? 110 : 200} alt="local" />
      <Typography className={width < 375 ? 'body2' :'body'}>Ubicada en el corazón de San Cristóbal de las Casas, esta sucursal es la más frecuentada por nuestros clientes turistas.</Typography>
      {
        showButton && 
        <Link href="/location/local1" className={link}>
          <Typography variant='linkCard'>Cómo llegar</Typography> <ChevronRightIcon color={'#D0A554'} width={20} height={20} />
        </Link>
      }
    </Card>
  )
}

export default LocalCard