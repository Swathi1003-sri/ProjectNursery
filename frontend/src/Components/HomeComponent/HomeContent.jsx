import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import { ImageDatas } from '../../assets/asset'

const HomeContent = () => {
  return (
    <>
        <div className="container-fluid mt-4" id='Contentfrt'>
            <img src={ImageDatas.Homebackimg} className='img-fluid w-100'  alt="" />
            <div className="container" >
                <div className="row">
                    <div className="col-lg-6  d-none d-lg-block">
                        <div className="sildeimg1" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000">
                            <img src={ImageDatas.Potaos} className='Image1' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="sildeimg2" data-aos="fade-left" data-aos-delay="2000" data-aos-duration="1000">
                            <img src={ImageDatas.Leafaos} className='Image2' alt="" />
                        </div>
                    </div>
                </div>
                <div className="textcontent d-flex flex-column align-items-center justify-content-center text-center p-3" data-aos="fade-right" data-aos-delay="3000" data-aos-duration="2000">
                        <h4 className='fw-bold'>Welcome To The Green World!</h4>
                        <p>Our nursery plants bring fresh greenery, beauty, and life to any space.</p>
                        <div className="btnsection p-3">
                            <a href="" className='btn btn-dark me-2'>Read More</a>
                            <a href="/contact" className='btn btn-dark'>Contact Us</a>
                        </div>
                </div>
            </div>
            <div className="row" id='imgrow2'>
                <div className="col-lg-6 d-none d-lg-block" id='rowcol2'>
                    <div className="sildeimg3" data-aos="fade-right" data-aos-delay="2000" data-aos-duration="1000">
                        <img src={ImageDatas.Toolaos} className='Image3' alt="" />
                    </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                    <div className="sildeimg4" data-aos="fade-up" data-aos-duration="1000">
                        <img src={ImageDatas.Menaos} className='Image4 pb-4' alt="" />
                    </div>
                </div>
            </div>
        </div>  
    </>
  )

}

export default HomeContent