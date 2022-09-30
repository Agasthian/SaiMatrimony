import React from 'react'
import {Helmet} from "react-helmet";

import Layout from '../../components/layout/layout'
import LandingSection1 from './section1/landingSection1';
import Section2 from './section2/section2'
import Section3 from './section3/section3'
import Section4 from './section4/section4'


const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>TNEB Matrimony | Home | Sai Matrimony</title>
      </Helmet>
      <LandingSection1/>
      <Section2/>
      <Section3/>
      <Section4/>
     </Layout>
  )
}

export default Home