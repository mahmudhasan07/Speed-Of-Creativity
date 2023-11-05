import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import { Navigate, useNavigate } from "react-router-dom";
import OrbitSpinner from "../Spinner/OrbitSpinner";


const Privetrouter = ({children}) => {
    const {user, loading} = useContext(Context)
    
    if(loading){
        return <div><OrbitSpinner></OrbitSpinner></div>
    }
    if(user){
        return children
    }
    return <Navigate to={'/'}></Navigate>

};

export default Privetrouter;