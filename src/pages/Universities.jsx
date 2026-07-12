



import Select from "react-select";
import universities from "../data/Universitiesdata";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Cards = () => {

    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [search, setSearch] = useState("");
    const [searchText, setSearchText] = useState("");


    const filteredUniversities = universities.filter((uni) => {

        const searchMatch =
            uni.name.toLowerCase().includes(search.toLowerCase());

        const cityMatch =
            city === "" || uni.city.includes(city);

        const categoryMatch =
            category === "" || uni.category.includes(category);

        const typeMatch =
            type === "" || uni.type === type;

        return searchMatch && cityMatch && categoryMatch && typeMatch;
    });


    const handleReset = () => {
        setCity("");
        setCategory("");
        setType("");
    };


    const customStyles = {

        control: (provided, state) => ({
            ...provided,
            minHeight: "48px",
            borderRadius: "10px",
            borderColor: state.isFocused ? "#1e293b" : "#d1d5db",
            boxShadow: "none",
            cursor: "pointer",

            "&:hover": {
                borderColor: "#1e293b",
            },
        }),


        option: (provided, state) => ({
            ...provided,
            padding: "12px",
            cursor: "pointer",
            backgroundColor: state.isFocused ? "#1e293b" : "#fff",
            color: state.isFocused ? "#fff" : "#1e293b",
            fontSize: "14px",
        }),


        menu: (provided) => ({
            ...provided,
            borderRadius: "10px",
            overflow: "hidden",
        }),


        menuList: (provided) => ({
            ...provided,
            maxHeight: "220px",
        }),


        indicatorSeparator: () => ({
            display: "none",
        }),
    };


    const cityOptions = [
        { value: "", label: "All Cities" },
        { value: "Lahore", label: "Lahore" },
        { value: "Islamabad", label: "Islamabad" },
        { value: "Karachi", label: "Karachi" },
    ];


    const categoryOptions = [
        { value: "", label: "All Categories" },
        { value: "Computer Science", label: "Computer Science" },
        { value: "Engineering", label: "Engineering" },
        { value: "Medical", label: "Medical" },
        { value: "Business", label: "Business" },
    ];


    const typeOptions = [
        { value: "", label: "All Types" },
        { value: "Public", label: "Public" },
        { value: "Private", label: "Private" },
    ];


    return (

        <div className="min-h-screen mt-25 mb-10">


            <p className="text-gray-500 text-sm mx-4 md:mx-15">
                Home <span className="mx-2">›</span> Universities
            </p>





            <div className="flex flex-col md:flex-row items-center pt-8 gap-5 mx-4 md:mx-13">


                <input
                    type="text"
                    placeholder="Search universities..."
                    className="w-full md:w-4/5 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-800"

                    value={searchText}

                    onChange={(e) =>
                        setSearchText(e.target.value)
                    }


                    onKeyDown={(e) => {

                        if (e.key === "Enter")
                            setSearch(searchText);

                    }}

                />


                <button

                    className="bg-slate-800 rounded-xl text-white px-3 py-3 w-full md:w-1/5 hover:font-bold transition-all"

                    onClick={() => setSearch(searchText)}

                >
                    Search

                </button>


            </div>


            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mx-4 md:mx-13 mt-6">


                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">


                    <div className="w-full md:w-45">

                        <Select

                            options={cityOptions}

                            placeholder="All Cities"

                            styles={customStyles}

                            value={
                                cityOptions.find(
                                    option => option.value === city
                                )
                            }

                            onChange={(selected) =>
                                setCity(selected?.value || "")
                            }

                            isSearchable={true}

                        />

                    </div>




                    <div className="w-full md:w-45">


                        <Select

                            options={categoryOptions}

                            placeholder="All Categories"

                            styles={customStyles}


                            value={
                                categoryOptions.find(
                                    option => option.value === category
                                )
                            }


                            onChange={(selected) =>
                                setCategory(selected?.value || "")
                            }


                            isSearchable={true}

                        />


                    </div>





                    <div className="w-full md:w-45">


                        <Select

                            options={typeOptions}

                            placeholder="All Types"

                            styles={customStyles}


                            value={
                                typeOptions.find(
                                    option => option.value === type
                                )
                            }


                            onChange={(selected) =>
                                setType(selected?.value || "")
                            }


                            isSearchable={true}


                        />


                    </div>



                </div>





                <button

                    onClick={handleReset}

                    className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:font-bold transition-all w-full md:w-auto"

                >

                    Reset

                </button>



            </div>







            <div className="flex justify-between items-center w-full px-4 md:px-13">


                <h1 className="text-3xl md:text-4xl py-10 font-bold">

                    Universities

                </h1>


            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">


                {filteredUniversities.map((uni) => (


                    <Link

                        key={uni._id}

                        to={`/university/${uni.id}`}

                        className="block w-full md:w-80 h-auto md:h-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 mx-auto"


                    >



                        <div>


                            <img

                                className="rounded-xl h-40 w-full object-cover"

                                src={uni.image}

                                alt={uni.name}

                            />



                            <div className="mx-4 py-4 space-y-3">


                                <h2 className="font-bold">

                                    {uni.name}

                                </h2>



                                <div className="flex items-center gap-2 text-sm">


                                    <svg

                                        className="h-4 w-4"

                                        xmlns="http://www.w3.org/2000/svg"

                                        fill="none"

                                        viewBox="0 0 24 24"

                                        strokeWidth="1.5"

                                        stroke="currentColor"

                                    >


                                        <path

                                            strokeLinecap="round"

                                            strokeLinejoin="round"

                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"

                                        />


                                        <path

                                            strokeLinecap="round"

                                            strokeLinejoin="round"

                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"

                                        />


                                    </svg>



                                    <p>

                                        {uni.city.join(", ")}

                                    </p>



                                </div>




                                <p>

                                    {uni.category.join(", ")}

                                </p>




                                <p>

                                    {uni.type}

                                </p>




                                <p className="font-bold text-sm">

                                    {uni.description}

                                </p>




                                <button

                                    className="text-blue-600 rounded-2xl text-sm cursor-pointer hover:font-bold transition-all"

                                >

                                    View Details

                                </button>



                            </div>



                        </div>



                    </Link>



                ))}



            </div>



        </div>

    );

};


export default Cards;