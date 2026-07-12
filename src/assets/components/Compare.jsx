import React, { useState } from "react";
import Select from "react-select";
import UniversityDetails from "../../data/UniversityDetail";
import { useNavigate } from "react-router-dom";

const Compare = () => {
    const navigate = useNavigate();

    const [uniA, setUniA] = useState(null);
    const [uniB, setUniB] = useState(null);
    const [compare, setCompare] = useState(false);

    // Dropdown options automatically data se banengi
    const universityOptions = UniversityDetails.map((uni) => ({
        value: uni.name,
        label: uni.name,
    }));

    // Selected universities ka poora data
    const universityA = UniversityDetails.find(
        (uni) => uni.name === uniA?.value
    );

    const universityB = UniversityDetails.find(
        (uni) => uni.name === uniB?.value
    );

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            minHeight: "48px",
            borderRadius: "12px",
            border: state.isFocused ? "2px solid #1E293B" : "1px solid #CBD5E1",
            boxShadow: "none",
            cursor: "pointer",
            "&:hover": {
                border: "2px solid #1E293B",
            },
        }),

        placeholder: (provided) => ({
            ...provided,
            color: "#64748B",
            fontSize: "14px",
        }),

        singleValue: (provided) => ({
            ...provided,
            color: "#1E293B",
            fontSize: "14px",
            fontWeight: 500,
        }),

        menu: (provided) => ({
            ...provided,
            borderRadius: "12px",
            overflow: "hidden",
            marginTop: "6px",
            zIndex: 999,
        }),

        menuList: (provided) => ({
            ...provided,
            maxHeight: "250px",
            padding: 0,
        }),

        option: (provided, state) => ({
            ...provided,
            padding: "12px 16px",
            fontSize: "14px",
            cursor: "pointer",
            backgroundColor: state.isFocused
                ? "#1E293B"
                : state.isSelected
                    ? "#0F172A"
                    : "#FFFFFF",
            color:
                state.isFocused || state.isSelected
                    ? "#FFFFFF"
                    : "#1E293B",
            ":active": {
                backgroundColor: "#0F172A",
            },
        }),

        dropdownIndicator: (provided) => ({
            ...provided,
            color: "#1E293B",
        }),

        indicatorSeparator: () => ({
            display: "none",
        }),
    };

    return (
        <div className="mx-15 mb-5">

            <h1 className="text-3xl font-bold">
                Compare Universities
            </h1>

            <div className="flex items-end gap-10">

                <div className="flex flex-col">
                    <h2 className="text-sm font-bold mt-10">
                        Select University A
                    </h2>

                    <div className="w-90">
                        <Select
                            options={universityOptions}
                            value={uniA}
                            onChange={setUniA}
                            placeholder="Select University"
                            styles={customStyles}
                            isSearchable
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-sm font-bold">
                        Select University B
                    </h2>

                    <div className="w-90">
                        <Select
                            options={universityOptions}
                            value={uniB}
                            onChange={setUniB}
                            placeholder="Select University"
                            styles={customStyles}
                            isSearchable
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <button
                        onClick={() => {

                            if (!uniA || !uniB) {
                                alert("Please select both universities.");
                                return;
                            }

                            if (uniA.value === uniB.value) {
                                alert("Please select two different universities.");
                                return;
                            }

                            navigate("/compare-result", {
                                state: {
                                    universityA,
                                    universityB
                                }
                            });
                        }}
                        className="cursor-pointer hover:font-bold transition-all py-3 px-8 bg-slate-800 rounded-2xl text-white"
                    >
                        Compare
                    </button>
                </div>

            </div>




        </div>
    );
};

export default Compare;