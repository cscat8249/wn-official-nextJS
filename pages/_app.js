import Layout from '../components/Layout'
import '../styles/reset.css'
import '../styles/globals.css'
import Script from "next/script";
import Head from 'next/head';



function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
