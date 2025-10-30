import React, { useContext } from 'react'
import { ContextFile } from '../../Context/ContextProvider'
import { useParams } from 'react-router-dom'
import { allDatas } from '../../assets/asset'

const ArrivalDyn = () => {
    const {Addtocartarrival,count,RemoveFun,AddFun} = useContext(ContextFile)
    const {id } = useParams()
    const selectArrivalProduct = allDatas.find(a => a.id === Number(id))  
  return (
    <>
      <div className='container'>
        <div className="row my-5">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <img src={selectArrivalProduct.img} className='img-fluid' height={500} width={500} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <p className='fw-bold fs-3'>{selectArrivalProduct.name}</p>
            <hr />
            <p className='fw-bold fs-5'>Price : ₹{selectArrivalProduct.price}</p>
            
            <p> {selectArrivalProduct.desc} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi labore sunt, itaque ea aut totam vitae modi harum vero soluta dolore at accusantium explicabo, sit, at dicta unde tempora. Temporibus voluptatibus consequuntur dolor? Exercitationem autem, sed distinctio asperiores quibusdam assumenda quae enim odit eaque minus modi veniam officia ab eveniet error expedita. Provident, mollitia velit esse officiis aspernatur fuga quisquam rerum reiciendis libero deserunt maxime. Rerum.</p>
            <div className="quantitydiv d-flex align-items-center gap-2 pb-3">
              {/* <button className="btn btn-outline-secondary" onClick={RemoveFun}>-</button> */}
              {/* <input type="number" className="form-control text-center" value={count} onChange={(e) => setCount(Number(e.target.value))} style={{ width: "60px" }}/>
              <button className="btn btn-outline-secondary" onClick={AddFun}>+</button> */}
            </div>
            <button className='btn btn-success' onClick={()=>Addtocartarrival(selectArrivalProduct)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArrivalDyn