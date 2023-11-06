import { useRef } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import useAxios, { AxiosSource } from "../Axios/useAxios";


const GivenMarks = () => {
    const loader = useLoaderData()
    const axiosLink = useAxios(AxiosSource)
    console.log(loader);
    const mark = useRef()
    const text = useRef()

    const handlesubmit = (e) => {
        e.preventDefault()
        const Givenmark = mark.current.value
        const Comment = text.current.value
        const statuss = "Complete" 
        // console.log(Givenmark, Comment);
        const info = { Givenmark, Comment, statuss }
        axiosLink.put(`/submitted-assignment/${loader._id}`, info)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })


    }


    return (
        <div className="lg:my-10 my-5">
            <h1 className="text-3xl text-center font-semibold my-5">Given Assignment Marks</h1>
            <div className="mx-auto w-fit">
                <label className=" " htmlFor="">
                    <span className="text-xl">Assignment Link </span>
                </label> <br /> <br />
                <NavLink className={`bg-blue-600  text-white p-2 rounded-lg`} to={loader.assignmentLink} target="_blank">{loader.assignmentLink}</NavLink>
            </div>

            <div className="mx-auto w-1/2 lg:my-10 my-5 text-center">
                <h1 className="text-lg my-2 font-semibold ">Given Marks (Out of ${loader.mark})</h1>
                <div className="">
                    <input ref={mark} className="border-2 border-blue-500 mb-2 p-1" type="number" name="" id="" /> <br />
                    <input ref={text} className="border-2 border-blue-500 mb-2 p-2 w-96" type="text" name="" id="" /> <br />

                    <button onClick={handlesubmit} className="btn bg-blue-500 text-white hover:text-black">Submit</button>
                </div>

            </div>
        </div>
    );
};

export default GivenMarks;