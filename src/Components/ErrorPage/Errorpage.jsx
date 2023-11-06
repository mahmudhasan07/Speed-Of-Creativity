import Lottie from "lottie-react";
import Error from "../../../public/Error.json"
import { NavLink } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="  mx-auto bg-blue-500">
            <NavLink to={`/`}><button className="absolute ml-10 mt-10 btn">Back to Home</button></NavLink>
            <Lottie className="w-3/5 mx-auto" animationData={Error}></Lottie>
        </div>
    );
};

export default Errorpage;