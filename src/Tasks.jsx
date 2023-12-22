import { Link } from "react-router-dom";
import Button from "./components/Button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import Swal from "sweetalert2";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";


const Tasks = () => {

    const { user } = useContext(AuthContext);

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/tasks/${user?.email}`);
            return res.data;
        }
    })

    const toDoTasks = tasks?.filter(task => task.status === 'pending');
    const onGoingTasks = tasks?.filter(task => task.status === 'ongoing');
    const completedTasks = tasks?.filter(task => task.status === 'completed');

    // console.log(tasks);


    const handleChangeToOnGoing = id => {
        // console.log(id);
        axios.patch(`http://localhost:5000/task/ongoing/${id}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Saved!',
                    });
                    refetch()
                }
            })
            .catch(err => {
                console.error(err);
            })
    };

    const handleChangeToCompleted = id => {
        // console.log(id);
        axios.patch(`http://localhost:5000/task/completed/${id}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Saved!',
                    });
                    refetch()
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleUpdateTask = id => {
        console.log(id);
    }

    const handleDeleteTask = id => {
        console.log(id);
    }


    return (
        <div>
            <div className="text-center py-8">
                <Link to="/addTask"><Button text={"Add New Task"}></Button></Link>
            </div>
            <div className="flex flex-wrap justify-center gap-5 ">
                <div className="w-[400px] bg-[#31425c] rounded-md p-5 ">
                    <h2 className="text-xl text-center font-bold text-yellow-500 border-b-2 border-b-yellow-500 pb-2 mb-4">TO DO</h2>
                    <div>
                        {
                            toDoTasks?.length === 0 ?
                                <h3 className="text-center text-red-500 font-bold">No Task Here</h3> :
                                <div className="space-y-4">
                                    {
                                        toDoTasks?.map(task =>
                                            <div key={task._id} className="bg-[#1e293b] p-3 rounded-md space-y-3">

                                                <div className="flex justify-between items-center text-xs">
                                                    <p><span className="text-yellow-500">Priority:</span> {task.priority}</p>
                                                    <p><span className="text-yellow-500">Deadline:</span> {task.deadline.split('-').reverse().join('-')}</p>
                                                </div>
                                                <h2 className="text-lg"><span className="text-yellow-500">Task:</span> {task.title}</h2>
                                                <div className="text-sm text-justify"><span className="text-yellow-500">Desciption:</span> {task.description}</div>
                                                <div className="flex justify-between items-center gap-4 flex-col sm:flex-row">
                                                    <button onClick={() => handleChangeToOnGoing(task._id)} className="bg-yellow-500 px-3 py-1 rounded-md text-black font-bold text-xs">Mark as On-Going</button>
                                                    <button onClick={() => handleChangeToCompleted(task._id)} className="bg-yellow-500 px-3 py-1 rounded-md text-black font-bold text-xs">Mark as Completed</button>
                                                </div>
                                                <div className="flex justify-between items-center gap-4 px-5">
                                                    <button onClick={() => handleUpdateTask(task._id)} className="text-yellow-500 text-2xl border-2 border-yellow-500 rounded-md p-1 mt-4"><AiFillEdit></AiFillEdit></button>
                                                    <button onClick={() => handleDeleteTask(task._id)} className="text-yellow-500 text-2xl border-2 border-yellow-500 rounded-md p-1 mt-4"><BsFillTrashFill></BsFillTrashFill></button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                        }
                    </div>
                </div>

                <div className="w-[400px] bg-[#31425c] rounded-md p-5 ">
                    <h2 className="text-xl text-center font-bold text-yellow-500 border-b-2 border-b-yellow-500 pb-2 mb-4">On-Going</h2>
                    <div>
                        {
                            onGoingTasks?.length === 0 ?
                                <h3 className="text-center text-red-500 font-bold">No Task Here</h3> :
                                <div className="space-y-4">
                                    {
                                        onGoingTasks?.map(task =>
                                            <div key={task._id} className="bg-[#1e293b] p-3 rounded-md space-y-3">

                                                <div className="flex justify-between items-center text-xs">
                                                    <p><span className="text-yellow-500">Priority:</span> {task.priority}</p>
                                                    <p><span className="text-yellow-500">Deadline:</span> {task.deadline.split('-').reverse().join('-')}</p>
                                                </div>
                                                <h2 className="text-lg"><span className="text-yellow-500">Task:</span> {task.title}</h2>
                                                <div className="text-sm text-justify"><span className="text-yellow-500">Desciption:</span> {task.description}</div>
                                                <div className="flex justify-between items-center gap-4">
                                                    <p className="mt-4 text-xs text-orange-600">Ongoing</p>
                                                    <button onClick={() => handleChangeToCompleted(task._id)} className="bg-yellow-500 px-3 py-1 rounded-md text-black font-bold text-xs">Mark as Completed</button>
                                                </div>
                                                <div className="flex justify-between items-center gap-4 px-5">
                                                    <button onClick={() => handleUpdateTask(task._id)} className="text-yellow-500 text-2xl border-2 border-yellow-500 rounded-md p-1 mt-4"><AiFillEdit></AiFillEdit></button>
                                                    <button onClick={() => handleDeleteTask(task._id)} className="text-yellow-500 text-2xl border-2 border-yellow-500 rounded-md p-1 mt-4"><BsFillTrashFill></BsFillTrashFill></button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                        }
                    </div>
                </div>

                <div className="w-[400px] bg-[#31425c] rounded-md p-5 ">
                    <h2 className="text-xl text-center font-bold text-yellow-500 border-b-2 border-b-yellow-500 pb-2 mb-4">Completed</h2>
                    <div>
                        {
                            completedTasks?.length === 0 ?
                                <h3 className="text-center text-red-500 font-bold">No Task Here</h3> :
                                <div className="space-y-4">
                                    {
                                        completedTasks?.map(task =>
                                            <div key={task._id} className="bg-[#1e293b] p-3 rounded-md space-y-3">

                                                <div className="flex justify-between items-center text-xs">
                                                    <p><span className="text-yellow-500">Priority:</span> {task.priority}</p>
                                                    <p><span className="text-yellow-500">Deadline:</span> {task.deadline.split('-').reverse().join('-')}</p>
                                                </div>
                                                <h2 className="text-lg"><span className="text-yellow-500">Task:</span> {task.title}</h2>
                                                <div className="text-sm text-justify"><span className="text-yellow-500">Desciption:</span> {task.description}</div>
                                                <div className="flex justify-between items-center gap-4 flex-col sm:flex-row">
                                                    <p className="mt-4 text-xs text-green-500">This task is completed</p>
                                                </div>
                                                <div className="flex justify-between items-center gap-4 px-5">
                                                    <button onClick={() => handleUpdateTask(task._id)} className="text-yellow-500 text-2xl border-2 border-yellow-500 rounded-md p-1 mt-4"><AiFillEdit></AiFillEdit></button>
                                                    <button onClick={() => handleDeleteTask(task._id)} className="text-yellow-500 text-2xl border-2 border-yellow-500 rounded-md p-1 mt-4"><BsFillTrashFill></BsFillTrashFill></button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;