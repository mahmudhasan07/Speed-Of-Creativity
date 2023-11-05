import { useLoaderData } from "react-router-dom";

const Takeassignment = () => {
    const loader = useLoaderData()
    console.log(loader);
    return (
        <section>
            <h1 className="text-3xl font-bold text-center">Submit Your Assignment</h1>
            <div className="lg:my-10 my-5 text-center">
                <p className="text-2xl font-semibold mb-2">Your Assignment name: {loader.title}</p>
                <p className="text-lg font-semibold">Assignment Marks: {loader.marks}</p>
            </div>
            <div className="lg:my-10 my-5">
                <form className="text-center" action="">
                    <input type="text" className="border-2 border-blue-600 p-2 w-96 rounded-2xl mb-5" placeholder="input your assignment google link" /> <br />
                    {/* <input type="" className="border-2 border-blue-600 p-2  w-96 rounded-2xl" placeholder="give a short note of your assignment " /> */}
                    <textarea className="border-2 border-blue-600 p-2  w-96 rounded-2xl" placeholder={`Enter your assignment details here...`} rows={3} cols={0}></textarea><br /><br />
                    <button className="btn bg-blue-600 text-white">Submit Assignment</button>
                </form>
            </div>
        </section>
    );
};

export default Takeassignment;