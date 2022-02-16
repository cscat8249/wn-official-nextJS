import Image from 'next/image'
import React from 'react'
import styles from '../styles/brand.module.scss'

const Brand = () => {
  return (
    <div className={styles.visual_section}>
        <div className={styles.brand_wrap_info}>
          <Image className={styles.img} src="/img/content/brand_01_01.png" width={1920} height={650} alt='우리집 놀러와 브랜드'></Image>
        </div>
        <div className={styles.brand_wrap_3go}>
          <Image className={styles.img} src="/img/content/brand_02_02.png" width={1920} height={650} alt='우리집 놀러와 3GO'></Image>
        </div>
    </div>
  )
}
export default Brand