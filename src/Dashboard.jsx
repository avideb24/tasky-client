import { useContext } from "react";
import Button from "./components/Button";
import { AuthContext } from "./provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Tasks from "./Tasks";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { signOutUser } = useContext(AuthContext);

    // load the user
    const { data: loggedUser = {} } = useQuery({
        queryKey: ['loggedUser', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/${user?.email}`);
            return res.data;
        }
    })
    // console.log(loggedUser);





    // user logout
    const handleLogOut = () => {
        signOutUser()
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'LogOut Successfully!',
                })
                console.log(res);
                navigate('/')
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something Wrong!',
                })
                console.error(err)
            })
    }

    return (
        <div className="max-w-7xl mx-auto py-5">
            <div className="mx-5">
                <div className="flex justify-between items-center gap-5 flex-col md:flex-row">
                    <h2 className="text-2xl md:text-4xl text-yellow-500 font-bold"> {loggedUser?.name}&apos;s Task-Board</h2>
                    <div className="flex gap-3 items-center">
                        <img className="w-12 h-12 object-cover rounded-full" src={loggedUser?.photo} alt="" />
                        <p onClick={handleLogOut}>
                            <Button text={"Log Out"}></Button>
                        </p>
                    </div>
                </div>
                <div className="py-8">
                    <Tasks></Tasks>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;