import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Assignments = () => {
    const loader = useLoaderData()
    const { user } = useContext(Context)
    const [array, setarray] = useState([])
    const [array1, setarray1] = useState([])
    const [perpageitem, setperpageitem] = useState(6)
    const [currentpage, setcurrentpage] = useState(1)
    const [lengths, setlengths] = useState(loader?.length)
    const [start, setstart] = useState(0)
    const [end, setend] = useState(perpageitem)
    const id = useParams()
    // const navigate = useNavigate()
    // console.log(id.text);
    useEffect(() => {
        if (id.text !== undefined) {
            const search = loader.filter(element => element.title.toLowerCase().includes(id.text.toLowerCase()))
            console.log(search);
            setarray(search)
            setarray1(search)
            setlengths(search.length)
        }
        else {

            setarray(loader)
        }

        AOS.init()
    }, [id, loader])
    // console.log(lengths);
    const btn = Math.ceil(lengths / perpageitem)

    const Btnlength = [...Array(btn).keys()]
    // console.log(length);

    const handlesort = e => {
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        if (value == "default") {
            if (id.text !== undefined) {
                setarray(array1)
            }
            else {
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
        // navigate(`/assignments/page/${i+1}`)

        setstart(i * perpageitem)
        setend(i * perpageitem + perpageitem)

    }

    const handledate = (e) => {
        e.preventDefault()
        

        const latest = e.target.checked
        // const oldest = e.target.name.value

        console.log(latest);
        // console.log(oldest);

    }
    // console.log(start, end);
    console.log(lengths);
    return (
        <section>
            <h1 className="text-3xl text-center my-5">All Assignments</h1>
            <div className=" justify-around">
                <div className="">
                    <div>
                        <button>Latest Assignment</button>
                        <button>Latest Assignment</button>
                    </div>
                    <div className="flex justify-end lg:mr-5 mr-2 ">

                        <select className="border-2 border-blue-700 rounded-lg w-28 text-lg text-center" onChange={handlesort} name="" id="">
                            <option value="default">Default</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className="grid lg:grid-cols-3  grid-cols-1 gap-5 lg:my-10 my-5">
                        {
                            lengths !== 0 ? array.slice(start, end).map(element => <Card key={element._id} card={element}></Card>)
                                :
                                <h1 className="text-3xl text-center">No Data Found</h1>
                        }
                    </div>
                    <div className="text-center mb-5">
                        {
                            Btnlength.map(i => <button onClick={() => handlebtn(i)} className={currentpage == (i + 1) ? "bg-blue-500 text-white btn mr-3" : "btn mr-3"} key={i}>{i + 1}</button>)
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

const Card = ({ card }) => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const handleupdate = (email) => {
        console.log(user.email);
        if (user.email == email) {
            navigate(`/assignment/update/${card._id}`)
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "You are not create this Assignment, So you can't update this assignment",
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }

    }
    const { level, marks } = card
    return (
        <div data-aos="fade-up" className="lg:w-96 border-2 border-blue-700 p-2 mx-auto rounded-lg">
            <img className="h-72" src={card.image} alt="" />
            <div className="my-5">
                <h1 className="text-xl font-semibold">{card.title}</h1>
                <p><span className="text-lg">Level: </span>{level[0].toUpperCase() + level.slice(1)}</p>
                <p><span className="text-lg">Date: </span>{card.date}</p>
                <p><span className="text-lg">Marks: </span>{card.marks}</p>
                <p className="font-semibold"><span className="text-lg">Posted By: </span>{card.email}</p>
            </div>
            <div className="flex flex-wrap justify-around">
                <button onClick={() => navigate(`/assignment/info/${card.title}`)} className="btn bg-blue-600 text-white">View Assignment</button>
                <button onClick={() => handleupdate(card.email)} className="btn bg-blue-600 text-white">Update Assignment</button>
            </div>
        </div>
    )
}

export default Assignments;