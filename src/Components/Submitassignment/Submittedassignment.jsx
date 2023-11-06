import { useContext } from "react";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";
import Swal from "sweetalert2";

const Submittedassignment = () => {
    const loader = useLoaderData()

    console.log(loader);
    return (
        <section>
            <h1 className="text-3xl text-center font-bold my-7">Submitted Assignment</h1>
            <div className="flex flex-col gap-5 lg:my-10 my-5">
                {
                    loader.map(element => <Card key={element._id} card={element}></Card>)
                }
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    // const [task, settask] = useState('processing')
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const handlemark = (id) => {
        if(card.Givenemail == user.email){
            navigate(`/given-marks/${id}`)
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Unauthorize",
                text: "You don't have access to give marks on this assignment",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        

    }

    return (
        <div className="flex flex-wrap justify-around gap-5 border-2 rounded-xl lg:mx-10 mx-3">
            <img className="w-52" src={card.image} alt="" />
            <div className="my-auto">
                <h1 className="text-xl font-semibold">{card.title}</h1>
                <p><span className="font-semibold">Status :</span> <span>{card.status? card.status : "Processing"}</span></p>
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