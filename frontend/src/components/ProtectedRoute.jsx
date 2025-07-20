import { Children } from "react";
import { Navigate } from "react-router-dom";

const Protectedoutes = ({ children })=>{
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to='/login' replace />
    }

    return children;
};

export default Protectedoutes;