import axios from 'axios'
import Link from 'next/link';
import React from 'react'
import styles from '../styles/menu.module.scss'

const Menu_items = ({menuList}) => {
  console.log(menuList);
  return (
    <div className={styles.menu_section}>
      <div className={styles.menu_wrap}>
        <div className={styles.menu_title_wrap}>
          <h1 className={styles.title}>MEAL KIT MENU</h1>
        </div>
        <div className={styles.menu_dep_wrap}>
            <ul className={styles.dep1_ul}>
              <li className={styles.item}>
                  <p>
                    고기
                    <span></span>
                  </p>  
              </li>
              <li className={styles.item}>
                  <p>
                    치킨
                    <span></span>
                  </p>  
              </li>
              <li className={styles.item}>
                  <p>
                    한식
                    <span></span>
                  </p>  
              </li>
              <li className={styles.item}>
                  <p>
                    외쿡
                    <span></span>
                  </p>  
              </li>
              <li className={styles.item}>
                  <p>
                    분식
                    <span></span>
                  </p>  
              </li>
              <li className={styles.item}>
                  <p>
                    디저트
                    <span></span>
                  </p>  
              </li>
            </ul>
        </div>
        {/* <div>
          {menuList.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.link}>
              {menu.menu_nm}
              </Link>
              </li>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Menu_items

