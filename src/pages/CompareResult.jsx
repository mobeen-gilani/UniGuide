
import React from "react";
import { useLocation } from "react-router-dom";

const CompareResult = () => {

    const { state } = useLocation();

    const universityA = state?.universityA;
    const universityB = state?.universityB;

    if (!universityA || !universityB) {
        return (
            <h1 className="text-2xl text-center mt-10">
                No comparison data found.
            </h1>
        );
    }

    return (

        <div className="bg-slate-100 min-h-screen py-10 px-3 mt-18 md:px-8">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-2xl md:text-5xl font-bold text-center mb-10">
                    Universities Comparison
                </h1>
                <div className="grid grid-cols-2 gap-3 md:gap-8 items-start">


                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">

                        

                        <div className="p-6">

                            <h2 className="text-xl md:text-2xl font-bold text-center">
                                {universityA.name}
                            </h2>

                            <hr className="my-4 md:my-6" />

                            <div>

                                <h3 className="md:text-xl font-bold mb-3">
                                    Campus
                                </h3>

                                <ul className="list-disc text-sm md:text-lg ml-6 space-y-2">

                                    {universityA.campus.map((campus, index) => (
                                        <li key={index}>
                                            {campus}
                                        </li>
                                    ))}

                                </ul>

                            </div>

                            <hr className="my-4 md:my-6" />


                            <div>

                                <h3 className="text-xl font-bold mb-5">
                                    Fee Structure
                                </h3>

                                <div className="space-y-2 md:space-y-4">

                                    {universityA.fee.map((item, index) => (

                                        <div
                                            key={index}
                                            className="border rounded-xl p-2 md:p-4 bg-slate-50"
                                        >

                                            <p className="font-bold md:text-lg">
                                                {item.category}
                                            </p>

                                            <p className="mt-2 text-sm md:text-lg">
                                                {item.amount}
                                            </p>



                                        </div>

                                    ))}

                                </div>

                            </div>

                            <hr className="my-4 md:my-6" />

                            <div>

                                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-5">
                                    Scholarships
                                </h3>

                                <div className="space-y-3 md:space-y-6">

                                    {universityA.scholarship.map((item, index) => (

                                        <div
                                            key={index}
                                            className="border rounded-xl p-3 md:p-4 bg-slate-50"
                                        >

                                            <h4 className="font-bold text-sm md:text-lg mb-2">
                                                {item.title}
                                            </h4>



                                        </div>

                                    ))}

                                </div>

                            </div>

                            <hr className="my-4 md:my-6" />
                            <div>

                                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                                    Best Programs
                                </h3>

                                <ul className="md:text-lg text-sm list-disc ml-6 space-y-2  break-words whitespace-normal">

                                    {universityA.bestPrograms.map((program, index) => (

                                        <li key={index}>
                                            {program}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                            <hr className="my-4 md:my-6" />

                            <div>

                                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-5">
                                    Undergraduate Programs
                                </h3>

                                <div className="space-y-3 md:space-y-6">

                                    {universityA.undergraduate.map((item, index) => (

                                        <div
                                            key={index}
                                            className="border rounded-xl p-2 md:p-4 bg-slate-50"
                                        >

                                            <h4 className="font-bold md:text-lg mb-3  break-words whitespace-normal">
                                                {item.heading}
                                            </h4>

                                            <ul className="md:text-lg text-sm list-disc ml-6 space-y-2  break-words whitespace-normal">

                                                {item.programs.map((program, i) => (

                                                    <li key={i}>
                                                        {program}
                                                    </li>

                                                ))}

                                            </ul>

                                        </div>

                                    ))}

                                </div>

                            </div>

                            <hr className="my-4 md:my-6" />

                            <div>

                                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-5">
                                    Graduate Programs
                                </h3>

                                <div className="space-y-3 md:space-y-6">

                                    {universityA.graduate.map((item, index) => (

                                        <div
                                            key={index}
                                            className="border rounded-xl p-2 md:p-4 bg-slate-50"
                                        >

                                            <h4 className="font-bold md:text-lg mb-3 break-words whitespace-normal">
                                                {item.heading}
                                            </h4>
                                            <ul className="md:text-lg text-sm list-disc ml-6 space-y-2 break-words whitespace-normal">

                                                {item.programs.map((program, i) => (

                                                    <li key={i}>
                                                        {program}
                                                     </li>

                                                ))}

                                            </ul>

                                        </div>
                                    ))}

                                </div>

                            </div>

                            <hr className="my-4 md:my-6" />

                            <div>

                                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-5">
                                    Contact Information
                                </h3>

                                <div className="space-y-3 md:space-y-4">

                                    <div className="border text-sm rounded-xl p-2 md:text-lg md:p-4 bg-slate-50">
                                        <p className="break-words whitespace-normal">
                                            <strong>Phone:</strong> {universityA.contact.phone}
                                        </p>
                                    </div>

                                    <div className="border text-xs rounded-xl p-2 md:text-lg md:p-4 bg-slate-50">
                                        <p className="break-words whitespace-normal">
                                            <strong>Email:</strong> {universityA.contact.email}
                                        </p>
                                    </div>

                                    <div className="border text-sm rounded-xl p-2 md:text-lg md:p-4 bg-slate-50">
                                        <p className="font-semibold mb-2">
                                            Website
                                        </p>

                                        <a
                                            href={universityA.contact.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline break-all"
                                        >
                                            {universityA.contact.website}
                                        </a>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">

                        
                        <div className="p-6">

                            <h2 className="text-xl md:text-2xl font-bold text-center">
                                {universityB.name}
                            </h2>

                            <hr className="my-4 md:my-6" />

                            <div>

                                <h3 className="md:text-xl font-bold mb-3">
                                    Campus
                                </h3>

                                <ul className="list-disc text-sm md:text-lg ml-6 space-y-2">

                                    {universityB.campus.map((campus, index) => (
                                        <li key={index}>
                                            {campus}
                                        </li>
                                    ))}

                                </ul>

                            </div>

                            <hr className="my-4 md:my-6" />

                            <div>

                                <h3 className="md:text-xl font-bold mb-5">
                                    Fee Structure
                                </h3>

                                <div className="space-y-2 md:space-y-4">

                                    {universityB.fee.map((item, index) => (

                                        <div
                                            key={index}
                                            className="border rounded-xl p-2 md:p-4 bg-slate-50"
                                        >

                                            <p className="font-bold md:text-lg">
                                                {item.category}
                                            </p>
                                             <p className="mt-2 text-sm md:text-lg">
                                                {item.amount}
                                            </p>




                                        </div>

                                    ))}

                                </div>

                            </div>

                            <hr className="my-4 md:my-6" />

                            <div>

                                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-5">
                                    Scholarships
                                </h3>

                                <div className="space-y-6">

                                    {universityB.scholarship.map((item, index) => (

                                        <div
                                            key={index}
                                            className="border rounded-xl p-3 md:p-4 bg-slate-50"
                                        >

                                            <h4 className="font-bold text-sm md:text-lg mb-2">
                                                {item.title}
                                            </h4>



                                        </div>

                                    ))}

                                </div>

                            </div>

                            <hr className="my-4 md:my-6" />
                            <div>

                                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                                    Best Programs
                                </h3>

                                <ul className="md:text-lg text-sm list-disc ml-6 space-y-2  break-words whitespace-normal">

                                    {universityB.bestPrograms.map((program, index) => (

                                        <li key={index}>
                                            {program}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                            <hr className="my-4 md:my-6" />


                            <div>

                                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                                    Undergraduate Programs
                                </h3>

                                <div className="space-y-3 md:space-y-6">

                                    {universityB.undergraduate.map((item, index) => (

                                        <div
                                            key={index}
                                            className="border rounded-xl p-2 md:p-4 bg-slate-50"
                                        >

                                            <h4 className="font-bold md:text-lg mb-3 break-words whitespace-normal">
                                                {item.heading}
                                            </h4>

                                            <ul className="list-disc text-xs md:text-lg ml-5 md:ml-6 space-y-2 break-words whitespace-normal">

                                                {item.programs.map((program, i) => (

                                                    <li key={i}>
                                                        {program}
                                                    </li>

                                                ))}

                                            </ul>

                                        </div>

                                    ))}

                                </div>

                            </div>

                            <hr className="my-4 md:my-6" />


                            <div>

                                <h3 className="text-xl font-bold mb-5">
                                    Graduate Programs
                                </h3>

                                <div className="space-y-3 md:space-y-6">

                                    {universityB.graduate.map((item, index) => (

                                        <div
                                            key={index}
                                            className="border rounded-xl p-2 md:p-4 bg-slate-50"
                                        >

                                            <h4 className="font-bold md:text-lg mb-3  break-words whitespace-normal">
                                                {item.heading}
                                            </h4>

                                            <ul className="list-disc text-xs md:text-lg ml-5 md:ml-6 space-y-2  break-words whitespace-normal">

                                                {item.programs.map((program, i) => (

                                                    <li key={i}>
                                                        {program}
                                                    </li>

                                                ))}

                                            </ul>

                                        </div>

                                    ))}

                                </div>

                            </div>

                            <hr className="my-4 md:my-6" />


                            <div>

                                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-5">
                                    Contact Information
                                </h3>

                                <div className="space-y-3 md:space-y-4">

                                    <div className="border text-sm rounded-xl p-2 md:text-lg md:p-4 bg-slate-50">
                                        <p className="break-words whitespace-normal">
                                            <strong>Phone:</strong> {universityB.contact.phone}
                                        </p>
                                    </div>

                                    <div className="border text-xs rounded-xl p-2 md:text-lg md:p-4 bg-slate-50">
                                        <p className="break-words whitespace-normal">
                                            <strong>Email:</strong> {universityB.contact.email}
                                        </p>
                                    </div>

                                    <div className="border text-sm rounded-xl p-2 md:text-lg md:p-4 bg-slate-50">
                                        <p className="font-semibold mb-2">
                                            Website
                                        </p>

                                        <a
                                            href={universityB.contact.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline break-all"
                                        >
                                            {universityB.contact.website}
                                        </a>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default CompareResult;