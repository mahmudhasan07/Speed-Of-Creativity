import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";
import { FcGoogle } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const { signUser, googlelogin } = useContext(Context)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location);

    const handlelogin = e => {
        e.preventDefault()
        const from = e.target

        const email = from.email.value
        const password = from.password.value

        signUser(email, password)
            .then(res => {
                console.log(res);
                location.state ? navigate(`/${location.state}`) : navigate('/')
            })
            .catch(error => {
                // console.log(error.message);
                toast.warn('Please check your email and password again', {
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

    }
    return (
        <section style={{ backgroundImage: "url(https://i.ibb.co/djgLvpv/login.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <div className=" min-h-screen hero  bg-opacity-30 text-white">
                <div className=" my-auto hero-overlay  lg:w-1/3 bg-transparent backdrop-blur-lg mx-auto ">
                    <div className=" card w-full  p-3  border-4  shadow-2xl">
                        <h1 className="text-4xl text-center font-bold ">Log In </h1>
                        <hr className="mx-3 border-2 mt-5" />
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold text-lg">{email}</span>
                                </label>
                                <input onClick={() => setemail("Email")} name="email" type="email" placeholder="email" className="input text-black input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold text-lg">{password}</span>
                                </label>
                                <input onClick={() => setpassword('Password')} name="password" type="password" placeholder="password" className="input text-black input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt text-white link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <NavLink to={`/registration`}><p className=" flex justify-end text-blue-600 font-semibold">New User????</p></NavLink>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-600 text-white">Login</button>
                                <hr className="my-4 border-2" />
                                <button onClick={() => googlelogin()} className="btn btn-sm"><FcGoogle></FcGoogle> Google Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Login;