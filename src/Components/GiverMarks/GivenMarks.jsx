import { NavLink, useLoaderData } from "react-router-dom";


const GivenMarks = () => {
    const loader = useLoaderData()
    console.log(loader);



    return (
        <div className="lg:my-10 my-5">
            <h1 className="text-3xl text-center font-semibold my-5">Given Assignment Marks</h1>
            <div className="mx-auto w-fit">
                <label className=" " htmlFor="">
                    <span className="text-xl">Assignment Link </span>
                </label> <br /> <br />
                <NavLink className={`bg-blue-600  text-white p-2 rounded-lg`} to={loader.assignmentLink} target="_blank">{loader.assignmentLink}</NavLink>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default GivenMarks;