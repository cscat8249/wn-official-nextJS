import Image from 'next/image'
import React from 'react'
import styles from '../styles/serviceinfo.module.scss'

const serviceinfo = () => {
  return (
    <div className={styles.serviceinfo_section}>
        <div className={styles.advertisement_wrap}>
            <Image src="/img/content/adv_img_01.jpg" width={1920} height={1216} alt="우리집 놀러와 광고"/>
        </div>
        <div className={styles.technology_wrap}>
            <Image src="/img/content/technology_img_01.jpg" width={1920} height={1330} alt="우리집 놀러와 기술"/>
        </div>
    </div>
  )
}

export default serviceinfo