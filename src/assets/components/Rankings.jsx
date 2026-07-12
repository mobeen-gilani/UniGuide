



import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Rankings = () => {
    const navigate = useNavigate();

    return (
        <div className="mx-5 md:mx-15 mb-10">

            <div className="flex flex-col md:flex-row justify-between items-center">

                <h1 className="py-4 font-bold text-3xl">
                    Rankings
                </h1>

                <Link
                    to="/ranking"
                    className="bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-700 transition"
                >
                    Explore More →
                </Link>

            </div>


            <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-25">
                <div 
                    onClick={() => navigate("/rankings/computer-science")} 
                    className="mt-4 h-auto w-full md:w-1/2 lg:w-122 px-8 shadow-xl rounded-2xl py-3 bg-white transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
                >

                    <h2 className="text-2xl font-bold mt-6">
                        Computer Science
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Top universities in Pakistan
                    </p>

                    <div className="py-4 text-sm">

                        <div className="flex items-center gap-3 py-1">
                            <h1>1.</h1>
                            <h1>FAST-NUCES</h1>
                        </div>

                        <div className="flex items-center gap-3 py-1">
                            <h1>2.</h1>
                            <h1>NUST</h1>
                        </div>

                        <div className="flex items-center gap-3 py-1">
                            <h1>3.</h1>
                            <h1>COMSATS</h1>
                        </div>

                        <div className="flex items-center gap-3 py-1">
                            <h1>4.</h1>
                            <h1>LUMS</h1>
                        </div>

                    </div>

                    <div>
                        <button onClick={() => navigate("/ranking")}>
                            View Full Rankings →
                        </button>
                    </div>

                </div>



                <div 
                    onClick={() => navigate("/rankings/engineering")} 
                    className="mt-4 cursor-pointer h-auto w-full md:w-1/2 lg:w-122 px-8 shadow-xl rounded-2xl py-3 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >

                    <h2 className="text-2xl font-bold mt-6">
                        Engineering
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Top universities in Pakistan
                    </p>

                    <div className="py-4 text-sm">

                        <div className="flex items-center gap-3 py-1">
                            <h1>1.</h1>
                            <h1>NUST</h1>
                        </div>

                        <div className="flex items-center gap-3 py-1">
                            <h1>2.</h1>
                            <h1>PIEAS</h1>
                        </div>

                        <div className="flex items-center gap-3 py-1">
                            <h1>3.</h1>
                            <h1>GIKI</h1>
                        </div>

                        <div className="flex items-center gap-3 py-1">
                            <h1>4.</h1>
                            <h1>UET Lahore</h1>
                        </div>

                    </div>

                    <div>
                        <button onClick={() => navigate("/ranking")}>
                            View Full Rankings →
                        </button>
                    </div>

                </div>
                                <div 
                    onClick={() => navigate("/rankings/business")} 
                    className="cursor-pointer mt-4 h-auto w-full md:w-1/2 lg:w-122 px-8 shadow-xl rounded-2xl py-3 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >

                    <h2 className="text-2xl font-bold mt-6">
                        Business
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Top universities in Pakistan
                    </p>

                    <div className="py-4 text-sm">

                        <div className="flex items-center gap-3 py-1">
                            <h1>1.</h1>
                            <h1>
                                Institute of Business Administration (IBA)
                            </h1>
                        </div>

                        <div className="flex items-center gap-3 py-1">
                            <h1>2.</h1>
                            <h1>LUMS</h1>
                        </div>

                        <div className="flex items-center gap-3 py-1">
                            <h1>3.</h1>
                            <h1>
                                Lahore School of Economics (LSE)
                            </h1>
                        </div>

                        <div className="flex items-center gap-3 py-1">
                            <h1>4.</h1>
                            <h1>
                                Sukkur IBA University
                            </h1>
                        </div>

                    </div>


                    <div>
                        <button onClick={() => navigate("/ranking")}>
                            View Full Rankings →
                        </button>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Rankings;