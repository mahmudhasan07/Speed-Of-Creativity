import { useLoaderData } from "react-router-dom";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import Swal from "sweetalert2";

const Takeassignment = () => {
    const loader = useLoaderData()
    console.log(loader);
    const {user}= useContext(Context)
    const Submitemail = user?.email 
    const title = loader.title
    const Givenemail = loader.email
    const mark = loader.marks
    const image = loader.image
    const status = "Pending"
    const axiosLink = useAxios(AxiosSource)

    const handlesubmit=(e)=>{
        e.preventDefault();
        const from = e.target
        const assignmentLink = from.link.value
        const note = from.note.value
        console.log(title,Submitemail,Givenemail,assignmentLink,note,status);
        const info = {title,image,Submitemail,Givenemail,assignmentLink,note,mark,status}
        axiosLink.post(`/submitted-assignment`,info)
        .then(res=>{
            console.log(res.data);
            Swal.fire({
                icon: "success",
                title: "Submit",
                text: "Successfully submit your assignment",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })
        .catch(error=>{
            console.log(error);
        })
    }


    return (
        <section>
            <h1 className="text-3xl font-bold text-center">Submit Your Assignment</h1>
            <div className="lg:my-10 my-5 text-center">
                <p className="text-2xl font-semibold mb-2">Your Assignment name: {loader.title}</p>
                <p className="text-lg font-semibold">Assignment Marks: {loader.marks}</p>
            </div>
            <div className="lg:my-10 my-5">
                <form onSubmit={handlesubmit} className="text-center" action="">
                    <div className="mb-5">
                    <input name="link" type="text" className="border-2 border-blue-600 p-2 w-96 rounded-2xl mb-2" placeholder="input your assignment google link" /> <br />
                    <p><span className="text-lg font-bold">Hint: </span>Upload your pdf link in google drive then take <span className="text-lg font-bold">Embed Link</span> and post it </p>
                    </div>
                    <textarea name="note" className="border-2 border-blue-600 p-2  w-96 rounded-2xl" placeholder={`Enter your assignment details here...`} rows={3} cols={0}></textarea><br /><br />
                    <button className="btn bg-blue-600 text-white">Submit Assignment</button>
                </form>
            </div>
        </section>
    );
};

export default Takeassignment;