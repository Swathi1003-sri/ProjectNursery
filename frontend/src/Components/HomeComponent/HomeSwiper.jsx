import React, { useContext } from 'react'
import { Swiper , SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { Pagination,Navigation,Autoplay} from 'swiper/modules'
import { ImageDatas } from '../../assets/asset'
import { ContextFile } from '../../Context/ContextProvider'

const HomeSwiper = () => {
  const {hoverImg,mouseEnter,mouseLeave} = useContext(ContextFile)
  return (
    <>
      <div className="container mt-4 " id='swipercont'>
        <Swiper slidesPerView ={1} spaceBetween={3} pagination={{clickable:true}}modules={[Pagination, Navigation, Autoplay]} navigation={false} autoplay={hoverImg ? false : {delay:2000}} loop={true} className="swiperhome">
          <SwiperSlide className="slidetag">
            <img src={ImageDatas.Swiperimg1}  className='img-fluid w-100' style={{height:"500px"}} alt="" />
            <div className="swipertextcont">
              <h3 className='Swipertittle'><strong>Nature Near,Fresh and Clear <br />Leafy Friends for Every Corner</strong></h3>
              <div className="buttontag">
                <a href="/indoor" className='btn btn-dark pt-2' >SHOP NOW</a>
              </div>
           </div>
          </SwiperSlide>
           <SwiperSlide className="slidetag">
            <img src={ImageDatas.Swiperimg2} className='img-fluid w-100' style={{height:"500px"}} alt="" />
            <div className="swipertextcont">
              <h3 className='Swipertittle'><strong>Where Every Leaf Tells a Story<br />Nature’s Beauty, Right at Your Doorstep</strong></h3>
              <div className="buttontag">
                <a href="/outdoor" className='btn btn-dark pt-2' >SHOP NOW</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slidetag">
            <img src={ImageDatas.Swiperimg3} className='img-fluid w-100' style={{height:"500px"}} alt="" />
            <div className="swipertextcont">
              <h3 className='Swipertittle'><strong>Strong Roots, Strong Plants<br />Fertilizers That Boost Every Leaf</strong></h3>
              <div className="buttontag">
                <a href="/soilandfer" className='btn btn-dark pt-2' >SHOP NOW</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slidetag">
            <img src={ImageDatas.Swiperimg4} className='img-fluid w-100' style={{height:"500px"}} alt="" />
            <div className="swipertextcont">
              <h3 className='Swipertittle'><strong>Smart Tools for Happy Gardening <br />“Little Things, Big Difference</strong></h3>
              <div className="buttontag">
                <a href="/accessories" className='btn btn-dark pt-2' >SHOP NOW</a>
              </div>
            </div>
          </SwiperSlide> 
        </Swiper>
      </div>
    </>
  )
}

export default HomeSwiper
