import { useContext, useEffect, useRef } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";
import { AiOutlineSearch } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const NavBar = () => {
    const { user, logOut } = useContext(Context)
    console.log(user);
    const search = useRef()

    const navigate = useNavigate()

    const handlesearch = (e) => {
        e.preventDefault()
        const text = search.current.value
        navigate(`/search/${text}`)
        // console.log(id)
        search.current.value = ""
    }

    const Links =
        <>
            <NavLink className={` my-auto`} to={`/`}><li className="">Home</li></NavLink>
            <NavLink to={`/assignments`}><li><span>All</span> <br /> Assignments</li></NavLink>
            <NavLink to={`/add-assignment`}><li>Create <br /> Assignment</li></NavLink>
            <NavLink to={`/my-assignment`}><li>My <br /> Assignment</li></NavLink>
            <NavLink to={`/submitted`}><li>Submitted <br /> Assignment</li></NavLink>
            {/* <NavLink to={`/contact`}><li>Contact Us</li></NavLink> */}
        </>

        useEffect(()=>{
            AOS.init()
        },[])
    return (
        <section className="flex flex-wrap justify-around border-2 bg-blue-600 text-white border-black py-4">
            <div>
                <div  className="hs-dropdown relative mr-2 inline-flex lg:hidden ">
                    <button id="hs-dropdown-default" type="button" className=" hs-dropdown-toggle py-3 px-4 inline-flex justify-center text-white text-2xl border-2  btn-sm items-center gap-2 rounded-md  mt-3 font-medium ">
                        <AiOutlineMenuUnfold></AiOutlineMenuUnfold>

                    </button>

                    <div   className="hs-dropdown-menu text-center w-full backdrop-blur-xl backdrop:bg-gray-7000 bg-transparent transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 mt-2 min-w-[15rem]  shadow-md rounded-lg p-2" aria-labelledby="hs-dropdown-default">
                        <ul  className="text-black">

                            <NavLink to={`/`}><li className="my-1 font-semibold">Home</li></NavLink>
                            <hr className="border-gray-500" />
                            <NavLink to={`/assignments`}><li className="my-1 font-semibold">All Assignments</li></NavLink>
                            <hr className="border-gray-500" />
                            <NavLink to={`/add-assignment`}><li className="my-1 font-semibold">Create  Assignment</li></NavLink>
                            <hr className="border-gray-500" />
                            <NavLink to={`/my-assignment`}><li className="my-1 font-semibold">My Assignment</li></NavLink>
                            <hr className="border-gray-500" />
                            <NavLink to={`/submitted`}><li className="my-1 font-semibold">Submitted Assignment</li></NavLink>
                        </ul>
                        <div className=" text-start ">
                            {/* <NavLink to={`/login`}><button className="btn btn-sm my-2 bg-blue-600 text-white" >Login</button></NavLink> */}
                            {
                                user ?
                                    <div className="hs-dropdown text-black">
                                        <details className="dropdown ">
                                            <summary className="btn"><img className="rounded-full w-8" src={user.photoURL} alt="" /></summary>
                                            <ul className="p-2 text-center shadow menu dropdown-content z-10 bg-base-100 rounded-box w-fit">
                                                <img id="" className="w-10 mx-auto" src={user.photoURL} alt="" />
                                                <p className="mb-1 font-semibold">{user.displayName}</p>
                                                <p className="mb-1 font-semibold">{user.email}</p>
                                                <NavLink to={`/`}><button onClick={() => logOut()} className="btn my-1  btn-sm" >LogOut</button></NavLink>
                                            </ul>
                                        </details>
                                    </div>
                                    :
                                    <NavLink to={`/login`}><button className="btn btn-sm" >Login</button></NavLink>
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <NavLink to={`/`}><h1 className="text-2xl  font-bold">Speed Of Creativity</h1></NavLink>
            </div>
            <div>
                <ul className="lg:flex hidden gap-5 text-center">
                    {
                        Links
                    }
                </ul>
            </div>

            <div className="hidden lg:flex my-auto hs-dropdown">
                {
                    user ?
                        <div className="hs-dropdown text-black">
                            <details className="dropdown">
                                <summary className="btn"><img className="rounded-full w-8" src={user.photoURL} alt="" /></summary>
                                <ul className="p-2 text-center shadow menu dropdown-content z-10 bg-base-100 rounded-box w-fit">
                                    <img id="" className="w-10 mx-auto" src={user.photoURL} alt="" />
                                    <p className="mb-1 font-semibold">{user.displayName}</p>
                                    <p className="mb-1 font-semibold">{user.email}</p>
                                    <NavLink to={`/`}><button onClick={() => logOut()} className="btn my-1  btn-sm" >LogOut</button></NavLink>
                                </ul>
                            </details>
                        </div>
                        :
                        <NavLink to={`/login`}><button className="btn btn-sm" >Login</button></NavLink>
                }
            </div>
            <div className="my-auto">
                <input ref={search} placeholder="Enter your search topic" className="border-2 rounded-lg lg:w-48 w-40 text-black p-1" type="text" />
                <button onClick={handlesearch} className="btn btn-sm"><AiOutlineSearch></AiOutlineSearch></button>
            </div>

        </section>
    );
};

export default NavBar;