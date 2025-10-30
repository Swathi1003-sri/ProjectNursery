import React from 'react'
import { ImageDatas } from '../../assets/asset'

const Shopnow = () => {
  return (
    <div className="container mt-5">
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="shopnowimgdiv">
                    <img src={ImageDatas.Img21} alt="" />
                    <div className="shopnowcont">
                        <p className='text-light'>Eco Friendly Natural Manure for Strong Growth</p>
                        <div className="shopnowbtn">
                            <a href="/soilandfer" className='btn btn-dark pt-2' >SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="shopnowimgdiv">
                    <img src={ImageDatas.Img22} alt="" />
                    <div className="shopnowcont">
                        <p className='text-light'>Essential gardening tools for nursery plants</p>
                        <div className="shopnowbtn">
                            <a href="/accessories" className='btn btn-dark pt-2'>SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="shopnowimgdiv">
                    <img src={ImageDatas.Img23} alt="" />
                    <div className="shopnowcont">
                        <p className='text-light'>Money Plant for Prosperity and Fresh Environment</p>
                        <div className="shopnowbtn">
                           <a href="/indoor" className='btn btn-dark pt-2' >SHOP NOW</a>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="shopnowimgdiv">
                    <img src={ImageDatas.Img24} alt="" />
                    <div className="shopnowcont">
                        <p className='text-light'>Chrysanthemum Plant Adds Seasonal Garden Beauty</p>
                        <div className="shopnowbtn">
                            <a href="/outdoor" className='btn btn-dark pt-2' >SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shopnow