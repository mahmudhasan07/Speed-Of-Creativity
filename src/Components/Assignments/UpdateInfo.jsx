import { useContext } from "react";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import { Context } from "../ContextAPI/ContextAPI";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpdateInfo = () => {
    const loader = useLoaderData()
    // console.log(loader);
    const axiosLink = useAxios(AxiosSource)
    const { user } = useContext(Context)
    // console.log(user.email);
    const email = user?.email
    const handleadditem = e => {
        e.preventDefault()
        const from = e.target

        const title = from.title.value
        const note = from.note.value
        const date = from.date.value
        const marks = from.marks.value
        const image = from.image.value
        const level = from.level.value

        // console.log(title,note,date,marks,image,level);
        const items = { title, note, date, marks, image, level, email }

        axiosLink.put(`/items/update/${loader?._id}`, items)
            .then(res => {
                // console.log(res.data);
                Swal.fire({
                    icon: "success",
                    text: 'Successfully Add Your Assignment'
                })
            })
            .catch(error => {
                console.log(error);
            })


    }
    return (
        <section className=" bg-base-200 min-h-screen">
            <h1 className="text-4xl font-bold text-center lg:py-10 py-5">Add Your Assignment </h1>
            <div className="mx-10 border-2 bg-base-100 p-10 rounded-xl shadow-2xl">
                <form onSubmit={handleadditem} className="" action="">
                    <div className="flex  flex-wrap my-2 justify-center w-full ">
                        <div className="flex-1">
                            <label className="label">
                                <span className=" font-semibold">Title</span>
                            </label>
                            <input defaultValue={loader.title} type="text" placeholder="title" name="title" className="border-2 border-black w-2/3 rounded-md p-1" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className=" font-semibold">Description</span>
                            </label>
                            <input defaultValue={loader.note} type="text" placeholder="description" name="note" className="border-2 border-black w-2/3 rounded-md p-1" />
                        </div>

                    </div>
                    <div className="flex  flex-wrap my-2 justify-center w-full ">
                        <div className="flex-1">
                            <label className="label">
                                <span className=" font-semibold">Difficulty Level</span>
                            </label>
                            <select defaultValue={loader.level} className="border-2 border-black w-28 rounded-md text-center" name="level" id="">
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className=" font-semibold">Due Date</span>
                            </label>
                            <input defaultValue={loader.date} type="date" placeholder="date" name="date" className="border-2 border-black w-2/3 rounded-md p-1" />
                        </div>

                    </div>
                    <div className="flex flex-wrap my-2 justify-center w-full ">
                        <div className="flex-1">
                            <label className="label">
                                <span className=" font-semibold">Marks</span>
                            </label>
                            <input defaultValue={loader.marks} type="number" placeholder="marks" name="marks" className="border-2 border-black w-2/3 rounded-md p-1" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className=" font-semibold">Image URL</span>
                            </label>
                            <input defaultValue={loader.image} type="text" placeholder="image" name="image" className="border-2 border-black w-2/3 rounded-md p-1" />
                        </div>

                    </div>
                    <div className="lg:mx-16 mx-6  my-5">
                        <button className="btn w-full bg-blue-600 text-white">Update Item</button>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default UpdateInfo;