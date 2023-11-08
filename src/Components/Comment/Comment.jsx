import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import Swal from "sweetalert2";


const Comment = () => {
    const review = useRef()

    const { user } = useContext(Context)
    const axiosLink = useAxios(AxiosSource)
    const name = user?.displayName
    const photo = user?.photoURL
    const email = user?.email
    const [items, setitmes] = useState([])


    const handlecomment = (e) => {
        e.preventDefault();

        const comment = review.current.value
        console.log(comment);
        const info = { name, photo, email, comment }
        if (user?.email) {
            axiosLink.post(`/comment`, info)
                .then(res => {
                    console.log(res.data);
                    Swal.fire({
                        icon: "success",
                        title: "Submit",
                        text: "Successfully submit your comment",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            Swal.fire({
                icon: "error",
                title: "unAuthorize",
                text: "You have not login yet",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }


    }


    useEffect(() => {
        axiosLink.get(`/comment`)
            .then(res => {
                console.log(res.data);
                setitmes(res.data)
            })
            .catch(error => {
                console.log(error.status);
            })
    }, [axiosLink])
    return (
        <section className="lg:my-16 my-6">
            <h1 className="text-3xl text-center font-bold my-5">FeedBack Section</h1>
            <div className="flex justify-around flex-wrap" >
                <div className=" p-2">
                    <textarea placeholder="Enter Your Comment" ref={review} className="border-2 border-blue-500 rounded-xl w-96 h-72 p-2" name="comment" id=""></textarea> <br />
                    <button onClick={handlecomment} className="btn bg-blue-600 text-white hover:text-black">Comment</button>
                </div>
                <div className="h-96 border-2 border-gray-400 overflow-x-auto grid grid-cols-2 gap-2">
                    {
                        items?.map(element => <Card key={element._id} card={element}></Card>)
                    }
                </div>
            </div>

        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div className="w-64 border-2 p-2 shadow-xl">
            <img className="w-10" src={card.photo} alt="" />
            <h1>{card.name}</h1>
            <p>{card.comment}</p>


        </div>
    )
}

export default Comment;