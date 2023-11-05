import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const Assignments = () => {
    const loader = useLoaderData()
    const [array, setarray] = useState([])
    const [array1, setarray1] = useState([])
    const [perpageitem, setperpageitem] = useState(6)
    const [currentpage, setcurrentpage] = useState(1)
    const [lengths, setlengths] = useState(loader.length)
    const [start, setstart] = useState(0)
    const [end, setend] = useState(perpageitem)
    const id = useParams()
    console.log(id.text);
    useEffect(() => {
        if (id.text !== undefined) {
            const search = loader.filter(element => element.title.toLowerCase().includes(id.text))
            console.log(search);
            setarray(search)
            setarray1(search)
            setlengths(search.length)
        }
        else {
            setarray(loader)
        }
    }, [id, loader])
    // console.log(lengths);
    const btn = Math.ceil(lengths / perpageitem)

    const length = [...Array(btn).keys()]
    console.log(length);

    const handlesort = e => {
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        if (value == "default") {
            if (id.text !== undefined) {
                setarray(array1)
            }
            else{
                setlengths(loader.length)
            setarray(loader)
            }
        }
        if (value == "easy") {
            if (id.text !== undefined) {
                const item = array1.filter(element => element.level == value)
                setarray(item)
                setcurrentpage(1)
                setlengths(item.length)
            }
            else {
                const items = loader.filter(element => element.level == value)
                console.log(items);
                setarray(items)
                setcurrentpage(1)
                setlengths(items.length)
            }
        }
        if (value == "medium") {
            if (id.text !== undefined) {
                const item = array1.filter(element => element.level == value)
                setarray(item)
                setcurrentpage(1)
                setlengths(item.length)
            }
            else {
                const items = loader.filter(element => element.level == value)
                console.log(items);
                setarray(items)
                setcurrentpage(1)
                setlengths(items.length)
            }
        }
        if (value == "hard") {
            if (id.text !== undefined) {
                const item = array1.filter(element => element.level == value)
                setarray(item)
                setcurrentpage(1)
                setlengths(item.length)
            }
            else {
                const items = loader.filter(element => element.level == value)
                console.log(items);
                setarray(items)
                setcurrentpage(1)
                setlengths(items.length)
            }
        }
    }

    const handlebtn = (i) => {
        setcurrentpage(i + 1)
        setstart(i * perpageitem)
        setend(i * perpageitem + perpageitem)

    }
    console.log(start, end);
    return (
        <section>
            <h1 className="text-3xl text-center my-5">All Assignments</h1>
            <div className="flex justify-around">
                <div className="   p-5 h-fit border-r-4">
                    <form action="" className="flex justify-start text-xl  flex-col">
                        <span><input type="checkbox" />upto 90 marks</span>
                        <span><input type="checkbox" />upto 80 marks</span>
                        <span><input type="checkbox" />upto 70 marks</span>
                    </form>

                </div>
                <div className="">
                    <div className="flex justify-end lg:mr-5 mr-2 ">
                        <select className="border-2 border-blue-700 rounded-lg w-28 text-lg text-center" onChange={handlesort} name="" id="">
                            <option value="default">Default</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:my-10 my-5  border-2">
                        {
                            array.slice(start, end).map(element => <Card key={element._id} card={element}></Card>)
                        }
                    </div>
                    <div className="text-center mb-5">
                        {
                            length.map(i => <button onClick={() => handlebtn(i)} className={currentpage == (i + 1) ? "bg-blue-500 text-white btn mr-3" : "btn mr-3"} key={i}>{i + 1}</button>)
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

const Card = ({ card }) => {
    const navigate = useNavigate()
    const { level, marks } = card
    return (
        <div className="w-96 border-2 border-blue-700 p-2 mx-auto rounded-lg">
            <img className="h-72" src={card.image} alt="" />
            <div className="my-5">
                <h1 className="text-xl font-semibold">{card.title}</h1>
                <p><span className="text-lg">Level: </span>{level[0].toUpperCase() + level.slice(1)}</p>
                <p><span className="text-lg">Date: </span>{card.date}</p>
                <p><span className="text-lg">Marks: </span>{card.marks}</p>
                <p className="font-semibold"><span className="text-lg">Posted By: </span>{card.email}</p>
            </div>
            <div className="flex justify-around">
                <button onClick={() => navigate(`/assignment/info/${card.title}`)} className="btn bg-blue-600 text-white">View Assignment</button>
                <button onClick={() => navigate(`/assignment/update/${card._id}`)} className="btn bg-blue-600 text-white">Update Assignment</button>
            </div>
        </div>
    )
}

export default Assignments;