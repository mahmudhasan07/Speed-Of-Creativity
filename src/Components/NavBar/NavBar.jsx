import { useContext, useRef } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";
import { AiOutlineSearch } from "react-icons/ai";



const NavBar = () => {
    const {user, logOut} = useContext(Context)
    console.log(user);
    const search = useRef()

    const navigate = useNavigate()

    const handlesearch = (e) => {
        e.preventDefault()
        const id = search.current.value
        navigate(`/search/${id}`)
        // console.log(id)
        search.current.value = ""
    }

    const Links =
        <>
            <NavLink className={` my-auto`} to={`/`}><li className="">Home</li></NavLink>
            <NavLink to={`/assignments`}><li><span>All</span> <br /> Assignments</li></NavLink>
            <NavLink to={`/add-assignment`}><li>Create <br /> Assignment</li></NavLink>
            <NavLink to={`/`}><li>My <br /> Assignment</li></NavLink>
            <NavLink to={`/`}><li>Submitted <br /> Assignment</li></NavLink>
            {/* <NavLink to={`/contact`}><li>Contact Us</li></NavLink> */}
        </>
    return (
        <section className="flex justify-around border-2 bg-blue-600 text-white border-black py-4">
            <div>
                <div className="hs-dropdown relative inline-flex lg:hidden ">
                    <button id="hs-dropdown-default" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center text-white text-2xl border-2  btn-sm items-center gap-2 rounded-md  font-medium ">
                        <AiOutlineMenuUnfold></AiOutlineMenuUnfold>

                    </button>

                    <div className="hs-dropdown-menu text-center w-full backdrop-blur-xl backdrop:bg-gray-7000 bg-transparent transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 mt-2 min-w-[15rem]  shadow-md rounded-lg p-2" aria-labelledby="hs-dropdown-default">
                        <ul className="text-black">

                            <NavLink to={`/`}><li className="my-1 font-semibold">Home</li></NavLink>
                            <hr />
                            <NavLink to={`/assignments`}><li className="my-1 font-semibold">All Assignments</li></NavLink>
                            <hr />
                            <NavLink to={`/add-assignment`}><li className="my-1 font-semibold">Create  Assignment</li></NavLink>
                            <hr />
                            <NavLink to={``}><li className="my-1 font-semibold">My Assignment</li></NavLink>
                            <hr />
                            <NavLink to={``}><li className="my-1 font-semibold">Submitted Assignment</li></NavLink>
                        </ul>
                <div className=" ">
                <NavLink to={`/login`}><button className="btn btn-sm" >Login</button></NavLink>
                </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl  font-bold">Speed Of Creativity</h1>
            </div>
            <div>
                <ul className="lg:flex hidden gap-5 text-center">
                    {
                        Links
                    }
                </ul>
            </div>
            <div className="my-auto">
                <input ref={search} className="border-2 rounded-lg" type="text" />
                <button onClick={handlesearch} className="btn btn-sm"><AiOutlineSearch></AiOutlineSearch></button>
            </div>
            <div className="hidden lg:flex my-auto hs-dropdown">
                {
                    user? 
                    <div className="hs-dropdown">
                        <img id="hs-dropdown-default" className="hs-dropdown-toggle" src={user.photoURL} alt="" />
                        <div className="hs-dropdown-menu">
                        <p>{user.displayName}</p>
                        </div>
                        <NavLink to={`/`}><button onClick={()=> logOut()} className="btn btn-sm" >LogOut</button></NavLink>
                    </div>
                    :
                    <NavLink to={`/login`}><button className="btn btn-sm" >Login</button></NavLink>
                }
            </div>

        </section>
    );
};

export default NavBar;