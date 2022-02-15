import Image from 'next/image'
import React from 'react'
import styles from '../styles/foundedcost.module.scss'

const Foundedcost = () => {
  return (
      <div className={styles.foundedcost_section}>
        <div className={styles.cooperation_wrap}>
          <Image src="/img/content/cooperation_01.png" width={1300} height={800} alt="우리집 놀러와 협력업체"/>
        </div>
        <div className={styles.cost_wrap}>
          <Image src="/img/content/cost_01.png" width={1300} height={800} alt="우리집 놀러와 창업비용"/>
        </div>
        <div className={styles.cost_info_wrap}>
          <Image src="/img/content/cost_info_01.png" width={1300} height={900} alt="우리집 놀러와 함께하면 좋은점"/>
        </div>
      </div>
  )
}

export default Foundedcost