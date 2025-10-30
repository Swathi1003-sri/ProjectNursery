import React from 'react'
import { allDatas, ImageDatas } from '../../assets/asset'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const OurServices = () => {
  return (
    <>
        <div className="container" id='oursercontainer'>
          <div className="servicetittle mt-5 text-center">
            <h3>Our Service</h3>
          </div>
          <div className="row mt-2" >
            {
              allDatas.filter(a=>a.category ==="Ourservicelist").map((value,index)=>{
                return(
                  <div className="col-lg-4" key={index}>
                    <div className="card mt-4 " data-aos="fade-down-left" data-aos-offset="500" data-aos-duration="2000" >
                      <div className="serviceimgdiv ">
                      <img src={value.img} alt="" />
                    </div>
                    <div className="card-body">
                      <div className="servicecont text-center">
                        <div className="servicebrand ">
                          <h5>{value.tittle}</h5>
                        </div>
                      <p>{value.desc}</p>
                    </div>
                    </div>
                    </div>
                    
                  </div>
                )
              })
            }
          </div>
        </div>
    </>
  )
}

export default OurServices