"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://byuvnihclxpijiodathr.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // State to handle form submission status
    const router = useRouter();  // Initialize the useRouter hook

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Prevent multiple submissions
        const { error } = await supabase.auth.signUp({
            email,
            password,
        });
        setIsSubmitting(false);
        if (error) {
            setError(error.message);
        } else {
            // Redirect to the login page or another page
            router.push('/auth-login');
        }
    };

    return (
        <>
            <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
                <div
                    style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
                    className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover">
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"></div>
                <div className="container z-3">
                        <div className="flex justify-center">
                            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
                                <Link href="/"><Image src="/images/logo-icon-64.png" className="mx-auto" alt="" width={64} height={64} /></Link>
                                <h5 className="my-6 text-xl font-semibold">Signup</h5>
                                <form className="text-start" onSubmit={handleSignup}>
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="RegisterName">Your Name:</label>
                                            <input
                                                id="RegisterName"
                                                type="text"
                                                className="form-input mt-3"
                                                placeholder="Harry"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                            <input
                                                id="LoginEmail"
                                                type="email"
                                                className="form-input mt-3"
                                                placeholder="name@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                            <input
                                                id="LoginPassword"
                                                type="password"
                                                className="form-input mt-3"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <div className="flex items-center w-full mb-0">
                                                <input className="form-checkbox text-green-600 rounded w-4 h-4 me-2 border border-inherit" type="checkbox" value="" id="AcceptT&C" />
                                                <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">I Accept <Link href="#" className="text-green-600">Terms And Condition</Link></label>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full" disabled={isSubmitting}>
                                                {isSubmitting ? 'Registering...' : 'Register'}
                                            </button>
                                        </div>

                                        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                                        <div className="text-center">
                                            <span className="text-slate-400 me-2">Already have an account ? </span> <Link href="/auth-login" className="text-black dark:text-white font-bold">Sign in</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                 </div>
            </section>
        </>
    );
}
