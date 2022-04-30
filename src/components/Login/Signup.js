import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    // handle user info in state 
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    // handle errors in state 
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    // validate and set the name
    const handleNameChange = (e) => {
        setUserInfo({ ...userInfo, name: e.target.value });
    }

    // validate and set the email
    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" })
        }
        else {
            setErrors({ ...errors, email: "Email not Valid" });
        }
    }

    // validate and set the password 
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        }
        else {
            setErrors({ ...errors, password: "Password should at least 6 chracters long" });
        }
    }

    // validate and set the confirm password field
    const handleConfirmPasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            if (userInfo.password === e.target.value) {
                setUserInfo({ ...userInfo, confirmPassword: e.target.value });
                setErrors({ ...errors, confirmPassword: "" });
            }
            else {
                setErrors({ ...errors, confirmPassword: "Password didn't match" });
            }
        }
        else {
            setErrors({ ...errors, confirmPassword: "Password should at least 6 chracters long" });
        }
    }

    // create user with email and password 
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleCreateUserWithEmailAndPassword = (e) => {
        e.preventDefault();
        if (userInfo.password === userInfo.confirmPassword) {
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        }
        else {
            console.log("Password mismatch");
            console.log(userInfo.password, userInfo.confirmPassword);
        }
    }
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // handle successful and failed registration notification and redirect
    useEffect(() => {
        if (emailUser) {
            toast.success("Account created successfully. Please verify your account by clicking on the link sent to your email.");
            navigate(from, { replace: true });
        }
        if (emailError) {
            switch (emailError?.code) {
                case "auth/email-already-in-use":
                    toast.warn("Email already exist ")
                    break;
                case "auth/invalid-email":
                    toast.warn("Invalid Email")
                    break;
                default:
                    break;
            }
        }
    }, [emailUser, emailError])

    return (
        <div className='bg-gray-700 h-screen flex items-center justify-center pt-16'>
            <div className='md:w-1/4 mx-auto pt-6'>
                <h1 className='text-lg font-semibold my-4 text-white'>Please Sign up</h1>
                <form onSubmit={handleCreateUserWithEmailAndPassword} className='bg-gray-800 p-6 shadow-xl rounded-md'>
                    <div className="mb-6">
                        <input type="text" id="name" onChange={handleNameChange} className="shadow-sm bg-gray-400 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Name" required />
                    </div>
                    <div className="mb-6">
                        <input type="email" id="email" onChange={handleEmailChange} className="shadow-sm bg-gray-400 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required />
                        {
                            errors?.email && <p className='text-red-500 text-left'>{errors.email}</p>
                        }
                    </div>
                    <div className="mb-6">
                        <input type="password" id="password" onChange={handlePasswordChange} className="shadow-sm bg-gray-400 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Password' required />
                        {
                            errors?.password && <p className='text-red-500 text-left'>{errors.password}</p>
                        }
                    </div>
                    <div className="mb-6">
                        <input type="password" id="repeat-password" onChange={handleConfirmPasswordChange} className="shadow-sm bg-gray-400 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Confirm Password' required />
                        {
                            errors?.confirmPassword && <p className='text-red-500 text-left'>{errors.confirmPassword}</p>
                        }
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 bg-gray-400 rounded focus:ring-3 focus:ring-blue-300 " required />
                        </div>
                        <div className="ml-3 text-sm">
                            <label for="terms" className="font-medium text-gray-50 dark:text-gray-300">I agree with the <a href="#" className="text-pink-500 hover:underline dark:text-blue-500 italic">terms and conditions</a></label>
                        </div>
                    </div>
                    <button type="submit" className="mb-6 text-white bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register new account</button>
                    <br />
                    <small className='text-sm text-gray-50'>Already have an account?<Link to='/login'> <span className='text-pink-500 hover:underline italic'>Please Sign in.</span></Link> </small>

                    <ToastContainer />
                </form>
            </div>
        </div >
    );
};

export default Signup;