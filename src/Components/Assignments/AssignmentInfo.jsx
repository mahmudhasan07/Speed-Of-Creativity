import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import Swal from "sweetalert2";


const AssignmentInfo = () => {
    const loader = useLoaderData()
    const { user } = useContext(Context)
    const axiosLink = useAxios(AxiosSource)
    const navigate = useNavigate()
    const [similar, setsimilar] = useState([])
    // console.log(loader);

    useEffect(() => {
        axiosLink.get(`/items`)
            .then(res => {
                // console.log(res.data);
                const item = res.data.filter(element => element.level == loader.level)
                // console.log(item);
                setsimilar(item)
            })
    }, [axiosLink, loader.level])

    // console.log(similar);
    const handleassignment = (id) => {
        navigate(`/submit-assignment/${id}`)
    }

    const handledelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosLink.delete(`/items/${id}`)
                    .then((response) => console.log(response.data))
                    .catch(error => { console.log(error); })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    return (
        <section className="lg:my-10 my-5">
            <div className="flex flex-wrap mx-10  gap-10">
                <img className="w-1/2 rounded-xl" src={loader.image} alt="" />
                <div className="my-auto">
                    <h1 className="text-4xl font-semibold">{loader.title}</h1>
                    <p className="my-1 text-lg"><span className="text-xl  font-semibold">Level: </span>{loader.level[0].toUpperCase() + loader.level.slice(1)}</p>
                    <p className="my-1 text-lg"><span className="text-xl  font-semibold">Marks: </span>{loader.marks}</p>
                    <p className="my-1 text-lg"><span className="text-xl  font-semibold">Date: </span>{loader.date}</p>
                    {/* <p><span className="text-lg font-semibxld">Date: </span>{loader.email}</p> */}
                    <div className="flex lg:my-5 my-2  gap-5">
                        <button onClick={() => handleassignment(loader._id)} className={user?.email !== loader.email ? "btn  bg-blue-700 text-white" : "btn btn-disabled"}>Take Assignment</button>
                        <button onClick={() => handledelete(loader._id)} className={user?.email == loader.email ? "btn  bg-blue-700 text-white" : "btn btn-disabled"}>Delete Assignment</button>
                    </div>
                </div>
            </div>

            <div className="lg:mt-10 mt-5 lg:mx-5 mx-1">
                <h1 className="text-3xl font-semibold">Description</h1>
                <p className="text-lg my-2">{loader.note}</p>
            </div>

            <div className="lg:my-10 my-5 lg:mx-10 mx-2">
                <h1 className="text-3xl font-bold my-2">Similar Level Assignment for you</h1>
                <div className="my-3 flex flex-wrap gap-5">
                    {
                        similar.slice(0, 4).map(element => <Card key={element._id} card={element}></Card>)
                    }
                </div>
            </div>

        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div className="border-2 w-56 rounded-xl p-2">
            <img className="w-48" src={card.image} alt="" />
            <div>
                <h1>{card.title}</h1>
                <p><span>Marks: </span>{card.marks}</p>
            </div>
        </div>
    )
}

export default AssignmentInfo;