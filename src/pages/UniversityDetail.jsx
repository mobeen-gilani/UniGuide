
import React from "react";
import { useParams } from "react-router-dom";
import UniversityDetails from "../data/UniversityDetail";

const UniversityDetail = () => {

    const { id } = useParams();

    const university = UniversityDetails.find(
        (uni) => uni.id === Number(id)
    );


    if (!university) {
        return <h1>University Not Found</h1>;
    }


    return (

        <div className="mt-26 mx-4 md:mx-10 mb-10">


            <p className="text-gray-500 text-sm mb-5">

                Home
                <span className="mx-2">›</span>
                Universities
                <span className="mx-2">›</span>
                University Detail

            </p>



            <h1 className="font-bold text-2xl md:text-3xl bg-slate-800 min-h-18 mb-5 py-3 px-3 text-white rounded-md">

                {university.name}

            </h1>



            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">



                <div className="flex-1 space-y-3">


                    <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-4">

                        Introduction

                    </h2>


                    <p className="md:text-lg text-sm">

                        {university.introduction}

                    </p>


                </div>





                <img

                    className="w-full md:w-120 h-auto md:h-80 px-1 py-1 rounded-xl shadow-xl bg-slate-800 object-cover"

                    src={university.image}

                    alt={university.name}

                />


            </div>



            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-7">

                Campuses:

            </h2>



            <div className="flex flex-wrap gap-4">


                {university.campus?.map((campus) => (


                    <span

                        key={campus}

                        className="hover:bg-slate-600 transition px-4 py-2 shadow-lg bg-slate-800 text-white rounded-full font-medium text-sm md:text-base"

                    >

                        {campus}

                    </span>


                ))}

            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-7">

                Best Programs:

            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">


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


                <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-7 pb-4 md:pb-6">

                    Undergraduate Programs:

                </h2>




                <div className="space-y-6">


                    {university.undergraduate?.map((section) => (

                        <div

                            key={section.heading}

                            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6"
                        >
                            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-5 border-b pb-3">

                                🎓 {section.heading}

                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {section.programs?.map((program) => (
                                    <span
                                        key={program}

                                        className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-medium hover:bg-slate-200 transition text-sm md:text-base"
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
                <h2 className="text-2xl md:text-3xl font-bold mb-5 mt-10 pb-4 md:pb-6">
                    Graduate Programs:
                </h2>
                <div className="space-y-6">
                    {university.graduate?.map((section) => (
                       <div
                            key={section.heading}
                            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6"
                        >
                            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-5 border-b pb-3">

                                🎓 {section.heading}

                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {section.programs?.map((program) => (
                                    <span

                                        key={program}

                                        className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-medium hover:bg-slate-200 transition text-sm md:text-base"

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
                <h2 className="text-2xl md:text-3xl font-bold mb-5 mt-10">

                    Fee Structure:

                </h2>
                <div className="overflow-x-auto">

                    <table className="min-w-full md:w-full border border-slate-800">
                        <thead className="bg-slate-700 text-white">
                            <tr>
                                <th className="border px-3 py-2">

                                    Category
                                </th>
                                <th className="border px-3 py-2">

                                    Amount
                                </th>
                                <th className="border px-3 py-2">
                                    Note
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-sm">
                            {university.fee?.map((fee, index) => (
                                <tr
                                    key={index}

                                    className="hover:bg-gray-100"
                                >
                                    <td className="border px-3 py-2 text-center">

                                        {fee.category}
                                    </td>
                                    <td className="border px-3 py-2 text-center">

                                        {fee.amount}
                                    </td>
                                    <td className="border px-3 py-2 text-center">

                                        {fee.note}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-5 mt-10">

                    Scholarships:
                </h2>
                <div>
                    {university.scholarship?.map((item, index) => (
                        <div
                            className="py-3"
                            key={index}
                        >
                            <h3 className="font-bold text-lg md:text-xl">
                                {item.title}
                            </h3>
                            <p className="my-2 text-sm md:text-lg">

                                <strong>Description:</strong> {item.description}
                            </p>
                            <p className="my-2 text-sm md:text-lg">
                                <strong>Benefits:</strong> {item.benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-5 mt-10">
                    Facilities:
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">

                    {university.facilities?.map((name, index) => (
                        <div
                            className="shadow-xl mt-2 mb-6 h-auto py-5 px-4 rounded-xl"
                            key={index}
                        >
                            <h3 className="font-bold pb-3 border-b border-gray-200 text-lg md:text-xl mb-4">
                                {name.name}
                            </h3>
                            <p className="md:text-sm text-xs leading-6">
                                {name.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-5 mt-10">
                    Contact:
                </h2>
                <div className="overflow-x-auto">

                    <table className="w-full min-w-[600px] border border-gray-300 rounded-lg overflow-hidden">
                        <tbody>
                            <tr className="border-b">
                                <td className="font-semibold px-5 py-4 w-52">
                                    📞 Phone
                                </td>
                                <td className="px-5 py-4 md:text-lg text-sm">
                                    {university.contact?.phone}
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="font-semibold px-5 py-4">
                                    📧 Email
                                </td>
                                <td className="px-5 py-4 md:text-lg text-sm break-all">
                                    {university.contact?.email}
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="font-semibold px-5 py-4">
                                    🌐 Website
                                </td>
                                <td className="px-5 py-4 md:text-lg text-sm break-all">
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
                                <td className="px-5 py-4 md:text-lg text-sm">
                                    {university.contact?.address}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UniversityDetail;