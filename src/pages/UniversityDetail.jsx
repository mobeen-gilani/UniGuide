
import React from "react";
import { useParams } from "react-router-dom";
import universityDetails from "../data/universityDetail";

const UniversityDetail = () => {

   const { id } = useParams();

const university = universityDetails.find(
    (uni) => uni.id === Number(id)
);
if (!university) {
    return <h1>University Not Found</h1>;
}

    
    return (

        <div className="mt-26 mx-10 mb-10">
            <p className="text-gray-500 text-sm mb-5">
                Home <span className="mx-2">›</span>Universities <span className="mx-2">›</span>University Detail
            </p>

            <h1 className="font-bold text-3xl bg-slate-800 h-18 mb-5 py-3 px-3 text-white ">{university.name}</h1>
            <div className="flex gap-10 items-start">

                <div className="flex-1 space-y-3">
                    <h2 className="text-3xl font-bold mb-4 mt-4">Introduction</h2>
                    <p className="">{university.introduction}</p>
                </div>
                <img
    className="w-120 h-80 px-1 py-1 rounded-xl shadow-xl bg-slate-800"
    src={university.image}
    alt={university.name}
/>
            </div>
            <h2 className="text-3xl font-bold mb-4 mt-4">Campuses:</h2>

            <div className="flex flex-wrap gap-4 ">
                {university.campus?.map((campus) => (
                    <span
                        key={campus}
                        className="hover:bg-slate-600 transition px-4 py-2 shadow-lg bg-slate-800 text-white  rounded-full font-medium"
                    >
                        {campus}
                    </span>
                ))}
            </div>
            <h2 className="text-3xl font-bold mb-4 mt-7">Full Address:</h2>
            <h2 className="text-3xl font-bold mb-4 mt-7">
                Address:
            </h2>

            <p>{university.address}</p>
            <h2 className="text-3xl font-bold mb-4 mt-7">Best Programs:</h2>
            <div className="grid grid-cols-4 gap-7">
                {university.bestPrograms?.map((program) => (
                    <div
                        key={program}
                        className="px-4 py-4 shadow-lg text-white bg-slate-800 rounded-xl font-medium text-center hover:bg-slate-600 transition"
                    >
                        {program}
                    </div>
                ))}
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4 mt-7 pb-6">
                    Undergraduate Programs:
                </h2>

                <div className="space-y-6">
                    {university.undergraduate?.map((section) => (
                        <div
                            key={section.heading}
                            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                        >
                            <h3 className="text-xl font-bold text-slate-800 mb-5 border-b pb-3">
                                🎓 {section.heading}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {section.programs?.map((program) => (
                                    <span
                                        key={program}
                                        className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-medium hover:bg-slate-200 transition"
                                    >
                                        {program}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-5 mt-10 pb-6">
                    Graduate Programs:
                </h2>

                <div className="space-y-6">
                    {university.graduate?.map((section) => (
                        <div
                            key={section.heading}
                            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                        >
                            <h3 className="text-xl font-bold text-slate-800 mb-5 border-b pb-3">
                                🎓 {section.heading}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {section.programs?.map((program) => (
                                    <span
                                        key={program}
                                        className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-medium hover:bg-slate-200 transition"
                                    >
                                        {program}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-5 mt-10 pb-6">
                    Fee Structure:
                </h2>
                <div className="overflow-x-auto ">
                    <table className="w-300 border mx-35 border-slate-800">
                        <thead className="bg-slate-700 text-white">
                            <tr>
                                <th className="border px-3 py-2">Category</th>
                                <th className="border px-3 py-2">Amount</th>
                                <th className="border px-3 py-2">Note</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {university.fee?.map((fee, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border px-3 py-2 text-center">{fee.category}</td>
                                    <td className="border px-3 py-2 text-center">{fee.amount}</td>
                                    <td className="border px-3 py-2 text-center">{fee.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-5 mt-10">
                    Scholarships:
                </h2>
                <div>
                    {university.scholarship?.map((item, index) => (
                        <div className="py-3 " key={index}>
                            <h3 className="font-bold text-xl">{item.title}</h3>
                            <p className="my-2">
                                <strong>Description:</strong> {item.description}
                            </p>

                            <p>
                                <strong>Benefits:</strong> {item.benefit}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold mb-5 mt-10">
                    Facilities:
                </h2>
                <div className="grid grid-cols-3 gap-6">
                    {university.facilities?.map((name, index) => (
                        <div className="shadow-xl mt-2 mb-6 h-auto py-5 px-4 rounded-xl" key={index}>
                            <h3 className="font-bold pb-3 border-b border-gray-200  text-xl mb-4">{name.name}</h3>
                            <p className="text-sm">{name.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-5 mt-10">
                    Contact:
                </h2>
                <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                    <tbody>

                        <tr className="border-b">
                            <td className="font-semibold px-5 py-4 w-52">
                                📞 Phone
                            </td>

                            <td className="px-5 py-4">
                                {university.contact?.phone}
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className="font-semibold px-5 py-4">
                                📧 Email
                            </td>

                            <td className="px-5 py-4">
                                {university.contact?.email}
                            </td>
                        </tr>

                        <tr className="border-b">
                            <td className="font-semibold px-5 py-4">
                                🌐 Website
                            </td>

                            <td className="px-5 py-4">
                                <a
                                    href={university.contact?.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {university.contact?.website}
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td className="font-semibold px-5 py-4">
                                📍 Address
                            </td>

                            <td className="px-5 py-4">
                                {university.contact?.address}
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default UniversityDetail;