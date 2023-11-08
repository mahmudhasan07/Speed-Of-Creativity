import { useContext, useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";
import Swal from "sweetalert2";
import useAxios, { AxiosSource } from "../Axios/useAxios";

const Submittedassignment = () => {
    const { user } = useContext(Context)
    const [items, setitmes] = useState([])
    const [pending, setpending] = useState([])
    const axiosLink = useAxios(AxiosSource)


    useEffect(() => {
        axiosLink.get('/submitted-assignment')
            .then(res => {
                setitmes(res.data)
            })
    }, [axiosLink, setitmes])

    console.log(items.length);

    useEffect(() => {
        const item = items.filter(element => element.status.toLowerCase() == "pending")
        setpending(item)
    }, [items])

    const handlefind = () => {

        if(user.email){
            axiosLink.get(`/submitted-assignment/email/${user.email}`)
            .then(res => {
                console.log(res.data);
                setitmes(res.data)

            })
            .catch(error => {
                console.log(error);
            })
        }
        else{
            Swal.fire({
                icon: "error",
                title: "UnAuthorize",
                text: "You are not login yet",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        

    }

    return (
        <section>
            <h1 className="text-3xl text-center font-bold my-7">Submitted Assignment</h1>
            <div className="text-center">
                <h1 className="text-lg">See Who Submit your given Assignment</h1>
                <button onClick={handlefind} className="btn btn-sm bg-blue-600 my-2 text-white hover:text-black">Click Here</button>
            </div>
            <div className="flex flex-col gap-5 lg:my-10 my-5">
                {
                    pending.length !== 0 ? pending?.map(element => <Card key={element._id} card={element}></Card>)
                        :
                        <h1 className="text-2xl text-center ">No Assignment are Submitted </h1>
                }
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const handlemark = (id) => {
        if (card.Givenemail == user.email) {
            navigate(`/given-marks/${id}`)
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Unauthorize",
                text: "You don't have access to give marks on this assignment",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }


    }

    return (
        <div className="flex flex-wrap justify-around gap-5 p-2 border-2 rounded-xl lg:mx-10 mx-3">
            <img className="w-52" src={card.image} alt="" />
            <div className="my-auto">
                <h1 className="text-xl font-semibold">{card.title}</h1>
                <p><span className="font-semibold">Status :</span> <span className="border-2 p-1 bg-gray-300 rounded-xl">{card.status ? card.status : "Pending"}</span></p>
            </div>
            <div className="my-auto">
                <h1><span className="font-semibold">Submitted By: </span>{card.Submitemail}</h1>
                <h1><span className="font-semibold">Created By: </span>{card.Givenemail}</h1>
            </div>
            <div className="my-auto">
                <h1><span className="font-semibold">Full Marks: </span> {card.mark}</h1>
                <h1><span className="font-semibold">Get Mark: </span> {card?.Givenmarks}</h1>
            </div>
            <div className="my-auto">
                <button onClick={() => handlemark(card._id)} className="btn bg-blue-600 text-white hover:text-black">Give Mark</button>
            </div>
        </div>
    )
}

export default Submittedassignment;