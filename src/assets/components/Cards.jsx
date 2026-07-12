import React from "react";
import { Link } from "react-router-dom";
const Cards = () => {
    return (
        <div className="mx-15">

            <div className=" mx-auto  py-16">

                <div className="flex justify-between items-center mb-10">

                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">
                            Featured Universities
                        </h1>

                        <p className="text-slate-500 mt-2">
                            Explore Pakistan's top universities.
                        </p>
                    </div>

                    <Link
                        to="/universities"
                        className="bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-700 transition"
                    >
                        View More →
                    </Link>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">

                    {/* FAST */}
                    <Link to="/university/1">
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer  hover:-translate-y-2 ">

                            <img
                                src="/images/Fastlah.jpg" 
                                alt="FAST"
                                className="w-full h-44 object-cover"
                            />

                            <div className="p-5">

                                <h2 className="text-xl font-bold">
                                    FAST University Lahore
                                </h2>

                                <div className="flex items-center gap-2 text-slate-500 mt-2">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                        />
                                    </svg>

                                    Lahore

                                </div>

                                <p className="mt-4 text-sm text-slate-600">
                                    Top Choice for Computer Science & IT
                                </p>


                                <span className="text-slate-800 font-semibold">
                                    View Details →
                                </span>

                            </div>

                        </div>
                    </Link>

                    {/* NUST */}
                    <Link to="/university/2">

                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer  hover:-translate-y-2 ">

                            <img
                                src="/images/NUST.jpg" 
                                alt="NUST"
                                className="w-full h-44 object-cover"
                            />

                            <div className="p-5">

                                <h2 className="text-xl font-bold">
                                    NUST
                                </h2>

                                <div className="flex items-center gap-2 text-slate-500 mt-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    Islamabad

                                </div>

                                <p className="mt-4 text-sm text-slate-600">
                                    Best for Engineering & Technology
                                </p>

                               <span className="text-slate-800 font-semibold">
                                    View Details →
                                </span>

                            </div>

                        </div>
                    </Link>

                    {/* Aga Khan */}
                    <Link to="/university/15">

                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer hover:-translate-y-2">

                            <img src="/images/agakhan.jpg"  alt="Aga Khan" className="w-full h-44 object-cover" />

                            <div className="p-5">

                                <h2 className="text-xl font-bold">
                                    Aga Khan University
                                </h2>

                                <div className="flex items-center gap-2 text-slate-500 mt-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    Karachi

                                </div>

                                <p className="mt-4 text-sm text-slate-600">
                                    Excellence in Medicine & Healthcare
                                </p>

                                <span className="text-slate-800 font-semibold">
                                    View Details →
                                </span>

                            </div>

                        </div>
                    </Link>

                    {/* LUMS */}
                    <Link to="/university/4">

                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer hover:-translate-y-2 ">

                            <img src="/images/Lums.jpg"  alt="LUMS" className="w-full h-44 object-cover" />

                            <div className="p-5">

                                <h2 className="text-xl font-bold">
                                    LUMS
                                </h2>

                                <div className="flex items-center gap-2 text-slate-500 mt-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    Lahore

                                </div>

                                <p className="mt-4 text-sm text-slate-600">
                                    Business, Innovation & Leadership
                                </p>

                               <span className="text-slate-800 font-semibold">
                                    View Details →
                                </span>

                            </div>

                        </div>
                    </Link>

                </div>

            </div>
        </div>
    );
};
export default Cards;