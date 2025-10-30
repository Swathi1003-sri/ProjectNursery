import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { allDatas } from '../assets/asset'

export const ContextFile = createContext()
const ContextProvider = ({children}) => {

    const navigate = useNavigate() 

    const url = "https://backend-ck2g.onrender.com"

// < ============================ REGISTER ========================================== >
    var [ username , setUsername ] = useState("")
    var [ password , setPassword ] = useState("")
    var [ email , setEmail ] = useState("")
// < ============================LOGIN ========================================== >
    var [ loginUsername , setLoginUsername ] = useState("")
    var [ loginPassword , setLoginPassword ] = useState("")
// < ============================ SEARCH ========================================== >
    var [ searchInt , setSearchInt ] = useState("")
    var [ searchFilterData , setSearchFilterData ] = useState([])
// < ============================ PRODUCT ========================================== >
    var [ dataProduct , setDataProduct ] = useState([])  
// < ============================ CART ========================================== >
    var [ cart ,setCart ] = useState([])
// < ============================ QUANTITY ========================================== >
  var [ count , setCount ] = useState(1) 

  var [ serviceCount , setServiceCount ] = useState(0)
  var [ truckCount , setTruckCount ] = useState(0)
  var [ clientCount , setClientCount ] = useState(0)
  var [ expertsCount , setExpertsCount ] = useState(0)

  var [ hoverImg , setHoverImg ] = useState(false)

  const mouseEnter = () =>{
    setHoverImg(true)
  }
  const mouseLeave = () =>{
    setHoverImg(false)
  }
// ======================================= SETINTERVAL COUNT ================================
  const serviceInt = setInterval(() => {
    setServiceCount(a => {
        if (a < 2000) {
          return a + 2
        } 
        else {
          clearInterval(serviceInt) 
          return a
        }
      })
    }, 10)
    useEffect(() => {
    return () => clearInterval(serviceInt) 
  }, [])

  const truckInt = setInterval(() => {
    setTruckCount(a => {
        if (a < 1000) {
          return a + 1 
        } 
        else {
          clearInterval(truckInt) 
          return a
        }
      })
    }, 2)
    useEffect(() => {
    return () => clearInterval(truckInt) 
  }, [])

  const clientInt = setInterval(() => {
    setClientCount(a => {
        if (a < 5000) {
          return a + 5 
        } 
        else {
          clearInterval(clientInt) 
          return a
        }
      })
    }, 1)
    useEffect(() => {
    return () => clearInterval(clientInt) 
  }, [])
  const expertInt = setInterval(() => {
    setExpertsCount(a => {
        if (a < 2000) {
          return a + 2 
        } 
        else {
          clearInterval(expertInt) 
          return a
        }
      })
    }, 2)
    useEffect(() => {
    return () => clearInterval(expertInt) 
  }, [])
  
  const AddFun = () =>{
    setCount(a=>a+1)
  }
  const RemoveFun = () =>{
    setCount(a => (a > 1 ? a - 1 : 1)); 
   } 
    const SubmitFun = async(e)=>{
        try{
            e.preventDefault()
            const formData = {
                username,password,email
            }
            await axios.post(`${url}/user/add`,formData)
            alert("Registered Successfully !")
            setUsername("")
            setPassword("")
            setEmail("")
            navigate("/login")
        }
        catch(err){
            console.log(`Error name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    const SubmitLogin =async(e)=>{
        try{
            e.preventDefault()
            localStorage.setItem("username" , loginUsername)
            const loginData = {
                username:loginUsername ,
                password:loginPassword 
            }
            await axios.post(`${url}/user/login` , loginData)
            alert("Successfully Login !")
            setLoginUsername("")
            setLoginPassword("")
            navigate("/home")
        }
        catch(err){
            console.log(`Error name : ${err.name} , Error Message : ${err.message}`)
        }  
    }
    const LogOutFun = async()=>{
        try{
            localStorage.removeItem("username")
            navigate("/")
            alert("User logout !")
            
        }
        catch(err){
            console.log(`Error name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    const SearchFun = () =>{
        setSearchFilterData(dataProduct.filter(a=>a.type.toLowerCase().includes(searchInt.toLowerCase()) || a.price.toString().includes(searchInt.toString())))
    }
    const FetchProductdata = async()=>{
        try{
            const productList = await axios.get(`${url}/product/productget`)
            setDataProduct(productList.data)
            console.log(productList.data)
        }
        catch(err){
            console.log(`Error name : ${err.name} , Error Message : ${err.message}`)
        }
    }
    useEffect(()=>{
        FetchProductdata()    
    },[])

    const fbFun = () =>{
        window.open("https://www.facebook.com/" , "_blank") 
    }
    const twitterFun = () =>{
        window.open("https://x.com/?lang=en" , "_blank") 
    }
    const instFun = () =>{
        window.open("https://www.instagram.com/" , "_blank") 
    }
    const utubeFun = () =>{
        window.open("https://www.youtube.com/" , "_blank") 
    }
    
    
    const AddtocartFun = (value) =>{
        var dataFind = dataProduct.find(a => a._id === value._id)
        var existingProduct = cart.find(a => a._id === value._id)
        if(existingProduct){
            setCart(cart.map(a=> a._id === value._id 
            ?
            {...a , quantity : a.quantity + 1 }
            :
            a
        ))
        }
        else{
            setCart([...cart, { ...dataFind, quantity: 1 }])
        }
        alert(`${value.name} added to cart!`)
    }
    const RemoveCartFun = (value) =>{
        var productFind = cart.find(a => a._id === value._id)
        if(productFind.quantity > 1){
            setCart(cart.map(a =>a._id === value._id
            ?
            { ...a, quantity: a.quantity - 1 } 
            :
            a
        ))    
        }
        else {
            setCart(cart.filter(a => a._id !== value._id));
        }
        alert(`${value.name} Removed in cart!`)
    }
    const grandTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

      // =============================================================

    const Addtocartarrival = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    alert(`${product.name} added to cart!`);
  }

  const RemoveCartarrival = (product) => {
    const existingProduct = cart.find(item => item.id === product.id)
    if (existingProduct.quantity > 1) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ))
    } else {
      setCart(cart.filter(item => item.id !== product.id))
    }
    alert(`${product.name} Removed in cart!`)
  }


  const grandTotalarrival = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItemsarrival = cart.reduce((sum, item) => sum + item.quantity, 0);


    const contextValue = {
        username,setUsername,
        password,setPassword,
        email , setEmail,
        SubmitFun ,
        loginUsername, setLoginUsername,
        loginPassword , setLoginPassword,
        SubmitLogin , LogOutFun ,
        dataProduct,
        navigate,
        searchInt,setSearchInt,SearchFun ,searchFilterData ,
        fbFun,twitterFun,instFun,utubeFun,
        count,
        AddFun,
        RemoveFun,
        cart,
        AddtocartFun,
        RemoveCartFun,
        grandTotal,
        totalItems,
        Addtocartarrival,
        RemoveCartarrival,
        grandTotalarrival,
        totalItemsarrival,
        serviceCount,
        truckCount,
        clientCount,
        expertsCount,
        hoverImg,
        mouseEnter,
        mouseLeave,
        
    }

    

  return (
    <>
        <ContextFile.Provider value={contextValue}>
            {children}
        </ContextFile.Provider>
    </>
  )
}
export default  ContextProvider 
 