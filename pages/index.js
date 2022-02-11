import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>밀키트 전문점 우리집놀러와</title>
        <meta property="og:image" content="/ogimg.png"/>
        <meta property="og:description" content="밀키트전문점 우리집놀러와 창업안내 1566-1635"/>
        <meta name="description" content="밀키트전문점 우리집놀러와 창업안내 1566-1635"/>
        <meta name="keywords" content="밀키트,밀키트창업,성공창업,소자본창업,고수익창업,코로나창업"/>
        <meta name="Robots" content="INDEX, FOLLOW"/>
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon"/>
        <link rel="shortcut icon" href="/favicon.ico?v=2" type="image/x-icon"/>
      </Head>
      
      <h1 className={styles.title}>this is Hompage</h1> 
      
    </div>
  )
}
