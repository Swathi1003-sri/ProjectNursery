import React from 'react'

const Contactcon = () => {
  return (
    <> 
        <div className="container my-5">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center text-secondary mb-5">
            Have questions about our nursery plants? We’d love to hear from you!
          </p>
          <div className="row">
{/* ======================================Contact Form =============================================*/}
            <div className="col-lg-7 mb-4">
              <div className="card shadow p-4 h-100">
                <h5 className="mb-3">Send Us a Message</h5>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="4" placeholder="Write your message here..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
        

{/*=========================================== Contact Info ================================================*/}
        <div className="col-lg-5 mb-4">
          <div className="card shadow p-4 h-100">
            <h5 className="mb-3">Contact Us</h5>
            <p><i className="fa-solid fa-location-dot text-success me-2"></i>
              143 Green Lane, Plant City, India</p>
            <p><i className="fa-solid fa-phone text-success me-2"></i>
              +91 98765 43210</p>
            <p><i className="fa-solid fa-envelope text-success me-2"></i>
              support@greenworld.com</p>
            <hr />
            <h6>Business Hours</h6>
            <p className="mb-0">Mon – Sat: 9:00 AM – 7:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

{/*============================================ Google Map ======================================= */}
      <div className="row mt-5">
        <div className="col-12">
          <h5 className=" mb-3 text-center"><strong>Find Us Here</strong></h5>
          <div className="map ms-5 ps-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d125412.09923527746!2d78.58256202969078!3d10.801499522882015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1strichy%20nursery%20plants!5e0!3m2!1sen!2sin!4v1759043376313!5m2!1sen!2sin" width={1000} height={450}
              
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
            
    </>
  )
}

export default Contactcon