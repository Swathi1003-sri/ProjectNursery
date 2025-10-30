import React, { useContext } from 'react'
import { ContextFile } from '../../Context/ContextProvider'

const Footer = () => {
  const {fbFun,twitterFun,instFun,utubeFun} = useContext(ContextFile)
  return (
    <>
    <div className="container-fluid mt-5" id='Footerbg'>
      <div className="conatiner">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 className='text-center mt-5'>The Green World</h5>
            <p className='text-center'>Bringing green to every home.
              Small-batch, sustainably grown plants and expert care advice</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 " id='conabout'>
            <h5 className='text-center mt-5'>About Us</h5>
            <div className="listdiv d-flex justify-content-center">
              <ul>
              <li><a href="/indoor" className='text-decoration-none text-light '>Indoor plants</a></li>
              <li><a href="/outdoor" className='text-decoration-none text-light '>Outdoor plants</a></li>
              <li><a href="/seeds" className='text-decoration-none text-light '>Seed</a></li>
              <li><a href="/soilandfer" className='text-decoration-none text-light '>Soil and Fertilizer</a></li>
              <li><a href="/accessories" className='text-decoration-none text-light '>Accessories</a></li>
            </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 className='text-center mt-5'>Contact Us</h5>
            <p className='text-center'><i className="fa-solid fa-phone me-2"></i> +91-9876543210</p>
            <p className='text-center'><i className="fa-solid fa-envelope me-2"></i> support@greenworld.com</p>
            <p className='text-center'><i className="fa-solid fa-location-dot me-2"></i> 143 Green Lane, Plant City, India</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 className='text-center mt-5'>Follow Us</h5>
            <div className="socialmedia d-flex justify-content-center pt-5  ">
              <i className="fa-brands fa-facebook pe-5" onClick={fbFun}></i>
              <i className="fa-brands fa-twitter pe-5" onClick={twitterFun}></i>
              <i className="fa-brands fa-instagram pe-5" onClick={instFun}></i>
              <i className="fa-brands fa-youtube pe-5" onClick={utubeFun}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer