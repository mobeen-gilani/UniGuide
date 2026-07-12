import React from "react";
import { useLocation } from "react-router-dom";
const CompareResult = () => {
    const { state } = useLocation();

    const universityA = state?.universityA;
    const universityB = state?.universityB;

    if (!universityA || !universityB) {
        return <h1 className="text-2xl text-center mt-10">
            No comparison data found.
        </h1>;
    }

    return (

        <div>

            {universityA && universityB && (

                <div className="mt-10 p-8 rounded-2xl bg-white">

                    <h2 className="text-4xl font-bold mb-8 mt-10">
                        Universities Comparison
                    </h2>

                    <div className="grid grid-cols-2 gap-10">


                        <div className=" shadow-lg rounded-xl border-1 border-slate-200" >

                            <img
                                src={universityA.image}
                                alt={universityA.name}
                                className="h-80 w-full object-cover rounded-xl"
                            />
                            <div className=" p-6 space-y-8 ">

                                <h2 className="font-bold text-2xl mt-6">
                                    {universityA.name}
                                </h2>

                                <p className="mt-4">
                                    {universityA.introduction}
                                </p>

                                <hr className="my-4 border-slate-300 " />

                                <div className="mt-6">
                                    <h3 className="font-bold text-xl mb-2">
                                        Campus
                                    </h3>

                                    <ul className="list-disc ml-6 space-y-2">
                                        {universityA.campus.map((campus, index) => (
                                            <li key={index}>{campus}</li>
                                        ))}
                                    </ul>
                                </div>
                                <hr className="my-4 border-slate-300 " />

                                <div className="mt-6">
                                    <h3 className="font-bold text-xl mb-2">
                                        Address
                                    </h3>
                                    <ul className="list-disc ml-6 space-y-2">
                                        {universityA.address.map((address, index) => (
                                            <li key={index}>{address}</li>
                                        ))}
                                    </ul></div>
                                <hr className="my-4 border-slate-300 " />

                                <div className="mt-3 ">
                                    <strong className="text-xl">Fee:</strong>

                                    {universityA.fee.map((item, index) => (
                                        <div key={index} className="ml-4 mt-1 border rounded-lg p-4 mt-4 ">
                                            <p className="font-bold">{item.category}</p>
                                            <p>{item.amount}</p>
                                            <p className="text-sm">{item.note}</p>
                                        </div>
                                    ))}
                                </div>
                                <hr className="my-4 border-slate-300 " />

                                <div className="mt-3">
                                    <strong className="text-xl">Scholarships</strong>

                                    {universityA.scholarship.map((item, index) => (
                                        <div key={index} className="mt-4 mb-10">

                                            <h3 className="font-bold mb-2">
                                                {item.title}
                                            </h3>

                                            <p className="mb-2">
                                                {item.description}
                                            </p>

                                            <p>
                                                {item.benefit}
                                            </p>

                                        </div>
                                    ))}
                                </div>
                                <hr className="my-4 border-slate-300 " />



                                <p className="font-bold mt-5 text-xl">
                                    Best Programs
                                </p>


                                <ul className="list-disc ml-5">
                                    {universityA.bestPrograms.map((program, index) => (
                                        <li key={index}>{program}</li>
                                    ))}
                                </ul>
                                <hr className="my-4 border-slate-300 " />


                                <p className="font-bold mt-5 text-xl">
                                    Undergraduate
                                </p>

                                <ul className="list-disc ml-5">
                                    {universityA.undergraduate.map((item, index) => (
                                        <div key={index} className="mb-8">
                                            <h3 className="font-bold">{item.heading}</h3>

                                            <ul className="list-disc ml-8 mt-2 space-y-2">
                                                {item.programs.map((program, i) => (
                                                    <li key={i}>{program}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </ul>
                                <hr className="my-4 border-slate-300 " />


                                <p className="font-bold mt-5 text-xl">
                                    Graduate
                                </p>

                                <div>
                                    {universityA.graduate.map((item, index) => (
                                        <div key={index} className="mb-4">

                                            <h3 className="font-bold">
                                                {item.heading}
                                            </h3>

                                            <ul className="list-disc ml-5">
                                                {item.programs.map((program, i) => (
                                                    <li key={i}>{program}</li>
                                                ))}
                                            </ul>

                                        </div>
                                    ))}
                                </div>
                                <hr className="my-4 border-slate-300 " />


                                <p className="font-bold mt-5 text-xl">
                                    Facilities
                                </p>

                                <ul className="list-disc ml-6 space-y-5">
                                    {universityA.facilities.map((facility, index) => (
                                        <li key={index} className="mb-3">
                                            <h4 className="font-semibold">
                                                {facility.name}
                                            </h4>

                                            <p className="text-gray-600">
                                                {facility.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <hr className="my-4 border-slate-300 " />

                                <p><strong>Phone:</strong> {universityA.contact.phone}</p>
                                <hr className="my-4 border-slate-300 " />


                                <p><strong>Email:</strong> {universityA.contact.email}</p>
                                <hr className="my-4 border-slate-300 " />

                                <p>
                                    <strong>Website:</strong>{" "}
                                    <a
                                        href={universityA.contact.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 underline"
                                    >
                                        {universityA.contact.website}
                                    </a>
                                </p>
                                <hr className="my-4 border-slate-300 " />

                            </div>

                        </div>

                        {/* University B */}

                        <div className=" shadow-lg rounded-xl border-1 border-slate-200" >

                            <img
                                src={universityB.image}
                                alt={universityB.name}
                                className="h-80 w-full object-cover rounded-xl"
                            />
                            <div className=" p-6 space-y-8 ">

                                <h2 className="font-bold text-2xl mt-6">
                                    {universityB.name}
                                </h2>

                                <p className="mt-4">
                                    {universityB.introduction}
                                </p>

                                <hr className="my-4 border-slate-300 " />


                                <div className="mt-6">
                                    <h3 className="font-bold text-xl mb-2">
                                        Campus
                                    </h3>

                                    <ul className="list-disc ml-6 space-y-2">
                                        {universityB.campus.map((campus, index) => (
                                            <li key={index}>{campus}</li>
                                        ))}
                                    </ul>
                                </div>
                                <hr className="my-4 border-slate-300 " />


                                <div className="mt-6">
                                    <h3 className="font-bold text-xl mb-2">
                                        Address
                                    </h3>

                                    <ul className="list-disc ml-6 space-y-2">
                                        {universityB.address.map((address, index) => (
                                            <li key={index}>{address}</li>
                                        ))}
                                    </ul></div>
                                <hr className="my-4 border-slate-300 " />


                                <div className="mt-3">
                                    <strong className="text-xl">Fee:</strong>

                                    {universityB.fee.map((item, index) => (
                                        <div key={index} className="ml-4 mt-1 border rounded-lg p-4 mt-4">
                                            <p className="font-bold">{item.category}</p>
                                            <p>{item.amount}</p>
                                            <p className="text-sm">{item.note}</p>
                                        </div>
                                    ))}
                                </div>
                                <hr className="my-4 border-slate-300 " />

                                <div className="mt-3">
                                    <strong className="text-xl">Scholarships</strong>

                                    {universityA.scholarship.map((item, index) => (
                                        <div key={index} className="mt-4 mb-10">

                                            <h3 className="font-bold mb-2">
                                                {item.title}
                                            </h3>

                                            <p className="mb-2">
                                                {item.description}
                                            </p>

                                            <p>
                                                {item.benefit}
                                            </p>

                                        </div>
                                    ))}
                                </div>
                                <hr className="my-4 border-slate-300 " />






                                <p className="font-bold mt-5 text-xl">
                                    Best Programs
                                </p>

                                <ul className="list-disc ml-5">
                                    {universityB.bestPrograms.map((program, index) => (
                                        <li key={index}>{program}</li>
                                    ))}
                                </ul>
                                <hr className="my-4 border-slate-300 " />

                                <p className="font-bold mt-5 text-xl">
                                    Undergraduate
                                </p>

                                <ul className="list-disc ml-5">
                                    {universityB.undergraduate.map((item, index) => (
                                        <div key={index} className="mb-8">
                                            <h3 className="font-bold">{item.heading}</h3>

                                            <ul className="list-disc ml-8 ml-8 mt-2">
                                                {item.programs.map((program, i) => (
                                                    <li key={i}>{program}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </ul>
                                <hr className="my-4 border-slate-300 " />

                                <p className="font-bold mt-5 text-xl">
                                    Graduate
                                </p>

                                <div>
                                    {universityB.graduate.map((item, index) => (
                                        <div key={index} className="mb-8">

                                            <h3 className="font-bold">
                                                {item.heading}
                                            </h3>

                                            <ul className="list-disc ml-8 mt-2 space-y-2">
                                                {item.programs.map((program, i) => (
                                                    <li key={i}>{program}</li>
                                                ))}
                                            </ul>

                                        </div>
                                    ))}
                                </div>
                                <hr className="my-4 border-slate-300 " />

                                <p className="font-bold mt-5 text-xl">
                                    Facilities
                                </p>

                                <ul className="list-disc ml-6 space-y-5">
                                    {universityB.facilities.map((facility, index) => (
                                        <li key={index} className="mb-3">
                                            <h4 className="font-semibold">
                                                {facility.name}
                                            </h4>

                                            <p className="text-gray-600">
                                                {facility.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <hr className="my-4 border-slate-300 " />
                                <p><strong>Phone:</strong> {universityB.contact.phone}</p>
                                <hr className="my-4 border-slate-300 " />

                                <p><strong>Email:</strong> {universityB.contact.email}</p>
                                <hr className="my-4 border-slate-300 " />
                                <p>
                                    <strong>Website:</strong>{" "}
                                    <a
                                        href={universityB.contact.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 underline"
                                    >
                                        {universityB.contact.website}
                                    </a>
                                </p>
                                <hr className="my-4 border-slate-300 " />
                            </div>
                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}

export default CompareResult;