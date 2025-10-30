import React from 'react'

import Footer from '../../Components/CommonComponent/Footer'
import HomeSwiper from '../../Components/HomeComponent/HomeSwiper'
import OurServices from '../../Components/HomeComponent/OurServices'
import HomeContent from '../../Components/HomeComponent/HomeContent'
import SwiperBlog from '../../Components/HomeComponent/SwiperBlog'
import Readmore from '../../Components/HomeComponent/Readmore'
import ArrivalSection from '../../Components/HomeComponent/ArrivalSection'
import Navbar from '../../Components/CommonComponent/Navbar'
import Shopnow from '../../Components/HomeComponent/Shopnow'

const Page1 = () => {
  return (
    <>
      <Navbar/>
      <HomeContent/>
      <ArrivalSection/>
      <Shopnow/>
      <OurServices/>
      <HomeSwiper/>
      <Readmore/>
      <SwiperBlog/>
      <Footer/>
    </>
    
    
  )
}

export default Page1