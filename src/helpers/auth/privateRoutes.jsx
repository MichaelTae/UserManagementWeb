import { Outlet, Navigate } from 'react-router-dom'
import { useState } from 'react'

export function authCheck(userName,Password){
    if(userName === "admin" && Password === "admin"){
        return true
    }
    else{
        return false
    }
}

const PrivateRoutes = () => {
    
       let auth = localStorage.getItem("auth")
   

     
    return(
        auth === 'true' ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes