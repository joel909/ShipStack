import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle, RotateCcw } from 'lucide-react';

interface EmailConfirmationProps {
    email: string;
    password: string;
    onBackToSignup: () => void;
}

export default function EmailConfirmation({ email,password ,onBackToSignup }: EmailConfirmationProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [showCheckmark, setShowCheckmark] = useState(false);
    const [resendCooldown, setResendCooldown] = useState(0);
    const [isResending, setIsResending] = useState(false);

    useEffect(() => {
        // Trigger entrance animation for confirmation
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        // Show checkmark after mail icon animation
        const checkmarkTimer = setTimeout(() => {
            setShowCheckmark(true);
        }, 800);
        setResendCooldown(60);
        
        const countdown = setInterval(() => {
            setResendCooldown((prev) => {
                if (prev <= 1) {
                    clearInterval(countdown);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            clearTimeout(timer);
            clearTimeout(checkmarkTimer);
        };
    }, []);

    const handleResend = async () => {
        setIsResending(true);
        setResendCooldown(60);
        
        // Simulate API call
        const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const res = await fetch(`${NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })
        const data = await res.json();
        setIsResending(false);
        if (!res.ok) {
            alert(data.data || 'Failed to resend confirmation email');
        }
        else{

        }
        // Start countdown
        const countdown = setInterval(() => {
            setResendCooldown((prev) => {
                if (prev <= 1) {
                    clearInterval(countdown);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    return (
        <section className="bg-sky-200 min-h-screen flex items-center justify-center px-6">
            <div className={`w-full bg-blue-400 rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0 transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}>
                <div className="p-6 space-y-6 sm:p-8">
                    {/* Animated Mail Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className={`transform transition-all duration-500 ease-out ${
                                isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                            }`}>
                                <Mail className="w-16 h-16 text-white" />
                            </div>
                            
                            {/* Animated Checkmark */}
                            <div className={`absolute -top-2 -right-2 transform transition-all duration-300 ease-out ${
                                showCheckmark ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                            }`}>
                                <div className="bg-green-500 rounded-full p-1">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Title with slide-up animation */}
                    <div className={`text-center transform transition-all duration-700 delay-300 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                        <h1 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl mb-2">
                            Check your email
                        </h1>
                        <p className="text-blue-100 text-sm mb-6">
                            We've sent a confirmation link to your email address. Please check your inbox and click the link to verify your account.
                        </p>
                    </div>

                    {/* Email display with fade-in animation */}
                    <div className={`transform transition-all duration-700 delay-500 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                        <div className="bg-blue-300 border border-blue-500 rounded-lg p-4 mb-6">
                            <p className="text-white text-sm text-center font-medium">
                                {email}
                            </p>
                        </div>
                    </div>

                    {/* Resend button with slide-up animation */}
                    <div className={`transform transition-all duration-700 delay-700 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                        <button
                            onClick={handleResend}
                            disabled={resendCooldown > 0 || isResending}
                            className={`w-full flex justify-center items-center text-blue-100 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-200 ${
                                resendCooldown > 0 || isResending
                                    ? 'bg-blue-300 cursor-not-allowed opacity-60'
                                    : 'bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
                            }`}
                        >
                            {isResending ? (
                                <>
                                    <div className="animate-spin mr-2">
                                        <svg className="w-4 h-4 text-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                    </div>
                                    Sending...
                                </>
                            ) : resendCooldown > 0 ? (
                                `Resend in ${resendCooldown}s`
                            ) : (
                                <>
                                    <RotateCcw className="w-4 h-4 mr-2" />
                                    Resend Email
                                </>
                            )}
                        </button>
                    </div>

                    {/* Back to signup link with fade-in animation */}
                    <div className={`text-center transform transition-all duration-700 delay-900 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                        <p className="text-sm font-light text-black">
                            Didn't receive the email? Check your spam folder or{' '}
                            <a href="#" className="font-medium text-blue-800 hover:underline transition-colors duration-200">
                                contact support
                            </a>
                        </p>
                        <p className="text-sm font-light text-black mt-2">
                            <button 
                                onClick={onBackToSignup}
                                className="font-medium text-blue-800 hover:underline transition-colors duration-200"
                            >
                                ← Back to signup
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}