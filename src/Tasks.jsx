import { Link } from "react-router-dom";
import Button from "./components/Button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";


const Tasks = () => {

    const { user } = useContext(AuthContext);

    const { data: tasks = [] } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/tasks/${user?.email}`);
            return res.data;
        }
    })

    console.log(tasks);

    return (
        <div>
            <div className="text-center py-8">
                <Link to="/addTask"><Button text={"Add New Task"}></Button></Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 ">
                <div className="w-[400px] bg-[#31425c] rounded-md p-5 ">
                    <h2 className="text-xl text-center font-bold text-yellow-500 border-b-2 border-b-yellow-500 pb-2 mb-4">TO DO</h2>
                    <div>
                        {
                            tasks?.length === 0 ?
                            <h3 className="text-center text-red-500 font-bold">No Task Here</h3> :
                            <div className="space-y-4">
                                {
                                    tasks?.map(task => 
                                        <div key={task._id} className="bg-[#1e293b] p-3 rounded-md space-y-3">
                                           
                                            <div className="flex justify-between items-center text-xs">
                                                <p><span className="text-yellow-500">Priority:</span> {task.priority}</p>
                                                <p><span className="text-yellow-500">Deadline:</span> {task.deadline}</p>
                                            </div>
                                            <h2 className="text-lg"><span className="text-yellow-500">Task:</span> {task.title}</h2>
                                            <div className="text-sm text-justify"><span className="text-yellow-500">Desciption:</span> {task.description}</div>
                                            <div className="flex justify-between items-center gap-4 flex-col sm:flex-row">
                                                <button className="bg-yellow-500 px-3 py-1 rounded-md text-black font-bold text-xs">Mark as On-Goning</button>
                                                <button className="bg-yellow-500 px-3 py-1 rounded-md text-black font-bold text-xs">Mark as On-Completed</button>
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