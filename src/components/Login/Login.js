import React, { useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // set user informations in state 
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    // set errors state
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    // set the email on change 
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

    // set password on change 
    const handlePasswordChange = (e) => {
        setUserInfo({ ...userInfo, password: e.target.value })
    }

    // sign in with email and password 
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError,] = useSignInWithEmailAndPassword(auth);
    const handleSignInWithEmailAndPassword = async e => {
        e.preventDefault();
        await signInWithEmailAndPassword(userInfo.email, userInfo.password);


        //send data to the server
        fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo.email)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    // user sign in successful and failed notification 
    useEffect(() => {
        if (emailUser) {
            toast.success("Successfully Logged in");
        }
        if (emailError) {
            switch (emailError?.code) {
                case "auth/user-not-found":
                    toast.warn("No account with this email")
                    break;
                case "auth/wrong-password":
                    toast.warn("Wrong Password")
                    break;
                default:
                    toast.warn("Login failed")
                    break;
            }
        }
    }, [emailUser, emailError])

    // Sign in with google account 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }

    // sign in with facebook 
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const handleSignInWithFacebook = () => {
        signInWithFacebook();
    }

    // sign in with Github 
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const handleSignInWithGithub = () => {
        signInWithGithub();
    }

    const [resetCall, setResetCall] = useState(false);
    // Handle Password Reset 
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const handleResetPassword = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            setResetCall(true);
        }
        else {
            setErrors({ ...errors, email: "Enter an email" });
        }
    }
    // handle reset password error and success toast 
    useEffect(() => {
        if (resetCall) {
            if (resetError) {
                if (resetError.message.includes("user-not-found")) {
                    toast("No account with this email")
                }
                else if (resetError.message.includes("auth/invalid-email")) {
                    toast.warn("Email not valid");
                }
                else {
                    toast.warn("Something went wrong")
                }
            }
            else {
                toast.success("Password reset email sent");
            }
            setResetCall(false);
        }
    }, [resetCall])

    // getting the current user state 
    const [authUser, authLoading, authError] = useAuthState(auth);

    // getting the redirect location from Require Auth 
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    // navigate to required page if user exists 
    useEffect(() => {
        if (authUser) {
            // navigate(from, { replace: true });
        }
        if (authError) {
            toast.warn(authError.message);
        }
    }, [authUser, authError])

    return (
        <div>
            {
                authLoading ?
                    <div class="text-center flex justify-center items-center h-screen">
                        <svg role="status" class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                    :
                    <div className='flex items-center justify-center bg-gray-600 h-screen pt-16'>
                        <div className='md:w-1/4 w-3/4'>
                            <h2 className='text-lg font font-semibold mb-4 text-white'>Please Login</h2>
                            <div className=' bg-gray-800 p-6 shadow-xl rounded-md'>
                                <form onSubmit={handleSignInWithEmailAndPassword}>
                                    <div className="mb-6">
                                        <input type="email" id="email" onChange={handleEmailChange} className="bg-gray-400 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required />
                                        {
                                            errors?.email && <p className='text-red-500 text-left'>{errors.email}</p>
                                        }
                                    </div>
                                    <div className="mb-6">
                                        <input type="password" id="password" onChange={handlePasswordChange} className="bg-gray-400 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Password' required />
                                    </div>
                                    <div className="flex items-start mb-6">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-400 rounded focus:ring-3 focus:ring-blue-300 " required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="font-medium text-gray-50 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <button type="submit" className="mb-2 text-white bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Login</button>
                                    <br />

                                </form>
                                <div>

                                    <button onClick={handleResetPassword} className='text-pink-500 hover:underline italic'> <small>Forgot Password?</small></button>
                                    <br />

                                    <small className='text-gray-50'>New here? <Link to='/signup'><span className='text-pink-500 hover:underline italic'>Please Register.</span></Link></small>

                                    <div className='flex justify-center items-center text-white mt-2'>
                                        <hr className='w-1/2' />
                                        <p className='px-1'>OR</p>
                                        <hr className='w-1/2' />
                                    </div>

                                    <div className='grid'>
                                        <button onClick={handleSignInWithGoogle} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                            <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                            Google
                                        </button>
                                        <button onClick={handleSignInWithFacebook} type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                                            <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                                            Facebook
                                        </button>
                                        <button onClick={handleSignInWithGithub} type="button" className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                            <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                            Github
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <ToastContainer />

                    </div >
            }
        </div>
    );
};

export default Login;