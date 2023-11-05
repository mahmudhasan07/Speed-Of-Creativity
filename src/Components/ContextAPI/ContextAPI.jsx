import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import App from "../../App";
import app from "../User/Login.config";
import useAxios, { AxiosSource } from "../Axios/useAxios";

export const Context = createContext()
const ContextAPI = ({ children }) => {
    const axiosLink = useAxios(AxiosSource)
    const [loading, setloading] = useState(true)
    const [user, setuser] = useState()
    const auth = getAuth(app)
    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }

    const updateUser = (name, photourl) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (customer) => {
            setuser(customer)
            setloading(false)
            // console.log(customer);
            const email = customer?.email

            if (customer !== null) {
                axiosLink.post(`/jwt`, { email })
                    .then(res => {
                        // console.log(res.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
    }, [auth, axiosLink])


    const data = { createUser, signUser, logOut, updateUser, user, loading }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
};

export default ContextAPI;