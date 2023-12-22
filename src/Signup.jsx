import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const Signup = () => {

    const navigate = useNavigate();

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();


        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const userInfo = {name, email, photo};
        // console.log(userInfo);

        createUser(email, password)
        .then(res => {
            console.log(res.user)
            Swal.fire({
                icon: 'success',
                text: 'SignUp Successfully!',
            });
            // user info post
            axios.post('https://tasky-server-eight.vercel.app/users', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        text: 'SignUp Successfully!',
                    });
                }
            })
            .catch(err => {
                console.error(err);
            })
            navigate('/dashboard')
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Invalid SignUp Credentials!',
            })
            console.error(error)
        })
    }

    return (
        <div>
            <div className="py-14 px-5">
                <div className=" max-w-xl mx-auto bg-[#152135]  p-10 rounded-md text-white">
                    <h2 className="text-center sm:text-3xl text-2xl font-bold py-9 border-b-2 text-yellow-500 border-b-yellow-500">Register your account</h2>
                    <form className="mt-10 text-blue-950" onSubmit={handleSignUp}>
                        <input className="w-full border-2 bg-white border-white p-2 rounded-md" type="text" name="name" required placeholder="Enter your name" />
                        <input className="w-full border-2 bg-white border-white p-2 rounded-md my-4" type="text" name="photo" required placeholder="Enter your photo URL" />
                        <input className="w-full border-2 border-white p-2 bg-white rounded-md" type="email" name="email" required placeholder="Enter your email address" />
                        <input className="w-full border-2 border-white bg-white p-2 my-4 rounded-md" type="password" name="password" required placeholder="Enter your password" />
                        <input type="submit" className="w-full bg-yellow-500 text-[#08133a] font-bold py-2 rounded-md cursor-pointer" value="Register" />
                    </form>
                    <p className="text-center mt-6 sm:text-md text-sm">Already Have An Account ? <Link className="font-bold text-blue-500" to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;