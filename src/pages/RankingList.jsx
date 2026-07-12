import React from "react";
import { useParams } from "react-router-dom";

const rankings = {
   "computer-science": [
    { rank: 1, university: "FAST National University", city: "Islamabad", sector: "Private" },
    { rank: 2, university: "NUST", city: "Islamabad", sector: "Public" },
    { rank: 3, university: "COMSATS University", city: "Islamabad", sector: "Public" },
    { rank: 4, university: "GIKI", city: "Topi", sector: "Private" },
    { rank: 5, university: "Information Technology University", city: "Lahore", sector: "Public" },
    { rank: 6, university: "Air University", city: "Islamabad", sector: "Public" },
    { rank: 7, university: "Bahria University", city: "Islamabad", sector: "Public" },
    { rank: 8, university: "University of Engineering and Technology", city: "Lahore", sector: "Public" },
    { rank: 9, university: "Capital University of Science and Technology", city: "Islamabad", sector: "Private" },
    { rank: 10, university: "University of Central Punjab", city: "Lahore", sector: "Private" },
  ],

  engineering: [
    { rank: 1, university: "NUST", city: "Islamabad", sector: "Public" },
    { rank: 2, university: "Pakistan Institute of Engineering and Applied Sciences", city: "Islamabad", sector: "Public" },
    { rank: 3, university: "GIKI", city: "Topi", sector: "Private" },
    { rank: 4, university: "University of Engineering and Technology", city: "Lahore", sector: "Public" },
    { rank: 5, university: "NED University of Engineering and Technology", city: "Karachi", sector: "Public" },
    { rank: 6, university: "Mehran University of Engineering and Technology", city: "Jamshoro", sector: "Public" },
    { rank: 7, university: "COMSATS University", city: "Islamabad", sector: "Public" },
    { rank: 8, university: "Air University", city: "Islamabad", sector: "Public" },
    { rank: 9, university: "FAST National University", city: "Islamabad", sector: "Private" },
    { rank: 10, university: "University of Wah", city: "Wah Cantt", sector: "Public" },
  ],

  business: [
    { rank: 1, university: "LUMS", city: "Lahore", sector: "Private" },
    { rank: 2, university: "IBA Karachi", city: "Karachi", sector: "Public" },
    { rank: 3, university: "NUST", city: "Islamabad", sector: "Public" },
    { rank: 4, university: "SZABIST", city: "Karachi", sector: "Private" },
    { rank: 5, university: "Institute of Business Management", city: "Karachi", sector: "Private" },
    { rank: 6, university: "University of the Punjab", city: "Lahore", sector: "Public" },
    { rank: 7, university: "University of Management and Technology", city: "Lahore", sector: "Private" },
    { rank: 8, university: "University of Central Punjab", city: "Lahore", sector: "Private" },
    { rank: 9, university: "Iqra University", city: "Karachi", sector: "Private" },
    { rank: 10, university: "Bahria University", city: "Islamabad", sector: "Public" },
  ],

  medical: [
    { rank: 1, university: "Aga Khan University", city: "Karachi", sector: "Private" },
    { rank: 2, university: "King Edward Medical University", city: "Lahore", sector: "Public" },
    { rank: 3, university: "Dow University of Health Sciences", city: "Karachi", sector: "Public" },
    { rank: 4, university: "Khyber Medical University", city: "Peshawar", sector: "Public" },
    { rank: 5, university: "Allama Iqbal Medical College", city: "Lahore", sector: "Public" },
    { rank: 6, university: "Army Medical College", city: "Rawalpindi", sector: "Public" },
    { rank: 7, university: "Fatima Jinnah Medical University", city: "Lahore", sector: "Public" },
    { rank: 8, university: "Liaquat University of Medical and Health Sciences", city: "Jamshoro", sector: "Public" },
    { rank: 9, university: "Rawalpindi Medical University", city: "Rawalpindi", sector: "Public" },
    { rank: 10, university: "University of Health Sciences", city: "Lahore", sector: "Public" },
  ],

  law: [
    { rank: 1, university: "Punjab University", city: "Lahore", sector: "Public" },
    { rank: 2, university: "LUMS", city: "Lahore", sector: "Private" },
    { rank: 3, university: "International Islamic University", city: "Islamabad", sector: "Public" },
    { rank: 4, university: "University of Karachi", city: "Karachi", sector: "Public" },
    { rank: 5, university: "Bahria University", city: "Islamabad", sector: "Public" },
    { rank: 6, university: "University of Peshawar", city: "Peshawar", sector: "Public" },
    { rank: 7, university: "University of Sindh", city: "Jamshoro", sector: "Public" },
    { rank: 8, university: "Government College University", city: "Lahore", sector: "Public" },
    { rank: 9, university: "University of Balochistan", city: "Quetta", sector: "Public" },
    { rank: 10, university: "The Islamia University of Bahawalpur", city: "Bahawalpur", sector: "Public" },
  ],

  "artificial-intelligence": [
    { rank: 1, university: "FAST National University", city: "Islamabad", sector: "Private" },
    { rank: 2, university: "NUST", city: "Islamabad", sector: "Public" },
    { rank: 3, university: "COMSATS University", city: "Islamabad", sector: "Public" },
    { rank: 4, university: "Air University", city: "Islamabad", sector: "Public" },
    { rank: 5, university: "Information Technology University", city: "Lahore", sector: "Public" },
    { rank: 6, university: "Bahria University", city: "Islamabad", sector: "Public" },
    { rank: 7, university: "Capital University of Science and Technology", city: "Islamabad", sector: "Private" },
    { rank: 8, university: "University of Engineering and Technology", city: "Lahore", sector: "Public" },
    { rank: 9, university: "University of Central Punjab", city: "Lahore", sector: "Private" },
    { rank: 10, university: "GIKI", city: "Topi", sector: "Private" },
  ],
    "data-science": [
    { rank: 1, university: "FAST National University", city: "Islamabad", sector: "Private" },
    { rank: 2, university: "NUST", city: "Islamabad", sector: "Public" },
    { rank: 3, university: "COMSATS University", city: "Islamabad", sector: "Public" },
    { rank: 4, university: "Information Technology University", city: "Lahore", sector: "Public" },
    { rank: 5, university: "Air University", city: "Islamabad", sector: "Public" },
    { rank: 6, university: "Bahria University", city: "Islamabad", sector: "Public" },
    { rank: 7, university: "Capital University of Science and Technology", city: "Islamabad", sector: "Private" },
    { rank: 8, university: "University of Engineering and Technology", city: "Lahore", sector: "Public" },
    { rank: 9, university: "University of Central Punjab", city: "Lahore", sector: "Private" },
    { rank: 10, university: "GIKI", city: "Topi", sector: "Private" },
  ],

  architecture: [
    { rank: 1, university: "National College of Arts", city: "Lahore", sector: "Public" },
    { rank: 2, university: "NED University of Engineering and Technology", city: "Karachi", sector: "Public" },
    { rank: 3, university: "COMSATS University", city: "Islamabad", sector: "Public" },
    { rank: 4, university: "University of Engineering and Technology", city: "Lahore", sector: "Public" },
    { rank: 5, university: "Mehran University of Engineering and Technology", city: "Jamshoro", sector: "Public" },
    { rank: 6, university: "Beaconhouse National University", city: "Lahore", sector: "Private" },
    { rank: 7, university: "University of the Punjab", city: "Lahore", sector: "Public" },
    { rank: 8, university: "Indus Valley School of Art and Architecture", city: "Karachi", sector: "Private" },
    { rank: 9, university: "University of Lahore", city: "Lahore", sector: "Private" },
    { rank: 10, university: "Sir Syed University of Engineering and Technology", city: "Karachi", sector: "Private" },
  ],

  pharmacy: [
    { rank: 1, university: "University of the Punjab", city: "Lahore", sector: "Public" },
    { rank: 2, university: "University of Karachi", city: "Karachi", sector: "Public" },
    { rank: 3, university: "Dow University of Health Sciences", city: "Karachi", sector: "Public" },
    { rank: 4, university: "The Islamia University of Bahawalpur", city: "Bahawalpur", sector: "Public" },
    { rank: 5, university: "Bahauddin Zakariya University", city: "Multan", sector: "Public" },
    { rank: 6, university: "University of Sargodha", city: "Sargodha", sector: "Public" },
    { rank: 7, university: "Government College University Faisalabad", city: "Faisalabad", sector: "Public" },
    { rank: 8, university: "Riphah International University", city: "Islamabad", sector: "Private" },
    { rank: 9, university: "Hamdard University", city: "Karachi", sector: "Private" },
    { rank: 10, university: "Lahore College for Women University", city: "Lahore", sector: "Public" },
  ],

  psychology: [
    { rank: 1, university: "University of the Punjab", city: "Lahore", sector: "Public" },
    { rank: 2, university: "Government College University", city: "Lahore", sector: "Public" },
    { rank: 3, university: "Quaid-i-Azam University", city: "Islamabad", sector: "Public" },
    { rank: 4, university: "University of Karachi", city: "Karachi", sector: "Public" },
    { rank: 5, university: "Bahria University", city: "Islamabad", sector: "Public" },
    { rank: 6, university: "Riphah International University", city: "Islamabad", sector: "Private" },
    { rank: 7, university: "University of Management and Technology", city: "Lahore", sector: "Private" },
    { rank: 8, university: "University of Central Punjab", city: "Lahore", sector: "Private" },
    { rank: 9, university: "Foundation University", city: "Islamabad", sector: "Private" },
    { rank: 10, university: "University of Peshawar", city: "Peshawar", sector: "Public" },
  ],

  "media-studies": [
    { rank: 1, university: "National University of Modern Languages", city: "Islamabad", sector: "Public" },
    { rank: 2, university: "University of the Punjab", city: "Lahore", sector: "Public" },
    { rank: 3, university: "Beaconhouse National University", city: "Lahore", sector: "Private" },
    { rank: 4, university: "SZABIST", city: "Karachi", sector: "Private" },
    { rank: 5, university: "University of Central Punjab", city: "Lahore", sector: "Private" },
    { rank: 6, university: "Iqra University", city: "Karachi", sector: "Private" },
    { rank: 7, university: "University of Karachi", city: "Karachi", sector: "Public" },
    { rank: 8, university: "Bahria University", city: "Islamabad", sector: "Public" },
    { rank: 9, university: "University of Management and Technology", city: "Lahore", sector: "Private" },
    { rank: 10, university: "Fatima Jinnah Women University", city: "Rawalpindi", sector: "Public" },
  ],

  agriculture: [
    { rank: 1, university: "University of Agriculture Faisalabad", city: "Faisalabad", sector: "Public" },
    { rank: 2, university: "Sindh Agriculture University", city: "Tando Jam", sector: "Public" },
    { rank: 3, university: "Pir Mehr Ali Shah Arid Agriculture University", city: "Rawalpindi", sector: "Public" },
    { rank: 4, university: "The University of Agriculture Peshawar", city: "Peshawar", sector: "Public" },
    { rank: 5, university: "Bahauddin Zakariya University", city: "Multan", sector: "Public" },
    { rank: 6, university: "University of Haripur", city: "Haripur", sector: "Public" },
    { rank: 7, university: "Lasbela University of Agriculture, Water and Marine Sciences", city: "Uthal", sector: "Public" },
    { rank: 8, university: "University of Swabi", city: "Swabi", sector: "Public" },
    { rank: 9, university: "PMAS Arid Agriculture University", city: "Rawalpindi", sector: "Public" },
    { rank: 10, university: "University of Veterinary and Animal Sciences", city: "Lahore", sector: "Public" },
  ]


};

