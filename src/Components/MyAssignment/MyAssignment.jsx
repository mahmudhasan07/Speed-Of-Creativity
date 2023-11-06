import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Context } from '../ContextAPI/ContextAPI';

const MyAssignment = () => {
    const loader = useLoaderData()
    const { user } = useContext(Context)
    const items = loader.filter(element => element.Submitemail == user?.email)
    console.log(items);
    return (
        <section>
            <h1 className="text-3xl text-center font-bold my-7">Submitted Assignment</h1>
            <div className="flex flex-col gap-5 lg:my-10 my-5">
                {
                    items.map(element => <Card key={element._id} card={element}></Card>)
                }
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div className="flex flex-wrap justify-around gap-5 border-2 p-2 rounded-xl lg:mx-10 mx-3">
            <img className="w-52" src={card.image} alt="" />
            <div className="my-auto">
                <h1 className="text-xl font-semibold">{card.title}</h1>
                <p><span className="font-semibold">Status :</span> <span>{card.status ? card.status : "Processing"}</span></p>
            </div>
            <div className="my-auto">
                <h1><span className="font-semibold">Submitted By: </span>{card.Submitemail}</h1>
                <h1><span className="font-semibold">Created By: </span>{card.Givenemail}</h1>
            </div>
            <div className="my-auto">
                <h1><span className="font-semibold">Full Marks: </span> {card.mark}</h1>
                <h1><span className="font-semibold">Get Mark: </span> {card?.Givenmarks}</h1>
            </div>
            <div className="my-auto  ">
                {/* <button onClick={() => handlemark(card._id)} className="btn bg-blue-600 text-white hover:text-black">Give Mark</button> */}
                <h1 className='font-semibold'>Comment</h1>
                <p className='w-40'>{card?.Comments ? card.Comments : "Examiner doesn't check your assignment"}</p>

            </div>
        </div>
    )
}

export default MyAssignment;