import Image from 'next/image';
import React from 'react'

import styles from './WhatsappButton.module.css';

const {btn, btn__mobile} = styles;

const WhatsappButton = ({mobile, handleOpen}) => {
  return (
    <button className={mobile ? btn__mobile : btn} onClick={()=>{
      handleOpen()
      }}>
        <Image src="/assets/social-networks/whatsapp_logo.svg" width={32} height={32} alt="whatsapp"/>
    </button>
  )
}

export default WhatsappButton