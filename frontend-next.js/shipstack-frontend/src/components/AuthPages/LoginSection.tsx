"use client";
import React, { useState } from 'react';
import ErrorMessageModalV1 from './ErrorMessageModal';
import LoginUserWithEmailIdPassword from '../../libs/auth/login';

export default function LoginSection() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setError] = useState('');
    const [isDisabled, setIsDisabled] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessageModalShown, setErrorMessageModalShown] = useState(false);
    const [isCreateAccountTextVisible, setIsCreateAccountTextVisible] = useState(true);
    async function handleLogin() {
        try{
            setIsDisabled("disabled-div")
            setIsCreateAccountTextVisible(false);
            const request = await LoginUserWithEmailIdPassword(email, password);
            if (request.success){
                console.log("Login successful:", request.data);
            }
            else{
                throw new Error(request.message || 'Login failed');
            }
        }catch (error:any) {
            console.error("Login error:", error);
            if (error.message === "Login failed: Email not confirmed"){
                setError("Email not confirmed. Please check your inbox for the confirmation email or Please try signing up again.");
            }
            else{
                setError(error instanceof Error ? error.message : 'Unknown error');
            }
            setErrorMessageModalShown(true);
            setIsDisabled("");
            setIsCreateAccountTextVisible(true);

        }
    }
    return(
    <section className="bg-sky-200 dark:bg-sky-200">
        <div className="flex flex-col items-center px-6 py-12 mx-auto">
            <div className="w-full bg-blue-400  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-blue-400 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                        Sign In to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="email" onChange={(e)=> setEmail(e.target.value)} name="email" id="email" className="bg-blue-300 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="email" required></input>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" onChange={(e)=> setPassword(e.target.value)} className="bg-blue-300 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required></input>
                        </div>
                        <div className="flex items-start">
                        </div>
                        {/* Error Message Modal Here */}
                        {errorMessageModalShown && <ErrorMessageModalV1 errorMessage={errorMessage} />}
                        
                        <div id="login-btn-container"  onClick={handleLogin}   className={` ${isDisabled}   hover:cursor-pointer  justify-center items-center text-blue-100 bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 `} >
                            {isCreateAccountTextVisible ? 
                            <button type="button"  className={`${isCreateAccountTextVisible} mr-2  hover:cursor-pointer` }>Sign In</button> 
                            :
                            <div role="status" id="loader" className=" flex items-center justify-center ">
                                <span className={`  mr-3 `}>Loading...</span>
                                <svg  aria-hidden="true" className={`h-5  text-gray-200 animate-spin  fill-black`}  viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                            }        
                        </div>
                        <p className="text-sm font-light text-black dark:text-black">
                            Don't have an account? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}