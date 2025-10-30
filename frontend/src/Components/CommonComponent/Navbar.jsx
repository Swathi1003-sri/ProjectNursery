import React, { useContext } from 'react'
import { ContextFile } from '../../Context/ContextProvider'
import { ImageDatas } from '../../assets/asset'

const Navbar = () => {

  const { LogOutFun , setSearchInt , SearchFun , searchFilterData , navigate , fbFun , twitterFun ,instFun , utubeFun ,cart,RemoveCartFun ,grandTotal,totalItems} = useContext(ContextFile)

  return (
    <>
    <div className="container-fluid pb-1" id='firstnav'>
      <div className="container pt-2">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12  ">
            <div className="socialmedia">
              <i className="fa-brands fa-facebook pe-5" id='fb' onClick={fbFun}></i>
              <i className="fa-brands fa-twitter pe-5" id='twi' onClick={twitterFun}></i>
              <i className="fa-brands fa-instagram pe-5" id='ins' onClick={instFun}></i>
              <i className="fa-brands fa-youtube pe-5" id='ut' onClick={utubeFun}></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 ">
            <div className="marqueediv justify-content-center " >
            <marquee behavior="scroll" direction="" id='marqueetag' >
              <div className="marqueecont">
                <p className='text-dark'>
                  <strong>
                <span className='red'>50% OFFER </span>
                </strong>
              🌵 Indoor Plants 
              🌿 Outdoor Plants 
              🌸 flower Plants 
              🌱 Seeds 
              🌴 Areca Palm 
              🌼 Peace Lily 
              🍀 Jade Plant
              
              </p>
              </div>
            </marquee>
          </div> 
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 ">
            <div className="Account pt-1 d-flex align-items-center justify-content-end">
                <i className="fa-regular fa-user pe-2" id="accountDropdown" >
                  <ul className='dropdown-menu'aria-labelledby="accountDropdown" >
                    <li>
                      <a href="/login">Login</a>
                    </li>
                    <hr />
                    <li>
                      <a href="/register">Create Account</a>
                    </li>
                </ul>
              </i>
              <i className="fa-solid fa-power-off text-danger" id='lout' onClick={LogOutFun}></i>
            </div>
          </div>
        </div>
    </div>
    </div>
    {/* <hr /> */}
      <div className="container-fluid sticky-top" >
        <nav className="navbar navbar-expand-lg fixed-top navbar-light ">
          <div className="container">
            <a className="navbar-brand text-light" href="#">
              <img src={ImageDatas.Logoimg}  width="30" height="26" className="d-inline-block align-text-top pe-1" alt="" />
              The Green World</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="anchortags  ms-auto">
                <a href="/home" className='text-light'>HOME</a>
                <div className="dropdiv">
                  <a href="" className='text-light' id="accountDropdown">SHOP</a>
                  <ul className='dropdown-menu'aria-labelledby="accountDropdown" >
                    <li>
                      <a href="/indoor">Indoor Plants</a>
                    </li>
                    <li>
                      <a href="/outdoor">Outdoor plants</a>
                    </li>
                    <li>
                      <a href="/seeds">Seeds</a>
                    </li>
                    <li>
                      <a href="/soilandfer">Soil and fertilizers</a>
                    </li>
                    <li>
                      <a href="/accessories">Accessories</a>
                    </li>
                </ul>
                </div>
                <a href="/about" className='text-light'>ABOUT</a>
                <div className="dropdiv">
                  <a href="faqs" className='text-light' id="accountDropdown">PAGES</a>
                  <ul className='dropdown-menu'aria-labelledby="accountDropdown" >
                    <li>
                      <a href="/faqs" className='text-warning'>FAQ'S</a>
                    </li>
                    <li>
                      <a href="/contact" className='text-warning'>CONTACT US</a>
                    </li>
                </ul>
                </div>
              </div>
              <div className="icon d-flex ms-auto gap-3 align-items-center">
                <i className="fa-solid fa-magnifying-glass" data-bs-toggle="modal" data-bs-target="#searchModal"></i>
                
                <div className="cartdiv position-relative">
                <i className="fa-solid fa-cart-plus"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
                {
                  totalItems > 0 &&(
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                  )
                }
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div> 

{/* ====================================================== SEARCH ICON MODAL =================================== */}
    <div className="modal fade" id="searchModal"  aria-labelledby="searchModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="searchModalLabel">SEARCH HERE...</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input type="text"  className='form-control' placeholder='Search Your Product...' onChange={e=>setSearchInt(e.target.value)} onKeyUp={SearchFun}/>
          <div className="row">
          {
            searchFilterData.length === 0
            ?
            <h3 className='text-center pt-3 text-danger'>No product Found!</h3>
            :
            searchFilterData.map((value,index)=>{
              return( 
                <div className="col-lg-3 pt-5" key={index}>
                  <div className="card" height={500} width={500} onClick={()=>navigate(`/product/${value._id}`)}>
                    <img src={value.img} height={200} alt="" />
                    <div className="card-body">
                      <h5>{value.type}</h5>
                      <h6>{value.name}</h6>
                      <p>{value.desc}</p>
                      <p>{value.price}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }</div>
      </div>
    </div>
  </div>
</div>

{/* ========================================== Cart OFFCAVAS ========================================= */}

<div className="offcanvas offcanvas-end"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">Add To Cart</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
          <table className='table table-responsive table-primary text-center'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Category</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                cart.length === 0 
                ?
                <tr>
                  <td colSpan={6} className='text-center text-danger'><h3>Your cart is Empty!</h3> </td>
                </tr>
                :
                cart.map((value,index)=>{
                  return(
                    <tr className='text-center' key={index}>
                      <td><img src={value.img} height={60} width={60} alt="" /></td>
                      <td>{value.category}</td>
                      <td>{value.type}</td>
                      <td>{value.quantity}</td>
                      <td>{value.price * value.quantity}</td>
                      <td><button className='btn btn-danger' onClick={()=>RemoveCartFun(value)}>Remove</button></td>
                    </tr>
                  )
                })
              }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}><h6 className='text-end text-success'>Total :₹{grandTotal}</h6></td>
            </tr>
          </tfoot>
    </table>
  </div>
</div>
    </>
  )         
}

export default Navbar
