import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Card, Container, Grid, Typography } from '@mui/material';

import styles from './LocalCard.module.css';
import { useWindowWidth } from '@/hooks/useWindowWidth';

const {card__container, showcard, link} = styles;

const LocalCard = ({data, selectedTheme}) => {

  const [showButton, setShowButton] = useState(false);

  const [width, setWidth] = useWindowWidth();

  return (
    <Grid item mobile={12} tablet={6} laptop={4}>
      <Card variant="cardBackground" onMouseEnter={() => setShowButton(true)} onMouseLeave={()=>setShowButton(false)} className={`${card__container} ${showButton ? `${showcard}` : ''}`} sx={{borderRadius: "12px", transition: "all .6s ease-in-out", margin: "0px auto", position: "relative"}}>
        <div style={{ width:"100%", height: "300px", position: "relative"}}>
          <Image src={data.image} fill style={{width:"100%", height: "100%", top: 0, left: 0, objectFit: "contain"}} alt="local" />
        </div>
        <Typography variant="h5" component='h5' sx={{marginTop: "24px"}}>{data?.name}</Typography>
        <Typography sx={{
          marginTop: "8px",
          fontFamily: '"Lato", sans-serif',
          fontSize: {mobile: 16, mobile2: 17},
          fontweight: {mobile: 400, mobile2: 500},
          lineHeight: {mobile: "19px", mobile2: "25px"},
        }}>
          {data.description}
        </Typography>
        <Link href={data.href} className={link}>
          <Typography variant='linkCard'>Cómo llegar</Typography> <ChevronRightIcon color={selectedTheme === "light" ? '#D0A554' : '#F1DA9E'} width={20} height={20} />
        </Link>
      </Card>
    </Grid>
  )
}

export default LocalCard