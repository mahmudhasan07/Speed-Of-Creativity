import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";


const Login = () => {
    const { signUser ,user } = useContext(Context)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const nagivate = useNavigate()
    const handlelogin = e => {
        e.preventDefault()
        const from = e.target

        const email = from.email.value
        const password = from.password.value

        signUser(email, password)
            .then(res => {
                console.log(res);
                // nagivate(`/`)
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <section style={{backgroundImage : "url(https://i.ibb.co/djgLvpv/login.png)", backgroundRepeat : "no-repeat" , backgroundPosition : "center"}}>
            <div  className=" min-h-screen hero hero-overlay bg-opacity-30 text-white">
                <div className=" my-auto  w-1/3 mx-auto ">
                    {/* <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}
                    <div className=" card   w-full p-3 bg-transparent backdrop-blur-lg shadow-2xl">
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;