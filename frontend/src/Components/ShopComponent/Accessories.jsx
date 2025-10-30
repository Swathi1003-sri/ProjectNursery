import React, { useContext } from 'react'
import { ContextFile } from '../../Context/ContextProvider'

const Accessories = () => {
    
    const {dataProduct,navigate} = useContext(ContextFile)
  return (
    <>
        <div className="container" id='productcontainer'>
            <div className="pagetittle mt-5">
                <h3 className='text-center'>Accessories</h3>
            </div>
            <div className="row" id='productrow'>    
                <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="accordion-item mt-4">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Types
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                   <div className="accordion-body">
                                        <div className="tableanchor d-flex flex-column">
                                        <a href="/tool">Tool</a>
                                        <hr />
                                        <a href="/wateringacc">Watering Accessories</a>
                                        <hr />
                                        <a href="/care&support">Plants Care & Support</a>
                                        <hr />
                                        <a href="/safetycom">Garden Safety & Comfort</a>
                                        <hr />
                                        <a href="/container">Container & Storage</a>
                                       </div>
                                    </div>
                                </div>
                            </div>
                </div>
            
                {
                   dataProduct.filter(a =>a.category === "Accessories").map((value,index)=>{
                        return(
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
                                        <button className='btn btn-success w-100'>Add to Cart</button>
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

export default Accessories