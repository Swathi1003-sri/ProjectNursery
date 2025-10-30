import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../Context/ContextFile'
import { ImageData } from '../assets/asset'

const ProductTable = () => {
    const { productData , RemoveProduct , UpdateButton , updateImageFun , updateSubmitForm  ,updateCategory , setUpdateCategory ,
        updateType , setUpdateType ,updateName,setUpdateName,
        updateDesc , setUpdateDesc ,
        updatePrice , setUpdatePrice,
        updatePreviewImg} = useContext(Mycontext)
  return (
    <>
        <div className="container">
            <table className='table table-responsive table-primary mt-5 text-center'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Desc</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    productData.length === 0
                    ?
                    <tr>
                        <td colSpan={8} className='text-danger'>No Product Found !</td>
                    </tr>
                    :
                    productData.map((product,index)=>{
                        return(
                            <tr key={index}>
                                <td><img src={product.img} height={60} alt="" /></td>
                                <td>{product.category}</td>
                                <td>{product.type}</td>
                                <td>{product.name}</td>
                                <td>{product.desc}</td>
                                <td>{product.price}</td>
                                <td><button className='btn btn-primary' onClick={()=>UpdateButton(product._id)} data-bs-toggle="modal" data-bs-target="#updateProduct">Update</button></td>
                                <td><span onClick={()=>RemoveProduct(product._id )} className='fs-4 text-danger'>&times;</span></td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>

<div className="modal fade" id="updateProduct"  aria-labelledby="updateProductLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="updateProductLabel">Update Product</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={updateSubmitForm}>
            <input type="file" id='updateUploadImg'hidden onChange={updateImageFun} />
            <label htmlFor="updateUploadImg"><img src={updatePreviewImg ? updatePreviewImg:ImageData.UploadImg} alt="" height={200} /></label>
            <select className='form-control' id='selecttag' value={updateCategory} onChange={e=>setUpdateCategory(e.target.value)}>
                <option hidden>choose</option>
                <option>Indoor</option>
                <option>Outdoor</option>
                <option>Seeds</option>
                <option>Accessories</option>
                <option>Pebbles</option>
                <option>Soil and Fertilizers</option>
            </select>
                <input type="text" className='form-control my-3' placeholder='Enter the Product Type...'  value={updateType} onChange={e=>setUpdateType(e.target.value) } />
                <input type="text" className='form-control my-3' placeholder='Enter the Product Name...'  value={updateName} onChange={e=>setUpdateName(e.target.value) } />
                <input type="text" className='form-control my-3' placeholder='Enter the Product Desc...'  value={updateDesc} onChange={e=>setUpdateDesc(e.target.value) } />
                <input type="number" className='form-control my-3' placeholder='Enter the Product Price' value={updatePrice} onChange={e=>setUpdatePrice(e.target.value)}/>
                <input type="submit" className='btn btn-primary w-100'/> 
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default ProductTable