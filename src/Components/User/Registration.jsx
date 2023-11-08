import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";
import Swal from 'sweetalert2'
import useAxios from "../Axios/useAxios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const { createUser, logOut, updateUser } = useContext(Context)
    const [name, setname] = useState('')
    const [photo, setphoto] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    // const axiosLink = useAxios()

    const handlereg = e => {
        e.preventDefault()
        const from = e.target

        const name = from.name.value
        const photo = from.photo.value
        const email = from.email.value
        const password = from.password.value

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{6,}$/.test(password)) {
            toast.warn('Password must be 6 character with UpperCase & LowerCase , symbol and number ')
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res);
                updateUser(name, photo)
                    .then(res => {
                        console.log(res)
                        logOut()
                        Swal.fire('Successfully Registration')
                    })
                    .catch(error => {
                        // console.log(error.message);
                        toast.warn('Password must be 6 character', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });

                    })

            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <section style={{ backgroundImage: "url(https://i.ibb.co/GCgCjqZ/registration.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <div className=" min-h-screen bg-opacity-20 bg-black text-white">
                <div className=" lg:py-5 py-3 mb-1 bg-transparent backdrop-blur-lg backdrop:bg-blue-600   lg:w-1/3 mx-auto">
                    <div className=" card  w-full p-3 border-4 shadow-2xl">
                        <h1 className="text-4xl text-center font-bold ">Registration Now ..!</h1>
                        <hr className="mx-3 border-2 mt-5" />
                        <form onSubmit={handlereg} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white label-text font-semibold text-lg">{name}</span>
                                </label>
                                <input onClick={() => setname("Name")} name="name" type="text" placeholder="name" className="text-black input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white label-text font-semibold text-lg">{photo}</span>
                                </label>
                                <input onClick={() => setphoto("Photo URL")} name="photo" type="text" placeholder="photo url" className="text-black input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white label-text font-semibold text-lg">{email}</span>
                                </label>
                                <input onClick={() => setemail("Email")} name="email" type="email" placeholder="email" className="text-black input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white label-text font-semibold text-lg">{password}</span>
                                </label>
                                <input onClick={() => setpassword('Password')} name="password" type="password" placeholder="password" className="text-black input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <NavLink to={`/login`}><p className=" flex justify-end text-blue-600 font-semibold">Already User????</p></NavLink>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-600 text-white">Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </section>
    );
};

export default Registration;