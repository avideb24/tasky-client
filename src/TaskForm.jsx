import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./provider/AuthProvider";


const TaskForm = () => {

    const { user } = useContext(AuthContext);
    const [selectedType, setSelectedType] = useState('');
    const navigate = useNavigate();

    const handleSelect = (e) => {
        const select = e.target.value;
        setSelectedType(select);
    };

    const handleAddTask = e => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const addedTask = { title, description, deadline, priority: selectedType, status: "pending" , email: user?.email};
        console.log(addedTask);

        axios.post('http://localhost:5000/tasks', addedTask)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Task Added Successfully!'
                    })
                    navigate('/dashboard')
                }
            })
            .catch(err => {
                console.error(err);
            })

    }

    return (
        <div className="max-w-7xl h-screen mx-auto bg-[#1e293b] pt-8">
            <form className="w-96 mx-auto  py-10 px-8 rounded-lg bg-[#384966] text-black" onSubmit={handleAddTask}>
                <div className="gap-5">
                    <div className="w-full">
                        <label className="block mb-2 text-white">Task Name</label>
                        <input className="w-full h-9 px-2 outline-none rounded-lg bg-white " type="text" name="title" placeholder="Type title" required />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-white">Priority</label>
                        <select onChange={handleSelect} className="select select-bordered w-full  bg-white h-5 " defaultValue={selectedType} required >
                            <option disabled value=''>Select One</option>
                            <option value={"Low"}>Low</option>
                            <option value={"Moderate"}>Moderate</option>
                            <option value={"High"}>High</option>
                        </select>
                    </div>
                    <div className="w-full mt-4">
                        <label className="block mb-2 text-white">Deadline</label>
                        <input className="w-full h-9 px-2 outline-none rounded-lg bg-white " type="date" name="deadline" required />
                    </div>
                    <div className="w-full mt-5">
                        <label className="block mb-2 text-white">Task Description</label>
                        <textarea name="description" className="w-full h- p-2 outline-none rounded-lg bg-white " placeholder="Type description" required></textarea>
                    </div>
                </div>
                <div className='text-center'>
                    <input type="submit" value="Save" className="bg-yellow-500 inline-block mt-8 py-2 px-8 cursor-pointer text-black font-bold rounded-md" />
                </div>
            </form>
        </div>
    );
};

export default TaskForm;