function getBadge(rank) {
  if (rank === 1)
    return {
      emoji: "🥇",
      border: "border-slate-500",
      bg: "bg-slate-200",
    };

  if (rank === 2)
    return {
      emoji: "🥈",
      border: "border-slate-500",
      bg: "bg-slate-200",
    };

  if (rank === 3)
    return {
      emoji: "🥉",
      border: "border-slate-500",
      bg: "bg-slate-200",
    };

  return {
    emoji: "🏅",
    border: "border-slate-500",
    bg: "bg-white",
  };
}

export default function RankingList() {
  const { program } = useParams();

  const universities = rankings[program] || [];

  const title = program
    ? program.replaceAll("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Rankings";

  return (
    <div className="bg-gray-50 min-h-screen mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <p className="text-sm text-gray-500">
          Home <span className="mx-2">›</span>
          Rankings <span className="mx-2">›</span>
          {title}
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Top Ranked <span>{title}</span> Universities
        </h1>

        <p className="text-gray-600 mt-3">
          Explore Pakistan's leading universities for {title}.
        </p>

        <div className="mt-10 space-y-6">

          {universities.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center shadow">
              <h2 className="text-2xl font-bold">
                No Rankings Available
              </h2>

              <p className="text-gray-500 mt-3">
                Rankings for this program will be added soon.
              </p>
            </div>
          ) : (
            universities.map((uni) => {
              const badge = getBadge(uni.rank);

              return (
                <div
                  key={uni.rank}
                  className={`${badge.bg} ${badge.border} border-l-8 rounded-3xl shadow-md p-7 hover:shadow-xl transition duration-300`}
                >
                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-5">

                      <div className="text-5xl">
                        {badge.emoji}
                      </div>

                      <div>

                        <h2 className="text-2xl font-bold">
                          {uni.university}
                        </h2>

                        <p className="text-gray-500">
                          Rank #{uni.rank}
                        </p>

                      </div>

                    </div>

                    <span className="bg-slate-700 text-white px-4 py-2 rounded-full text-sm">
                      Top Ranked
                    </span>

                  </div>

                  <div className="flex gap-16 mt-8">

                    <div>
                      <p className="text-gray-400 text-sm">
                        City
                      </p>

                      <h3 className="font-semibold text-lg">
                        📍 {uni.city}
                      </h3>
                    </div>

                    <div>
                      <p className="text-gray-400 text-sm">
                        Sector
                      </p>

                      <h3 className="font-semibold text-lg">
                        🏛 {uni.sector}
                      </h3>
                    </div>

                  </div>

                </div>
              );
            })
          )}

        </div>

      </div>
    </div>
  );
}