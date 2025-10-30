import React from 'react'
import { Swiper , SwiperSlide} from 'swiper/react'
import { Pagination,Navigation,Autoplay} from 'swiper/modules'
import { allDatas } from '../../assets/asset'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const SwiperBlog = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="blogtittle mt-5">
        <h1 className='text-center'>Our Blogs</h1>
      </div>
      <div className="conatiner">
        <div className="row" data-aos="zoom-in-down" data-aos-duration='2000'>
          <Swiper slidesPerView ={3} spaceBetween={20} pagination={false}modules={[Pagination, Navigation, Autoplay]} navigation={false} autoplay={{delay:2000}} loop={true} className='blogswiper'>
            <div className="blogcol col-lg-3 col-md-6 col-sm-12">
              {
                allDatas.filter(a => a.category === "LogCard").map((value, index) => (
                   <SwiperSlide className='blogslide' key={index}>
                     <div className="firstdiv mt-4">
                      <div className="sildeimgdiv">
                        <img src={value.img} height={60} width={60}  alt=""/>
                      </div>
                       <div className="card-body">
                        <div className="swipcardcon text-center">
                          <div className="swipbrand">
                              <h6>{value.tittle}</h6>
                          </div>
                            <p>{value.desc}</p>
                        </div>
                       </div>
                     </div>
                   </SwiperSlide>
                ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
    </>
  )
}

export default SwiperBlog
