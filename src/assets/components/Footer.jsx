import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (

        <footer className="bg-slate-800 text-white h-50 grid grid-cols-3">

            <div className='flex mx-20 flex-col gap-1 mt-10'>
                <div className="flex gap-1">
                    <svg className='mx-3 h-9 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>

                    <h1 className='text-2xl  font-bold'>Uniguide Pk</h1>
                </div>
                <p className="mt-2 ">Your trusted guide to explore, compare and choosse the right university.</p>
            </div>
            <div className="mt-10 flex flex-col items-center">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>

                <ul className="flex gap-10">
                    <Link to="/"><li className="cursor-pointer hover:font-bold transition-all">Home</li></Link>
                    <Link to="/universities"><li className="cursor-pointer hover:font-bold transition-all">Universities</li></Link>
                    <Link to="/ranking"><li className="cursor-pointer hover:font-bold transition-all">Rankings</li></Link>
                    <Link to="/about"><li className="cursor-pointer hover:font-bold transition-all">About</li></Link>
                </ul>
            </div>

            <div className="flex flex-col items-center">
                <h1 className=" text-xl font-bold mt-10 mb-4"> Contact</h1>
                <div className="flex gap-2">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <a
                        href="mailto:mobeengilani29@gmail.com"
                        className="flex items-center gap-2 hover:font-bold"
                    >
                        <span>mobeengilani29@gmail.com</span>
                    </a>
                </div>
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <a
                        href="tel:+923390686869"
                        className="flex items-center gap-2 hover:font-bold"
                    >

                        <span>+92 339 0686869</span>
                    </a>

                </div>
                <div>

                </div>


            </div>




        </footer>
    )
}
export default Footer;