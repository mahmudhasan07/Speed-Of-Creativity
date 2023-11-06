import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

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
    const [task, settask] = useState('processing')
    const navigate = useNavigate()

    const handlemark = (id) => {
        navigate(`/given-marks/${id}`)
        settask('Completed')

    }

    return (
        <div className="flex flex-wrap justify-around gap-5 border-2 rounded-xl lg:mx-10 mx-3">
            <img className="w-52" src={card.image} alt="" />
            <div className="my-auto">
                <h1 className="text-xl font-semibold">{card.title}</h1>
                <p><span className="font-semibold">Status :</span> <span>{task}</span></p>
            </div>
            <div className="my-auto">
                <h1><span className="font-semibold">Submitted By: </span>{card.Submitemail}</h1>
                <h1><span className="font-semibold">Created By: </span>{card.Givenemail}</h1>
            </div>
            <div className="my-auto">
                <h1><span className="font-semibold">Full Marks: </span> {card.mark}</h1>
                <h1><span className="font-semibold">Get Mark: </span> {card?.Gmark}</h1>
            </div>
            <div className="my-auto">
                <button onClick={() => handlemark(card._id)} className="btn bg-blue-600 text-white hover:text-black">Give Mark</button>
            </div>
        </div>
    )
}

export default Submittedassignment;