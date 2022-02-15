import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  const [ open, setOpen ] = useState(false);
  
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <Image src="/img/logo/logo_fix_01.png" width={230} height={43} alt='밀키트 전문점 우리집 놀러와 LOGO'></Image>
        </a>
      </Link>
      <div className={styles.navigation} id='navigation'>
        <ul className={styles.list}>
          <li className={styles.listitem}>
            <Link href="/#brand_section">
              <a>
                브랜드
                <span></span>
              </a>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link href="/#menu_section">
              <a>
                MENU
                <span></span>
              </a>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link href="/#serviceinfo_section">
              <a>
                광고·기술
                <span></span>
              </a>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link href="/#storeinfo_section">
              <a>
                체험매장
                <span></span>
              </a>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link href="/#stroy_section">
              <a>
                STORY
                <span></span>
              </a>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link href="/#foundedcost_section">
              <a>
                창업비
                <span></span>
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.question_link_wrap}>
         <Link href="/#affiliateinquiry_section">
          고객센터
         </Link>
        </div>
        <div className={styles.hamburger} onClick={(() => setOpen(!open))}>
          <div className={styles.line}/>
          <div className={styles.line}/>
          <div className={styles.line}/>
        </div>
      </div>
      
      <ul onClick={ ()=> setOpen(false) } className={styles.menu} style={{right: open ? "0px": "-50vw"}}>
        <li className={styles.menuItem}>
          <Link href="/#brand_section">
            브랜드
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/#menu_section">
            MENU
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/#serviceinfo_section">
            광고·기술
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/#storeinfo_section">
            체험매장
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/#stroy_section">
            STORY
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/#foundedcost_section">
            창업비
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/#affiliateinquiry_section">
            고객센터
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar