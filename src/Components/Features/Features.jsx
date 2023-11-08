import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Features = () => {
    const [array, setarray] = useState([])

    useEffect(() => {
        fetch('Features.json')
            .then(response => response.json())
            .then(data => setarray(data))
            AOS.init()
    }, [])

    return (
        <section className="lg:my-16 my-5">
            <h1 className="lg:text-3xl text-xl text-center font-bold underline">Features Of Your Assignments and Projects</h1>
            <div className="lg:my-8 my-4 flex justify-center flex-wrap gap-5">
                {
                    array.map((element, idx) => <Card key={idx} card={element}></Card>)
                }
            </div>

        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div data-aos="fade-up" className="w-96 border-2 border-blue-600 text-center p-2 rounded-lg">
            <h1 className="lg:text-2xl text-lg font-bold ">{card.feature_name}</h1>
            <hr className="border-2 my-2 mx-5 rounded-xl border-blue-600" />
            <p className="lg:text-lg text-base">{card.description}</p>
        </div>
    )
}

export default Features;