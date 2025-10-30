import React, { useContext } from 'react'
import Navbar from '../../Components/CommonComponent/Navbar'
import Footer from '../../Components/CommonComponent/Footer'
import { ContextFile } from '../../Context/ContextProvider'

const InSucculentandCact = () => {
    const{dataProduct,navigate } = useContext(ContextFile)
    const filteredProducts = dataProduct.filter(
         a =>a.category === "Indoor" && a.type === "Succulent & Cacti"
    )
  return (
    <>
    <Navbar/>


    {/* =============================================== content ===================================== */}
    <div className="container">
        <div className="typetitle">
                <h3 className='text-center p-5'>Indoor Succulent & Cacti</h3>
            </div>
        <div className="row">
            { 
            
        filteredProducts.length === 0
        ?
        (
          <h3 className='text-center text-danger pt-5'>Product Loading..</h3>
        )
        :
        filteredProducts.map((value,index)=>(
                    <div className="col-lg-3 col-md-6 col-sm-12"  id='typecol' key={index}>
                        <div className="card mt-4" height={500} width={500} id='typecard' onClick={()=>navigate(`/product/${value._id}`)}>
                            <img src={value.img} id='typeimg' height={200} alt="" />
                            <div className="icondiv" id='typeicon'>
                                <i className="fa-solid fa-magnifying-glass" id='typeiconbg'></i>
                                    {/* <i className="fa-regular fa-heart" id='typeiconbg'></i> */}
                                <i className="fa-solid fa-cart-plus" id='typeiconbg'></i>
                                </div>
                            <div className="card-body">
                                <h6><strong>{value.name}</strong></h6>
                                <h5>{value.type}</h5>
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

export default InSucculentandCact