/* eslint-disable react-refresh/only-export-components */
import axios from "axios"
import { useEffect } from "react";

export const AxiosSource = axios.create({
    baseURL : 'https://speed-of-creativity.vercel.app',
    withCredentials : true 
})
const useAxios = () => {
    useEffect(()=>{

        AxiosSource.interceptors.response.use(res =>{
            return res;
        }, error=>{
            console.log(error);
            if(error.response.status == 401 || error.response.status == 403){
                console.log("logOut");
            }
        })
    },[])
    return AxiosSource
};

export default useAxios;