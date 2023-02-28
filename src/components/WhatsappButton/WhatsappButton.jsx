import Image from 'next/image';
import React from 'react'

import styles from './WhatsappButton.module.css';

const {btn} = styles;

const WhatsappButton = () => {
  return (
    <button className={btn}>
        <Image src="/assets/social-networks/whatsapp_logo.svg" width={32} height={32} alt="whatsapp"/>
    </button>
  )
}

export default WhatsappButton