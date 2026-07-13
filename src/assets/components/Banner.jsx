import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div
            className="pt-20 min-h-[850px] bg-cover bg-center relative"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(30,64,175,0.35), rgba(30,64,175,0.35)), url('/images/university.jpg')",
            }}
        >

          
            <div className="flex flex-col items-center py-10 max-md:px-5">

                <h1 className="py-4 text-5xl max-md:text-3xl text-white font-bold text-center">
                    Find the Right University for Your Goals
                </h1>

                <h2 className="text-xl max-md:text-base text-white text-center my-4">
                    Explore top universities, compare programs, and find the perfect path for your future.
                </h2>

                <Link to="/universities">
                    <button
                        className="
                        my-4
                        cursor-pointer
                        hover:font-bold
                        transition-all
                        text-lg
                        max-md:text-base
                        py-2
                        px-8
                        max-md:px-6
                        bg-slate-800
                        rounded-2xl
                        text-white"
                    >
                        Explore Universities
                    </button>
                </Link>

            </div>

            
               
                <div
                    className="
                landcard
                flex
                shadow-md 
                max-md:flex-wrap
                max-md:justify-center
                max-md:gap-5
                
                "
                >

                    
                    <div className="
                mx-17 shadow-lg border-2 border-slate-800 mt-10
                card1 bg-white w-60 h-50 rounded-3xl py-12 px-8
                flex flex-col items-center

                max-md:mx-2
                max-md:mt-8
                max-md:w-40
                max-md:h-40
                max-md:px-3
                max-md:py-5">

                        <svg className="h-7 max-md:h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>

                        <h1 className="font-bold text-center text-3xl max-md:text-2xl">20+</h1>

                        <h2 className="text-center text-lg max-md:text-sm">
                            Universities
                        </h2>

                    </div>

                   
                    <div className="
                mx-17 shadow-lg border-2 border-slate-800 mt-10
                card2 bg-white w-60 h-50 rounded-3xl py-12 px-8
                flex flex-col items-center

                max-md:mx-2
                max-md:mt-8
                max-md:w-40
                max-md:h-40
                max-md:px-3
                max-md:py-5">

                        <svg className="h-7 max-md:h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>

                        <h1 className="font-bold text-center text-3xl max-md:text-2xl">150+</h1>

                        <h2 className="text-center text-lg max-md:text-sm">
                            Programs
                        </h2>

                    </div>

                   
                    <div className="
                mx-17 shadow-lg border-2 border-slate-800 mt-10
                card3 bg-white w-60 h-50 rounded-3xl py-12 px-8
                flex flex-col items-center

                max-md:mx-2
                max-md:mt-8
                max-md:w-40
                max-md:h-40
                max-md:px-3
                max-md:py-5">

                        <svg className="h-7 max-md:h-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                        </svg>

                        <h1 className="font-bold text-center text-3xl max-md:text-2xl">10+</h1>

                        <h2 className="text-center text-lg max-md:text-sm">
                            Scholarships
                        </h2>

                    </div>

                    
                    <div className="
               mx-17 shadow-lg border-2 border-slate-800 mt-10
                card4 bg-white w-60 h-50 rounded-3xl py-12 px-8
                flex flex-col items-center

                max-md:mx-2
                max-md:mt-8
                max-md:w-40
                max-md:h-40
                max-md:px-3
                max-md:py-5">

                        <svg className="h-7 max-md:h-5 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>

                        <h1 className="font-bold text-center text-3xl max-md:text-2xl">5000+</h1>

                        <h2 className="text-center text-lg max-md:text-sm">
                            Students Helped
                        </h2>

                                    </div>

            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white"></div>

        </div>
    );
};

export default Banner;