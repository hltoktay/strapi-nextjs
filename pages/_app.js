import '../styles/globals.css'
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps, navigation }) {

  console.log(navigation)

  return (
    <>
    <DefaultSeo {...SEO} />
      <Header navigation={navigation} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navigation = await res.json()


  return { navigation }
}

export default MyApp
