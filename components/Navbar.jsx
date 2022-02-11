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
            <Link href="/">
              <a>
                브랜드s
                <span></span>
              </a>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link href="/">
              <a>
                MENU
                <span></span>
              </a>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link href="/">
              <a>
                광고/기술
                <span></span>
              </a>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link href="/">
              <a>
                매장 안내
                <span></span>
              </a>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link href="/">
              <a>
                STORY
                <span></span>
              </a>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link href="/">
              <a>
                창업비용
                <span></span>
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.question_link_wrap}>
         <Link href="/">
          가맹문의
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
          <Link href="/">
            브랜드
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">
            MENU
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">
            광고/기술
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">
            매장 안내
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">
            STORY
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">
            창업비용
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">
            가맹문의
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar