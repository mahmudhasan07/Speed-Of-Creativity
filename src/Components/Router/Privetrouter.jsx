import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import OrbitSpinner from "../Spinner/OrbitSpinner";
import {  Hourglass } from  'react-loader-spinner'


const Privetrouter = ({children}) => {
    const {user, loading} = useContext(Context)
    const location = useLocation()
    console.log(location);
    
    if(loading){
        return <div><Hourglass
        visible={true}
        height="200"
        width="200"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass="mx-auto my-10"
        colors={['#306cce', '#72a1ed']}
      /></div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default Privetrouter;