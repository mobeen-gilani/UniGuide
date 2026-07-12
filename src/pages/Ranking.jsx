import React from "react";
import { useNavigate } from "react-router-dom";

const programs = [
    {
        title: "Computer Science",
        icon: "💻",
        slug: "computer-science",
        color: "blue",
    },
    {
        title: "Engineering",
        icon: "⚙️",
        slug: "engineering",
        color: "orange",
    },
    {
        title: "Business",
        icon: "💼",
        slug: "business",
        color: "green",
    },
    {
        title: "Medical",
        icon: "🏥",
        slug: "medical",
        color: "red",
    },
    {
        title: "Law",
        icon: "⚖️",
        slug: "law",
        color: "purple",
    },
    {
        title: "Artificial Intelligence",
        icon: "🤖",
        slug: "artificial-intelligence",
        color: "indigo",
    },
    {
        title: "Data Science",
        icon: "📊",
        slug: "data-science",
        color: "cyan",
    },
    {
        title: "Architecture",
        icon: "🏛️",
        slug: "architecture",
        color: "amber",
    },
    {
        title: "Pharmacy",
        icon: "💊",
        slug: "pharmacy",
        color: "emerald",
    },
    {
        title: "Psychology",
        icon: "🧠",
        slug: "psychology",
        color: "pink",
    },
    {
        title: "Media Studies",
        icon: "🎥",
        slug: "media-studies",
        color: "rose",
    },
    {
        title: "Agriculture",
        icon: "🌾",
        slug: "agriculture",
        color: "lime",
    },
];
export default function Rankings() {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-50 min-h-screen mt-10">

            <div className="max-w-7xl mx-auto px-6 py-14">

             

                <p className="text-gray-500 text-sm">
                    Home <span className="mx-2">›</span> Rankings
                </p>

              

                <h1 className="text-5xl font-extrabold mt-4 leading-tight">

                    Explore Pakistan's Top University Rankings

                </h1>

                <p className="text-gray-600 mt-3 text-lg">
                    Discover Pakistan's highest-ranked universities across multiple
                    academic fields. Select a program below to explore the latest
                    rankings and compare leading institutions.
                </p>
                

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

                    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                        <h2 className="text-3xl font-bold ">12+</h2>
                        <p className="text-gray-500 mt-2">Programs</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                        <h2 className="text-3xl font-bold ">100+</h2>
                        <p className="text-gray-500 mt-2">Universities</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                        <h2 className="text-3xl font-bold ">20+</h2>
                        <p className="text-gray-500 mt-2">Cities</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                        <h2 className="text-3xl font-bold ">2026</h2>
                        <p className="text-gray-500 mt-2">Latest Rankings</p>
                    </div>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                    {programs.map((program) => (

                        <div
                            key={program.slug}
                            onClick={() => navigate(`/rankings/${program.slug}`)}
                            className="relative bg-white rounded-3xl shadow-md border border-gray-100 p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            {/* Top Badge */}

                            <span className="absolute top-5 right-5 bg-slate-700 text-white text-xs px-3 py-1 rounded-full">
                                Top 10
                            </span>

                            {/* Icon */}

                            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-4xl">
                                {program.icon}
                            </div>

                            {/* Title */}

                            <h2 className="text-2xl font-bold mt-6">
                                {program.title}
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Top universities in Pakistan
                            </p>

                            {/* Bottom */}

                            <div className="mt-8 flex justify-between items-center">

                               

                                <span className="text-slate-700 font-semibold">
                                    Explore →
                                </span>

                            </div>

                        </div>

                    ))}

                </div>
                <div className="mt-16 bg-slate-200 rounded-3xl p-8 border border-slate-300">

                    <h3 className="text-2xl font-bold">
                        About These Rankings
                    </h3>

                    <p className="text-gray-600 mt-3 leading-8">

                        These rankings help students explore Pakistan's top universities
                        according to different academic programs. Rankings are intended
                        as a general guide for comparing universities and finding suitable
                        study options.

                    </p>

                </div>

            </div>
        </div>
    );
}