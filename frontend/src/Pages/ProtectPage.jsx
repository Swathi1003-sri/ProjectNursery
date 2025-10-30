import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectPage = ({children}) => {

    const user = localStorage.getItem("username")

    if(!user){
        return <Navigate to = "/" />
    }
  return children
}

export default ProtectPage