import React, { useContext } from 'react'
import { ImageData } from '../assets/asset'
import { Mycontext } from '../Context/ContextFile'

const FormPage = () => {
    const { category,setCategory,type,setType,name,setName,desc,setDesc,price,setPrice,ImageFun,previewImg,SubmitForm} = useContext(Mycontext)
  return (
    <>
       <div className="container-fluid" id='bgimage'>
         <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card mt-4">
                        <div className="card-body">
                            <form onSubmit={SubmitForm}>
                                <input type="file" id='uploadimage'hidden onChange={ImageFun} />
                                <label htmlFor="uploadimage">
                                    <img src={previewImg ? previewImg : ImageData.UploadImg} className='m-3'height={150} alt="" />
                                </label>
                                <select className='form-control w-100' id='selecttag' value={category} onChange={e=>setCategory(e.target.value)}>
                                    <option hidden>choose</option>
                                    <option>Indoor</option>
                                    <option>Outdoor</option>
                                    <option>Seeds</option>
                                    <option>Accessories</option>
                                    <option>Soil and Fertilizers</option>
                                </select>
                                <input type="text" className='form-control my-2' placeholder='Enter the Product Type...'  value={type} onChange={e=>setType(e.target.value) } />
                                <input type="text" className='form-control my-2' placeholder='Enter the Product Name...'  value={name} onChange={e=>setName(e.target.value) } />
                                <input type="text" className='form-control my-2' placeholder='Enter the Product Desc...'  value={desc} onChange={e=>setDesc(e.target.value) } />
                                <input type="number" className='form-control my-2' placeholder='Enter the Product Price' value={price} onChange={e=>setPrice(e.target.value)}/>
                                <input type="submit" className='btn btn-primary w-100'/> 
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div> 
       
    </>
  )
}

export default FormPage