




import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="bg-gray-50 min-h-screen mt-10">


            <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">

                <div className="text-center">

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">

                        About <span className="">
                            UniGuide
                        </span>

                    </h1>


                    <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">

                        UniGuide is a student-focused platform designed to help students
                        explore universities across Pakistan. Compare institutions,
                        discover rankings, and make informed decisions about your future
                        with confidence.

                    </p>


                    <Link to="/universities">

                        <button className="mt-8 bg-slate-800 cursor-pointer hover:font-bold hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">

                            Explore Universities

                        </button>

                    </Link>

                </div>

            </section>



            {/* Mission Section */}

            <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">

                <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">

                    <h2 className="text-2xl md:text-3xl font-bold text-center">

                        Our Mission

                    </h2>


                    <p className="text-gray-600 text-center mt-6 leading-8">

                        Our mission is to simplify the university selection process for
                        students in Pakistan. Instead of searching through multiple
                        websites, UniGuide provides rankings, university information,
                        program details, and comparison tools in one place.

                    </p>

                </div>

            </section>
                        {/* Features Section */}

            <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">

                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">

                    What UniGuide Offers

                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">


                    {/* Card 1 */}

                    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                        <div className="text-5xl">
                            🏛
                        </div>

                        <h3 className="text-xl font-bold mt-5">
                            Universities
                        </h3>

                        <p className="text-gray-600 mt-3">
                            Explore Pakistan's top public and private universities with detailed information.
                        </p>

                    </div>



                    {/* Card 2 */}

                    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                        <div className="text-5xl">
                            📊
                        </div>

                        <h3 className="text-xl font-bold mt-5">
                            Rankings
                        </h3>

                        <p className="text-gray-600 mt-3">
                            Discover program-wise university rankings to make better academic decisions.
                        </p>

                    </div>



                    {/* Card 3 */}

                    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                        <div className="text-5xl">
                            ⚖️
                        </div>

                        <h3 className="text-xl font-bold mt-5">
                            Compare
                        </h3>

                        <p className="text-gray-600 mt-3">
                            Compare universities side by side based on programs, fees and facilities.
                        </p>

                    </div>



                    {/* Card 4 */}

                    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                        <div className="text-5xl">
                            📚
                        </div>

                        <h3 className="text-xl font-bold mt-5">
                            Detailed Information
                        </h3>

                        <p className="text-gray-600 mt-3">
                            View admissions, scholarships, hostel facilities, fee structure and much more.
                        </p>

                    </div>


                </div>

            </section>




            {/* Why Choose UniGuide */}

            <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">


                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">

                    Why Choose UniGuide?

                </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">


                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">


                        <h3 className="font-bold text-xl mb-5">

                            Why Students Trust Us

                        </h3>


                        <ul className="space-y-4 text-gray-600">

                            <li>✅ Easy-to-use interface</li>

                            <li>✅ Program-wise university rankings</li>

                            <li>✅ Compare multiple universities</li>

                            <li>✅ Detailed university profiles</li>

                            <li>✅ Accurate and organized information</li>

                            <li>✅ Fast and responsive experience</li>

                        </ul>


                    </div>



                    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8 text-white">


                        <h3 className="font-bold text-2xl">

                            Our Vision

                        </h3>


                        <p className="mt-5 leading-8">

                            We aim to become Pakistan's most trusted university guidance platform by providing students with reliable, organized, and easy-to-access educational information in one place.

                        </p>


                    </div>


                </div>


            </section>
                        {/* Statistics Section */}

            <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">

                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">
                    UniGuide at a Glance
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">


                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                        <h3 className="text-4xl font-extrabold text-slate-800">
                            20+
                        </h3>

                        <p className="mt-3 text-gray-600 font-medium">
                            Universities
                        </p>

                    </div>



                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                        <h3 className="text-4xl font-extrabold text-slate-700">
                            150+
                        </h3>

                        <p className="mt-3 text-gray-600 font-medium">
                            Programs
                        </p>

                    </div>



                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                        <h3 className="text-4xl font-extrabold text-slate-700">
                            120+
                        </h3>

                        <p className="mt-3 text-gray-600 font-medium">
                            Rankings
                        </p>

                    </div>



                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                        <h3 className="text-3xl font-extrabold text-slate-700">
                            Main Cities
                        </h3>

                        <p className="mt-3 text-gray-600 font-medium">
                            Pakistan Coverage
                        </p>

                    </div>


                </div>

            </section>




            {/* Call To Action */}

            <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12 md:pb-20">

                <div className="bg-slate-800 rounded-3xl text-white text-center py-10 md:py-16 px-6 md:px-8">


                    <h2 className="text-3xl md:text-4xl font-bold">

                        Ready to Find Your Dream University?

                    </h2>


                    <p className="mt-5 text-base md:text-lg max-w-2xl mx-auto text-blue-100">

                        Start exploring Pakistan's top universities, compare programs,
                        and choose the institution that best matches your future goals.

                    </p>


                    <Link to="/universities">

                        <button className="mt-8 bg-white text-slate-800 cursor-pointer hover:font-bold font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300">

                            Explore Universities

                        </button>

                    </Link>


                </div>

            </section>


        </div>
    );
}