import { Link } from "react-router-dom";
import Button from "./components/Button";


const Banner = () => {
    return (
        <div className="bg-[#1e293b] px-10 py-16">
            <h3 className="text-3xl font-bold">Manage Your <span className="text-yellow-500 text-5xl font-bold">Tasks...</span></h3>
            <p className="max-w-xl my-5">Empower Your Productivity with Tasky: Seamlessly organize, prioritize, and conquer your to-do list. Experience efficient task management like never before, making every day a step closer to your goals.</p>
            <Link to='/login'>
                <Button text={"Let's Explore"}></Button>
            </Link>
        </div>
    );
};

export default Banner;