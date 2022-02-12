import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'
import Script from 'next/script'

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
      <Head>
        <script dangerouslySetInnerHTML={{ __html: 
          `document.addEventListener("DOMContentLoaded", function () {
            //스크롤 이벤트
            window.addEventListener('scroll',function(){
              let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY; 
              if( scrollTop <= document.getElementById('brand_section').offsetTop - 100){
                  document.querySelectorAll('#navigation ul li').forEach(li => {
                      li.classList.remove('active');
                  });
              }
              if( scrollTop >= document.getElementById('brand_section').offsetTop - 100){
                  document.querySelectorAll('#navigation ul li').forEach(li => {
                      li.classList.remove('active');
                  });
                  document.querySelector('#navigation ul li:nth-child(1)').classList.add("active");
              }
              if( scrollTop >= document.getElementById('menu_section').offsetTop - 100){
                  document.querySelectorAll('#navigation ul li').forEach(li => {
                      li.classList.remove('active');
                  });
                  document.querySelector('#navigation ul li:nth-child(2)').classList.add('active');
              }
              if( scrollTop >= document.getElementById('serviceinfo_section').offsetTop - 100){
                  document.querySelectorAll('#navigation ul li').forEach(li => {
                      li.classList.remove('active');
                  });
                  document.querySelector('#navigation ul li:nth-child(3)').classList.add('active');
              }
              if( scrollTop >= document.getElementById('storeinfo_section').offsetTop - 100){
                  document.querySelectorAll('#navigation ul li').forEach(li => {
                      li.classList.remove('active');
                  });
                  document.querySelector('#navigation ul li:nth-child(4)').classList.add('active');
              }
              if( scrollTop >= document.getElementById('stroy_section').offsetTop - 100){
                  document.querySelectorAll('#navigation ul li').forEach(li => {
                      li.classList.remove('active');
                  });
                  document.querySelector('#navigation ul li:nth-child(5)').classList.add('active');
              }
              if( scrollTop >= document.getElementById('foundedcost_section').offsetTop - 100){
                  document.querySelectorAll('#navigation ul li').forEach(li => {
                      li.classList.remove('active');
                  });
                  document.querySelector('#navigation ul li:nth-child(6)').classList.add('active');
              }
              if( scrollTop >= document.getElementById('affiliateinquiry_section').offsetTop - 100){
                  document.querySelectorAll('#navigation ul li').forEach(li => {
                      li.classList.remove('active');
                  });
              }
            });
          });` 
        }}>
        </script>
      </Head>
      <section id='visual_section'></section>
      <section id='brand_section'>브랜드</section>
      <section id='menu_section'></section>
      <section id='serviceinfo_section'></section>
      <section id='storeinfo_section'></section>
      <section id='stroy_section'></section>
      <section id='foundedcost_section'></section>
      <section id='affiliateinquiry_section'></section>
      {/* <h1 className={styles.title}>this is Hompage</h1>  */}
      
    </div>
  )
}
