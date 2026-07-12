


import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
    return (
        <div className="mx-5  md:mx-8 lg:mx-15">

            <div className="mx-auto py-10 md:py-14 lg:py-16">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-10">

                    <div className="md:mt-10">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 ">
                            Featured Universities
                        </h1>

                        <p className="text-slate-500 mt-2 text-sm md:text-base">
                            Explore Pakistan's top universities.
                        </p>
                    </div>

                    <Link
                        to="/universities"
                        className="bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-700 transition w-full md:w-auto text-center"
                    >
                        View More →
                    </Link>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

                                        {/* FAST */}
                    <Link to="/university/1">
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer hover:-translate-y-2 h-full flex flex-col">

                            <img
                                src="/images/Fastlah.jpg"
                                alt="FAST"
                                className="w-full h-48 md:h-52 lg:h-44 object-cover"
                            />

                            <div className="p-5 md:p-6 flex flex-col flex-grow">

                                <h2 className="text-xl md:text-2xl lg:text-xl font-bold">
                                    FAST University Lahore
                                </h2>

                                <div className="flex items-center gap-2 text-slate-500 mt-2 text-sm md:text-base lg:text-sm">

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

                                <p className="mt-4 text-sm md:text-base lg:text-sm text-slate-600 flex-grow">
                                    Top Choice for Computer Science & IT
                                </p>

                                <span className="text-slate-800 font-semibold mt-4">
                                    View Details →
                                </span>

                            </div>

                        </div>
                    </Link>

                                        {/* NUST */}
                    <Link to="/university/2">

                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer hover:-translate-y-2 h-full flex flex-col">

                            <img
                                src="/images/NUST.jpg"
                                alt="NUST"
                                className="w-full h-48 md:h-52 lg:h-44 object-cover"
                            />

                            <div className="p-5 md:p-6 flex flex-col flex-grow">

                                <h2 className="text-xl md:text-2xl lg:text-xl font-bold">
                                    NUST
                                </h2>

                                <div className="flex items-center gap-2 text-slate-500 mt-2 text-sm md:text-base lg:text-sm">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    Islamabad

                                </div>

                                <p className="mt-4 text-sm md:text-base lg:text-sm text-slate-600 flex-grow">
                                    Best for Engineering & Technology
                                </p>

                                <span className="text-slate-800 font-semibold mt-4">
                                    View Details →
                                </span>

                            </div>

                        </div>
                    </Link>

                    {/* Aga Khan */}
                    <Link to="/university/15">

                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer hover:-translate-y-2 h-full flex flex-col">

                            <img
                                src="/images/agakhan.jpg"
                                alt="Aga Khan"
                                className="w-full h-48 md:h-52 lg:h-44 object-cover"
                            />

                            <div className="p-5 md:p-6 flex flex-col flex-grow">

                                <h2 className="text-xl md:text-2xl lg:text-xl font-bold">
                                    Aga Khan University
                                </h2>

                                <div className="flex items-center gap-2 text-slate-500 mt-2 text-sm md:text-base lg:text-sm">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    Karachi

                                </div>

                                <p className="mt-4 text-sm md:text-base lg:text-sm text-slate-600 flex-grow">
                                    Excellence in Medicine & Healthcare
                                </p>

                                <span className="text-slate-800 font-semibold mt-4">
                                    View Details →
                                </span>

                            </div>

                        </div>
                    </Link>

                                        {/* LUMS */}
                    <Link to="/university/4">

                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer hover:-translate-y-2 h-full flex flex-col">

                            <img
                                src="/images/Lums.jpg"
                                alt="LUMS"
                                className="w-full h-48 md:h-52 lg:h-44 object-cover"
                            />

                            <div className="p-5 md:p-6 flex flex-col flex-grow">

                                <h2 className="text-xl md:text-2xl lg:text-xl font-bold">
                                    LUMS
                                </h2>

                                <div className="flex items-center gap-2 text-slate-500 mt-2 text-sm md:text-base lg:text-sm">

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

                                <p className="mt-4 text-sm md:text-base lg:text-sm text-slate-600 flex-grow">
                                    Business, Innovation & Leadership
                                </p>

                                <span className="text-slate-800 font-semibold mt-4">
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