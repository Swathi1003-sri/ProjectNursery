import React, { useContext } from 'react'
import { allDatas } from '../../assets/asset'
import { ContextFile } from '../../Context/ContextProvider'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const ArrivalSection = () => {
    const {navigate } = useContext(ContextFile)
  return (
    <>
        <div className="container" id='productcontainer'>
            <div className="pagetittle mt-5">
                <h3 className='text-center'>Popular Collection</h3>
            </div>
            <div className="row" id='productrow'>
                
                {
                    allDatas.filter(a =>a.category === "arrival").map((value,index)=>{
                        return(
                            <div className="col-lg-3 col-md-6 col-sm-12"  id='productcol' key={index}>
                                <div className="card mt-4" height={500} width={500} id='productcard' onClick={()=>navigate(`/product/${value.id}`)} data-aos="zoom-in" data-aos-offset="100" data-aos-duration="2000">
                                    <img src={value.img} id='productimg' height={200} alt="" />
                                    <div className="icondiv" id='producticon'>
                                            <i className="fa-solid fa-magnifying-glass" data-bs-toggle="modal" data-bs-target="#searchModal" id='iconbg'></i>
                                            <i className="fa-solid fa-cart-plus"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" id='iconbg'></i>
                                        </div>
                                    <div className="card-body">
                                        <h5>{value.name}</h5>
                                        <p>{value.desc}</p>
                                        <p>{value.price}</p>
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

export default ArrivalSection