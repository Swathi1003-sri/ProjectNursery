import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'


export const Mycontext = createContext()
const ContextFile = ({children}) => {
    const url = "https://backend-ck2g.onrender.com"

    var [ category , setCategory ] = useState("")
    var [ type , setType ] = useState("")
    var [ name , setName ] = useState("")
    var [ desc , setDesc ] = useState("")
    var [ price , setPrice ] = useState("")
    var [ img , setImg ] = useState("")
    var [ previewImg , setPreviewImg ] = useState("")

    var [ productData , setProductData] = useState([])

    var [ updateCategory , setUpdateCategory ] = useState("")
    var [ updateType , setUpdateType ] = useState("")
    var [ updateName , setUpdateName ] = useState("")
    var [ updateDesc , setUpdateDesc ] = useState("")
    var [ updatePrice , setUpdatePrice ] = useState("")
    var [ updateImg , setUpdateImg ] = useState("")
    var [ updatePreviewImg , setUpdatePreviewImg ] = useState("")
    var [ updateId , setUpdateId ] = useState("")


    var [ userData , setUserData ] = useState([])

   
    const ImageFun = async(e) =>{
      var file = e.target.files[0]

      if(file){
        var reader = new FileReader()
        reader.onloadend = () =>{
          setImg(reader.result)
          setPreviewImg(reader.result)
        }
        reader.readAsDataURL(file)
      }
    }

    const SubmitForm = async(e)=>{
      try{
        e.preventDefault()
        const formData = {
          category,type,name,desc,price,img
        }
        await axios.post(`${url}/product/add` , formData)
        alert("Products Added !")
        setImg("")
        setCategory("")
        setType("")
        setName("")
        setDesc("")
        setPrice("")
      }
      catch(err){
        console.log(`Error Name:${err.name} , Error Message:${err.message}`)
    }
    }

    const FetchData = async()=>{
      try{
        const response = await axios.get(`${url}/product/productget`)
        setProductData(response.data)
      }
      catch(err){
        console.log(`Error Name:${err.name} , Error Message:${err.message}`)
    }
    }
    useEffect(()=>{
      FetchData()
    },[])

    const RemoveProduct = async(id)=>{
      try{
        await axios.delete(`${url}/product/delete/${id}`)
        alert("Product Deleted !")
        FetchData()
      }
      catch(err){
        console.log(`Error Name:${err.name} , Error Message:${err.message}`)
    }
    }

    const UpdateButton = (id)=>{
      var productFind = productData.find(a=>a._id === id)
      console.log(productFind)
     if(productFind){
      setUpdateCategory(productFind.category)
      setUpdateType(productFind.type)
      setUpdateName(productFind.name)
      setUpdateDesc(productFind.desc)
      setUpdatePrice(productFind.price)
      setUpdateImg(productFind.img)
      setUpdatePreviewImg(productFind.img)
      setUpdateId(productFind._id)
     } 
    }

    const updateImageFun = async(e)=>{

      var file = e.target.files[0]
      if(file){
        var reader = new FileReader()
        setUpdateImg(reader.result)
        setUpdatePreviewImg(reader.result)
      }
      reader.readAsDataURL(file)
    }

    const updateSubmitForm = async(e)=>{
      try{
        e.preventDefault()
        var updateFormData = {
            category : updateCategory , type : updateType , name : updateName ,desc : updateDesc , price : updatePrice ,img : updateImg           
        }
        await axios.put(`${url}/product/update/${updateId}`, updateFormData)
        alert("Product Updated !")
        FetchData()
      }
      catch(err){
        console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
      }
    }
    const FetchUserData = async()=>{
      try{
        const response = await axios.get(`${url}/user/userget`)
        setUserData(response.data)
      }
      catch(err){
        console.log(`Error Name:${err.name} , Error Message:${err.message}`)
    }
    }
    useEffect(()=>{
      FetchUserData()
    },[])

    const RemoveUser =async(id)=>{
      try{
        await axios.delete(`${url}/user/remove/${id}`)
        alert("User Removed !")
        FetchUserData()
      }
      catch(err){
        console.log(`Error Name:${err.name} , Error Message:${err.message}`)
    }
    }
    var ContextValue = {
        category,setCategory,
        type,setType,
        name,setName,
        desc,setDesc,
        price,setPrice,
        previewImg,
        ImageFun,
        SubmitForm,
        productData,setProductData,
        RemoveProduct,
        UpdateButton,
        updateImageFun , 
        updateSubmitForm ,
        updateCategory , setUpdateCategory ,
        updateType , setUpdateType ,
        updateName,setUpdateName,
        updateDesc , setUpdateDesc ,
        updatePrice ,setUpdatePrice,
        updatePreviewImg,
        userData,
        RemoveUser
    }
  return ( 
    <>
        <Mycontext.Provider value={ContextValue}>
            {children}
        </Mycontext.Provider>
    </>
  )
}

export default ContextFile