



import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-800 text-white">

            <div className="max-w-7xl mx-auto flex items-center justify-between h-18 px-5 md:px-20">

              

                <Link to="/">
                    <div className="flex items-center gap-2">

                        <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
//                 </svg>

                        <h1 className="text-xl md:text-3xl font-bold">
                            UniGuide PK
                        </h1>

                    </div>
                </Link>

        

                <ul className="hidden md:flex items-center gap-8">

                    <Link to="/">
                        <li className="hover:font-bold cursor-pointer">
                            Home
                        </li>
                    </Link>

                    <Link to="/universities">
                        <li className="hover:font-bold cursor-pointer">
                            Universities
                        </li>
                    </Link>

                    <Link to="/ranking">
                        <li className="hover:font-bold cursor-pointer">
                            Rankings
                        </li>
                    </Link>

                    <Link to="/about">
                        <li className="hover:font-bold cursor-pointer">
                            About
                        </li>
                    </Link>

                </ul>

            

                <button
                    className="md:hidden  cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {menuOpen ? "✖" : "☰"}

                </button>

            </div>

            
            {menuOpen && (

                <div className="md:hidden bg-slate-800 border-t border-slate-700">

                    <ul className="flex flex-col text-center py-4 gap-4">

                        <Link className="hover:font-bold" to="/" onClick={() => setMenuOpen(false)}>
                            <li>Home</li>
                        </Link>

                        <Link className="hover:font-bold"
                            to="/universities"
                            onClick={() => setMenuOpen(false)}
                        >
                            <li>Universities</li>
                        </Link>

                        <Link className="hover:font-bold"
                            to="/ranking"
                            onClick={() => setMenuOpen(false)}
                        >
                            <li>Rankings</li>
                        </Link>

                        <Link className="hover:font-bold"
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                        >
                            <li>About</li>
                        </Link>

                    </ul>

                </div>

            )}

        </nav>
    );
};

export default Navbar;