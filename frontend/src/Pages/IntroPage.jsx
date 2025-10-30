import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const IntroPage = () => {
  return (
    <>
       <div className="container-fluid" id='backimage'>
          <div className="container">
              <div className="homecont" data-aos="flip-left" data-aos-duration="2000">
                <p className="subtitle">Plant product grown with love</p>
                <h1 className='tittle'>The Green World</h1>
                <div id='regis'>
                  <a className='btn btn-dark' href="/Register">Go To Register<span className="ms-3">&rarr;</span></a>
                  </div>
                  <p className='pt-3'>Already you have account? <a href="/login">Login</a></p>
              </div>
            </div>
         </div>   
    </>
  )
}

export default IntroPage