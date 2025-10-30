import React, { useContext } from 'react'
import Navbar from '../../Components/CommonComponent/Navbar'
import Footer from '../../Components/CommonComponent/Footer'
import { ContextFile } from '../../Context/ContextProvider'

const Tool = () => {
    const {dataProduct,navigate} = useContext(ContextFile)
    const filteredProducts = dataProduct.filter(
        a => a.category === "Accessories" && a.type === "Tool"
    )
  return (
    <>
    <Navbar/>
    
    <div className="container">
        <div className="row">
            {/* =============================================== content ===================================== */}
    { 
        filteredProducts.length === 0 
        ?
        (
            <h3 className='text-center text-danger pt-5'>No Product Found!</h3>
        )
        :
        filteredProducts.map((value,index)=>(
                    <div className="col-lg-3 col-md-6 col-sm-12"  id='productcol' key={index}>
                        <div className="card mt-4" height={500} width={500} id='productcard' onClick={()=>navigate(`/product/${value._id}`)}>
                            <img src={value.img} id='productimg' height={200} alt="" />
                            <div className="icondiv" id='producticon'>
                                <i className="fa-solid fa-magnifying-glass" id='iconbg'></i>
                                    {/* <i className="fa-regular fa-heart" id='iconbg'></i> */}
                                <i className="fa-solid fa-cart-plus" id='iconbg'></i>
                                </div>
                            <div className="card-body">
                                <h5>{value.type}</h5>
                                <h6>{value.name}</h6>
                                <p>{value.desc}</p>
                                <p>{value.price}</p>
                            </div>
                        </div>
                    </div>
                    )
                )
            }
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default Tool