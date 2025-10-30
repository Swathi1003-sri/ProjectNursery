import React from 'react'
import { ImageDatas } from '../../assets/asset'

const Aboutwel = () => {
  return (
    <>
        <div className="container">
            <div className="abttitle">
                <h4 className='text-center mt-4'>About</h4>
            </div>
            <div className="row mt-3">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                    <div className="abtimgdiv d-flex justify-content-center">
                        <img src={ImageDatas.AbtImg1} height={400} width={300} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                    <div className="abtcontent mt-5">
                        <h5 className='text-center text-success'>Welcome to The Green World Nursery 🌿</h5>
                        <p>At <strong>The Green World</strong>, we believe every plant has the power to bring life, beauty, and freshness into your home and surroundings. Our nursery offers a wide variety of{" "}<em>indoor plants, outdoor plants, flowering plants, herbs, and gardening essentials</em>.</p>
                        <p>Whether you are a beginner gardener or a passionate plant lover, we
          provide <strong> <em>healthy, sustainable, and affordable</em></strong> plants
          along with expert guidance to help you care for them.
        </p>
        <p className="text-success text-center ">
          <strong><em>🌱 Let’s grow a greener tomorrow, together!</em></strong>
        </p>
      </div>
                </div>
            </div>
        </div>

        {/* ================================================== Count ============================= */}
        
    </>
  )
}

export default Aboutwel