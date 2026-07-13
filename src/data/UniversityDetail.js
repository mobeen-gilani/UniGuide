

const UniversityDetails = [
    {
        id: 1,

        name: "FAST National University",

        image: "/images/Fastlah.jpg",

        introduction:
            "FAST-NUCES (Foundation for Advancement of Science and Technology National University of Computer and Emerging Sciences) is one of Pakistan's most prestigious universities, recognized for excellence in Computer Science, Engineering, Business, Artificial Intelligence, Data Science, and Information Technology. Established with the mission of providing world-class education, the university has built a strong reputation for its high academic standards, modern teaching methods, experienced faculty, and research-driven environment. FAST graduates are highly sought after by leading national and international companies due to their technical expertise and problem-solving skills. The university maintains strong industry partnerships, offering students valuable internship opportunities, industry projects, and career development programs. The Lahore campus is one of the largest and most popular campuses, equipped with modern classrooms, advanced computer laboratories, well-stocked libraries, sports facilities, student societies, and a vibrant learning environment. With a strong focus on innovation, practical learning, and professional development, FAST-NUCES continues to produce skilled graduates who contribute significantly to the technology and business sectors in Pakistan and around the world.",

        campus: ["Islamabad Campus (Main Campus)",
            "Lahore Campus",
            "Karachi Campus",
            "Peshawar Campus",
            "Chiniot–Faisalabad Campus",
            "Multan Campus",],

        address:
            ["Islamabad Campus: 3 A.K. Brohi Road, H-11/4, Islamabad",
                "Lahore Campus: 852-B Milaad Street, Block B, Faisal Town, Lahore",
                "Karachi Campus: St-4, Sector 17-D, National Highway, Karachi",
                "Peshawar Campus: 160 Industrial Estate, Hayatabad, Peshawar",
                "Chiniot-Faisalabad Campus: FAST Square, 9 Km from Faisalabad Motorway Interchange towards Chiniot",
                "Multan Campus: Plot E-01, Jinnah Avenue, DHA Multan",],

        bestPrograms: [
            "Computer Science",
            "Software Engineering",
            "Artificial Intelligence"
        ],

        undergraduate: [
            {
                heading: "FAST School of Computing",
                programs: [
                    "BS Computer Science",
                    "BS Software Engineering",
                    "BS Data Science",
                ],
            },
            {
                heading: "Department of Engineering",
                programs: [
                    "BS Electrical Engineering",
                    "BS Civil Engineering",
                ],
            },
            {
                heading: "FAST School of Management",
                programs: [
                    "BBA",
                    "BS Accounting & Finance",
                    "BS Financial Technology (FinTech)",
                    "BS Business Analytics",
                ],
            },
        ],

        graduate: [
            {
                heading: "MS Programs",
                programs: [
                    "MS Computer Science",
                    "MS Data Science",
                    "MS Cyber Security",
                    "MS Software Project Management",
                    "MS Electrical Engineering",
                    "MS Civil Engineering",
                    "MBA",
                    "MS Business Analytics",
                    "MS Mathematics",
                    "MS English Language Teaching",
                    "MS Applied Linguistics",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Computer Science",
                    "PhD Electrical Engineering",
                    "PhD Civil Engineering",
                    "PhD Management Sciences",
                    "PhD Mathematics",
                ],
            },
        ],
        fee: [{
            category: "Application Processing Fee",
            amount: "PKR 3,000",
            note: "Non-Refundable",
        },
        {
            category: "Admission Fee",
            amount: "PKR 30,000",
            note: "One-Time (Non-Refundable)",
        },
        {
            category: "Security Deposit",
            amount: "PKR 20,000",
            note: "One-Time (Refundable)",
        },
        {
            category: "BS / BBA Tuition Fee",
            amount: "PKR 12,000 per Credit Hour",
            note: "Charged according to enrolled credit hours",
        },
        {
            category: "MS / MBA Tuition Fee",
            amount: "PKR 12,000 per Credit Hour",
            note: "Charged according to enrolled credit hours",
        },
        {
            category: "PhD Tuition Fee",
            amount: "PKR 12,000 per Credit Hour",
            note: "Charged according to enrolled credit hours",
        },
        {
            category: "Student Activities Fund",
            amount: "PKR 2,500",
            note: "Per Semester",
        },
        {
            category: "Estimated BS Semester Fee (15 Credit Hours)",
            amount: "PKR 180,000",
            note: "Tuition Fee Only",
        },
        {
            category: "Estimated BS Semester Fee (16 Credit Hours)",
            amount: "PKR 192,000",
            note: "Tuition Fee Only",
        },
        {
            category: "Estimated BS Semester Fee (17 Credit Hours)",
            amount: "PKR 204,000",
            note: "Tuition Fee Only",
        },
        {
            category: "Estimated BS Semester Fee (18 Credit Hours)",
            amount: "PKR 216,000",
            note: "Tuition Fee Only",
        },
        {
            category: "Approximate First Semester Cost",
            amount: "PKR 245,000 – 260,000",
            note: "Includes Admission Fee, Security Deposit, Tuition Fee & Student Activities Fund",
        },
        ],

        scholarship:
            [{
                title: "1. Merit Scholarship:",
                description: "Awarded to outstanding students who achieve top positions in the admission merit list or board examinations.",
                benefit: "Recipients receive a tuition fee waiver according to the university's scholarship policy. The scholarship continues as long as the student maintains the required academic performance and fulfills the university's eligibility criteria.",
            },
            {
                title: "2. Need-Based Financial Aid",
                description: "Need-Based Financial Aid is offered to talented students who are unable to afford higher education due to financial constraints. Applications are reviewed based on financial need and supporting documents.",
                benefit: "Eligible students receive partial or full tuition fee assistance depending on their financial circumstances and the university's assessment.",
            },
            {
                title: "3. Interest-Free Study Loan",
                description: "FAST provides an interest-free study loan to deserving students who require financial support to continue their education without interruption.",
                benefit: "The loan helps students pay their tuition fee during their studies and is repaid after graduation according to the university's repayment policy.",
            },
            {
                title: "4. HEC Scholarships",
                description: "Eligible MS and PhD students can apply for scholarship programs funded by the Higher Education Commission (HEC) to support their higher education and research.",
                benefit: "Selected students may receive tuition fee support, monthly stipends, and research-related financial assistance under the applicable HEC scholarship program.",
            },
            {
                title: "5. Provincial Scholarships",
                description: "Students from different provinces may apply for government-funded scholarship programs such as PEEF, SEEF, BEEF, and KPEF, subject to their eligibility.",
                benefit: "These scholarships provide financial assistance to deserving students by helping cover educational expenses and encouraging academic excellence.",
            },
            {
                title: "6. Alumni & Community Scholarships",
                description: "FAST students can also benefit from scholarships and financial assistance offered by alumni associations and community welfare organizations.",
                benefit: "These programs reduce the financial burden on deserving students by providing tuition support and educational assistance through organizations such as FAANA, OSAF, Agha Khan Foundation, Ihsan Trust, and other community-based initiatives.",
            },
            ],



        facilities: [
            {
                name: "💻 Modern Classroom",
                description: "FAST provides spacious, air-conditioned, and multimedia-equipped classrooms that create an interactive and comfortable learning environment for students.",
            },
            {
                name: "🖥️ Advanced Computer Labs",
                description: "The university has state-of-the-art computer laboratories equipped with modern hardware, licensed software, and high-speed internet to support practical learning and research.",
            },
            {
                name: "📚 Central Library",
                description: "FAST's library offers a rich collection of books, research journals, e-books, and digital resources, providing students with excellent academic and research support.",
            },
            {
                name: "🔬 Research Laboratories",
                description: "Specialized research laboratories are available for Engineering, Computer Science, Artificial Intelligence, and Data Science students to conduct innovative projects and research.",
            },
            {
                name: "🌐 High-Speed Wi-Fi",
                description: "High-speed Wi-Fi is available throughout the campus, allowing students and faculty to access online learning resources and academic materials anytime.",
            },
            {
                name: "🏀 Sports & Recreation",
                description: "The university provides indoor and outdoor sports facilities, including cricket, football, badminton, basketball, and various student sports events throughout the year.",
            },
            {
                name: "🍽️ Cafeteria",
                description: "The campus cafeteria serves hygienic meals, snacks, and beverages in a clean and comfortable environment for students, faculty, and visitors.",
            },
            {
                name: "🩺 Medical Centre",
                description: "A medical centre is available on campus to provide first-aid services, basic healthcare, and emergency medical assistance to students and staff.",
            },
            {
                name: "🚌 Transport Facility",
                description: "Transport services are available on selected routes to help students travel safely and conveniently between the campus and different areas of the city.",
            },
            {
                name: "🏠 Hostel Facility",
                description: "Separate hostel facilities for male and female students are available near or affiliated with the campus, offering a safe and comfortable living environment.",
            },
            {
                name: "👥 Student Societies & Clubs",
                description: "FAST encourages students to participate in technical, cultural, literary, entrepreneurship, and sports societies to enhance leadership, teamwork, and communication skills.",
            },
            {
                name: "💼 Career Services",
                description: "The Career Services Office organizes internships, career counseling, job fairs, recruitment drives, and professional development workshops to prepare students for successful careers.",
            },
        ],

        contact: {
            phone: "+92-42-111-128-128",
            email: "admissions@nu.edu.pk",
            website: "https://www.nu.edu.pk",
            address: "852-B Milaad Street, Block B, Faisal Town, Lahore",
        },



    },





    {

        id: 2,
        name: "National University of Sciences and Technology (NUST)",

        introduction:
            "The National University of Sciences and Technology (NUST), established in 1991, is one of Pakistan's most prestigious public research universities and is consistently ranked among the country's top higher education institutions. Renowned for excellence in Engineering, Computer Science, Artificial Intelligence, Business, Architecture, Medical Sciences, Natural Sciences, and Social Sciences, NUST offers a world-class learning environment supported by internationally qualified faculty, cutting-edge research facilities, and strong collaborations with leading global universities and industries. Through its modern campuses, innovation ecosystem, and the National Science & Technology Park (NSTP), NUST promotes research, entrepreneurship, technological advancement, and industry engagement. Students benefit from advanced laboratories, digital learning resources, international exchange opportunities, startup incubation, vibrant student societies, and outstanding career development services, preparing graduates to become future leaders in science, technology, business, and research.",

        image: "/images/NUST.jpg",

        campus: [
            "Main Campus (H-12), Islamabad",
            "Military College of Signals (MCS), Rawalpindi",
            "College of Electrical & Mechanical Engineering (CEME), Rawalpindi",
            "Pakistan Navy Engineering College (PNEC), Karachi",
            "College of Aeronautical Engineering (CAE), Risalpur",
            "Institute of Aviation Studies (IAS), Risalpur",
        ],

        address: [
            "Main Campus: Sector H-12, Islamabad, Pakistan",
            "Military College of Signals (MCS): Humayun Road, Rawalpindi",
            "College of Electrical & Mechanical Engineering (CEME): Peshawar Road, Rawalpindi",
            "Pakistan Navy Engineering College (PNEC): Habib Ibrahim Rehmatullah Road, Karachi",
            "College of Aeronautical Engineering (CAE): Risalpur, Nowshera, Khyber Pakhtunkhwa",
            "Institute of Aviation Studies (IAS): Risalpur, Nowshera, Khyber Pakhtunkhwa",
        ],

        bestPrograms: [
            "BS Computer Science",
            "BS Artificial Intelligence",
            "BS Software Engineering",
            "BS Cyber Security",
            "BS Electrical Engineering",
            "BS Mechanical Engineering",
            "BS Civil Engineering",
            "BS Aerospace Engineering",
            "BBA",
            "Bachelor of Architecture (B.Arch)",
        ],

        undergraduate: [
            {
                heading: "School of Electrical Engineering & Computer Science (SEECS)",
                programs: [
                    "BS Computer Science",
                    "BS Software Engineering",
                    "BS Artificial Intelligence",
                    "BS Data Science",
                    "BE Electrical Engineering",
                ],
            },
            {
                heading: "School of Mechanical & Manufacturing Engineering (SMME)",
                programs: [
                    "BE Mechanical Engineering",
                    "BE Aerospace Engineering",
                ],
            },
            {
                heading: "School of Civil & Environmental Engineering (SCEE)",
                programs: [
                    "BE Civil Engineering",
                    "BE Environmental Engineering",
                    "BE Geoinformatics Engineering",
                    "BS Environmental Science",
                ],
            },
            {
                heading: "School of Chemical & Materials Engineering (SCME)",
                programs: [
                    "BE Chemical Engineering",
                    "BE Metallurgy & Materials Engineering",
                ],
            },
            {
                heading: "NUST Business School (NBS)",
                programs: [
                    "BBA",
                    "BS Accounting & Finance",
                    "BS Tourism & Hospitality Management",
                ],
            },
            {
                heading: "School of Social Sciences & Humanities (S3H)",
                programs: [
                    "BS Economics",
                    "BS Psychology",
                    "BS Mass Communication",
                    "BS Liberal Arts & Humanities",
                ],
            },
            {
                heading: "School of Art, Design & Architecture (SADA)",
                programs: [
                    "Bachelor of Architecture (B.Arch)",
                    "Bachelor of Industrial Design (BID)",
                ],
            },
            {
                heading: "Atta-ur-Rahman School of Applied Biosciences (ASAB)",
                programs: [
                    "BS Biotechnology",
                    "BS Food Science & Technology",
                    "BS Agriculture",
                ],
            },
            {
                heading: "School of Natural Sciences (SNS)",
                programs: [
                    "BS Mathematics",
                    "BS Physics",
                    "BS Chemistry",
                ],
            },
            {
                heading: "School of Interdisciplinary Engineering & Sciences (SINES)",
                programs: [
                    "BS Bioinformatics",
                ],
            },
            {
                heading: "NUST Law School (NLS)",
                programs: [
                    "LLB",
                ],
            },
            {
                heading: "NUST School of Health Sciences (NSHS)",
                programs: [
                    "MBBS",
                    "BS Human Nutrition & Dietetics",
                ],
            },
        ],

        graduate: [
            {
                heading: "Engineering, Computing & Technology",
                programs: [
                    "MS Computer Science",
                    "MS Software Engineering",
                    "MS Artificial Intelligence",
                    "MS Information Technology",
                    "MS Information Security",
                    "MS Data Science",
                    "MS Electrical Engineering",
                    "MS Mechanical Engineering",
                    "MS Civil Engineering",
                    "MS Chemical Engineering",
                    "MS Computer Engineering",
                    "MS Aerospace Engineering",
                    "MS Mechatronics Engineering",
                    "MS Engineering Management",
                ],
            },
            {
                heading: "Business, Architecture & Social Sciences",
                programs: [
                    "MBA",
                    "MS Accounting & Finance",
                    "MS Economics",
                    "MS Psychology",
                    "MS Mass Communication",
                    "MS Architecture",
                ],
            },
            {
                heading: "Natural & Applied Sciences",
                programs: [
                    "MS Mathematics",
                    "MS Physics",
                    "MS Chemistry",
                    "MS Biotechnology",
                    "MS Bioinformatics",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Computer Science",
                    "PhD Software Engineering",
                    "PhD Electrical Engineering",
                    "PhD Mechanical Engineering",
                    "PhD Civil Engineering",
                    "PhD Chemical Engineering",
                    "PhD Mathematics",
                    "PhD Physics",
                    "PhD Chemistry",
                    "PhD Biotechnology",
                    "PhD Management Sciences",
                    "PhD Psychology",
                    "PhD Architecture",
                ],
            },
        ],
        fee: [
            {
                category: "NUST Admission Processing Fee",
                amount: "PKR 5,500",
                note: "Non-Refundable",
            },
            {
                category: "Enrollment & Registration Charges",
                amount: "PKR 35,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 20,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "SEECS Engineering & Computing Programs",
                amount: "PKR 9,500 – 11,500 per Credit Hour",
                note: "Applicable to Computer Science, Software Engineering, AI, Data Science & Electrical Engineering",
            },
            {
                category: "Engineering Schools (SMME, SCEE & SCME)",
                amount: "PKR 9,500 – 11,500 per Credit Hour",
                note: "Applicable to Mechanical, Civil, Chemical, Environmental, Aerospace & Materials Engineering",
            },
            {
                category: "Business, Social Sciences & Architecture",
                amount: "PKR 9,000 – 12,000 per Credit Hour",
                note: "Applicable to NBS, S3H and SADA programs",
            },
            {
                category: "Graduate Research Programs",
                amount: "PKR 10,500 – 13,000 per Credit Hour",
                note: "Applicable to MS, MBA and MPhil programs",
            },
            {
                category: "Doctoral Research Programs",
                amount: "PKR 11,000 – 14,000 per Credit Hour",
                note: "Applicable to all PhD programs",
            },
            {
                category: "Innovation & Research Support Charges",
                amount: "PKR 3,000",
                note: "Per Semester",
            },
            {
                category: "Residential Hostel Charges",
                amount: "PKR 45,000 – 75,000 per Semester",
                note: "Accommodation only (Mess charges separate)",
            },
            {
                category: "Estimated Semester Cost",
                amount: "PKR 170,000 – 220,000",
                note: "Depends upon school, program and registered credit hours",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "PKR 235,000 – 280,000",
                note: "Includes admission charges, security deposit, tuition fee and university charges",
            },
        ],

        scholarship: [
            {
                title: "1. NUST Need-Based Financial Aid",
                description: "NUST's flagship financial aid program supports academically selected students from financially deserving families through a comprehensive financial assessment conducted by the Financial Aid Office.",
                benefit: "Provides partial or full coverage of tuition and other academic expenses for eligible undergraduate and master's students.",
            },
            {
                title: "2. NUST Financial Assistance Scheme",
                description: "High-performing undergraduate students maintaining excellent semester GPA may receive monthly financial assistance under the university's academic support policy.",
                benefit: "Provides monthly financial assistance and encourages consistent academic excellence.",
            },
            {
                title: "3. External Scholarship Programs",
                description: "Students are facilitated to apply for external scholarships including PEEF, BEEF, SEEF, CMEEF, HEC scholarships and other provincial government scholarship schemes.",
                benefit: "Offers tuition support and educational funding through external sponsoring organizations.",
            },
            {
                title: "4. Ihsan Trust Interest-Free Loan",
                description: "NUST collaborates with Ihsan Trust to provide interest-free educational loans for students facing financial difficulties during their studies.",
                benefit: "Enables students to continue their education without financial burden through Qarz-e-Hasna.",
            },
            {
                title: "5. International Research & Exchange Funding",
                description: "Students participating in international exchange programs, collaborative research, and overseas academic activities may receive grants through NUST's global partner universities and research organizations.",
                benefit: "Supports international mobility, research activities, and academic collaboration.",
            },
            {
                title: "6. Innovation & Startup Support (NSTP)",
                description: "Students developing innovative technologies and startups through the National Science & Technology Park (NSTP) can receive incubation support, mentorship, innovation grants, and industry networking opportunities.",
                benefit: "Provides startup funding, incubation facilities, mentorship, and commercialization support for innovative projects.",
            },
        ],
        facilities: [
            {
                name: "🚀 National Science & Technology Park (NSTP)",
                description: "NUST's flagship innovation hub connects students with startups, technology companies, investors, and research organizations to promote entrepreneurship and commercialization of research.",
            },
            {
                name: "🤖 Artificial Intelligence & Robotics Labs",
                description: "Dedicated laboratories support advanced research in Artificial Intelligence, Machine Learning, Robotics, Computer Vision, Data Science, Cyber Security, and Intelligent Systems.",
            },
            {
                name: "🛰️ Aerospace & Defence Research Facilities",
                description: "Specialized research facilities allow students to work on aerospace engineering, defence technologies, avionics, unmanned systems, and advanced mechanical design projects.",
            },
            {
                name: "💻 High Performance Computing (HPC) Center",
                description: "Students and researchers have access to high-performance computing resources, simulation software, cloud computing platforms, and advanced engineering applications for research and innovation.",
            },
            {
                name: "🔬 Interdisciplinary Research Centers",
                description: "NUST hosts multiple research centers working in biotechnology, renewable energy, smart materials, environmental engineering, healthcare technologies, and advanced manufacturing.",
            },
            {
                name: "📚 Central Learning Resource Centre",
                description: "The central library offers thousands of books, IEEE Xplore, Springer, ScienceDirect, digital repositories, research journals, collaborative study spaces, and e-learning facilities.",
            },
            {
                name: "🌍 International Office & Student Exchange",
                description: "Through partnerships with leading international universities, students can participate in exchange programs, joint research projects, semester abroad opportunities, and global academic collaborations.",
            },
            {
                name: "🏢 Career Development & Corporate Relations",
                description: "The Career Development Center organizes internships, industrial visits, career fairs, employer networking sessions, recruitment drives, and professional skill development workshops for students.",
            },
            {
                name: "🏠 Residential Hostels",
                description: "Modern male and female hostels provide furnished rooms, Wi-Fi, study lounges, dining halls, laundry services, sports facilities, and 24/7 security within the campus.",
            },
            {
                name: "🏆 Sports Complex & Fitness Facilities",
                description: "Students have access to swimming pools, football grounds, cricket grounds, basketball courts, tennis courts, athletics tracks, gymnasiums, and indoor sports complexes.",
            },
            {
                name: "🎭 Student Societies & Leadership Development",
                description: "More than 100 technical, cultural, entrepreneurial, literary, volunteer, and sports societies organize competitions, conferences, workshops, hackathons, and national events throughout the year.",
            },
            {
                name: "🩺 Medical Centre & Student Support Services",
                description: "A fully equipped medical centre, counselling services, ambulance support, student affairs office, and wellness programs ensure students receive comprehensive healthcare and support services.",
            },
        ],

        contact: {
            phone: "+92-51-111-11-6878",
            email: "info@nust.edu.pk",
            website: "https://nust.edu.pk",
            address: "National University of Sciences and Technology (NUST), Sector H-12, Islamabad, Pakistan",
        },
    },

    {
        id: 3,

        name: "King Edward Medical University (KEMU)",

        introduction:
            "King Edward Medical University (KEMU), established in 1860, is Pakistan's oldest and one of its most prestigious public medical universities. Located in Lahore, KEMU is internationally recognized for excellence in medical education, clinical training, biomedical research, and healthcare services. The university is affiliated with leading teaching hospitals, including Mayo Hospital, Lady Willingdon Hospital, Lady Aitchison Hospital, and several other specialized healthcare institutions, providing students with extensive hands-on clinical exposure. KEMU offers undergraduate, postgraduate, and allied health sciences programs while maintaining a strong reputation in medicine, surgery, dentistry, nursing, and biomedical research. Modern laboratories, simulation centers, research facilities, digital libraries, and experienced faculty prepare graduates to become highly skilled healthcare professionals and researchers. :contentReference[oaicite:0]{index=0}",

        image: "/images/KEMU.jpg",

        campus: [
            "Main Campus, Lahore",
            "Mayo Hospital Teaching Campus",
            "Lady Willingdon Hospital",
            "Lady Aitchison Hospital",
            "Nawaz Sharif Hospital, Yakki Gate",
            "Government Said Mitha Teaching Hospital",
        ],

        address: [
            "Main Campus: Nelagumbad, Anarkali, Lahore, Punjab, Pakistan",
            "Mayo Hospital: Nila Gumbad, Lahore",
            "Lady Willingdon Hospital: Mozang Road, Lahore",
            "Lady Aitchison Hospital: Lower Mall, Lahore",
            "Nawaz Sharif Hospital: Yakki Gate, Lahore",
            "Government Said Mitha Teaching Hospital: Ravi Road, Lahore",
        ],

        bestPrograms: [
            "MBBS",
            "Doctor of Physiotherapy (DPT)",
            "BSc (Hons.) Medical Laboratory Technology",
            "BSc (Hons.) Medical Imaging Technology",
            "BSc (Hons.) Anaesthesia Technology",
            "BSc (Hons.) Cardiac Perfusion",
            "BSc (Hons.) Surgical Technology",
            "BSc (Hons.) Dental Technology",
            "BSc (Hons.) Clinical Psychology",
            "BSc (Hons.) Speech & Language Pathology",
        ],
        undergraduate: [
            {
                heading: "Faculty of Medicine",
                programs: [
                    "MBBS",
                ],
            },
            {
                heading: "Faculty of Allied Health Sciences",
                programs: [
                    "Doctor of Physiotherapy (DPT)",
                    "BSc (Hons.) Medical Laboratory Technology",
                    "BSc (Hons.) Medical Imaging Technology",
                    "BSc (Hons.) Anaesthesia Technology",
                    "BSc (Hons.) Cardiac Perfusion",
                    "BSc (Hons.) Dental Technology",
                    "BSc (Hons.) Operation Theatre Technology",
                    "BSc (Hons.) Clinical Psychology",
                    "BSc (Hons.) Audiology",
                    "BSc (Hons.) Speech & Language Pathology",
                ],
            },
            {
                heading: "Faculty of Nursing",
                programs: [
                    "Generic BS Nursing (BSN)",
                    "Post RN BS Nursing",
                ],
            },
            {
                heading: "Faculty of Allied Vision Sciences",
                programs: [
                    "BS Optometry",
                    "BS Orthoptics",
                ],
            },
        ],

        graduate: [
            {
                heading: "Clinical Medicine Programs",
                programs: [
                    "MD Medicine",
                    "MS Surgery",
                    "MS Orthopaedic Surgery",
                    "MS Obstetrics & Gynaecology",
                    "MS Ophthalmology",
                    "MS ENT",
                    "MS Urology",
                    "MS Neurosurgery",
                    "MS Paediatric Surgery",
                    "MDS Dental Specialties",
                ],
            },
            {
                heading: "MPhil Programs",
                programs: [
                    "MPhil Anatomy",
                    "MPhil Physiology",
                    "MPhil Biochemistry",
                    "MPhil Pharmacology",
                    "MPhil Pathology",
                    "MPhil Microbiology",
                    "MPhil Community Medicine",
                    "MPhil Nursing",
                    "Master of Public Health (MPH)",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Anatomy",
                    "PhD Physiology",
                    "PhD Biochemistry",
                    "PhD Community Medicine",
                    "PhD Clinical Sciences",
                    "PhD Basic Medical Sciences",
                ],
            },
        ],
        fee: [
            {
                category: "KEMU Admission Processing Fee",
                amount: "PKR 2,000",
                note: "Non-Refundable",
            },
            {
                category: "University Enrollment Charges",
                amount: "PKR 15,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 10,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "MBBS Program Fee",
                amount: "As per Government of Punjab Policy",
                note: "Applicable to undergraduate MBBS students",
            },
            {
                category: "Doctor of Physiotherapy (DPT)",
                amount: "PKR 70,000 – 100,000 per Semester",
                note: "Applicable to DPT program",
            },
            {
                category: "Allied Health Sciences Programs",
                amount: "PKR 65,000 – 95,000 per Semester",
                note: "Applicable to Medical Laboratory, Imaging, Anaesthesia, Cardiac Perfusion, OT Technology and related programs",
            },
            {
                category: "BS Nursing Programs",
                amount: "PKR 60,000 – 90,000 per Semester",
                note: "Applicable to Generic BS Nursing and Post RN BS Nursing",
            },
            {
                category: "Postgraduate Clinical Programs",
                amount: "Varies by Specialty",
                note: "Applicable to MD, MS, MDS, MPhil and MPH programs",
            },
            {
                category: "Clinical Training & Laboratory Charges",
                amount: "PKR 5,000",
                note: "Per Semester",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 18,000 – 35,000 per Semester",
                note: "Accommodation only (Mess charges separate)",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "Depends upon the selected program",
                note: "Includes admission charges, enrollment, security deposit and tuition fee",
            },
        ],

        scholarship: [
            {
                title: "1. Punjab Government Merit Scholarship",
                description: "Outstanding students enrolled at KEMU may benefit from merit-based scholarship schemes supported by the Government of Punjab.",
                benefit: "Provides tuition assistance and academic recognition for high-achieving students.",
            },
            {
                title: "2. HEC Need-Based Financial Assistance",
                description: "Financially deserving students can apply for Higher Education Commission (HEC) need-based financial aid through the university.",
                benefit: "Provides partial or full tuition fee support for eligible students.",
            },
            {
                title: "3. Medical Research Grants",
                description: "Students participating in biomedical and clinical research projects may receive research funding through university departments and national research organizations.",
                benefit: "Supports research activities, thesis work, and scientific publications.",
            },
            {
                title: "4. Teaching Hospital Scholarships",
                description: "Affiliated teaching hospitals and healthcare organizations occasionally provide scholarships and educational assistance to deserving medical students.",
                benefit: "Provides financial support and professional clinical exposure.",
            },
            {
                title: "5. Postgraduate Residency & Research Support",
                description: "MD, MS, MPhil, and PhD trainees working in teaching hospitals and research departments may receive stipends and research assistance.",
                benefit: "Provides monthly stipend, research funding, and clinical training support.",
            },
            {
                title: "6. Alumni & Healthcare Welfare Scholarships",
                description: "KEMU alumni associations, charitable medical trusts, and healthcare welfare organizations offer scholarships to deserving students based on merit and financial need.",
                benefit: "Provides partial or full educational financial assistance.",
            },
        ],
        facilities: [
            {
                name: "🏥 Mayo Hospital Clinical Training",
                description: "KEMU students receive extensive clinical training at Mayo Hospital, one of Pakistan's largest tertiary care teaching hospitals, where they gain hands-on experience in patient diagnosis, treatment, and emergency care.",
            },
            {
                name: "🩺 Medical Simulation & Skills Center",
                description: "The university provides modern simulation laboratories where students practice clinical procedures, patient management, surgical skills, CPR, and emergency response before hospital rotations.",
            },
            {
                name: "🔬 Biomedical & Clinical Research Laboratories",
                description: "Advanced laboratories support research in Anatomy, Physiology, Biochemistry, Pathology, Microbiology, Pharmacology, Molecular Medicine, and other medical sciences.",
            },
            {
                name: "🧬 Anatomy Museum & Dissection Hall",
                description: "Students receive practical anatomy education through fully equipped dissection halls, cadaver-based learning, and one of the country's renowned medical anatomy museums.",
            },
            {
                name: "🩻 Diagnostic Imaging & Medical Technology Labs",
                description: "Specialized laboratories provide practical training in radiology, diagnostic imaging, medical laboratory sciences, cardiac perfusion, and anaesthesia technology.",
            },
            {
                name: "📚 Medical Library & Digital Learning Resources",
                description: "The central medical library offers thousands of medical textbooks, research journals, online databases, e-books, and international medical literature for education and research.",
            },
            {
                name: "👨‍⚕️ Affiliated Teaching Hospitals",
                description: "Clinical education is supported through Mayo Hospital, Lady Willingdon Hospital, Lady Aitchison Hospital, Government Said Mitha Hospital, and other affiliated healthcare institutions.",
            },
            {
                name: "🧪 Clinical Research & Innovation Center",
                description: "Faculty members and students actively participate in clinical trials, biomedical research, public health studies, and healthcare innovation projects.",
            },
            {
                name: "🏠 Student Hostels",
                description: "Separate hostel facilities for male and female students provide furnished accommodation, dining halls, study rooms, Wi-Fi, security, and recreational spaces.",
            },
            {
                name: "⚽ Sports & Student Welfare",
                description: "Students participate in sports competitions, medical conferences, seminars, cultural activities, student societies, and community healthcare awareness programs.",
            },
            {
                name: "💼 Career Development & Residency Support",
                description: "The university assists graduates in residency placement, postgraduate admissions, licensing examinations, career counselling, and professional development.",
            },
            {
                name: "🚑 Student Health & Emergency Services",
                description: "Students have immediate access to emergency medical services, specialist healthcare facilities, counselling services, and on-campus medical support.",
            },
        ],

        contact: {
            phone: "+92-42-99211145",
            email: "registrar@kemu.edu.pk",
            website: "https://kemu.edu.pk",
            address: "King Edward Medical University, Nelagumbad, Anarkali, Lahore, Punjab, Pakistan",
        },
    },

    {
        id: 4,
        name: "Lahore University of Management Sciences (LUMS)",

        introduction:
            "Lahore University of Management Sciences (LUMS) is one of Pakistan's leading private research universities, established in 1985. Located in Lahore, LUMS is internationally recognized for excellence in Business, Computer Science, Engineering, Law, Humanities, Social Sciences, and Natural Sciences. The university is known for its world-class faculty, research-driven education, modern campus, entrepreneurial culture, and strong links with industry and international universities. LUMS provides students with a multidisciplinary learning environment, state-of-the-art laboratories, digital libraries, exchange opportunities, leadership development, and one of the most vibrant student communities in Pakistan. Its graduates are highly sought after by multinational companies, startups, government organizations, and top universities around the world.",
        image: "/images/Lums.jpg",

        campus: [
            "Main Campus, DHA, Lahore",
            "Suleman Dawood School of Business (SDSB)",
            "Syed Babar Ali School of Science & Engineering (SBASSE)",
            "Mushtaq Ahmad Gurmani School of Humanities & Social Sciences (MGSHSS)",
            "Shaikh Ahmad Hassan School of Law (SAHSOL)",
            "Syed Ahsan Ali and Syed Maratib Ali School of Education (SOE)",
        ],

        address:
            [
                "Main Campus: DHA Phase V, Opposite Sector U, Lahore Cantt, Lahore",
                "Suleman Dawood School of Business (SDSB): LUMS Main Campus, DHA, Lahore",
                "Syed Babar Ali School of Science & Engineering (SBASSE): LUMS Main Campus, DHA, Lahore",
                "Mushtaq Ahmad Gurmani School of Humanities & Social Sciences (MGSHSS): LUMS Main Campus, DHA, Lahore",
                "Shaikh Ahmad Hassan School of Law (SAHSOL): LUMS Main Campus, DHA, Lahore",
                "Syed Ahsan Ali and Syed Maratib Ali School of Education (SOE): LUMS Main Campus, DHA, Lahore",
            ],

        bestPrograms: [
            "BSc Computer Science",
            "BSc Accounting & Finance",
            "BSc Management Science",
            "BS Electrical Engineering",
            "MBA",
            "BA-LL.B (Honours)",
            "Economics",
            "Artificial Intelligence",
        ],

        undergraduate: [
            {
                heading: "Syed Babar Ali School of Science & Engineering (SBASSE)",
                programs: [
                    "BS Computer Science",
                    "BS Electrical Engineering",
                    "BS Mathematics",
                    "BS Physics",
                    "BS Chemistry",
                    "BS Biology",
                    "BS Chemical Engineering",
                    "BS Economics & Mathematics (Joint Major)",
                ],
            },
            {
                heading: "Suleman Dawood School of Business (SDSB)",
                programs: [
                    "BSc Accounting & Finance",
                    "BSc Management Science",
                ],
            },
            {
                heading: "Mushtaq Ahmad Gurmani School of Humanities & Social Sciences (MGSHSS)",
                programs: [
                    "BA English",
                    "BA History",
                    "BA Comparative Literature & Creative Arts",
                    "BSc Anthropology & Sociology",
                    "BSc Political Science",
                    "BSc Psychology",
                    "BSc Economics",
                ],
            },
            {
                heading: "Shaikh Ahmad Hassan School of Law (SAHSOL)",
                programs: [
                    "BA-LL.B (Honours)",
                ],
            },
            {
                heading: "School of Education (SOE)",
                programs: [
                    "Minor and interdisciplinary education courses",
                ],
            },
        ],

        graduate: [
            {
                heading: "MS / MBA / MPhil Programs",
                programs: [
                    "MBA",
                    "Executive MBA",
                    "MS Computer Science",
                    "MS Artificial Intelligence",
                    "MS Electrical Engineering",
                    "MS Mathematics",
                    "MS Chemistry",
                    "MS Biology",
                    "MS Physics",
                    "MS Technology Management & Entrepreneurship",
                    "MS Financial Management",
                    "MS Supply Chain & Retail Management",
                    "MS Healthcare Management & Innovation",
                    "MPhil Education Leadership & Management",
                    "MPhil Comparative Humanities",
                    "MPhil Society, Culture & Politics",
                    "LL.M",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Computer Science",
                    "PhD Electrical Engineering",
                    "PhD Mathematics",
                    "PhD Physics",
                    "PhD Chemistry",
                    "PhD Biology",
                    "PhD Management",
                    "PhD Economics",
                    "PhD Education",
                ],
            },
        ],
        fee: [{
            category: "Application Processing Fee",
            amount: "PKR 8,000",
            note: "Non-Refundable",
        },
        {
            category: "Admission Fee",
            amount: "PKR 35,000",
            note: "One-Time (Non-Refundable)",
        },
        {
            category: "Security Deposit",
            amount: "PKR 25,000",
            note: "One-Time (Refundable)",
        },
        {
            category: "BS / BSc Tuition Fee",
            amount: "PKR 700,000 – 850,000 per Year",
            note: "Varies according to degree program",
        },
        {
            category: "MS / MBA Tuition Fee",
            amount: "PKR 750,000 – 950,000 per Year",
            note: "Varies according to degree program",
        },
        {
            category: "PhD Tuition Fee",
            amount: "PKR 700,000 – 900,000 per Year",
            note: "Varies according to department",
        },
        {
            category: "Student Activities Fund",
            amount: "Included in Semester Charges",
            note: "Charged Every Semester",
        },
        {
            category: "Estimated BS Annual Fee",
            amount: "PKR 750,000 – 900,000",
            note: "Tuition Fee Only",
        },
        {
            category: "Estimated MBA Annual Fee",
            amount: "PKR 900,000 – 1,100,000",
            note: "Tuition Fee Only",
        },
        {
            category: "Estimated Hostel Charges",
            amount: "PKR 220,000 – 300,000 per Year",
            note: "Accommodation & Meal Plan (Approximate)",
        },
        {
            category: "Books & Other Academic Expenses",
            amount: "PKR 40,000 – 80,000 per Year",
            note: "Approximate",
        },
        {
            category: "Approximate First Year Cost",
            amount: "PKR 1,000,000 – 1,300,000",
            note: "Includes Admission Fee, Tuition Fee, Registration & Other University Charges",
        },
        ],

        scholarship: [
            {
                title: "1. LUMS Merit Awards",
                description: "Outstanding students demonstrating exceptional academic performance are awarded merit scholarships during admission and throughout their degree programs.",
                benefit: "Provides partial or full tuition fee waiver based on academic excellence.",
            },
            {
                title: "2. National Outreach Programme (NOP)",
                description: "LUMS identifies talented students from underprivileged backgrounds across Pakistan through the National Outreach Programme (NOP).",
                benefit: "Covers tuition fee, hostel, meals, books, and living expenses for eligible students.",
            },
            {
                title: "3. Financial Aid Programme",
                description: "Students facing financial challenges may apply for LUMS Financial Aid through a comprehensive financial assessment process.",
                benefit: "Provides partial or complete tuition fee support according to financial need.",
            },
            {
                title: "4. Corporate Sponsored Scholarships",
                description: "Leading banks, multinational companies, business organizations, and corporate partners sponsor scholarships for outstanding LUMS students.",
                benefit: "Provides tuition assistance, internships, mentorship, and career development opportunities.",
            },
            {
                title: "5. International Exchange & Graduate Funding",
                description: "Students participating in international exchange programs, graduate studies, and collaborative research projects may receive scholarships from partner institutions.",
                benefit: "Supports international education, research activities, and academic mobility.",
            },
            {
                title: "6. Entrepreneurship & Innovation Grants",
                description: "Through LUMS entrepreneurship initiatives and innovation centers, student startups and business ideas can receive funding and incubation support.",
                benefit: "Provides startup funding, incubation facilities, mentorship, and entrepreneurial development opportunities.",
            },
        ],
        facilities: [
            {
                name: "🏫 Smart Classrooms",
                description: "LUMS provides modern smart classrooms equipped with multimedia systems, interactive learning technologies, and comfortable learning spaces to enhance the educational experience.",
            },
            {
                name: "🖥️ Advanced Computer Labs",
                description: "State-of-the-art computer laboratories equipped with high-performance systems, licensed software, AI labs, engineering labs, and high-speed internet support practical learning and research.",
            },
            {
                name: "📚 Central Library",
                description: "The Dr. Muhammad Fazlur Rahman Library offers an extensive collection of books, research journals, digital resources, online databases, and collaborative study spaces for students and researchers.",
            },
            {
                name: "🔬 Research Laboratories",
                description: "LUMS has world-class research laboratories for Computer Science, Engineering, Biology, Chemistry, Physics, and Social Sciences, supporting innovative research and development.",
            },
            {
                name: "🌐 High-Speed Wi-Fi",
                description: "High-speed Wi-Fi and internet facilities are available throughout the campus, allowing students and faculty to access academic resources anytime.",
            },
            {
                name: "🏀 Sports & Recreation",
                description: "The university provides excellent indoor and outdoor sports facilities including cricket, football, basketball, tennis, badminton, squash, swimming pool, gymnasium, and fitness center.",
            },
            {
                name: "🍽️ Cafeterias & Dining",
                description: "Multiple cafeterias, cafés, and dining facilities offer hygienic meals, snacks, beverages, and international cuisine in a comfortable environment.",
            },
            {
                name: "🩺 Medical Centre",
                description: "An on-campus medical center provides first aid, general healthcare services, emergency medical assistance, and qualified medical staff for students and employees.",
            },
            {
                name: "🚌 Transport Facility",
                description: "Transport services are available on selected routes across Lahore for students, faculty, and staff members.",
            },
            {
                name: "🏠 Hostel Facility",
                description: "Separate residential hostels for male and female students provide furnished rooms, dining halls, internet access, laundry facilities, study lounges, and 24/7 security.",
            },
            {
                name: "👥 Student Societies & Clubs",
                description: "LUMS has more than 50 student societies covering entrepreneurship, technology, arts, music, literature, sports, debating, community service, and cultural activities.",
            },
            {
                name: "💼 Career Services Office",
                description: "The Career Services Office organizes internships, career counseling, employer networking events, recruitment drives, job fairs, workshops, and development programs.",
            },
        ],

        contact: {
            phone: "+92-42-35608000",
            email: "admissions@lums.edu.pk",
            website: "https://www.lums.edu.pk",
            address: "Lahore University of Management Sciences (LUMS), DHA Phase V, Opposite Sector U, Lahore Cantt, Lahore, Punjab, Pakistan",
        },
    },
    {
        id: 5,
        name: "FAST School of Management (FSM)",

        introduction:
            "FAST School of Management (FSM) is the business school of FAST National University of Computer and Emerging Sciences (FAST-NUCES). Established to develop future business leaders, entrepreneurs, and managers, FSM offers high-quality education in Management Sciences, Business Analytics, Accounting & Finance, Financial Technology, and Business Administration. The school emphasizes analytical thinking, ethical leadership, communication skills, innovation, and industry engagement. With experienced faculty, modern teaching methodologies, industry collaborations, and research opportunities, FSM prepares graduates to excel in corporate organizations, startups, financial institutions, and entrepreneurial ventures. The school maintains strong industry linkages and integrates technology with business education, providing students with practical exposure through internships, case studies, business projects, and professional development activities.",
        image: "/images/Fastlah.jpg",

        campus: [
            "Islamabad Campus",
            "Lahore Campus",
            "Karachi Campus",
            "Peshawar Campus",
            "Chiniot-Faisalabad Campus",
        ],

        address:
            [
                "Islamabad Campus: A.K. Brohi Road, H-11/4, Islamabad",
                "Lahore Campus: 852-B Milaad Street, Block B, Faisal Town, Lahore",
                "Karachi Campus: ST-4, Sector 17-D, Shah Latif Town, National Highway, Karachi",
                "Peshawar Campus: 160 Industrial Estate, Hayatabad, Peshawar",
                "Chiniot-Faisalabad Campus: FAST Square, 9 Km from Faisalabad Motorway Interchange towards Chiniot",
            ],

        bestPrograms: [
            "Bachelor of Business Administration (BBA)",
            "BS Accounting & Finance",
            "BS Business Analytics",
            "BS Financial Technology (FinTech)",
            "MBA",
            "MS Business Analytics",
            "PhD Management Sciences",
        ],

        undergraduate: [
            {
                heading: "FAST School of Management",
                programs: [
                    "Bachelor of Business Administration (BBA)",
                    "BS Accounting & Finance",
                    "BS Business Analytics",
                    "BS Financial Technology (FinTech)",
                ],
            },
        ],

        graduate: [
            {
                heading: "Graduate Programs",
                programs: [
                    "Master of Business Administration (MBA)",
                    "MS Business Analytics",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Management Sciences",
                ],
            },
        ],
        fee: [{
            category: "Application Processing Fee",
            amount: "PKR 3,000",
            note: "Non-Refundable",
        },
        {
            category: "Admission Fee",
            amount: "PKR 30,000",
            note: "One-Time (Non-Refundable)",
        },
        {
            category: "Security Deposit",
            amount: "PKR 20,000",
            note: "One-Time (Refundable)",
        },
        {
            category: "BBA / BS Tuition Fee",
            amount: "PKR 12,000 per Credit Hour",
            note: "Charged according to enrolled credit hours",
        },
        {
            category: "MBA / MS Tuition Fee",
            amount: "PKR 12,000 per Credit Hour",
            note: "Charged according to enrolled credit hours",
        },
        {
            category: "PhD Tuition Fee",
            amount: "PKR 12,000 per Credit Hour",
            note: "Charged according to enrolled credit hours",
        },
        {
            category: "Student Activities Fund",
            amount: "PKR 2,500",
            note: "Per Semester",
        },
        {
            category: "Estimated BBA Semester Fee (15 Credit Hours)",
            amount: "PKR 180,000",
            note: "Tuition Fee Only",
        },
        {
            category: "Estimated BBA Semester Fee (16 Credit Hours)",
            amount: "PKR 192,000",
            note: "Tuition Fee Only",
        },
        {
            category: "Estimated BBA Semester Fee (17 Credit Hours)",
            amount: "PKR 204,000",
            note: "Tuition Fee Only",
        },
        {
            category: "Estimated MBA Semester Fee",
            amount: "PKR 180,000 – 220,000",
            note: "Depending on Credit Hours",
        },
        {
            category: "Approximate First Semester Cost",
            amount: "PKR 240,000 – 260,000",
            note: "Includes Admission Fee, Security Deposit, Tuition Fee & Student Activities Fund",
        },
        ],

        scholarship:
            [
                {
                    title: "1. Merit Scholarship",
                    description: "Merit scholarships are awarded to outstanding students based on admission merit and exceptional academic performance.",
                    benefit: "Students may receive tuition fee waivers subject to maintaining the required CGPA throughout their studies.",
                },
                {
                    title: "2. Need-Based Financial Assistance",
                    description: "FAST provides interest-free financial assistance to deserving students facing financial hardship after evaluating their financial circumstances.",
                    benefit: "Eligible students receive tuition fee assistance in the form of an interest-free study loan that continues subject to satisfactory academic performance.",
                },
                {
                    title: "3. Internal Sponsorship",
                    description: "Outstanding students may qualify for internal sponsorships offered by FAST according to university policies.",
                    benefit: "Provides tuition fee support for eligible undergraduate, graduate, and PhD students while academic requirements are maintained.",
                },
                {
                    title: "4. HEC Scholarships",
                    description: "Graduate students can apply for scholarship opportunities offered by the Higher Education Commission (HEC).",
                    benefit: "Selected students receive tuition fee support, monthly stipends, and research funding according to HEC policies.",
                },
                {
                    title: "5. Community & Alumni Scholarships",
                    description: "Students may also benefit from scholarships funded by FAST alumni and community organizations including OSAF, FANA, Ihsan Trust, and other welfare foundations.",
                    benefit: "These scholarships help deserving students reduce their educational expenses through partial or full financial assistance.",
                },
                {
                    title: "6. External Government Scholarships",
                    description: "Eligible students may apply for provincial and national scholarship schemes announced by government organizations from time to time.",
                    benefit: "Provides additional tuition support and educational assistance for eligible students.",
                },
            ],
        facilities: [
            {
                name: "💼 Smart Business Classrooms",
                description: "FAST School of Management provides modern, multimedia-equipped classrooms designed to support interactive lectures, case studies, presentations, and collaborative business learning.",
            },
            {
                name: "💻 Computer Laboratories",
                description: "Students have access to advanced computer laboratories equipped with the latest business software, statistical tools, financial analysis applications, and high-speed internet.",
            },
            {
                name: "📚 Central Library",
                description: "The university library offers an extensive collection of business, management, economics, finance, entrepreneurship, and technology books along with international journals and digital databases.",
            },
            {
                name: "📊 Business Research Center",
                description: "Students and faculty participate in research projects related to business management, finance, entrepreneurship, marketing, and business analytics through dedicated research facilities.",
            },
            {
                name: "🌐 High-Speed Wi-Fi",
                description: "Campus-wide high-speed Wi-Fi enables students to access online learning platforms, research databases, and business resources anytime.",
            },
            {
                name: "🏀 Sports & Recreation",
                description: "Students can participate in cricket, football, basketball, badminton, table tennis, and various indoor and outdoor sports activities organized throughout the academic year.",
            },
            {
                name: "🍽️ Cafeteria",
                description: "The campus cafeteria provides hygienic meals, snacks, and beverages in a comfortable environment for students, faculty, and visitors.",
            },
            {
                name: "🩺 Medical Centre",
                description: "Basic healthcare facilities, first aid services, and emergency medical assistance are available for students and university staff.",
            },
            {
                name: "🚌 Transport Facility",
                description: "Transport services are available on selected city routes to facilitate safe and convenient travel for students.",
            },
            {
                name: "🏠 Hostel Facility",
                description: "Separate hostel facilities for male and female students are available near or affiliated with the campus, providing secure accommodation and essential living facilities.",
            },
            {
                name: "👥 Student Societies & Clubs",
                description: "FSM encourages students to join entrepreneurship, marketing, finance, consulting, debating, leadership, cultural, and community service societies to develop professional and leadership skills.",
            },
            {
                name: "💼 Career Services Office",
                description: "The Career Services Office arranges internships, corporate networking events, career counseling, job fairs, recruitment drives, workshops, and industry interaction sessions to prepare students for successful careers.",
            },
        ],

        contact: {
            phone: "+92-42-111-128-128",
            email: "admissions@nu.edu.pk",
            website: "https://www.nu.edu.pk",
            address: "852-B Milaad Street, Block B, Faisal Town, Lahore",
        },
    },
    {

        id: 6,

        name: "Air University",

        introduction:
            "Air University (AU), established in 2002 under the Pakistan Air Force, is one of Pakistan's leading public sector universities specializing in Engineering, Computing, Artificial Intelligence, Cyber Security, Aerospace Sciences, Business, Social Sciences, Health Sciences, and Aviation Studies. The university is recognized for its high academic standards, modern teaching methods, research excellence, and strong industry collaborations. With state-of-the-art laboratories, research centers, experienced faculty, and close links with the Pakistan Air Force and national industries, Air University provides students with outstanding opportunities in research, innovation, internships, and professional development. Its campuses offer a vibrant learning environment supported by modern classrooms, digital libraries, student societies, entrepreneurship initiatives, and career services, preparing graduates for leadership roles in technology, aviation, engineering, business, and research. :contentReference[oaicite:0]{index=0}",

        image: "/images/AirUniversity.jpg",

        campus: [
            "Main Campus (E-9), Islamabad",
            "Aerospace & Aviation Campus, Kamra",
            "Multan Campus",
            "Kharian Campus",
            "Karachi Campus",
        ],

        address: [
            "Main Campus: Sector E-9, Islamabad, Pakistan",
            "Aerospace & Aviation Campus: Pakistan Aeronautical Complex (PAC), Kamra, Attock",
            "Multan Campus: Abdali Road, Multan, Punjab",
            "Kharian Campus: Kharian, Punjab",
            "Karachi Campus: Karachi, Sindh, Pakistan",
        ],

        bestPrograms: [
            "BS Computer Science",
            "BS Artificial Intelligence",
            "BS Cyber Security",
            "BS Software Engineering",
            "BE Electrical Engineering",
            "BE Aerospace Engineering",
            "BE Mechatronics Engineering",
            "BBA",
            "BS Aviation Management",
            "BS Psychology",
        ],

        undergraduate: [
            {
                heading: "Faculty of Computing & Artificial Intelligence",
                programs: [
                    "BS Computer Science",
                    "BS Software Engineering",
                    "BS Artificial Intelligence",
                    "BS Cyber Security",
                    "BS Data Science",
                ],
            },
            {
                heading: "Faculty of Engineering",
                programs: [
                    "BE Electrical Engineering",
                    "BE Mechanical Engineering",
                    "BE Mechatronics Engineering",
                    "BE Aerospace Engineering",
                    "BE Avionics Engineering",
                ],
            },
            {
                heading: "Faculty of Management Sciences",
                programs: [
                    "BBA",
                    "BS Accounting & Finance",
                    "BS Business Analytics",
                    "BS Aviation Management",
                ],
            },
            {
                heading: "Faculty of Social Sciences",
                programs: [
                    "BS Psychology",
                    "BS International Relations",
                    "BS English",
                ],
            },
            {
                heading: "Faculty of Health Sciences",
                programs: [
                    "BS Human Nutrition & Dietetics",
                    "BS Medical Laboratory Technology",
                ],
            },
            {
                heading: "Faculty of Mathematics & Basic Sciences",
                programs: [
                    "BS Mathematics",
                    "BS Physics",
                ],
            },
        ],

        graduate: [
            {
                heading: "Engineering & Computing Programs",
                programs: [
                    "MS Computer Science",
                    "MS Software Engineering",
                    "MS Artificial Intelligence",
                    "MS Cyber Security",
                    "MS Data Science",
                    "MS Electrical Engineering",
                    "MS Mechanical Engineering",
                    "MS Aerospace Engineering",
                    "MS Mechatronics Engineering",
                ],
            },
            {
                heading: "Business & Social Sciences Programs",
                programs: [
                    "MBA",
                    "MS Management Sciences",
                    "MS Accounting & Finance",
                    "MS Psychology",
                    "MS English",
                    "MS International Relations",
                ],
            },
            {
                heading: "Health & Basic Sciences Programs",
                programs: [
                    "MS Mathematics",
                    "MS Physics",
                    "MS Human Nutrition",
                    "MS Medical Laboratory Sciences",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Computer Science",
                    "PhD Electrical Engineering",
                    "PhD Mechanical Engineering",
                    "PhD Management Sciences",
                    "PhD Psychology",
                    "PhD Mathematics",
                    "PhD Physics",
                ],
            },
        ],
        fee: [
            {
                category: "Air University Admission Processing Fee",
                amount: "PKR 3,000",
                note: "Non-Refundable",
            },
            {
                category: "Enrollment & Registration Charges",
                amount: "PKR 30,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 15,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "Computing & Artificial Intelligence Programs",
                amount: "PKR 9,000 – 11,000 per Credit Hour",
                note: "Applicable to Computer Science, Software Engineering, AI, Cyber Security & Data Science",
            },
            {
                category: "Engineering & Aerospace Programs",
                amount: "PKR 9,500 – 11,500 per Credit Hour",
                note: "Applicable to Electrical, Mechanical, Mechatronics, Aerospace & Avionics Engineering",
            },
            {
                category: "Business & Aviation Management Programs",
                amount: "PKR 8,500 – 10,500 per Credit Hour",
                note: "Applicable to BBA, Accounting & Finance, Business Analytics & Aviation Management",
            },
            {
                category: "Graduate Studies (MS / MBA)",
                amount: "PKR 10,000 – 12,500 per Credit Hour",
                note: "Varies according to program",
            },
            {
                category: "Doctoral Research Programs",
                amount: "PKR 11,000 – 13,500 per Credit Hour",
                note: "Applicable to all PhD programs",
            },
            {
                category: "Laboratory & Student Development Charges",
                amount: "PKR 3,500",
                note: "Per Semester",
            },
            {
                category: "Residential Hostel Charges",
                amount: "PKR 35,000 – 60,000 per Semester",
                note: "Accommodation only (Mess charges separate)",
            },
            {
                category: "Estimated Semester Cost",
                amount: "PKR 160,000 – 210,000",
                note: "Depends upon faculty, program and registered credit hours",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "PKR 215,000 – 265,000",
                note: "Includes admission charges, security deposit, tuition fee and university charges",
            },
        ],

        scholarship: [
            {
                title: "1. Air University Merit Scholarship",
                description: "Outstanding students achieving exceptional academic performance during admission and subsequent semesters are eligible for merit scholarships offered by Air University.",
                benefit: "Provides partial or full tuition fee waiver based on academic excellence.",
            },
            {
                title: "2. PAF Educational Support Program",
                description: "Children of eligible Pakistan Air Force personnel and other qualified candidates may receive educational concessions according to Air University and PAF policies.",
                benefit: "Provides tuition fee concessions for eligible students.",
            },
            {
                title: "3. HEC & Government Scholarship Programs",
                description: "Students may apply for HEC Need-Based Scholarships and various federal and provincial government scholarship schemes through the university.",
                benefit: "Provides financial assistance and tuition fee support for deserving students.",
            },
            {
                title: "4. Aerospace & Engineering Research Assistantships",
                description: "MS and PhD students involved in engineering, aerospace, artificial intelligence, and defence-related research projects may receive funded assistantships.",
                benefit: "Provides monthly stipend, research funding, and tuition support.",
            },
            {
                title: "5. Industry Sponsored Scholarships",
                description: "Technology companies, engineering organizations, and corporate partners collaborate with Air University to support talented students through scholarships and internship opportunities.",
                benefit: "Offers tuition assistance, internships, and industry exposure.",
            },
            {
                title: "6. Innovation & Aviation Technology Grants",
                description: "Students working on innovative projects in aviation, aerospace, robotics, AI, cyber security, and emerging technologies may receive innovation grants and incubation support.",
                benefit: "Provides startup funding, project grants, mentorship, and innovation support.",
            },
        ],
        facilities: [
            {
                name: "✈️ Aerospace & Aviation Research Center",
                description: "Air University provides specialized research facilities for Aerospace Engineering, Aviation Sciences, Avionics, and Aerodynamics, enabling students to work on real-world aviation and defence-related projects.",
            },
            {
                name: "🤖 Artificial Intelligence & Cyber Security Labs",
                description: "Modern laboratories support practical learning and research in Artificial Intelligence, Machine Learning, Data Science, Cyber Security, Digital Forensics, and Cloud Computing.",
            },
            {
                name: "⚙️ Advanced Engineering Laboratories",
                description: "Students gain hands-on experience in Electrical, Mechanical, Mechatronics, Aerospace, and Avionics Engineering through fully equipped engineering laboratories and simulation facilities.",
            },
            {
                name: "💻 High-Tech Computing Center",
                description: "High-performance computer labs with licensed engineering software, programming environments, simulation tools, and high-speed internet support academic and research activities.",
            },
            {
                name: "🔬 Research & Innovation Centers",
                description: "The university promotes interdisciplinary research in engineering, emerging technologies, artificial intelligence, healthcare, and management sciences through dedicated research centers.",
            },
            {
                name: "📚 Central Library & Digital Resources",
                description: "Students have access to a modern library featuring thousands of books, IEEE journals, research databases, e-books, and digital learning resources.",
            },
            {
                name: "🤝 Industry Collaboration & Career Services",
                description: "Strong partnerships with Pakistan Air Force, aviation organizations, IT companies, and engineering industries provide internships, industrial visits, career fairs, and recruitment opportunities.",
            },
            {
                name: "🚀 Innovation & Entrepreneurship Center",
                description: "Students receive mentorship, startup incubation, business development support, innovation grants, and opportunities to transform innovative ideas into successful ventures.",
            },
            {
                name: "🏠 Student Hostels",
                description: "Separate hostels for male and female students provide furnished rooms, Wi-Fi, dining facilities, study areas, recreational spaces, and 24/7 security.",
            },
            {
                name: "🏆 Sports & Student Activities",
                description: "Air University encourages participation in sports competitions, technical events, robotics contests, cultural festivals, leadership programs, and student societies.",
            },
            {
                name: "🌍 International Academic Partnerships",
                description: "The university collaborates with international universities and research institutions to facilitate student exchange programs, collaborative research, and faculty development.",
            },
            {
                name: "🩺 Medical & Student Support Services",
                description: "Students have access to on-campus medical facilities, counselling services, emergency healthcare, academic advising, and student welfare offices.",
            },
        ],

        contact: {
            phone: "+92-51-9262557",
            email: "info@mail.au.edu.pk",
            website: "https://www.au.edu.pk",
            address: "Air University, PAF Complex, Sector E-9, Islamabad, Pakistan",
        },
    },
    {

        id: 7,

        name: "University of the Punjab",

        introduction:
            "The University of the Punjab (PU), established in 1882, is the oldest and one of the largest public sector universities in Pakistan. Located in Lahore, the university is internationally recognized for its excellence in Higher Education, Scientific Research, Humanities, Social Sciences, Business, Computer Science, Law, Pharmacy, Engineering, and Fine Arts. With more than a century of academic excellence, Punjab University has produced thousands of distinguished graduates serving in government, industry, education, healthcare, judiciary, and research organizations worldwide. The university consists of numerous faculties, institutes, schools, and research centers, offering modern laboratories, digital libraries, research facilities, student societies, sports complexes, hostels, and international collaborations. Its diverse academic environment provides students with outstanding opportunities for learning, innovation, research, and professional development.",

        image: "/images/PunjabUniversity.jpg",

        campus: [
            "Allama Iqbal (New) Campus, Lahore",
            "Quaid-e-Azam (Old) Campus, Lahore",
            "Jhelum Campus",
            "Gujranwala Campus",
            "Khanspur Campus",
        ],

        address: [
            "Allama Iqbal Campus: Canal Bank Road, Lahore, Punjab, Pakistan",
            "Quaid-e-Azam Campus: Anarkali, Lahore, Punjab, Pakistan",
            "Jhelum Campus: Jhelum, Punjab, Pakistan",
            "Gujranwala Campus: Gujranwala, Punjab, Pakistan",
            "Khanspur Campus: Ayubia, Abbottabad, Khyber Pakhtunkhwa",
        ],

        bestPrograms: [
            "BS Computer Science",
            "BS Software Engineering",
            "Doctor of Pharmacy (Pharm-D)",
            "LLB",
            "BBA",
            "BS Accounting & Finance",
            "BS Psychology",
            "BS Mathematics",
            "BS Physics",
            "BS Biotechnology",
            "BS Mass Communication",
            "Bachelor of Fine Arts (BFA)",
        ],
        undergraduate: [
            {
                heading: "Faculty of Computing & Information Technology",
                programs: [
                    "BS Computer Science",
                    "BS Software Engineering",
                    "BS Information Technology",
                    "BS Data Science",
                ],
            },
            {
                heading: "Faculty of Engineering & Technology",
                programs: [
                    "BE Electrical Engineering",
                    "BE Chemical Engineering",
                ],
            },
            {
                heading: "Faculty of Pharmacy",
                programs: [
                    "Doctor of Pharmacy (Pharm-D)",
                    "BS Pharmaceutical Sciences",
                ],
            },
            {
                heading: "Faculty of Management Sciences & Commerce",
                programs: [
                    "BBA",
                    "BS Accounting & Finance",
                    "BS Commerce",
                ],
            },
            {
                heading: "Faculty of Law",
                programs: [
                    "LLB",
                ],
            },
            {
                heading: "Faculty of Life Sciences",
                programs: [
                    "BS Biotechnology",
                    "BS Biochemistry",
                    "BS Microbiology",
                    "BS Zoology",
                    "BS Botany",
                ],
            },
            {
                heading: "Faculty of Physical Sciences",
                programs: [
                    "BS Mathematics",
                    "BS Physics",
                    "BS Chemistry",
                    "BS Statistics",
                ],
            },
            {
                heading: "Faculty of Social Sciences",
                programs: [
                    "BS Psychology",
                    "BS Sociology",
                    "BS Political Science",
                    "BS International Relations",
                    "BS Gender Studies",
                ],
            },
            {
                heading: "Faculty of Arts & Humanities",
                programs: [
                    "BS English",
                    "BS Urdu",
                    "BS History",
                    "BS Islamic Studies",
                    "BS Philosophy",
                ],
            },
            {
                heading: "Faculty of Media & Communication Studies",
                programs: [
                    "BS Mass Communication",
                ],
            },
            {
                heading: "College of Art & Design",
                programs: [
                    "Bachelor of Fine Arts (BFA)",
                    "Bachelor of Design (B.Des)",
                ],
            },
        ],

        graduate: [
            {
                heading: "Computing, Engineering & Technology Programs",
                programs: [
                    "MS Computer Science",
                    "MS Software Engineering",
                    "MS Information Technology",
                    "MS Data Science",
                    "MS Electrical Engineering",
                    "MS Chemical Engineering",
                ],
            },
            {
                heading: "Business, Law & Social Sciences Programs",
                programs: [
                    "MBA",
                    "MS Management",
                    "MS Accounting & Finance",
                    "LLM",
                    "MS Psychology",
                    "MS Sociology",
                    "MS International Relations",
                    "MS English",
                    "MS Urdu",
                ],
            },
            {
                heading: "Medical & Natural Sciences Programs",
                programs: [
                    "MPhil Pharmacy",
                    "MPhil Biotechnology",
                    "MPhil Biochemistry",
                    "MPhil Physics",
                    "MPhil Chemistry",
                    "MPhil Mathematics",
                    "Master of Public Health (MPH)",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Computer Science",
                    "PhD Pharmacy",
                    "PhD Biotechnology",
                    "PhD Physics",
                    "PhD Chemistry",
                    "PhD Mathematics",
                    "PhD English",
                    "PhD Psychology",
                    "PhD Management Sciences",
                    "PhD Law",
                ],
            },
        ],
        fee: [
            {
                category: "Punjab University Admission Processing Fee",
                amount: "PKR 2,000",
                note: "Non-Refundable",
            },
            {
                category: "University Admission & Registration Charges",
                amount: "PKR 12,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 8,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "Computer Science & Information Technology Programs",
                amount: "PKR 55,000 – 80,000 per Semester",
                note: "Applicable to BS Computer Science, Software Engineering, IT & Data Science",
            },
            {
                category: "Engineering & Technology Programs",
                amount: "PKR 60,000 – 90,000 per Semester",
                note: "Applicable to Engineering degree programs",
            },
            {
                category: "Pharmacy & Health Sciences Programs",
                amount: "PKR 70,000 – 100,000 per Semester",
                note: "Applicable to Pharm-D and Health-related programs",
            },
            {
                category: "Business, Law & Social Sciences Programs",
                amount: "PKR 40,000 – 65,000 per Semester",
                note: "Applicable to BBA, Commerce, Law, Psychology, English and related disciplines",
            },
            {
                category: "MPhil / MS Programs",
                amount: "PKR 50,000 – 90,000 per Semester",
                note: "Depends upon department and research requirements",
            },
            {
                category: "PhD Programs",
                amount: "PKR 60,000 – 100,000 per Semester",
                note: "Varies according to discipline and research work",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 15,000 – 30,000 per Semester",
                note: "Accommodation only (Mess charges separate)",
            },
            {
                category: "Library & Student Activity Charges",
                amount: "PKR 3,000",
                note: "Per Semester",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "PKR 70,000 – 130,000",
                note: "Depends upon the selected faculty and degree program",
            },
        ],

        scholarship: [
            {
                title: "1. Punjab University Merit Scholarship",
                description: "Merit scholarships are awarded to outstanding students who achieve excellent academic performance in their respective faculties and departments.",
                benefit: "Provides tuition fee concessions and academic recognition.",
            },
            {
                title: "2. HEC Need-Based Scholarship",
                description: "Financially deserving students can apply for Higher Education Commission (HEC) Need-Based Scholarships through the university.",
                benefit: "Provides partial or full tuition fee assistance.",
            },
            {
                title: "3. PEEF (Punjab Educational Endowment Fund)",
                description: "Eligible students from Punjab can receive scholarships through the Punjab Educational Endowment Fund based on merit and financial need.",
                benefit: "Supports tuition fees and educational expenses.",
            },
            {
                title: "4. Chief Minister Punjab Scholarship Programs",
                description: "Students may benefit from various scholarship initiatives introduced by the Government of Punjab for talented and deserving students.",
                benefit: "Provides financial assistance and educational support.",
            },
            {
                title: "5. Research Grants & Graduate Fellowships",
                description: "MPhil and PhD scholars may receive research grants, thesis support, and fellowship opportunities through university research projects and HEC-funded programs.",
                benefit: "Provides research funding, thesis support, and academic grants.",
            },
            {
                title: "6. International Exchange & Research Scholarships",
                description: "Students participating in international exchange programs and collaborative research with partner universities may receive funded mobility and research opportunities.",
                benefit: "Supports international education, research collaboration, and academic exchange.",
            },
        ],
        facilities: [
            {
                name: "🏛️ Specialized Academic Faculties",
                description: "Punjab University consists of numerous faculties, institutes, and departments offering education in Computer Science, Pharmacy, Law, Business, Engineering, Social Sciences, Arts, and Natural Sciences with modern teaching facilities.",
            },
            {
                name: "🔬 Advanced Research Centers",
                description: "The university hosts research institutes and laboratories supporting innovation in biotechnology, chemistry, physics, pharmacy, information technology, environmental sciences, and social sciences.",
            },
            {
                name: "💻 Computer & Innovation Labs",
                description: "Students have access to modern computer laboratories equipped with high-speed internet, licensed software, programming environments, and research tools for computing and engineering education.",
            },
            {
                name: "📚 Central Library & Digital Resources",
                description: "Punjab University's renowned library system provides thousands of books, research journals, e-books, HEC Digital Library access, and international academic databases.",
            },
            {
                name: "🌍 Office of Research, Innovation & Commercialization (ORIC)",
                description: "ORIC promotes research projects, innovation, university-industry collaboration, commercialization, and research funding opportunities for faculty members and students.",
            },
            {
                name: "🤝 Career Counseling & Placement Center",
                description: "The university organizes career fairs, internships, employer networking events, professional development workshops, and graduate placement opportunities.",
            },
            {
                name: "🏠 Student Hostels",
                description: "Separate hostels for male and female students provide furnished rooms, dining facilities, study areas, internet access, recreational spaces, and 24-hour security.",
            },
            {
                name: "🏆 Sports Complex & Recreation",
                description: "Students participate in cricket, football, hockey, badminton, athletics, indoor games, gymnasium activities, and inter-university sports competitions.",
            },
            {
                name: "🎭 Student Societies & Cultural Activities",
                description: "Numerous literary, debating, scientific, cultural, dramatic, volunteer, and departmental societies organize seminars, conferences, competitions, and community service activities.",
            },
            {
                name: "🕌 Mosque & Student Welfare Services",
                description: "The campus provides a central mosque, health services, counselling facilities, transport assistance, student affairs offices, and welfare support for students.",
            },
            {
                name: "🚌 University Transport Services",
                description: "Transport facilities operate on various routes across Lahore, making daily commuting convenient for students and university staff.",
            },
            {
                name: "🌐 International Linkages & Exchange Programs",
                description: "Punjab University collaborates with international universities and research organizations, providing opportunities for academic exchange, joint research, and faculty development.",
            },
        ],

        contact: {
            phone: "+92-42-99231102",
            email: "registrar@pu.edu.pk",
            website: "https://pu.edu.pk",
            address: "University of the Punjab, Canal Bank Road, Allama Iqbal Campus, Lahore, Punjab, Pakistan",
        },
    },
    {
        id: 8,
        name: "University of Engineering and Technology (UET) Lahore",

        introduction:
            "The University of Engineering and Technology (UET) Lahore is one of Pakistan's oldest, most prestigious, and leading public engineering universities. Established in 1921, UET Lahore is recognized by the Higher Education Commission (HEC) and the Pakistan Engineering Council (PEC) for producing highly qualified engineers, scientists, architects, and technology professionals. The university is well known for excellence in Civil, Electrical, Mechanical, Computer, Chemical, Petroleum, Architecture, Artificial Intelligence, Data Science, and Business programs. With state-of-the-art laboratories, research centers, innovation facilities, experienced faculty, and strong industry partnerships, UET Lahore provides students with practical knowledge, research opportunities, and professional skills. Its graduates are employed in leading national and international engineering firms, government organizations, multinational companies, and research institutions.",
        image: "/images/UET.jpg",

        campus: [
            "Main Campus, Lahore",
            "New Campus (Kala Shah Kaku)",
            "Faisalabad Campus",
            "Narowal Campus",
            "Rachna College of Engineering & Technology (Gujranwala)",
            "Model Town Campus",
        ],

        address:
            [
                "Main Campus: G.T. Road, Bagh-e-Jinnah, Lahore",
                "New Campus (Kala Shah Kaku): Kala Shah Kaku, Sheikhupura",
                "Faisalabad Campus: Khurrianwala, Faisalabad",
                "Narowal Campus: Narowal, Punjab",
                "Rachna College of Engineering & Technology: Gujranwala",
                "Model Town Campus: P-6, Model Town, Lahore",
            ],

        bestPrograms: [
            "BS Civil Engineering",
            "BS Electrical Engineering",
            "BS Mechanical Engineering",
            "BS Computer Science",
            "BS Artificial Intelligence",
            "BS Software Engineering",
            "BS Chemical Engineering",
            "BS Architecture",
            "BS Petroleum & Gas Engineering",
            "BBA",
        ],

        undergraduate: [
            {
                heading: "Faculty of Civil Engineering & Architecture",
                programs: [
                    "BS Civil Engineering",
                    "BS Architectural Engineering",
                    "Bachelor of Architecture (B.Arch)",
                    "BS City & Regional Planning",
                    "BS Transportation Engineering",
                ],
            },
            {
                heading: "Faculty of Electrical, Computer & Software Engineering",
                programs: [
                    "BS Electrical Engineering",
                    "BS Computer Engineering",
                    "BS Computer Science",
                    "BS Software Engineering",
                    "BS Artificial Intelligence",
                    "BS Cyber Security",
                    "BS Information Systems Technology",
                ],
            },
            {
                heading: "Faculty of Mechanical & Manufacturing Engineering",
                programs: [
                    "BS Mechanical Engineering",
                    "BS Mechatronics & Control Engineering",
                    "BS Industrial & Manufacturing Engineering",
                    "BS Automotive Engineering",
                    "BS Robotics & Intelligent Systems",
                ],
            },
            {
                heading: "Faculty of Chemical & Materials Engineering",
                programs: [
                    "BS Chemical Engineering",
                    "BS Polymer Engineering",
                    "BS Metallurgical & Materials Engineering",
                    "BS Petroleum & Gas Engineering",
                    "BS Mining Engineering",
                ],
            },
            {
                heading: "Faculty of Natural Sciences",
                programs: [
                    "BS Mathematics",
                    "BS Physics",
                    "BS Chemistry",
                    "BS Environmental Science",
                ],
            },
            {
                heading: "Institute of Business & Management",
                programs: [
                    "BBA",
                    "BBIT",
                    "BS Business Analytics",
                    "BS Business Data Analytics",
                ],
            },
        ],

        graduate: [
            {
                heading: "MS / MPhil Programs",
                programs: [
                    "MS Civil Engineering",
                    "MS Electrical Engineering",
                    "MS Mechanical Engineering",
                    "MS Computer Science",
                    "MS Software Engineering",
                    "MS Artificial Intelligence",
                    "MS Chemical Engineering",
                    "MS Petroleum Engineering",
                    "MS Mathematics",
                    "MS Physics",
                    "MBA",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Civil Engineering",
                    "PhD Electrical Engineering",
                    "PhD Mechanical Engineering",
                    "PhD Computer Science",
                    "PhD Chemical Engineering",
                    "PhD Mathematics",
                    "PhD Physics",
                    "PhD Management Sciences",
                ],
            },
        ],
        fee: [{
            category: "UET Admission Processing Fee",
            amount: "PKR 2,000",
            note: "Non-Refundable",
        },
        {
            category: "Engineering Admission Charges",
            amount: "PKR 35,000",
            note: "One-Time (Non-Refundable)",
        },
        {
            category: "Student Security Deposit",
            amount: "PKR 10,000",
            note: "Refundable at the completion of degree",
        },
        {
            category: "Engineering Programs Fee",
            amount: "PKR 70,000 – 95,000 per Semester",
            note: "Applicable to Civil, Mechanical, Electrical, Chemical, Petroleum and related Engineering programs",
        },
        {
            category: "Computing & AI Programs Fee",
            amount: "PKR 80,000 – 110,000 per Semester",
            note: "Applicable to Computer Science, Software Engineering, Artificial Intelligence & Cyber Security",
        },
        {
            category: "Architecture & Planning Programs Fee",
            amount: "PKR 75,000 – 100,000 per Semester",
            note: "Applicable to Architecture and City & Regional Planning programs",
        },
        {
            category: "Graduate Engineering Programs",
            amount: "PKR 80,000 – 120,000 per Semester",
            note: "For MS Engineering, MS Computer Science and related graduate programs",
        },
        {
            category: "Doctoral Research Programs",
            amount: "PKR 90,000 – 130,000 per Semester",
            note: "Applicable to PhD Engineering and Technology programs",
        },
        {
            category: "Engineering Lab & Student Services",
            amount: "PKR 3,000",
            note: "Laboratory maintenance and student activity charges per semester",
        },
        {
            category: "Engineering Hostel Charges",
            amount: "PKR 20,000 – 40,000 per Semester",
            note: "Accommodation charges (Mess charges excluded)",
        },
        {
            category: "Estimated Engineering Semester Cost",
            amount: "PKR 90,000 – 120,000",
            note: "Average cost for undergraduate engineering students",
        },
        {
            category: "Estimated First Semester Expenses",
            amount: "PKR 130,000 – 175,000",
            note: "Includes admission charges, security deposit, tuition fee and other university charges",
        },
        ],

        scholarship: [
            {
                title: "1. PEC Engineering Scholarships",
                description: "Pakistan Engineering Council (PEC) collaborates with various organizations to support talented engineering students pursuing accredited engineering programs.",
                benefit: "Provides tuition assistance and educational support for eligible engineering students.",
            },
            {
                title: "2. Engineering Industry Sponsored Scholarships",
                description: "Leading engineering companies and industrial partners sponsor scholarships for outstanding students enrolled in engineering disciplines.",
                benefit: "Offers tuition fee support, internships, and career opportunities.",
            },
            {
                title: "3. HEC Undergraduate Engineering Financial Aid",
                description: "Eligible undergraduate engineering students can apply for HEC-funded need-based financial assistance through UET Lahore.",
                benefit: "Covers tuition fees and provides financial assistance throughout the degree program.",
            },
            {
                title: "4. PEEF & Honhaar Engineering Awards",
                description: "Eligible Punjab students enrolled in engineering and technology programs can apply for provincial scholarship schemes including PEEF and Honhaar.",
                benefit: "Provides tuition fee support and educational expenses for deserving students.",
            },
            {
                title: "5. Research Assistantships for MS & PhD Engineers",
                description: "Graduate engineering students working on funded research projects may receive Teaching Assistantships (TA) and Research Assistantships (RA).",
                benefit: "Provides monthly stipend, research funding, and tuition support.",
            },
            {
                title: "6. Alumni & Engineering Welfare Scholarships",
                description: "UET alumni associations, engineering trusts, and welfare organizations offer scholarships to deserving engineering students based on merit and financial need.",
                benefit: "Provides partial or full financial assistance along with academic support.",
            },
        ],
        facilities: [
            {
                name: "🏗️ Civil Engineering Testing Laboratories",
                description: "UET Lahore provides advanced structural, geotechnical, transportation, hydraulics, surveying, and construction material laboratories where students perform practical engineering experiments and research.",
            },
            {
                name: "⚡ Electrical & Power Engineering Labs",
                description: "Students have access to modern power systems, control systems, electronics, renewable energy, communication, and embedded systems laboratories equipped with industry-standard equipment.",
            },
            {
                name: "⚙️ Mechanical & Manufacturing Workshops",
                description: "Well-equipped mechanical workshops, CNC machining labs, CAD/CAM facilities, manufacturing laboratories, and thermal engineering labs help students gain hands-on engineering experience.",
            },
            {
                name: "🤖 Artificial Intelligence & Robotics Center",
                description: "Dedicated laboratories for Artificial Intelligence, Machine Learning, Robotics, Automation, and Intelligent Systems support innovative research and industrial projects.",
            },
            {
                name: "🧪 Chemical, Petroleum & Materials Engineering Labs",
                description: "Specialized laboratories for Chemical Engineering, Petroleum Engineering, Polymer Engineering, Metallurgy, and Materials Science provide practical training using modern instruments.",
            },
            {
                name: "🚀 Innovation & Technology Incubation Centre (ITIC)",
                description: "The university's incubation centre supports startups, engineering innovations, product development, entrepreneurship, and collaboration with industries and investors.",
            },
            {
                name: "📚 Engineering Knowledge Resource Centre",
                description: "The central library provides engineering books, IEEE journals, digital databases, research publications, e-books, and online learning resources for students and researchers.",
            },
            {
                name: "🌐 Smart Engineering Campus",
                description: "Campus-wide Wi-Fi, digital classrooms, Learning Management System (LMS), engineering software licenses, and online student portals enhance teaching and learning.",
            },
            {
                name: "🏠 Residential Hostels",
                description: "Separate hostels for male and female students provide secure accommodation, furnished rooms, study halls, internet facilities, dining services, and recreational spaces.",
            },
            {
                name: "🏆 Engineering Sports & Recreation Complex",
                description: "Students can participate in cricket, football, basketball, volleyball, badminton, athletics, indoor games, gymnasium, and annual engineering sports festivals.",
            },
            {
                name: "🔧 Professional Engineering Societies",
                description: "Students actively participate in IEEE, ASME, ASCE, ACM, IET, Robotics Society, Formula Student Team, and other technical societies to develop leadership and professional skills.",
            },
            {
                name: "🏭 Industrial Liaison & Career Development Centre",
                description: "The university maintains strong partnerships with industries by arranging internships, industrial visits, recruitment drives, career counseling, engineering expos, and campus placements.",
            },
        ],

        contact: {
            phone: "+92-42-99029227",
            email: "registrar@uet.edu.pk",
            website: "https://www.uet.edu.pk",
            address: "University of Engineering and Technology (UET) Lahore, G.T. Road, Bagh-e-Jinnah, Lahore, Punjab, Pakistan",
        },
    },
    {
        id: 9,

        name: "COMSATS University Islamabad",

        introduction:
            "COMSATS University Islamabad (CUI), established in 1998, is one of Pakistan's leading public sector universities, renowned for excellence in Computer Science, Information Technology, Engineering, Business, Natural Sciences, Architecture, Pharmacy, and Social Sciences. Operating under the COMSATS Commission, the university has earned a strong national and international reputation for quality education, innovative research, and industry collaboration. With multiple campuses across Pakistan, CUI offers modern classrooms, advanced laboratories, research centers, digital libraries, entrepreneurship support, and international academic partnerships. The university emphasizes practical learning, technological innovation, and research, preparing students to excel in industry, entrepreneurship, higher education, and global careers.",

        image: "/images/COMSATS.jpg",

        campus: [
            "Islamabad Campus (Main Campus)",
            "Lahore Campus",
            "Abbottabad Campus",
            "Wah Campus",
            "Attock Campus",
            "Sahiwal Campus",
            "Vehari Campus",
        ],

        address: [
            "Islamabad Campus: Park Road, Tarlai Kalan, Islamabad, Pakistan",
            "Lahore Campus: Defence Road, Off Raiwind Road, Lahore",
            "Abbottabad Campus: University Road, Abbottabad",
            "Wah Campus: Quaid Avenue, Wah Cantt",
            "Attock Campus: Kamra Road, Attock",
            "Sahiwal Campus: Comsats Road, Sahiwal",
            "Vehari Campus: Multan Road, Vehari",
        ],

        bestPrograms: [
            "BS Computer Science",
            "BS Software Engineering",
            "BS Artificial Intelligence",
            "BS Cyber Security",
            "BS Data Science",
            "BE Electrical Engineering",
            "BS Computer Engineering",
            "BBA",
            "BS Accounting & Finance",
            "Doctor of Pharmacy (Pharm-D)",
            "Bachelor of Architecture (B.Arch)",
            "BS Biotechnology",
        ],
        undergraduate: [
            {
                heading: "Faculty of Computer Science & Information Technology",
                programs: [
                    "BS Computer Science",
                    "BS Software Engineering",
                    "BS Artificial Intelligence",
                    "BS Cyber Security",
                    "BS Data Science",
                ],
            },
            {
                heading: "Faculty of Engineering",
                programs: [
                    "BE Electrical Engineering",
                    "BS Computer Engineering",
                    "BE Chemical Engineering",
                    "BE Civil Engineering",
                ],
            },
            {
                heading: "Faculty of Management Sciences",
                programs: [
                    "BBA",
                    "BS Accounting & Finance",
                    "BS Business Analytics",
                ],
            },
            {
                heading: "Faculty of Pharmacy",
                programs: [
                    "Doctor of Pharmacy (Pharm-D)",
                ],
            },
            {
                heading: "Faculty of Architecture & Design",
                programs: [
                    "Bachelor of Architecture (B.Arch)",
                    "BS Interior Design",
                ],
            },
            {
                heading: "Faculty of Biosciences",
                programs: [
                    "BS Biotechnology",
                    "BS Bioinformatics",
                    "BS Environmental Sciences",
                ],
            },
            {
                heading: "Faculty of Humanities & Social Sciences",
                programs: [
                    "BS Psychology",
                    "BS Economics",
                    "BS English",
                    "BS Media & Communication",
                    "BS International Relations",
                ],
            },
            {
                heading: "Faculty of Sciences",
                programs: [
                    "BS Mathematics",
                    "BS Physics",
                    "BS Chemistry",
                    "BS Statistics",
                ],
            },
        ],

        graduate: [
            {
                heading: "Computing & Engineering Programs",
                programs: [
                    "MS Computer Science",
                    "MS Software Engineering",
                    "MS Artificial Intelligence",
                    "MS Cyber Security",
                    "MS Data Science",
                    "MS Electrical Engineering",
                    "MS Computer Engineering",
                    "MS Chemical Engineering",
                    "MS Civil Engineering",
                ],
            },
            {
                heading: "Business & Social Sciences Programs",
                programs: [
                    "MBA",
                    "MS Management Sciences",
                    "MS Accounting & Finance",
                    "MS Economics",
                    "MS Psychology",
                    "MS English",
                    "MS International Relations",
                    "MS Media & Communication Studies",
                ],
            },
            {
                heading: "Natural Sciences & Pharmacy Programs",
                programs: [
                    "MPhil Biotechnology",
                    "MPhil Bioinformatics",
                    "MPhil Environmental Sciences",
                    "MPhil Mathematics",
                    "MPhil Physics",
                    "MPhil Chemistry",
                    "MPhil Pharmacy",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Computer Science",
                    "PhD Software Engineering",
                    "PhD Electrical Engineering",
                    "PhD Management Sciences",
                    "PhD Mathematics",
                    "PhD Physics",
                    "PhD Chemistry",
                    "PhD Biotechnology",
                    "PhD Pharmacy",
                ],
            },
        ],
        fee: [
            {
                category: "COMSATS Admission Processing Fee",
                amount: "PKR 3,000",
                note: "Non-Refundable",
            },
            {
                category: "Admission & Registration Charges",
                amount: "PKR 25,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 15,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "Computer Science & IT Programs",
                amount: "PKR 8,500 – 10,500 per Credit Hour",
                note: "Applicable to Computer Science, Software Engineering, AI, Cyber Security & Data Science",
            },
            {
                category: "Engineering Programs",
                amount: "PKR 9,000 – 11,000 per Credit Hour",
                note: "Applicable to Electrical, Civil, Chemical & Computer Engineering",
            },
            {
                category: "Business, Architecture & Social Sciences",
                amount: "PKR 8,000 – 10,000 per Credit Hour",
                note: "Applicable to BBA, Accounting & Finance, Architecture, Psychology and related disciplines",
            },
            {
                category: "Pharmacy & Biosciences Programs",
                amount: "PKR 9,000 – 11,000 per Credit Hour",
                note: "Applicable to Pharm-D, Biotechnology, Bioinformatics & Environmental Sciences",
            },
            {
                category: "Graduate Studies (MS / MBA / MPhil)",
                amount: "PKR 9,500 – 12,000 per Credit Hour",
                note: "Varies according to program",
            },
            {
                category: "Doctoral (PhD) Programs",
                amount: "PKR 10,500 – 13,000 per Credit Hour",
                note: "Applicable to all PhD programs",
            },
            {
                category: "Laboratory & Student Services Charges",
                amount: "PKR 3,500",
                note: "Per Semester",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 30,000 – 55,000 per Semester",
                note: "Accommodation only (Mess charges separate)",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "PKR 180,000 – 250,000",
                note: "Depends upon campus, faculty and selected degree program",
            },
        ],

        scholarship: [
            {
                title: "1. COMSATS Merit Scholarship",
                description: "Outstanding students with excellent academic records are awarded merit scholarships based on semester GPA and admission performance.",
                benefit: "Provides partial or full tuition fee waiver for high-achieving students.",
            },
            {
                title: "2. HEC Need-Based Scholarship",
                description: "Financially deserving students can apply for HEC Need-Based Scholarships through COMSATS University.",
                benefit: "Provides partial or full tuition fee assistance based on financial need.",
            },
            {
                title: "3. COMSATS Financial Assistance Program",
                description: "The university offers financial assistance to deserving students after evaluation of their financial circumstances.",
                benefit: "Provides tuition fee concessions and educational support.",
            },
            {
                title: "4. Research Assistantships",
                description: "MS, MPhil and PhD students working on funded research projects may receive research assistantships through university departments and research grants.",
                benefit: "Provides monthly stipend, research funding and tuition support.",
            },
            {
                title: "5. International Exchange & Research Scholarships",
                description: "Students participating in international exchange programs and collaborative research with partner universities may receive scholarships and mobility grants.",
                benefit: "Supports international study, research collaboration and academic exchange.",
            },
            {
                title: "6. Innovation & Entrepreneurship Support",
                description: "Students with innovative startup ideas can receive incubation facilities, mentorship, industry networking opportunities and innovation grants through COMSATS innovation centers.",
                benefit: "Provides startup funding, incubation support and entrepreneurial guidance.",
            },
        ],
        facilities: [
            {
                name: "💻 Computing & Emerging Technologies Labs",
                description: "COMSATS provides state-of-the-art laboratories for Computer Science, Artificial Intelligence, Cyber Security, Data Science, Software Engineering, Cloud Computing, and Internet of Things (IoT).",
            },
            {
                name: "⚙️ Engineering Research Laboratories",
                description: "Modern engineering laboratories support practical learning and research in Electrical, Civil, Chemical, and Computer Engineering with advanced equipment and simulation software.",
            },
            {
                name: "🔬 COMSATS Research Centers",
                description: "The university operates specialized research centers focusing on biotechnology, environmental sciences, nanotechnology, renewable energy, information technology, and advanced scientific research.",
            },
            {
                name: "🏛️ Office of Research, Innovation & Commercialization (ORIC)",
                description: "ORIC promotes research excellence by facilitating funded projects, industry collaboration, intellectual property development, commercialization, and innovation initiatives.",
            },
            {
                name: "🚀 Business Incubation & Entrepreneurship Center",
                description: "Students receive startup incubation, business mentoring, innovation support, entrepreneurship training, and networking opportunities with investors and industry leaders.",
            },
            {
                name: "📚 Central Library & Digital Learning Resources",
                description: "The university library provides access to thousands of books, HEC Digital Library, IEEE Xplore, Springer, ScienceDirect, e-books, and international research journals.",
            },
            {
                name: "🤝 Industry Linkages & Career Development Center",
                description: "Strong partnerships with national and international IT companies and industries provide internships, career fairs, industrial visits, recruitment drives, and professional development programs.",
            },
            {
                name: "🌍 International Collaborations",
                description: "COMSATS maintains academic partnerships with international universities and research institutions, offering student exchange programs, joint research, and faculty collaborations.",
            },
            {
                name: "🏠 Student Hostels",
                description: "Separate hostels for male and female students offer furnished rooms, Wi-Fi, dining facilities, study areas, recreational spaces, and 24-hour security.",
            },
            {
                name: "🏆 Sports & Student Societies",
                description: "Students actively participate in sports competitions, programming contests, robotics events, cultural festivals, debating societies, volunteer organizations, and technical clubs.",
            },
            {
                name: "🚌 Transport & Campus Services",
                description: "Transport facilities operate on multiple routes, while campus services include cafeterias, banking, photocopying, prayer areas, and student support offices.",
            },
            {
                name: "🩺 Medical & Student Wellness Center",
                description: "Students have access to medical facilities, emergency healthcare, counselling services, academic advising, and student welfare support throughout their studies.",
            },
        ],

        contact: {
            phone: "+92-51-9247000",
            email: "admissions@comsats.edu.pk",
            website: "https://www.comsats.edu.pk",
            address: "COMSATS University Islamabad, Park Road, Tarlai Kalan, Islamabad, Pakistan",
        },
    },
    {
        id: 10,

        name: "NED University of Engineering & Technology",

        introduction:
            "NED University of Engineering & Technology (NEDUET), established in 1921, is one of Pakistan's oldest and most prestigious public engineering universities. Located in Karachi, the university is internationally recognized for excellence in Engineering, Computer Science, Information Technology, Artificial Intelligence, Architecture, and Applied Sciences. NED has played a vital role in producing highly skilled engineers, researchers, and technology professionals serving in Pakistan and around the world. The university emphasizes practical education, innovation, entrepreneurship, and research through modern laboratories, engineering workshops, research centers, industry collaborations, digital libraries, and experienced faculty. Students benefit from internships, industrial projects, career development programs, and a vibrant campus environment that prepares them for leadership roles in engineering, technology, and research.",

        image: "/images/NED.jpg",

        campus: [
            "Main Campus, University Road, Karachi",
            "City Campus, Karachi",
            "LEJ Campus, Karachi",
        ],

        address: [
            "Main Campus: University Road, Karachi, Sindh, Pakistan",
            "City Campus: Maulana Din Muhammad Wafai Road, Karachi, Sindh",
            "LEJ Campus: University Road, Karachi, Sindh",
        ],

        bestPrograms: [
            "BE Civil Engineering",
            "BE Electrical Engineering",
            "BE Mechanical Engineering",
            "BE Computer Systems Engineering",
            "BE Software Engineering",
            "BE Electronic Engineering",
            "BE Chemical Engineering",
            "BE Petroleum Engineering",
            "BE Telecommunications Engineering",
            "BE Industrial & Manufacturing Engineering",
            "BS Computer Science",
            "Bachelor of Architecture (B.Arch)",
        ],
        undergraduate: [
            {
                heading: "Faculty of Civil & Petroleum Engineering",
                programs: [
                    "BE Civil Engineering",
                    "BE Petroleum Engineering",
                ],
            },
            {
                heading: "Faculty of Electrical, Electronic & Computer Engineering",
                programs: [
                    "BE Electrical Engineering",
                    "BE Electronic Engineering",
                    "BE Computer Systems Engineering",
                    "BE Telecommunications Engineering",
                    "BE Software Engineering",
                ],
            },
            {
                heading: "Faculty of Mechanical & Manufacturing Engineering",
                programs: [
                    "BE Mechanical Engineering",
                    "BE Industrial & Manufacturing Engineering",
                    "BE Automotive Engineering",
                ],
            },
            {
                heading: "Faculty of Chemical & Biomedical Engineering",
                programs: [
                    "BE Chemical Engineering",
                    "BE Biomedical Engineering",
                    "BE Polymer & Petrochemical Engineering",
                    "BE Food Engineering",
                ],
            },
            {
                heading: "Faculty of Computing & Information Sciences",
                programs: [
                    "BS Computer Science",
                    "BS Artificial Intelligence",
                    "BS Data Science",
                    "BS Cyber Security",
                ],
            },
            {
                heading: "Faculty of Architecture & Management Sciences",
                programs: [
                    "Bachelor of Architecture (B.Arch)",
                    "BBA",
                ],
            },
            {
                heading: "Faculty of Applied Sciences & Humanities",
                programs: [
                    "BS Applied Mathematics",
                    "BS Applied Physics",
                    "BS English Linguistics",
                ],
            },
        ],

        graduate: [
            {
                heading: "Engineering & Technology Programs",
                programs: [
                    "MS Civil Engineering",
                    "MS Electrical Engineering",
                    "MS Electronic Engineering",
                    "MS Computer Systems Engineering",
                    "MS Software Engineering",
                    "MS Mechanical Engineering",
                    "MS Chemical Engineering",
                    "MS Petroleum Engineering",
                    "MS Industrial Engineering",
                    "MS Telecommunications Engineering",
                ],
            },
            {
                heading: "Computing & Applied Sciences Programs",
                programs: [
                    "MS Computer Science",
                    "MS Artificial Intelligence",
                    "MS Data Science",
                    "MS Cyber Security",
                    "MS Applied Mathematics",
                    "MS Applied Physics",
                ],
            },
            {
                heading: "Management & Architecture Programs",
                programs: [
                    "MBA",
                    "MS Engineering Management",
                    "Master of Architecture (M.Arch)",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Civil Engineering",
                    "PhD Electrical Engineering",
                    "PhD Mechanical Engineering",
                    "PhD Chemical Engineering",
                    "PhD Computer Science",
                    "PhD Electronic Engineering",
                    "PhD Petroleum Engineering",
                    "PhD Applied Mathematics",
                    "PhD Applied Physics",
                ],
            },
        ],
        fee: [
            {
                category: "NED Admission Processing Fee",
                amount: "PKR 3,000",
                note: "Non-Refundable",
            },
            {
                category: "University Enrollment & Registration Charges",
                amount: "PKR 18,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 10,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "Engineering Programs",
                amount: "PKR 55,000 – 80,000 per Semester",
                note: "Applicable to Civil, Electrical, Mechanical, Chemical, Petroleum, Electronic, Computer Systems and related Engineering programs",
            },
            {
                category: "Computer Science & Emerging Technologies",
                amount: "PKR 60,000 – 85,000 per Semester",
                note: "Applicable to Computer Science, Artificial Intelligence, Cyber Security and Data Science",
            },
            {
                category: "Architecture & Management Sciences",
                amount: "PKR 50,000 – 75,000 per Semester",
                note: "Applicable to Architecture and Business Administration programs",
            },
            {
                category: "MS / MEng Programs",
                amount: "PKR 70,000 – 100,000 per Semester",
                note: "Depends upon department and registered credit hours",
            },
            {
                category: "PhD Research Programs",
                amount: "PKR 80,000 – 120,000 per Semester",
                note: "Varies according to research discipline",
            },
            {
                category: "Engineering Laboratory Charges",
                amount: "PKR 5,000",
                note: "Per Semester",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 20,000 – 35,000 per Semester",
                note: "Accommodation only (Mess charges separate)",
            },
            {
                category: "Student Activity & Library Charges",
                amount: "PKR 2,500",
                note: "Per Semester",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "PKR 90,000 – 140,000",
                note: "Includes admission charges, security deposit, tuition fee and university dues",
            },
        ],

        scholarship: [
            {
                title: "1. NED Merit Scholarship",
                description: "Outstanding students achieving excellent academic performance are awarded merit scholarships by the university based on semester results.",
                benefit: "Provides tuition fee concession and academic recognition.",
            },
            {
                title: "2. HEC Need-Based Scholarship",
                description: "Financially deserving students can apply for Higher Education Commission (HEC) Need-Based Scholarships through NED University.",
                benefit: "Provides partial or full tuition fee assistance.",
            },
            {
                title: "3. Sindh Educational Endowment Fund (SEEF)",
                description: "Eligible students from Sindh may receive scholarships under the Sindh Educational Endowment Fund based on merit and financial need.",
                benefit: "Supports tuition fees and educational expenses.",
            },
            {
                title: "4. Research Assistantships",
                description: "MS and PhD students involved in funded engineering and technology research projects may receive research assistantships from university departments and sponsored projects.",
                benefit: "Provides monthly stipend, research funding and tuition support.",
            },
            {
                title: "5. Industry Sponsored Scholarships",
                description: "Leading engineering companies and industrial organizations collaborate with NED University to provide scholarships, internships and Final Year Project sponsorships.",
                benefit: "Offers financial assistance, industrial exposure and internship opportunities.",
            },
            {
                title: "6. ORIC Innovation & Entrepreneurship Support",
                description: "Students with innovative engineering and technology projects can receive incubation support, startup mentoring, innovation grants and commercialization opportunities through ORIC.",
                benefit: "Provides startup funding, incubation facilities and entrepreneurial guidance.",
            },
        ],
        facilities: [
            {
                name: "⚙️ Advanced Engineering Laboratories",
                description: "NED University provides modern laboratories for Civil, Electrical, Mechanical, Chemical, Petroleum, Electronic, and Computer Engineering equipped with advanced instruments for practical learning and research.",
            },
            {
                name: "🏗️ Engineering Workshops & Design Studios",
                description: "Students receive hands-on training through mechanical workshops, manufacturing facilities, surveying labs, CAD/CAM laboratories, and architecture design studios.",
            },
            {
                name: "💻 Computing & Artificial Intelligence Labs",
                description: "Modern computer laboratories support programming, Artificial Intelligence, Cyber Security, Data Science, Software Engineering, networking, and cloud computing with licensed software and high-speed internet.",
            },
            {
                name: "🔬 Research Institutes & Innovation Centers",
                description: "The university promotes interdisciplinary research through specialized centers in renewable energy, smart systems, transportation engineering, water resources, artificial intelligence, and advanced technologies.",
            },
            {
                name: "🏛️ Office of Research, Innovation & Commercialization (ORIC)",
                description: "ORIC facilitates funded research projects, industry collaboration, patents, technology commercialization, startup development, and innovation activities across engineering disciplines.",
            },
            {
                name: "📚 Dr. A.Q. Khan Library & Digital Resources",
                description: "Students have access to a comprehensive engineering library, HEC Digital Library, IEEE Xplore, SpringerLink, ScienceDirect, research journals, e-books, and collaborative study areas.",
            },
            {
                name: "🤝 Industrial Liaison & Career Development",
                description: "Strong partnerships with engineering industries provide internships, industrial visits, job fairs, recruitment drives, career counselling, and Final Year Project collaborations.",
            },
            {
                name: "🏠 Student Hostels",
                description: "Separate hostel facilities for male and female students offer furnished accommodation, Wi-Fi, dining halls, study rooms, recreational facilities, and 24/7 campus security.",
            },
            {
                name: "🏆 Sports Complex & Student Societies",
                description: "Students participate in engineering competitions, robotics events, technical societies, cultural festivals, cricket, football, badminton, athletics, and indoor sports.",
            },
            {
                name: "🚌 Transport & Campus Services",
                description: "The university provides transport services, cafeterias, banking facilities, stationery shops, photocopying services, prayer areas, and student support offices.",
            },
            {
                name: "🌍 International Academic Collaborations",
                description: "NED University collaborates with international universities and research organizations to promote student exchange programs, joint research projects, and faculty development initiatives.",
            },
            {
                name: "🩺 Medical Centre & Student Welfare",
                description: "Students have access to on-campus healthcare, emergency medical assistance, counselling services, academic advising, and student welfare support throughout their studies.",
            },
        ],

        contact: {
            phone: "+92-21-99261261",
            email: "registrar@neduet.edu.pk",
            website: "https://www.neduet.edu.pk",
            address: "NED University of Engineering & Technology, University Road, Karachi, Sindh, Pakistan",
        },
    },
    {
        id: 11,

        name: "Aga Khan University",

        introduction:
            "Aga Khan University (AKU), established in 1983 by the Aga Khan Development Network (AKDN), is one of Pakistan's leading private research universities and is internationally recognized for excellence in Medical Education, Nursing, Public Health, Education, and Biomedical Research. Headquartered in Karachi, AKU operates teaching hospitals, medical colleges, nursing schools, research institutes, and educational centers across Pakistan, East Africa, the United Kingdom, and Central Asia. The university is known for its world-class faculty, patient-centered healthcare, advanced research, international collaborations, and innovation in medical sciences. Through state-of-the-art teaching hospitals, simulation centers, modern laboratories, digital libraries, and global academic partnerships, AKU prepares students to become outstanding healthcare professionals, researchers, educators, and future leaders.",

        image: "/images/agakhan.jpg",

        campus: [
            "Main Campus, Karachi",
            "Stadium Road Campus, Karachi",
            "Medical College, Karachi",
            "School of Nursing & Midwifery, Karachi",
            "Centre for Innovation in Medical Education (CIME)",
        ],

        address: [
            "Main Campus: Stadium Road, P.O. Box 3500, Karachi, Sindh, Pakistan",
            "Medical College: Aga Khan University, Stadium Road, Karachi",
            "School of Nursing & Midwifery: Stadium Road, Karachi",
            "University Hospital: Stadium Road, Karachi",
            "Centre for Innovation in Medical Education (CIME): Stadium Road, Karachi",
        ],

        bestPrograms: [
            "MBBS",
            "Bachelor of Science in Nursing (BScN)",
            "Post-RN BSc Nursing",
            "Master of Public Health (MPH)",
            "Master of Bioethics",
            "MSc Epidemiology & Biostatistics",
            "MD",
            "PhD Health Sciences",
            "Medical Education",
            "Clinical Research",
        ],
        undergraduate: [
            {
                heading: "Medical College",
                programs: [
                    "MBBS",
                ],
            },
            {
                heading: "School of Nursing & Midwifery",
                programs: [
                    "Bachelor of Science in Nursing (BScN)",
                    "Post-RN BSc Nursing",
                ],
            },
            {
                heading: "Institute for Educational Development",
                programs: [
                    "Bachelor of Education (B.Ed)",
                    "Advanced Diploma in Education",
                ],
            },
        ],

        graduate: [
            {
                heading: "Clinical Medicine Programs",
                programs: [
                    "MD Internal Medicine",
                    "MD Paediatrics",
                    "MD Family Medicine",
                    "MD Pathology",
                    "MD Radiology",
                    "MD Anaesthesiology",
                    "MD Emergency Medicine",
                ],
            },
            {
                heading: "Public Health & Health Sciences Programs",
                programs: [
                    "Master of Public Health (MPH)",
                    "MSc Epidemiology & Biostatistics",
                    "MSc Health Policy & Management",
                    "Master of Bioethics",
                    "MSc Medical Education",
                ],
            },
            {
                heading: "Nursing & Education Programs",
                programs: [
                    "Master of Science in Nursing (MScN)",
                    "Postgraduate Diploma in Nursing",
                    "M.Ed",
                    "Advanced Diploma in Health Professions Education",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Health Sciences",
                    "PhD Nursing",
                    "PhD Medical Education",
                    "PhD Biological Sciences",
                    "PhD Population & Public Health",
                ],
            },
        ],
        fee: [
            {
                category: "AKU Admission Processing Fee",
                amount: "PKR 8,000",
                note: "Non-Refundable",
            },
            {
                category: "Enrollment & Registration Charges",
                amount: "PKR 40,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 25,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "MBBS Program",
                amount: "Approximately PKR 350,000 – 450,000 per Semester",
                note: "Includes tuition only (other university charges may apply)",
            },
            {
                category: "Nursing Programs",
                amount: "Approximately PKR 180,000 – 250,000 per Semester",
                note: "Applicable to BSc Nursing and Post-RN Nursing programs",
            },
            {
                category: "Education & Health Sciences Programs",
                amount: "PKR 160,000 – 250,000 per Semester",
                note: "Applicable to Education, Public Health and related disciplines",
            },
            {
                category: "Graduate Programs (MD / MSc / MPH)",
                amount: "Varies according to specialty",
                note: "Depends on program and academic requirements",
            },
            {
                category: "PhD Programs",
                amount: "Varies according to research discipline",
                note: "Research-based fee structure",
            },
            {
                category: "Clinical & Laboratory Charges",
                amount: "PKR 15,000",
                note: "Per Semester",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 70,000 – 120,000 per Semester",
                note: "Accommodation only (Meal plan separate)",
            },
            {
                category: "Student Services & Technology Fee",
                amount: "PKR 8,000",
                note: "Per Semester",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "PKR 500,000 – 700,000",
                note: "Includes admission charges, tuition fee, registration and other university dues",
            },
        ],

        scholarship: [
            {
                title: "1. AKU Financial Assistance Program",
                description: "Aga Khan University provides need-based financial assistance to deserving students after a comprehensive financial assessment of the applicant and family.",
                benefit: "Provides partial or full tuition fee support based on demonstrated financial need.",
            },
            {
                title: "2. Merit-Based Scholarships",
                description: "Outstanding students with exceptional academic performance may receive merit scholarships during their studies at AKU.",
                benefit: "Provides tuition fee concessions and recognizes academic excellence.",
            },
            {
                title: "3. Aga Khan Foundation Scholarship Support",
                description: "Eligible students may benefit from scholarship opportunities supported by the Aga Khan Foundation and other Aga Khan Development Network institutions.",
                benefit: "Provides financial assistance for tuition and educational expenses.",
            },
            {
                title: "4. Research Fellowships & Graduate Funding",
                description: "Graduate students engaged in clinical, biomedical, public health, and medical education research may receive funded fellowships and research grants.",
                benefit: "Provides research funding, monthly stipends, and thesis support.",
            },
            {
                title: "5. International Exchange & Global Learning Support",
                description: "Students participating in international electives, exchange programs, and collaborative research with partner universities may receive travel grants and academic funding.",
                benefit: "Supports international learning experiences and collaborative research.",
            },
            {
                title: "6. Nursing & Healthcare Professional Development Awards",
                description: "Students enrolled in Nursing and Health Sciences programs may receive scholarships, leadership awards, and professional development funding from AKU and partner healthcare organizations.",
                benefit: "Provides financial support, leadership training, and career development opportunities.",
            },
        ],
        facilities: [
            {
                name: "🏥 Aga Khan University Hospital",
                description: "Students receive clinical training at Aga Khan University Hospital, one of Pakistan's leading tertiary care teaching hospitals equipped with advanced diagnostic, surgical, and patient care facilities.",
            },
            {
                name: "🩺 Clinical Skills & Simulation Center",
                description: "Modern simulation laboratories allow medical and nursing students to practice clinical procedures, patient assessment, emergency care, and surgical techniques in a safe learning environment.",
            },
            {
                name: "🔬 Biomedical Research Laboratories",
                description: "State-of-the-art research laboratories support biomedical sciences, molecular biology, genetics, microbiology, pathology, epidemiology, and translational medicine research.",
            },
            {
                name: "📚 Medical Library & Digital Resources",
                description: "Students have access to an extensive medical library featuring books, international journals, e-books, clinical databases, and online resources such as PubMed and other medical research platforms.",
            },
            {
                name: "🌍 Centre for Global Health & International Collaboration",
                description: "AKU collaborates with leading universities and healthcare institutions worldwide, providing opportunities for international research, student exchanges, and global health initiatives.",
            },
            {
                name: "🧬 Research & Innovation Centers",
                description: "Dedicated research centers focus on public health, infectious diseases, cancer research, maternal and child health, biomedical sciences, and healthcare innovation.",
            },
            {
                name: "💼 Career Development & Residency Support",
                description: "Students receive career counselling, residency preparation, mentorship, research guidance, and opportunities for professional development through dedicated academic support services.",
            },
            {
                name: "🏠 Student Residence & Accommodation",
                description: "Safe and secure hostel facilities are available for male and female students with furnished rooms, internet access, dining services, study areas, and recreational spaces.",
            },
            {
                name: "🍽️ Cafeterias & Student Wellness Services",
                description: "The campus offers cafeterias, counselling services, mental health support, fitness facilities, student wellness programs, and healthcare services.",
            },
            {
                name: "🎓 Continuing Medical Education (CME)",
                description: "AKU regularly organizes workshops, conferences, seminars, certification courses, and Continuing Medical Education (CME) programs for students and healthcare professionals.",
            },
            {
                name: "🚑 Emergency & Healthcare Services",
                description: "Students have immediate access to emergency medical care, specialist consultation, diagnostic services, and advanced healthcare facilities through the university hospital.",
            },
            {
                name: "🤝 Community Outreach & Public Health Programs",
                description: "Students actively participate in community health initiatives, rural healthcare projects, public health campaigns, and outreach programs to develop practical healthcare experience.",
            },
        ],

        contact: {
            phone: "+92-21-34861000",
            email: "registrar@aku.edu",
            website: "https://www.aku.edu",
            address: "Aga Khan University, Stadium Road, P.O. Box 3500, Karachi, Sindh, Pakistan",
        },
    },
    {
        id: 12,

        name: "Institute of Business Administration (IBA) Karachi",

        introduction:
            "The Institute of Business Administration (IBA) Karachi, established in 1955, is Pakistan's oldest and one of its most prestigious business schools. Renowned for academic excellence, leadership development, entrepreneurship, and research, IBA has consistently ranked among the country's top institutions for Business, Computer Science, Economics, Mathematics, Social Sciences, and Data Science. The university follows international academic standards with highly qualified faculty, strong industry linkages, modern teaching methods, and global collaborations. Through state-of-the-art classrooms, research centers, entrepreneurship incubators, digital libraries, and student organizations, IBA prepares graduates for successful careers in business, technology, public service, and entrepreneurship both nationally and internationally.",

         image: "/images/IBA.jpg",

        campus: [
            "Main Campus, University Road, Karachi",
            "City Campus, Garden/Kayani Shaheed Road, Karachi",
        ],

        address: [
            "Main Campus: University Road, Karachi, Sindh, Pakistan",
            "City Campus: Garden/Kayani Shaheed Road, Karachi, Sindh, Pakistan",
        ],

        bestPrograms: [
            "BBA",
            "BS Accounting & Finance",
            "BS Computer Science",
            "BS Artificial Intelligence",
            "BS Data Science",
            "BS Economics",
            "BS Mathematics",
            "BS Social Sciences & Liberal Arts",
            "MBA",
            "Executive MBA",
            "MS Computer Science",
            "PhD Management",
        ],
        undergraduate: [
            {
                heading: "School of Business Studies",
                programs: [
                    "BBA",
                    "BS Accounting & Finance",
                    "BS Entrepreneurship",
                ],
            },
            {
                heading: "School of Economics & Social Sciences",
                programs: [
                    "BS Economics",
                    "BS Social Sciences & Liberal Arts",
                ],
            },
            {
                heading: "School of Mathematics & Computer Science",
                programs: [
                    "BS Computer Science",
                    "BS Artificial Intelligence",
                    "BS Data Science",
                    "BS Mathematics",
                ],
            },
        ],

        graduate: [
            {
                heading: "Business & Management Programs",
                programs: [
                    "MBA",
                    "Executive MBA",
                    "MS Management",
                    "MS Marketing",
                    "MS Finance",
                    "MS Human Resource Management",
                ],
            },
            {
                heading: "Computer Science & Data Programs",
                programs: [
                    "MS Computer Science",
                    "MS Data Science",
                    "MS Artificial Intelligence",
                ],
            },
            {
                heading: "Economics & Social Sciences Programs",
                programs: [
                    "MS Economics",
                    "MS Development Studies",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Management",
                    "PhD Computer Science",
                    "PhD Economics",
                    "PhD Mathematics",
                ],
            },
        ],
        fee: [
            {
                category: "IBA Admission Processing Fee",
                amount: "PKR 5,000",
                note: "Non-Refundable",
            },
            {
                category: "Admission & Enrollment Charges",
                amount: "PKR 30,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 20,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "Business Programs (BBA & BS Accounting & Finance)",
                amount: "PKR 14,000 – 16,000 per Credit Hour",
                note: "Applicable to Business-related undergraduate programs",
            },
            {
                category: "Computer Science & Emerging Technologies",
                amount: "PKR 15,000 – 17,000 per Credit Hour",
                note: "Applicable to BS Computer Science, Artificial Intelligence & Data Science",
            },
            {
                category: "Economics, Mathematics & Social Sciences",
                amount: "PKR 13,500 – 15,500 per Credit Hour",
                note: "Applicable to BS Economics, Mathematics and Social Sciences programs",
            },
            {
                category: "Graduate Programs (MBA / MS)",
                amount: "PKR 16,000 – 19,000 per Credit Hour",
                note: "Varies according to degree program",
            },
            {
                category: "Doctoral (PhD) Programs",
                amount: "PKR 17,000 – 20,000 per Credit Hour",
                note: "Applicable to all PhD programs",
            },
            {
                category: "Technology & Student Services Charges",
                amount: "PKR 6,000",
                note: "Per Semester",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 45,000 – 70,000 per Semester",
                note: "Accommodation only (Meal charges separate)",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "PKR 320,000 – 420,000",
                note: "Includes admission charges, tuition fee and university dues",
            },
        ],

        scholarship: [
            {
                title: "1. IBA National Talent Hunt Program (NTHP)",
                description: "The National Talent Hunt Program identifies talented students from underserved areas of Pakistan and prepares them for admission to IBA through a fully funded preparatory program.",
                benefit: "Provides free coaching, accommodation, meals, and financial support leading to admission opportunities.",
            },
            {
                title: "2. IBA Financial Assistance Program",
                description: "Need-based financial assistance is available for deserving students after evaluation of their family's financial circumstances.",
                benefit: "Provides partial or full tuition fee support depending on financial need.",
            },
            {
                title: "3. Merit Scholarships",
                description: "Students achieving outstanding academic performance during their studies may receive merit-based scholarships and tuition fee waivers.",
                benefit: "Rewards academic excellence through tuition fee concessions.",
            },
            {
                title: "4. Donor & Alumni Scholarships",
                description: "IBA alumni, corporate partners, and charitable organizations sponsor scholarships for deserving and high-performing students.",
                benefit: "Provides tuition assistance and educational funding.",
            },
            {
                title: "5. Research & Graduate Assistantships",
                description: "MS and PhD students may receive research or teaching assistantships through academic departments and funded research projects.",
                benefit: "Provides stipends, research funding, and tuition support.",
            },
            {
                title: "6. Student Leadership & Exchange Opportunities",
                description: "Students participating in international exchange programs, leadership initiatives, and academic competitions may receive travel grants and financial support.",
                benefit: "Supports international exposure, leadership development, and academic mobility.",
            },
        ],
        facilities: [
            {
                name: "💼 Center for Entrepreneurial Development (CED)",
                description: "IBA's Center for Entrepreneurial Development supports startups through business incubation, mentorship, innovation programs, startup competitions, investor networking, and entrepreneurship training.",
            },
            {
                name: "📊 Trading & Financial Markets Lab",
                description: "Students gain practical experience in finance, investment analysis, portfolio management, and financial markets using professional trading and financial simulation software.",
            },
            {
                name: "💻 Computer Science & AI Laboratories",
                description: "Modern computing laboratories provide facilities for Software Development, Artificial Intelligence, Data Science, Cyber Security, Machine Learning, and Cloud Computing using licensed software and high-performance systems.",
            },
            {
                name: "📚 Dr. Pirzada Qasim Library & Digital Resources",
                description: "The university library offers thousands of books, international journals, HEC Digital Library access, IEEE Xplore, Springer, JSTOR, and collaborative study spaces for students and researchers.",
            },
            {
                name: "🏛️ Center for Business Research & Leadership",
                description: "IBA promotes business research, policy analysis, leadership development, case study research, and consultancy projects through its specialized research centers.",
            },
            {
                name: "🤝 Corporate Relations & Career Development Centre",
                description: "Strong connections with multinational companies, banks, consulting firms, and technology organizations provide internships, career fairs, placement opportunities, and professional development workshops.",
            },
            {
                name: "🌍 International Partnerships & Student Exchange",
                description: "IBA collaborates with leading international universities to offer exchange programs, semester abroad opportunities, joint research, and global academic experiences.",
            },
            {
                name: "🏠 Student Hostels",
                description: "Comfortable hostel facilities for male and female students include furnished rooms, Wi-Fi, dining halls, study areas, recreational spaces, and 24-hour security.",
            },
            {
                name: "🏆 Sports Complex & Student Societies",
                description: "Students participate in cricket, football, basketball, badminton, debating, Model United Nations (MUN), entrepreneurship clubs, business competitions, cultural festivals, and volunteer organizations.",
            },
            {
                name: "🍽️ Campus Dining & Student Services",
                description: "The campus provides cafeterias, food courts, banking services, prayer areas, stationery shops, photocopying facilities, and student support offices.",
            },
            {
                name: "🩺 Health & Wellness Centre",
                description: "Students have access to medical facilities, psychological counselling, academic advising, wellness programs, and emergency healthcare services.",
            },
            {
                name: "🚍 University Transport",
                description: "IBA offers transport services on multiple routes across Karachi, making daily commuting convenient for students, faculty, and staff.",
            },
        ],

        contact: {
            phone: "+92-21-38104700",
            email: "info@iba.edu.pk",
            website: "https://www.iba.edu.pk",
            address: "Institute of Business Administration (IBA), University Road, Karachi, Sindh, Pakistan",
        },
    },
    {
        id: 13,

        name: "Allama Iqbal Medical College",

        introduction:
            "Allama Iqbal Medical College (AIMC), established in 1975, is one of Pakistan's most prestigious public medical institutions located in Lahore. Initially founded as Lahore Medical College, it was later renamed in honor of the national poet Allama Muhammad Iqbal. Affiliated with Jinnah Hospital Lahore, AIMC is recognized for excellence in Medical Education, Clinical Training, Biomedical Research, and Healthcare Services. The college provides modern teaching facilities, simulation labs, research laboratories, experienced faculty, and extensive clinical exposure through one of the country's largest teaching hospitals. AIMC has produced thousands of highly qualified doctors, specialists, surgeons, and researchers serving in Pakistan and around the world.",

        image: "/images/AllamaIqbal.jpg",

        campus: [
            "Main Campus, Lahore",
            "Jinnah Hospital Lahore (Teaching Hospital)",
            "School of Nursing, Lahore",
        ],

        address: [
            "Main Campus: Allama Shabbir Ahmed Usmani Road, Lahore, Punjab, Pakistan",
            "Jinnah Hospital Lahore: Allama Shabbir Ahmed Usmani Road, Lahore",
            "School of Nursing: Allama Iqbal Medical College, Lahore",
        ],

        bestPrograms: [
            "MBBS",
            "Doctor of Physical Therapy (DPT)",
            "Medical Laboratory Technology (MLT)",
            "Bachelor of Science in Nursing (BSN)",
            "Allied Health Sciences",
            "MD Clinical Programs",
            "MS Surgical Programs",
            "FCPS Residency Programs",
            "MPhil Basic Medical Sciences",
        ],
        undergraduate: [
            {
                heading: "Medical Education",
                programs: [
                    "MBBS",
                ],
            },
            {
                heading: "School of Allied Health Sciences",
                programs: [
                    "Doctor of Physical Therapy (DPT)",
                    "Medical Laboratory Technology (MLT)",
                    "Operation Theatre Technology (OTT)",
                    "Radiography & Imaging Technology",
                ],
            },
            {
                heading: "College of Nursing",
                programs: [
                    "Bachelor of Science in Nursing (BSN)",
                    "Post RN BS Nursing",
                ],
            },
        ],

        graduate: [
            {
                heading: "Clinical Medicine Programs",
                programs: [
                    "MD Medicine",
                    "MD Paediatrics",
                    "MD Cardiology",
                    "MD Dermatology",
                    "MD Radiology",
                    "MD Pathology",
                ],
            },
            {
                heading: "Surgical & Clinical Specialization Programs",
                programs: [
                    "MS General Surgery",
                    "MS Orthopaedic Surgery",
                    "MS Obstetrics & Gynaecology",
                    "MS Ophthalmology",
                    "MS ENT",
                    "MS Urology",
                ],
            },
            {
                heading: "Basic Medical Sciences Programs",
                programs: [
                    "MPhil Anatomy",
                    "MPhil Physiology",
                    "MPhil Biochemistry",
                    "MPhil Pharmacology",
                    "MPhil Pathology",
                    "MPhil Microbiology",
                ],
            },
            {
                heading: "Residency & Fellowship Programs",
                programs: [
                    "FCPS Residency Programs",
                    "MCPS Training Programs",
                    "CPSP Accredited Residency Training",
                ],
            },
        ],
        fee: [
            {
                category: "AIMC Admission Processing Fee",
                amount: "PKR 2,000",
                note: "Non-Refundable",
            },
            {
                category: "University Enrollment & Registration Charges",
                amount: "PKR 12,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 10,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "MBBS Program",
                amount: "PKR 55,000 – 75,000 per Year",
                note: "Approximate tuition fee for Pakistani students (excluding hostel and miscellaneous charges)",
            },
            {
                category: "Allied Health Sciences Programs",
                amount: "PKR 45,000 – 65,000 per Year",
                note: "Applicable to DPT, Medical Laboratory Technology, Radiography and related programs",
            },
            {
                category: "BS Nursing Programs",
                amount: "PKR 50,000 – 70,000 per Year",
                note: "Applicable to BS Nursing and Post RN BS Nursing",
            },
            {
                category: "MD / MS / MPhil Programs",
                amount: "PKR 70,000 – 120,000 per Year",
                note: "Depends upon specialty and research requirements",
            },
            {
                category: "Residency & FCPS Training Programs",
                amount: "As per CPSP & Government Policy",
                note: "Varies according to specialty and training structure",
            },
            {
                category: "Clinical & Laboratory Charges",
                amount: "PKR 8,000",
                note: "Per Academic Year",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 15,000 – 30,000 per Year",
                note: "Accommodation only (Mess charges separate)",
            },
            {
                category: "Library & Student Welfare Charges",
                amount: "PKR 3,000",
                note: "Per Academic Year",
            },
            {
                category: "Estimated First Year Expenses",
                amount: "PKR 90,000 – 140,000",
                note: "Includes admission charges, tuition fee and other university dues",
            },
        ],

        scholarship: [
            {
                title: "1. Punjab Government Merit Scholarship",
                description: "Outstanding students admitted on merit may receive scholarships under Government of Punjab educational support schemes.",
                benefit: "Provides tuition fee assistance and academic recognition.",
            },
            {
                title: "2. HEC Need-Based Scholarship",
                description: "Financially deserving students can apply for Higher Education Commission (HEC) Need-Based Scholarships through the college.",
                benefit: "Provides partial or full tuition fee support.",
            },
            {
                title: "3. Punjab Educational Endowment Fund (PEEF)",
                description: "Eligible students from Punjab may receive scholarships through PEEF based on merit and financial need.",
                benefit: "Supports tuition fees and educational expenses.",
            },
            {
                title: "4. Chief Minister Punjab Scholarship Programs",
                description: "Students may benefit from scholarship initiatives introduced by the Government of Punjab for talented medical students.",
                benefit: "Provides financial assistance for higher education.",
            },
            {
                title: "5. Research Grants for Postgraduate Students",
                description: "MPhil, MD and MS students participating in medical research projects may receive research grants and thesis support.",
                benefit: "Provides research funding and academic assistance.",
            },
            {
                title: "6. Clinical Excellence & Academic Achievement Awards",
                description: "Exceptional students demonstrating outstanding academic performance and clinical excellence may receive university awards and financial incentives.",
                benefit: "Recognizes academic excellence through awards and educational support.",
            },
        ],
        facilities: [
            {
                name: "🏥 Jinnah Hospital Clinical Training",
                description: "Students receive extensive hands-on clinical training at Jinnah Hospital Lahore, one of Pakistan's largest tertiary care teaching hospitals, gaining experience in medicine, surgery, emergency care, and specialized clinical departments.",
            },
            {
                name: "🩺 Clinical Skills & Simulation Laboratory",
                description: "Modern simulation labs enable students to practice clinical procedures, patient examination, emergency response, surgical techniques, and communication skills before working with real patients.",
            },
            {
                name: "🔬 Medical Research Laboratories",
                description: "Well-equipped laboratories support research in Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Microbiology, and other biomedical sciences.",
            },
            {
                name: "🧪 Diagnostic & Pathology Facilities",
                description: "Students gain practical exposure to advanced pathology, microbiology, hematology, radiology, and diagnostic laboratory services through affiliated teaching facilities.",
            },
            {
                name: "📚 Medical Library & Digital Resources",
                description: "The college library offers medical textbooks, international journals, HEC Digital Library access, online medical databases, e-books, and research resources for students and faculty.",
            },
            {
                name: "👨‍⚕️ Residency & Postgraduate Training",
                description: "AIMC provides CPSP-accredited residency programs, postgraduate clinical training, specialist supervision, and research opportunities in multiple medical and surgical specialties.",
            },
            {
                name: "💼 Medical Education & Career Support",
                description: "Students receive academic mentoring, career counselling, residency guidance, research supervision, and preparation support for postgraduate medical education.",
            },
            {
                name: "🏠 Student Hostels",
                description: "Separate hostel facilities for male and female students provide furnished accommodation, study rooms, dining facilities, internet access, and 24-hour security.",
            },
            {
                name: "🏆 Student Societies & Sports",
                description: "Students actively participate in medical conferences, seminars, health awareness campaigns, sports competitions, cultural events, debating societies, and community welfare activities.",
            },
            {
                name: "🩺 Campus Health & Emergency Services",
                description: "Students have access to emergency medical care, specialist consultation, diagnostic facilities, counselling services, and healthcare support through Jinnah Hospital.",
            },
            {
                name: "🚌 Transport & Student Services",
                description: "Transport services, cafeterias, prayer areas, banking facilities, stationery shops, and student affairs offices are available to support campus life.",
            },
            {
                name: "🌍 Medical Research & International Collaboration",
                description: "The college collaborates with national and international healthcare institutions to promote medical research, faculty development, academic conferences, and scientific exchange programs.",
            },
        ],

        contact: {
            phone: "+92-42-99231304",
            email: "principal@aimc.edu.pk",
            website: "https://aimc.edu.pk",
            address: "Allama Iqbal Medical College, Allama Shabbir Ahmed Usmani Road, Lahore, Punjab, Pakistan",
        },
    },
    {
        id: 14,

        name: "Lahore School of Economics",

        introduction:
            "The Lahore School of Economics (LSE), established in 1993 and chartered by the Government of Punjab in 1997, is one of Pakistan's leading private universities specializing in Economics, Business Administration, Finance, Accounting, Mathematics, Statistics, Social Sciences, Environmental Sciences, Media Studies, and Art & Design. The university is internationally recognized for its rigorous academic curriculum, research excellence, and strong industry connections. LSE offers modern teaching facilities, experienced faculty, research centers, digital libraries, entrepreneurship support, and international collaborations. With a strong emphasis on analytical thinking, leadership, and practical learning, the university prepares graduates for successful careers in business, finance, public policy, academia, entrepreneurship, and global organizations.",

        image: "/images/LSE.jpg",

        campus: [
            "Main Campus (Burki Road), Lahore",
            "City Campus (Gulberg), Lahore",
        ],

        address: [
            "Main Campus: Intersection of DHA Phase VI Main Boulevard & Burki Road, Lahore, Punjab, Pakistan",
            "City Campus: Gulberg III, Lahore, Punjab, Pakistan",
        ],

        bestPrograms: [
            "BBA",
            "BS Economics",
            "BS Accounting & Finance",
            "BS Business Management",
            "BS Marketing",
            "BS Economics & Finance",
            "BS Economics & Data Analytics",
            "BS Mathematics & Statistics",
            "BS Social Sciences",
            "BS Environmental Sciences",
            "BFA Communication Design",
            "MBA",
        ],
        undergraduate: [
            {
                heading: "Department of Business Administration",
                programs: [
                    "BBA",
                    "BS Business Management",
                    "BS Marketing",
                ],
            },
            {
                heading: "Department of Economics",
                programs: [
                    "BS Economics",
                    "BS Economics & Finance",
                    "BS Economics & Data Analytics",
                ],
            },
            {
                heading: "Department of Accounting & Finance",
                programs: [
                    "BS Accounting & Finance",
                ],
            },
            {
                heading: "Department of Mathematics & Statistics",
                programs: [
                    "BS Mathematics",
                    "BS Statistics",
                ],
            },
            {
                heading: "Department of Social Sciences",
                programs: [
                    "BS Social Sciences",
                ],
            },
            {
                heading: "Department of Environmental Sciences",
                programs: [
                    "BS Environmental Sciences",
                ],
            },
            {
                heading: "Department of Media Studies & Art",
                programs: [
                    "BFA Communication Design",
                    "BS Media Studies",
                ],
            },
        ],

        graduate: [
            {
                heading: "Business & Management Programs",
                programs: [
                    "MBA",
                    "Executive MBA",
                    "MS Management Sciences",
                    "MS Marketing",
                    "MS Human Resource Management",
                ],
            },
            {
                heading: "Economics & Finance Programs",
                programs: [
                    "MPhil Economics",
                    "MS Economics",
                    "MS Finance",
                ],
            },
            {
                heading: "Accounting & Quantitative Sciences Programs",
                programs: [
                    "MS Accounting & Finance",
                    "MPhil Mathematics",
                    "MPhil Statistics",
                ],
            },
            {
                heading: "Environmental & Social Sciences Programs",
                programs: [
                    "MPhil Environmental Sciences",
                    "MPhil Social Sciences",
                ],
            },
            {
                heading: "PhD Programs",
                programs: [
                    "PhD Economics",
                    "PhD Management Sciences",
                    "PhD Finance",
                    "PhD Mathematics",
                    "PhD Environmental Sciences",
                ],
            },
        ],
        fee: [
            {
                category: "LSE Admission Processing Fee",
                amount: "PKR 5,000",
                note: "Non-Refundable",
            },
            {
                category: "Admission & Enrollment Charges",
                amount: "PKR 35,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 20,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "Business Administration Programs",
                amount: "PKR 14,000 – 16,000 per Credit Hour",
                note: "Applicable to BBA, Business Management and Marketing programs",
            },
            {
                category: "Economics, Finance & Accounting Programs",
                amount: "PKR 14,500 – 16,500 per Credit Hour",
                note: "Applicable to Economics, Accounting & Finance and related programs",
            },
            {
                category: "Mathematics, Statistics & Social Sciences",
                amount: "PKR 13,000 – 15,000 per Credit Hour",
                note: "Applicable to Mathematics, Statistics, Social Sciences and Environmental Sciences",
            },
            {
                category: "Graduate Programs (MBA / MS / MPhil)",
                amount: "PKR 16,000 – 19,000 per Credit Hour",
                note: "Varies according to program and research requirements",
            },
            {
                category: "Doctoral (PhD) Programs",
                amount: "PKR 17,000 – 20,000 per Credit Hour",
                note: "Applicable to PhD programs",
            },
            {
                category: "Technology & Academic Resource Charges",
                amount: "PKR 6,000",
                note: "Per Semester",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 45,000 – 70,000 per Semester",
                note: "Accommodation only (Meal charges separate)",
            },
            {
                category: "Student Activities & Library Charges",
                amount: "PKR 5,000",
                note: "Per Semester",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "PKR 300,000 – 420,000",
                note: "Includes admission charges, tuition fee and university dues",
            },
        ],

        scholarship: [
            {
                title: "1. LSE Merit Scholarship",
                description: "Outstanding students demonstrating exceptional academic performance are awarded merit scholarships based on semester results and academic excellence.",
                benefit: "Provides partial or full tuition fee waiver for high-achieving students.",
            },
            {
                title: "2. Financial Assistance Program",
                description: "Students from financially deserving families may apply for tuition assistance after evaluation of their financial circumstances.",
                benefit: "Provides tuition fee concessions based on financial need.",
            },
            {
                title: "3. Dean's Honor Scholarship",
                description: "Students maintaining outstanding CGPA throughout their degree may qualify for the Dean's academic awards and scholarships.",
                benefit: "Recognizes academic excellence through tuition support and certificates.",
            },
            {
                title: "4. Corporate Sponsored Scholarships",
                description: "Corporate partners and private organizations periodically sponsor scholarships for talented students studying Business, Economics, Finance, and related disciplines.",
                benefit: "Provides financial assistance, internships, and industry exposure.",
            },
            {
                title: "5. Graduate Research Assistantships",
                description: "MS, MPhil, and PhD students involved in research projects may receive assistantships through academic departments and research centers.",
                benefit: "Provides research funding, monthly stipend, and tuition support.",
            },
            {
                title: "6. International Exchange & Academic Mobility",
                description: "Students selected for exchange programs and international collaborations may receive travel grants and financial support from partner institutions.",
                benefit: "Supports international education, research collaboration, and global learning opportunities.",
            },
        ],
        facilities: [
            {
                name: "📈 Economics & Policy Research Centre",
                description: "LSE promotes economic research through specialized centers focusing on public policy, economic development, trade, finance, and sustainable growth with opportunities for student participation.",
            },
            {
                name: "💼 Business Incubation & Entrepreneurship Center",
                description: "Students receive startup mentoring, entrepreneurship training, business incubation support, innovation workshops, and networking opportunities with industry professionals.",
            },
            {
                name: "💻 Business Analytics & Computer Labs",
                description: "Modern computer laboratories are equipped with statistical, financial, programming, and data analysis software including SPSS, STATA, R, Python, and other industry-standard applications.",
            },
            {
                name: "📊 Finance & Trading Laboratory",
                description: "Students gain practical experience in investment management, financial analysis, stock market simulations, and portfolio management using professional financial software.",
            },
            {
                name: "📚 Library & Digital Learning Resources",
                description: "The university library provides access to thousands of books, international journals, HEC Digital Library, JSTOR, ScienceDirect, and other online academic databases.",
            },
            {
                name: "🤝 Corporate Relations & Career Services",
                description: "Strong partnerships with banks, multinational companies, consulting firms, and development organizations provide internships, job placements, career fairs, and professional development workshops.",
            },
            {
                name: "🌍 International Academic Collaborations",
                description: "LSE collaborates with international universities for faculty exchange, joint research, semester exchange programs, and global academic partnerships.",
            },
            {
                name: "🏠 Student Accommodation",
                description: "Hostel facilities provide secure accommodation with furnished rooms, internet access, study areas, dining facilities, and recreational spaces for students.",
            },
            {
                name: "🏆 Student Societies & Leadership Programs",
                description: "Students actively participate in business competitions, Model United Nations (MUN), debating, entrepreneurship clubs, economics societies, sports events, and cultural activities.",
            },
            {
                name: "🍽️ Campus Facilities",
                description: "The campus includes cafeterias, prayer areas, stationery shops, photocopying services, student lounges, and academic support offices.",
            },
            {
                name: "🩺 Student Health & Counselling Services",
                description: "Students have access to basic healthcare, psychological counselling, academic advising, and wellness programs to support their personal and academic development.",
            },
            {
                name: "🚌 Transport Services",
                description: "Transport facilities operate on selected routes within Lahore, providing convenient travel options for students and faculty members.",
            },
        ],

        contact: {
            phone: "+92-42-36560935",
            email: "admissions@lahoreschool.edu.pk",
            website: "https://lahoreschool.edu.pk",
            address: "Lahore School of Economics, Intersection of DHA Phase VI Main Boulevard & Burki Road, Lahore, Punjab, Pakistan",
        },
    },
    {
        id: 15,

        name: "National University of Medical Sciences (NUMS)",

        introduction:
            "The National University of Medical Sciences (NUMS), established in 2015, is one of Pakistan's leading public-sector medical universities dedicated to excellence in Medical Education, Health Sciences, Biomedical Research, and Clinical Training. Headquartered in Rawalpindi, NUMS is recognized by the Pakistan Medical and Dental Council (PMDC) and the Higher Education Commission (HEC). The university is affiliated with the Army Medical College (AMC), Combined Military Hospitals (CMHs), Military Hospitals (MHs), and numerous civilian medical, dental, nursing, and allied health institutions across Pakistan. NUMS emphasizes evidence-based education, innovation, research, community healthcare, and international collaboration. With modern laboratories, simulation centers, digital libraries, teaching hospitals, and experienced faculty, NUMS prepares future doctors, dentists, nurses, researchers, and healthcare professionals to serve both nationally and internationally.",

        image: "/images/NUMS.jpg",

        campus: [
            "NUMS Main Campus, Rawalpindi",
            "Army Medical College (AMC), Rawalpindi",
            "NUMS Institute of Advanced Studies & Research (NIASR), Rawalpindi",
            "Affiliated Combined Military Hospitals (CMHs)",
            "Affiliated Military Hospitals (MHs)",
        ],

        address: [
            "NUMS Main Campus: The Mall, Rawalpindi Cantt, Punjab, Pakistan",
            "Army Medical College (AMC): Abid Majeed Road, Rawalpindi Cantt",
            "NIASR: National University of Medical Sciences, Rawalpindi",
            "Affiliated CMHs & Military Hospitals: Located across major cities of Pakistan",
        ],

        bestPrograms: [
            "MBBS",
            "BDS",
            "Doctor of Physical Therapy (DPT)",
            "BS Nursing",
            "Medical Laboratory Sciences",
            "BS Public Health",
            "Doctor of Nutrition & Dietetics",
            "Master of Public Health (MPH)",
            "MPhil Basic Medical Sciences",
            "PhD Health Sciences",
        ],
        undergraduate: [
            {
                heading: "Faculty of Medicine",
                programs: [
                    "MBBS",
                ],
            },
            {
                heading: "Faculty of Dentistry",
                programs: [
                    "BDS",
                ],
            },
            {
                heading: "Faculty of Allied Health Sciences",
                programs: [
                    "Doctor of Physical Therapy (DPT)",
                    "BS Medical Laboratory Sciences",
                    "BS Medical Imaging Technology",
                    "BS Operation Theatre Technology",
                    "BS Emergency & Intensive Care Sciences",
                    "BS Nutrition & Dietetics",
                ],
            },
            {
                heading: "Faculty of Nursing",
                programs: [
                    "BS Nursing",
                    "Post RN BS Nursing",
                ],
            },
            {
                heading: "Faculty of Public Health",
                programs: [
                    "BS Public Health",
                ],
            },
        ],

        graduate: [
            {
                heading: "Public Health & Health Sciences Programs",
                programs: [
                    "Master of Public Health (MPH)",
                    "Master of Healthcare Administration (MHA)",
                    "MSc Clinical Psychology",
                ],
            },
            {
                heading: "Basic Medical Sciences Programs",
                programs: [
                    "MPhil Anatomy",
                    "MPhil Physiology",
                    "MPhil Biochemistry",
                    "MPhil Pharmacology",
                    "MPhil Pathology",
                    "MPhil Microbiology",
                ],
            },
            {
                heading: "Clinical Medicine & Dentistry Programs",
                programs: [
                    "MD Medicine",
                    "MS General Surgery",
                    "MS Orthopaedic Surgery",
                    "MS Obstetrics & Gynaecology",
                    "MS Paediatric Surgery",
                    "FCPS Residency Programs",
                ],
            },
            {
                heading: "Doctoral Programs",
                programs: [
                    "PhD Anatomy",
                    "PhD Physiology",
                    "PhD Biochemistry",
                    "PhD Pharmacology",
                    "PhD Microbiology",
                    "PhD Public Health",
                    "PhD Health Sciences",
                ],
            },
        ],
        fee: [
            {
                category: "NUMS Admission Processing Fee",
                amount: "PKR 3,500",
                note: "Non-Refundable",
            },
            {
                category: "University Registration & Enrollment Charges",
                amount: "PKR 20,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 15,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "MBBS & BDS Programs",
                amount: "PKR 170,000 – 230,000 per Semester",
                note: "Fee varies depending on affiliated college and program",
            },
            {
                category: "Allied Health Sciences Programs",
                amount: "PKR 90,000 – 140,000 per Semester",
                note: "Applicable to DPT, Medical Laboratory Sciences, Medical Imaging, Nutrition & Dietetics and related programs",
            },
            {
                category: "Nursing & Public Health Programs",
                amount: "PKR 85,000 – 130,000 per Semester",
                note: "Applicable to BS Nursing, Post RN BS Nursing and BS Public Health",
            },
            {
                category: "Graduate Programs (MPH / MPhil / MHA)",
                amount: "PKR 110,000 – 170,000 per Semester",
                note: "Depends on program and registered credit hours",
            },
            {
                category: "Doctoral (PhD) Programs",
                amount: "PKR 120,000 – 190,000 per Semester",
                note: "Varies according to research discipline",
            },
            {
                category: "Clinical & Laboratory Charges",
                amount: "PKR 10,000",
                note: "Per Semester",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 25,000 – 45,000 per Semester",
                note: "Accommodation only (Mess charges separate)",
            },
            {
                category: "Student Services & Digital Library Fee",
                amount: "PKR 4,000",
                note: "Per Semester",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "PKR 220,000 – 320,000",
                note: "Includes admission charges, tuition fee, registration and other university dues",
            },
        ],

        scholarship: [
            {
                title: "1. NUMS Merit Scholarship",
                description: "Outstanding students securing top academic positions are eligible for merit scholarships based on university academic performance.",
                benefit: "Provides partial or full tuition fee waiver for high-achieving students.",
            },
            {
                title: "2. NUMS Financial Assistance Program",
                description: "Need-based financial assistance is available for deserving students after evaluation of their financial circumstances.",
                benefit: "Provides partial or complete tuition fee support.",
            },
            {
                title: "3. HEC Need-Based Scholarship",
                description: "Eligible students may apply for Higher Education Commission (HEC) scholarship programs through NUMS.",
                benefit: "Supports tuition fees and educational expenses.",
            },
            {
                title: "4. Armed Forces & Shaheed Family Support",
                description: "Children of armed forces personnel, martyrs, and eligible serving personnel may qualify for financial support under applicable government and military policies.",
                benefit: "Provides educational concessions and financial assistance for eligible students.",
            },
            {
                title: "5. Research Grants & Graduate Assistantships",
                description: "MPhil, MD, MS and PhD students involved in biomedical and clinical research projects may receive research grants and assistantships.",
                benefit: "Provides research funding, stipends, and thesis support.",
            },
            {
                title: "6. International Research & Exchange Opportunities",
                description: "Students selected for international collaborations, research projects, and exchange programs may receive travel grants and academic funding through NUMS and partner institutions.",
                benefit: "Supports global learning, research collaboration, and international academic exposure.",
            },
        ],
        facilities: [
            {
                name: "🏥 Affiliated Teaching Hospitals",
                description: "NUMS students receive extensive clinical training at Army Medical College, Combined Military Hospitals (CMHs), Military Hospitals (MHs), and other affiliated teaching hospitals across Pakistan.",
            },
            {
                name: "🩺 Clinical Skills & Simulation Centre",
                description: "Modern simulation laboratories allow students to practice patient examination, emergency medicine, surgical procedures, trauma management, and clinical decision-making before hospital rotations.",
            },
            {
                name: "🔬 Institute of Advanced Studies & Research (NIASR)",
                description: "NIASR provides advanced research facilities in biomedical sciences, molecular biology, infectious diseases, genetics, immunology, pharmacology, and public health.",
            },
            {
                name: "🧬 Medical Research & Innovation Laboratories",
                description: "Students participate in research using well-equipped laboratories for anatomy, physiology, pathology, microbiology, biochemistry, forensic sciences, and clinical research.",
            },
            {
                name: "📚 Medical Library & E-Learning Resources",
                description: "NUMS offers access to thousands of medical books, HEC Digital Library, PubMed, ClinicalKey, BMJ, Springer, ScienceDirect, and other international medical databases.",
            },
            {
                name: "👨‍⚕️ Residency & Professional Training",
                description: "The university offers postgraduate residency training, CPSP-accredited programs, research supervision, workshops, CME activities, and specialist mentorship through affiliated hospitals.",
            },
            {
                name: "🌍 International Medical Collaborations",
                description: "NUMS maintains academic partnerships with international universities and healthcare organizations for student exchange, collaborative research, faculty development, and global health initiatives.",
            },
            {
                name: "🏠 Student Hostels",
                description: "Separate hostels for male and female students provide furnished rooms, Wi-Fi, study areas, dining facilities, recreational spaces, and 24-hour security.",
            },
            {
                name: "🏆 Student Societies & Community Outreach",
                description: "Students participate in medical conferences, research forums, health awareness campaigns, volunteer activities, sports competitions, and public health outreach programs.",
            },
            {
                name: "🍽️ Campus Services",
                description: "The campus provides cafeterias, prayer areas, banking services, stationery shops, photocopying facilities, student support offices, and comfortable study spaces.",
            },
            {
                name: "🩺 Student Health & Wellness Services",
                description: "Medical care, psychological counselling, academic advising, emergency healthcare, and wellness programs are available to support students throughout their academic journey.",
            },
            {
                name: "🚌 Transport Facilities",
                description: "Transport services operate on selected routes for students and staff, providing convenient access to the university and affiliated teaching hospitals.",
            },
        ],

        contact: {
            phone: "+92-51-9270677",
            email: "info@numspak.edu.pk",
            website: "https://numspak.edu.pk",
            address: "National University of Medical Sciences (NUMS), The Mall, Rawalpindi Cantt, Punjab, Pakistan",
        },
    },
    {
        id: 16,

        name: "Bahria University",

        introduction:
            "Bahria University, established in 2000 by the Pakistan Navy, is one of Pakistan's leading public sector universities, recognized for excellence in Engineering, Computer Science, Artificial Intelligence, Business Administration, Health Sciences, Law, Psychology, Maritime Studies, Earth & Environmental Sciences, and Social Sciences. With campuses in Islamabad, Karachi, and Lahore, the university provides high-quality education through experienced faculty, modern laboratories, research centers, and strong industry partnerships. Bahria University emphasizes innovation, entrepreneurship, research, and leadership development while maintaining international collaborations with universities worldwide. Students benefit from advanced academic facilities, digital learning resources, teaching hospitals for health sciences, business incubation centers, and a vibrant campus life that prepares graduates for successful national and international careers.",

       image: "/images/Bahria.jpg",

        campus: [
            "Islamabad Campus (E-8)",
            "Islamabad Campus (H-11)",
            "Karachi Campus",
            "Lahore Campus",
            "Health Sciences Campus, Islamabad",
            "Health Sciences Campus, Karachi",
        ],

        address: [
            "Islamabad E-8 Campus: Shangrila Road, Sector E-8, Islamabad, Pakistan",
            "Islamabad H-11 Campus: Plot 83, Sector H-11/4, Islamabad, Pakistan",
            "Karachi Campus: 13 National Stadium Road, Karachi, Sindh, Pakistan",
            "Lahore Campus: 47-C, Civic Center, Johar Town, Lahore, Punjab, Pakistan",
            "Health Sciences Campus Islamabad: Naval Anchorage, Islamabad",
            "Health Sciences Campus Karachi: Adjacent to PNS Shifa, DHA Phase II, Karachi",
        ],

        bestPrograms: [
            "BS Computer Science",
            "BS Artificial Intelligence",
            "BS Software Engineering",
            "BBA",
            "BS Accounting & Finance",
            "LLB",
            "BS Psychology",
            "MBBS",
            "BDS",
            "BS Public Health",
            "Electrical Engineering",
            "MBA",
        ],
        undergraduate: [
            {
                heading: "Faculty of Computer Sciences",
                programs: [
                    "BS Computer Science",
                    "BS Software Engineering",
                    "BS Artificial Intelligence",
                    "BS Cyber Security",
                    "BS Data Science",
                ],
            },
            {
                heading: "Faculty of Engineering Sciences",
                programs: [
                    "BE Electrical Engineering",
                    "BE Mechanical Engineering",
                    "BE Civil Engineering",
                ],
            },
            {
                heading: "Faculty of Management Sciences",
                programs: [
                    "BBA",
                    "BS Accounting & Finance",
                    "BS Business Analytics",
                    "BS Economics",
                ],
            },
            {
                heading: "Faculty of Health Sciences",
                programs: [
                    "MBBS",
                    "BDS",
                    "Doctor of Physical Therapy (DPT)",
                    "BS Nursing",
                    "BS Medical Laboratory Technology",
                    "BS Public Health",
                ],
            },
            {
                heading: "Faculty of Social Sciences & Humanities",
                programs: [
                    "BS Psychology",
                    "BS International Relations",
                    "BS Media Studies",
                    "BS English",
                ],
            },
            {
                heading: "Faculty of Law",
                programs: [
                    "LLB",
                ],
            },
        ],

        graduate: [
            {
                heading: "Engineering & Computing Programs",
                programs: [
                    "MS Computer Science",
                    "MS Software Engineering",
                    "MS Artificial Intelligence",
                    "MS Cyber Security",
                    "MS Electrical Engineering",
                    "MS Mechanical Engineering",
                ],
            },
            {
                heading: "Business & Management Programs",
                programs: [
                    "MBA",
                    "Executive MBA",
                    "MS Management Sciences",
                    "MS Accounting & Finance",
                    "MS Economics",
                ],
            },
            {
                heading: "Health Sciences Programs",
                programs: [
                    "Master of Public Health (MPH)",
                    "MPhil Anatomy",
                    "MPhil Physiology",
                    "MPhil Biochemistry",
                    "MPhil Microbiology",
                ],
            },
            {
                heading: "Social Sciences & Doctoral Programs",
                programs: [
                    "MS Psychology",
                    "MS International Relations",
                    "PhD Computer Science",
                    "PhD Management Sciences",
                    "PhD Psychology",
                    "PhD Electrical Engineering",
                    "PhD Health Sciences",
                ],
            },
        ],
        fee: [
            {
                category: "Bahria University Admission Processing Fee",
                amount: "PKR 3,500",
                note: "Non-Refundable",
            },
            {
                category: "Admission & Enrollment Charges",
                amount: "PKR 25,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 15,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "Computer Science & Engineering Programs",
                amount: "PKR 10,500 – 13,000 per Credit Hour",
                note: "Applicable to Computer Science, Software Engineering, AI, Cyber Security, Data Science and Engineering programs",
            },
            {
                category: "Business & Management Programs",
                amount: "PKR 9,500 – 12,000 per Credit Hour",
                note: "Applicable to BBA, Accounting & Finance, Economics and related programs",
            },
            {
                category: "Health Sciences Programs",
                amount: "Varies according to program",
                note: "Applicable to MBBS, BDS, DPT, Nursing, Medical Laboratory Technology and Public Health programs",
            },
            {
                category: "Graduate Programs (MS / MBA / MPhil)",
                amount: "PKR 11,000 – 14,000 per Credit Hour",
                note: "Depends on department and registered credit hours",
            },
            {
                category: "Doctoral (PhD) Programs",
                amount: "PKR 12,000 – 15,000 per Credit Hour",
                note: "Research-based fee structure",
            },
            {
                category: "Laboratory & Technology Charges",
                amount: "PKR 5,000",
                note: "Per Semester",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 30,000 – 55,000 per Semester",
                note: "Accommodation only (Mess charges separate)",
            },
            {
                category: "Student Services & Library Charges",
                amount: "PKR 4,000",
                note: "Per Semester",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "PKR 180,000 – 280,000",
                note: "Includes admission charges, tuition fee, registration and university dues",
            },
        ],

        scholarship: [
            {
                title: "1. Bahria University Merit Scholarship",
                description: "Students with outstanding academic performance are awarded merit scholarships based on semester results and university merit criteria.",
                benefit: "Provides partial or full tuition fee waiver for top-performing students.",
            },
            {
                title: "2. Need-Based Financial Assistance",
                description: "Financial assistance is available for deserving students after assessment of their financial circumstances.",
                benefit: "Provides partial or complete tuition fee support.",
            },
            {
                title: "3. HEC & Government Scholarship Programs",
                description: "Eligible students may apply for Higher Education Commission (HEC) and Federal/Provincial Government scholarship schemes through the university.",
                benefit: "Supports tuition fees and other educational expenses.",
            },
            {
                title: "4. Pakistan Navy Educational Concession",
                description: "Children of serving and retired Pakistan Navy personnel, as well as eligible armed forces families, may receive fee concessions according to university policy.",
                benefit: "Provides tuition fee discounts for eligible candidates.",
            },
            {
                title: "5. Graduate Research Assistantships",
                description: "MS, MPhil, and PhD students participating in funded research projects may receive assistantships through academic departments and research centers.",
                benefit: "Provides research funding, monthly stipends, and tuition support.",
            },
            {
                title: "6. International Exchange & Academic Excellence Awards",
                description: "Students selected for international exchange programs, research collaborations, and academic competitions may receive travel grants and scholarship support.",
                benefit: "Supports global learning opportunities, international exposure, and academic excellence.",
            },
        ],
        facilities: [
            {
                name: "💻 Computing & Emerging Technologies Labs",
                description: "Bahria University provides advanced laboratories for Computer Science, Artificial Intelligence, Cyber Security, Software Engineering, Data Science, Networking, Cloud Computing, and Robotics equipped with modern hardware and licensed software.",
            },
            {
                name: "⚙️ Engineering Workshops & Innovation Labs",
                description: "Engineering students receive practical training through well-equipped Electrical, Mechanical, Civil Engineering, Electronics, Automation, and Renewable Energy laboratories.",
            },
            {
                name: "🏥 Teaching Hospitals & Clinical Skills Centres",
                description: "Health Sciences students receive clinical education through affiliated teaching hospitals, simulation centres, anatomy labs, dental clinics, and modern medical laboratories.",
            },
            {
                name: "🚀 Business Incubation & Entrepreneurship Centre",
                description: "The university encourages entrepreneurship by providing startup incubation, innovation support, business mentoring, entrepreneurship competitions, and industry networking opportunities.",
            },
            {
                name: "📚 Central Library & Digital Knowledge Centre",
                description: "Students have access to thousands of books, HEC Digital Library, IEEE Xplore, SpringerLink, ScienceDirect, JSTOR, e-books, and collaborative learning spaces.",
            },
            {
                name: "🔬 Research Centres & ORIC",
                description: "The Office of Research, Innovation & Commercialization (ORIC) supports funded research projects, patents, innovation, industry collaboration, and technology commercialization.",
            },
            {
                name: "🤝 Career Services & Industry Linkages",
                description: "The Career Services Office organizes internships, job fairs, employer networking sessions, recruitment drives, career counselling, CV workshops, and professional development programs.",
            },
            {
                name: "🌍 International Partnerships",
                description: "Bahria University maintains collaborations with international universities for student exchange, faculty exchange, joint research, dual-degree opportunities, and global academic cooperation.",
            },
            {
                name: "🏠 Student Hostels",
                description: "Separate hostel facilities for male and female students provide furnished rooms, Wi-Fi, dining halls, study rooms, recreational spaces, laundry services, and 24-hour security.",
            },
            {
                name: "🏆 Sports Complex & Student Life",
                description: "Students participate in cricket, football, basketball, volleyball, badminton, swimming, debating, robotics competitions, cultural festivals, technical societies, and community service organizations.",
            },
            {
                name: "🍽️ Campus Facilities & Student Support",
                description: "The campuses include cafeterias, food courts, banking services, prayer areas, stationery shops, photocopying facilities, transport services, and dedicated student affairs offices.",
            },
            {
                name: "🩺 Medical & Wellness Centre",
                description: "Students have access to healthcare services, emergency medical assistance, psychological counselling, wellness programs, and academic support throughout their studies.",
            },
        ],

        contact: {
            phone: "+92-51-9263176",
            email: "info@bahria.edu.pk",
            website: "https://www.bahria.edu.pk",
            address: "Bahria University, Shangrila Road, Sector E-8, Islamabad, Pakistan",
        },
    },
    {
        id: 17,

        name: "Institute of Business Management (IoBM)",

        introduction:
            "The Institute of Business Management (IoBM), commonly known as CBM (College of Business Management), was established in 1995 and is one of Pakistan's leading private universities. Located in Karachi, IoBM is renowned for excellence in Business Administration, Computer Science, Artificial Intelligence, Data Science, Accounting & Finance, Economics, Media Studies, Engineering, Psychology, Education, and Social Sciences. The university is recognized for its industry-oriented curriculum, experienced faculty, modern teaching methods, research culture, and strong corporate partnerships. Through advanced computer laboratories, engineering workshops, business incubation initiatives, digital libraries, student societies, and international collaborations, IoBM equips students with professional knowledge, leadership skills, and practical experience required for successful careers in Pakistan and around the world.",

       image: "/images/IoBM.jpg",

        campus: [
            "Main Campus, Korangi Creek, Karachi",
        ],

        address: [
            "Main Campus: Korangi Creek, Karachi, Sindh, Pakistan",
        ],

        bestPrograms: [
            "BBA",
            "BS Accounting & Finance",
            "BS Computer Science",
            "BS Artificial Intelligence",
            "BS Data Science",
            "BS Software Engineering",
            "BE Electrical Engineering",
            "BS Economics",
            "BS Media Studies",
            "BS Psychology",
            "MBA",
            "MS Computer Science",
        ],
        undergraduate: [
            {
                heading: "College of Business Management (CBM)",
                programs: [
                    "BBA",
                    "BS Accounting & Finance",
                    "BS Business Analytics",
                    "BS Entrepreneurship",
                    "BS Supply Chain Management",
                    "BS Marketing",
                ],
            },
            {
                heading: "College of Computer Science & Information Systems (CCSIS)",
                programs: [
                    "BS Computer Science",
                    "BS Software Engineering",
                    "BS Artificial Intelligence",
                    "BS Data Science",
                ],
            },
            {
                heading: "College of Economics & Social Development (CESD)",
                programs: [
                    "BS Economics",
                    "BS Psychology",
                    "BS Education",
                ],
            },
            {
                heading: "College of Media & Communication Studies (CMCS)",
                programs: [
                    "BS Media Studies",
                    "BS Film & TV Production",
                    "BS Advertising & Public Relations",
                ],
            },
            {
                heading: "College of Engineering Sciences (CES)",
                programs: [
                    "BE Electrical Engineering",
                ],
            },
        ],

        graduate: [
            {
                heading: "Business & Management Programs",
                programs: [
                    "MBA",
                    "Executive MBA",
                    "MS Management Sciences",
                    "MS Marketing",
                    "MS Human Resource Management",
                    "MS Accounting & Finance",
                ],
            },
            {
                heading: "Computer Science & Technology Programs",
                programs: [
                    "MS Computer Science",
                    "MS Software Engineering",
                    "MS Artificial Intelligence",
                    "MS Data Science",
                ],
            },
            {
                heading: "Economics, Education & Social Sciences Programs",
                programs: [
                    "MS Economics",
                    "MS Psychology",
                    "MS Education",
                ],
            },
            {
                heading: "Doctoral Programs",
                programs: [
                    "PhD Management Sciences",
                    "PhD Computer Science",
                    "PhD Economics",
                    "PhD Education",
                ],
            },
        ],
        fee: [
            {
                category: "IoBM Admission Processing Fee",
                amount: "PKR 5,000",
                note: "Non-Refundable",
            },
            {
                category: "Admission & Enrollment Charges",
                amount: "PKR 30,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 20,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "Business & Management Programs",
                amount: "PKR 13,500 – 16,000 per Credit Hour",
                note: "Applicable to BBA, Accounting & Finance, Marketing, Supply Chain Management and related business programs",
            },
            {
                category: "Computer Science & Emerging Technologies",
                amount: "PKR 14,500 – 17,000 per Credit Hour",
                note: "Applicable to Computer Science, Software Engineering, Artificial Intelligence and Data Science programs",
            },
            {
                category: "Engineering, Economics & Social Sciences",
                amount: "PKR 13,000 – 16,000 per Credit Hour",
                note: "Applicable to Electrical Engineering, Economics, Psychology, Media Studies and Education programs",
            },
            {
                category: "Graduate Programs (MBA / MS)",
                amount: "PKR 15,000 – 18,500 per Credit Hour",
                note: "Depends on degree program and registered credit hours",
            },
            {
                category: "Doctoral (PhD) Programs",
                amount: "PKR 16,000 – 20,000 per Credit Hour",
                note: "Research-based fee structure",
            },
            {
                category: "Technology & Laboratory Charges",
                amount: "PKR 6,000",
                note: "Per Semester",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 45,000 – 70,000 per Semester",
                note: "Accommodation only (Meal charges separate)",
            },
            {
                category: "Student Activity & Library Charges",
                amount: "PKR 5,000",
                note: "Per Semester",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "PKR 300,000 – 420,000",
                note: "Includes admission charges, tuition fee and university dues",
            },
        ],

        scholarship: [
            {
                title: "1. IoBM Merit Scholarship",
                description: "Students securing outstanding academic results are awarded merit scholarships based on university merit criteria and semester performance.",
                benefit: "Provides partial or full tuition fee waiver for high-achieving students.",
            },
            {
                title: "2. Need-Based Financial Assistance",
                description: "Financially deserving students may apply for tuition assistance after evaluation of their family's financial condition.",
                benefit: "Provides partial or complete tuition fee support.",
            },
            {
                title: "3. Corporate Sponsored Scholarships",
                description: "Leading corporate organizations and industry partners sponsor scholarships for talented students enrolled in Business, Computer Science, Engineering, and related disciplines.",
                benefit: "Provides financial assistance along with internship and career opportunities.",
            },
            {
                title: "4. Alumni & Endowment Scholarships",
                description: "IoBM alumni and university endowment funds support deserving and academically outstanding students through dedicated scholarship programs.",
                benefit: "Offers tuition fee concessions and educational support.",
            },
            {
                title: "5. Graduate Research Assistantships",
                description: "MS and PhD students participating in research and teaching activities may receive assistantships through academic departments.",
                benefit: "Provides monthly stipend, research funding, and tuition support.",
            },
            {
                title: "6. International Exchange & Leadership Awards",
                description: "Students selected for international exchange programs, academic competitions, and leadership initiatives may receive travel grants and scholarship support.",
                benefit: "Supports global learning, leadership development, and international academic exposure.",
            },
        ],
        facilities: [
            {
                name: "💼 Business Incubation & Entrepreneurship Center",
                description: "IoBM encourages entrepreneurship through startup incubation, business mentoring, innovation challenges, entrepreneurship workshops, and networking with investors and industry leaders.",
            },
            {
                name: "💻 Computing & Artificial Intelligence Labs",
                description: "Modern computer laboratories support Software Engineering, Artificial Intelligence, Data Science, Cyber Security, Cloud Computing, and Programming using high-performance systems and licensed software.",
            },
            {
                name: "⚙️ Engineering Laboratories",
                description: "Electrical Engineering students receive practical training in electronics, power systems, communication systems, embedded systems, automation, and control engineering laboratories.",
            },
            {
                name: "📊 Finance & Business Analytics Lab",
                description: "Specialized laboratories provide practical experience in financial analysis, business analytics, ERP systems, data visualization, and decision-making using industry-standard software.",
            },
            {
                name: "📚 Library & Digital Learning Centre",
                description: "The university library provides access to thousands of books, research journals, HEC Digital Library, IEEE Xplore, SpringerLink, JSTOR, ScienceDirect, and collaborative study spaces.",
            },
            {
                name: "🔬 Research, Innovation & Consultancy Centre",
                description: "IoBM promotes interdisciplinary research, consultancy projects, innovation, and collaboration with industry through dedicated research centers and academic initiatives.",
            },
            {
                name: "🤝 Corporate Relations & Career Development",
                description: "Strong partnerships with multinational companies, banks, software houses, and industries provide internships, career fairs, recruitment drives, professional certifications, and career counselling.",
            },
            {
                name: "🌍 International Academic Partnerships",
                description: "IoBM collaborates with international universities for student exchange, faculty exchange, joint research, international conferences, and global learning opportunities.",
            },
            {
                name: "🏠 Student Accommodation",
                description: "Students are facilitated with secure hostel arrangements through approved accommodation partners offering furnished rooms, internet access, dining facilities, and transportation support.",
            },
            {
                name: "🏆 Student Clubs & Campus Life",
                description: "Students actively participate in business competitions, programming contests, entrepreneurship clubs, debating, sports tournaments, cultural festivals, volunteer organizations, and leadership programs.",
            },
            {
                name: "🍽️ Campus Facilities & Student Services",
                description: "The campus includes cafeterias, prayer areas, banking and ATM facilities, stationery shops, photocopying services, transport assistance, and student affairs offices.",
            },
            {
                name: "🩺 Health & Wellness Services",
                description: "Students have access to medical assistance, psychological counselling, academic advising, wellness programs, and emergency healthcare support throughout their academic journey.",
            },
        ],

        contact: {
            phone: "+92-21-111002004",
            email: "info@iobm.edu.pk",
            website: "https://www.iobm.edu.pk",
            address: "Institute of Business Management (IoBM), Korangi Creek, Karachi, Sindh, Pakistan",
        },

    },
    {
        id: 18,

        name: "Dow University of Health Sciences (DUHS)",

        introduction:
            "Dow University of Health Sciences (DUHS), established in 2003, is one of Pakistan's premier public-sector medical universities located in Karachi, Sindh. Formed through the merger of the historic Dow Medical College and Sindh Medical College, DUHS has become a leading institution in Medical Education, Dentistry, Pharmacy, Nursing, Allied Health Sciences, Public Health, Biomedical Engineering, and Biomedical Research. The university operates several teaching hospitals, specialized institutes, research centers, and diagnostic laboratories, providing students with outstanding clinical exposure and hands-on training. DUHS is recognized by the Pakistan Medical and Dental Council (PMDC), the Higher Education Commission (HEC), and several international organizations. With modern simulation centers, advanced laboratories, digital libraries, experienced faculty, and international collaborations, DUHS prepares highly skilled healthcare professionals, researchers, and medical scientists for national and global healthcare systems.",

        image: "/images/Dow.jpg",

        campus: [
            "Ojha Campus, Karachi",
            "Dow Medical College Campus, Karachi",
            "Dr. Ishrat-ul-Ebad Khan Institute of Oral Health Sciences (DIKIOHS)",
            "Dow Institute of Health Sciences",
            "Dow International Medical College (DIMC)",
        ],

        address: [
            "Ojha Campus: Suparco Road, Gulzar-e-Hijri, Karachi, Sindh, Pakistan",
            "Dow Medical College: Baba-e-Urdu Road, Karachi, Sindh, Pakistan",
            "Dow International Medical College (DIMC): Ojha Campus, Karachi",
            "Institute of Oral Health Sciences: Ojha Campus, Karachi",
            "Dow Institute of Health Sciences: Ojha Campus, Karachi",
        ],

        bestPrograms: [
            "MBBS",
            "BDS",
            "Doctor of Physical Therapy (DPT)",
            "Doctor of Pharmacy (Pharm-D)",
            "BS Nursing",
            "BS Medical Laboratory Technology",
            "BS Medical Imaging Technology",
            "BS Public Health",
            "Master of Public Health (MPH)",
            "MPhil Basic Medical Sciences",
            "PhD Health Sciences",
        ],
        undergraduate: [
            {
                heading: "Faculty of Medicine",
                programs: [
                    "MBBS",
                ],
            },
            {
                heading: "Faculty of Dentistry",
                programs: [
                    "BDS",
                ],
            },
            {
                heading: "Faculty of Pharmacy",
                programs: [
                    "Doctor of Pharmacy (Pharm-D)",
                ],
            },
            {
                heading: "Faculty of Allied Health Sciences",
                programs: [
                    "Doctor of Physical Therapy (DPT)",
                    "BS Medical Laboratory Technology",
                    "BS Medical Imaging Technology",
                    "BS Operation Theatre Technology",
                    "BS Respiratory Therapy",
                    "BS Nutrition & Dietetics",
                ],
            },
            {
                heading: "Faculty of Nursing",
                programs: [
                    "BS Nursing",
                    "Post RN BS Nursing",
                ],
            },
            {
                heading: "Faculty of Public Health",
                programs: [
                    "BS Public Health",
                ],
            },
        ],

        graduate: [
            {
                heading: "Clinical Medicine & Dentistry Programs",
                programs: [
                    "MD Medicine",
                    "MS General Surgery",
                    "MS Orthopaedics",
                    "MS Obstetrics & Gynaecology",
                    "MS Paediatrics",
                    "FCPS Residency Programs",
                ],
            },
            {
                heading: "Public Health & Healthcare Programs",
                programs: [
                    "Master of Public Health (MPH)",
                    "Master of Healthcare Management",
                    "MSc Clinical Psychology",
                ],
            },
            {
                heading: "Basic Medical Sciences Programs",
                programs: [
                    "MPhil Anatomy",
                    "MPhil Physiology",
                    "MPhil Biochemistry",
                    "MPhil Pharmacology",
                    "MPhil Pathology",
                    "MPhil Microbiology",
                ],
            },
            {
                heading: "Doctoral Programs",
                programs: [
                    "PhD Anatomy",
                    "PhD Physiology",
                    "PhD Biochemistry",
                    "PhD Pharmacology",
                    "PhD Microbiology",
                    "PhD Public Health",
                    "PhD Health Sciences",
                ],
            },
        ],
        fee: [
            {
                category: "DUHS Admission Processing Fee",
                amount: "PKR 3,000",
                note: "Non-Refundable",
            },
            {
                category: "University Registration & Enrollment Charges",
                amount: "PKR 15,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 10,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "MBBS & BDS Programs",
                amount: "PKR 60,000 – 90,000 per Year",
                note: "Applicable to Pakistani students in public-sector programs",
            },
            {
                category: "Pharm-D & Allied Health Sciences Programs",
                amount: "PKR 55,000 – 85,000 per Year",
                note: "Applicable to Pharm-D, DPT, Medical Laboratory Technology, Medical Imaging and related programs",
            },
            {
                category: "Nursing & Public Health Programs",
                amount: "PKR 50,000 – 80,000 per Year",
                note: "Applicable to BS Nursing, Post RN BS Nursing and BS Public Health",
            },
            {
                category: "Graduate Programs (MPH / MPhil / MD / MS)",
                amount: "PKR 80,000 – 140,000 per Year",
                note: "Varies according to specialty and research requirements",
            },
            {
                category: "Doctoral (PhD) Programs",
                amount: "PKR 100,000 – 160,000 per Year",
                note: "Depends on research discipline",
            },
            {
                category: "Clinical & Laboratory Charges",
                amount: "PKR 8,000",
                note: "Per Academic Year",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 18,000 – 35,000 per Year",
                note: "Accommodation only (Mess charges separate)",
            },
            {
                category: "Library & Student Services Charges",
                amount: "PKR 3,500",
                note: "Per Academic Year",
            },
            {
                category: "Estimated First Year Expenses",
                amount: "PKR 100,000 – 160,000",
                note: "Includes admission charges, tuition fee and university dues",
            },
        ],

        scholarship: [
            {
                title: "1. DUHS Merit Scholarship",
                description: "Students with outstanding academic performance may receive merit scholarships based on university merit criteria and annual examination results.",
                benefit: "Provides partial or full tuition fee waiver for high-achieving students.",
            },
            {
                title: "2. HEC Need-Based Scholarship",
                description: "Financially deserving students may apply for Higher Education Commission (HEC) Need-Based Scholarships through DUHS.",
                benefit: "Provides tuition fee assistance and educational support.",
            },
            {
                title: "3. Sindh Educational Endowment Scholarship",
                description: "Eligible students from Sindh can benefit from provincial scholarship schemes funded by the Government of Sindh.",
                benefit: "Supports tuition fees and other educational expenses.",
            },
            {
                title: "4. Research Grants for Postgraduate Students",
                description: "MPhil, MD, MS, and PhD students involved in biomedical and clinical research may receive research grants and thesis funding.",
                benefit: "Provides financial assistance for research activities and publications.",
            },
            {
                title: "5. International Research & Exchange Opportunities",
                description: "Students selected for collaborative research, exchange programs, and international conferences may receive travel grants and academic funding.",
                benefit: "Supports international exposure and research collaboration.",
            },
            {
                title: "6. Clinical Excellence Awards",
                description: "Outstanding students demonstrating excellence in academics, research, and clinical practice are recognized through university awards and educational incentives.",
                benefit: "Provides academic recognition and financial encouragement.",
            },
        ],
        facilities: [
            {
                name: "🏥 Dow University Teaching Hospitals",
                description: "Students receive comprehensive clinical training through DUHS teaching hospitals, including Dow University Hospital, Civil Hospital Karachi, Ojha Campus Hospital, and affiliated healthcare institutions.",
            },
            {
                name: "🩺 Clinical Skills & Simulation Centre",
                description: "The university operates advanced simulation laboratories where students practice patient examination, emergency medicine, surgical procedures, clinical communication, and critical care before hospital rotations.",
            },
            {
                name: "🔬 Biomedical Research & Diagnostic Laboratories",
                description: "Modern laboratories support research in anatomy, physiology, pathology, microbiology, molecular biology, genetics, pharmacology, and biomedical sciences using advanced diagnostic equipment.",
            },
            {
                name: "🦷 Dental Teaching Clinics",
                description: "Students of the Institute of Oral Health Sciences receive practical training in restorative dentistry, orthodontics, oral surgery, prosthodontics, periodontology, and community dentistry through modern dental clinics.",
            },
            {
                name: "📚 Medical Library & Digital Knowledge Centre",
                description: "DUHS provides access to thousands of medical textbooks, HEC Digital Library, PubMed, ClinicalKey, BMJ, SpringerLink, ScienceDirect, and international research journals.",
            },
            {
                name: "🧪 Research Institutes & Innovation Centres",
                description: "The university promotes medical innovation through specialized research institutes focusing on infectious diseases, diabetes, genomics, public health, pharmaceutical sciences, and translational medicine.",
            },
            {
                name: "👨‍⚕️ Residency & Professional Medical Training",
                description: "Students and graduates benefit from CPSP-accredited residency programs, postgraduate clinical training, CME activities, specialist supervision, and professional certification opportunities.",
            },
            {
                name: "🌍 International Medical Collaborations",
                description: "DUHS collaborates with leading international universities, hospitals, and research organizations for student exchange, faculty development, joint research, and international conferences.",
            },
            {
                name: "🏠 Student Hostels",
                description: "Separate hostel facilities for male and female students provide furnished rooms, internet access, study areas, dining facilities, common rooms, and 24-hour security.",
            },
            {
                name: "🏆 Student Welfare & Community Outreach",
                description: "Students participate in medical conferences, scientific workshops, free medical camps, blood donation drives, public health awareness campaigns, sports events, and cultural activities.",
            },
            {
                name: "🍽️ Campus Facilities & Student Services",
                description: "The university offers cafeterias, prayer areas, banking and ATM services, stationery shops, transport services, student affairs offices, and comfortable study spaces.",
            },
            {
                name: "🩺 Health & Student Support Services",
                description: "Students have access to healthcare services, emergency medical assistance, psychological counselling, academic advising, wellness programs, and career guidance throughout their studies.",
            },
        ],

        contact: {
            phone: "+92-21-38771111",
            email: "info@duhs.edu.pk",
            website: "https://www.duhs.edu.pk",
            address: "Dow University of Health Sciences, Ojha Campus, Suparco Road, Gulzar-e-Hijri, Karachi, Sindh, Pakistan",
        },
    },
    {
        id: 19,

        name: "Pakistan Institute of Engineering and Applied Sciences (PIEAS)",

        introduction:
            "Pakistan Institute of Engineering and Applied Sciences (PIEAS), established in 2000 as a degree-awarding institute, is one of Pakistan's premier public-sector universities specializing in Engineering, Applied Sciences, Nuclear Science & Technology, Computer Science, Physics, and advanced scientific research. Located in Islamabad, PIEAS operates under the Pakistan Atomic Energy Commission (PAEC) and is internationally recognized for its excellence in research, innovation, and high-quality education. The university is particularly renowned for Nuclear Engineering, Mechanical Engineering, Electrical Engineering, Computer & Information Sciences, and Materials Engineering. With state-of-the-art laboratories, advanced research centers, smart classrooms, highly qualified faculty, and strong collaboration with PAEC institutes, PIEAS prepares graduates for careers in engineering, scientific research, industry, and national strategic organizations.",

        image: "/images/PIEAS.jpg",

        campus: [
            "Main Campus, Nilore, Islamabad",
            "Karachi Institute of Power Engineering (KINPOE)",
            "National Institute of Biotechnology & Genetic Engineering (NIBGE)",
            "National Institute of Lasers & Optronics (NILOP)",
            "Nuclear Institute for Agriculture & Biology (NIAB)",
        ],

        address: [
            "Main Campus: Lehtrar Road, Nilore, Islamabad, Pakistan",
            "KINPOE: Karachi Nuclear Power Complex, Karachi",
            "NIBGE: Jhang Road, Faisalabad, Punjab",
            "NILOP: Nilore, Islamabad",
            "NIAB: Jhang Road, Faisalabad, Punjab",
        ],

        bestPrograms: [
            "BS Electrical Engineering",
            "BS Mechanical Engineering",
            "BS Computer & Information Sciences",
            "BS Physics",
            "MS Nuclear Engineering",
            "MS Chemical Engineering",
            "MS Materials Engineering",
            "MS Medical Physics",
            "PhD Nuclear Engineering",
            "PhD Computer Science",
            "PhD Physics",
        ],
        undergraduate: [
            {
                heading: "Department of Electrical Engineering",
                programs: [
                    "BS Electrical Engineering",
                ],
            },
            {
                heading: "Department of Mechanical Engineering",
                programs: [
                    "BS Mechanical Engineering",
                ],
            },
            {
                heading: "Department of Computer & Information Sciences",
                programs: [
                    "BS Computer & Information Sciences",
                ],
            },
            {
                heading: "Department of Physics",
                programs: [
                    "BS Physics",
                ],
            },
        ],

        graduate: [
            {
                heading: "Engineering Programs",
                programs: [
                    "MS Nuclear Engineering",
                    "MS Electrical Engineering",
                    "MS Mechanical Engineering",
                    "MS Chemical Engineering",
                    "MS Materials Engineering",
                ],
            },
            {
                heading: "Computer & Applied Sciences Programs",
                programs: [
                    "MS Computer Science",
                    "MS Medical Physics",
                    "MS Physics",
                    "MS Radiation & Medical Oncology",
                ],
            },
            {
                heading: "Doctoral Programs",
                programs: [
                    "PhD Nuclear Engineering",
                    "PhD Electrical Engineering",
                    "PhD Mechanical Engineering",
                    "PhD Computer Science",
                    "PhD Physics",
                    "PhD Chemical Engineering",
                    "PhD Materials Engineering",
                ],
            },
        ],
        fee: [
            {
                category: "PIEAS Admission Processing Fee",
                amount: "PKR 3,000",
                note: "Non-Refundable",
            },
            {
                category: "University Registration & Enrollment Charges",
                amount: "PKR 20,000",
                note: "One-Time (Non-Refundable)",
            },
            {
                category: "Student Security Deposit",
                amount: "PKR 15,000",
                note: "Refundable after completion of degree",
            },
            {
                category: "BS Engineering & Computer Science Programs",
                amount: "PKR 9,000 – 11,000 per Credit Hour",
                note: "Applicable to Electrical Engineering, Mechanical Engineering, Computer & Information Sciences and related undergraduate programs",
            },
            {
                category: "BS Physics Program",
                amount: "PKR 8,500 – 10,500 per Credit Hour",
                note: "Applicable to BS Physics",
            },
            {
                category: "MS Engineering & Applied Sciences Programs",
                amount: "PKR 10,000 – 12,500 per Credit Hour",
                note: "Applicable to MS Engineering, Computer Science, Physics, Medical Physics and related programs",
            },
            {
                category: "PhD Programs",
                amount: "PKR 11,000 – 13,500 per Credit Hour",
                note: "Research-based fee structure",
            },
            {
                category: "Laboratory & Research Charges",
                amount: "PKR 6,000",
                note: "Per Semester",
            },
            {
                category: "Hostel Accommodation Charges",
                amount: "PKR 18,000 – 30,000 per Semester",
                note: "Accommodation only (Mess charges separate)",
            },
            {
                category: "Student Activity & Library Charges",
                amount: "PKR 3,500",
                note: "Per Semester",
            },
            {
                category: "Estimated First Semester Expenses",
                amount: "PKR 170,000 – 230,000",
                note: "Includes admission charges, tuition fee, registration and university dues",
            },
        ],

        scholarship: [
            {
                title: "1. PIEAS Merit Scholarship",
                description: "Outstanding students securing top academic positions receive merit scholarships based on university performance and semester results.",
                benefit: "Provides partial or full tuition fee waiver for high-achieving students.",
            },
            {
                title: "2. PAEC Sponsorship Program",
                description: "Selected students may receive financial sponsorship through the Pakistan Atomic Energy Commission (PAEC), particularly in strategic engineering and applied sciences disciplines.",
                benefit: "Provides tuition support, monthly stipend, and career opportunities within PAEC.",
            },
            {
                title: "3. HEC Need-Based Scholarship",
                description: "Financially deserving students can apply for Higher Education Commission (HEC) scholarship schemes through PIEAS.",
                benefit: "Supports tuition fees and educational expenses.",
            },
            {
                title: "4. Graduate Research Assistantships",
                description: "MS and PhD students engaged in funded scientific research projects may receive assistantships through university departments and PAEC research institutes.",
                benefit: "Provides research funding, monthly stipend, and tuition support.",
            },
            {
                title: "5. Indigenous PhD & Research Funding",
                description: "Eligible doctoral students may receive financial support under HEC and PAEC-funded research initiatives.",
                benefit: "Covers research expenses, conference participation, and thesis work.",
            },
            {
                title: "6. International Research & Exchange Opportunities",
                description: "Outstanding students participating in international research collaborations, conferences, and exchange programs may receive travel grants and academic funding.",
                benefit: "Supports international exposure, scientific research, and global academic collaboration.",
            },
        ],
        facilities: [
            {
                name: "⚛️ Nuclear Engineering & Reactor Laboratories",
                description: "PIEAS provides specialized laboratories for nuclear engineering, reactor physics, radiation measurement, reactor safety, and nuclear instrumentation in collaboration with Pakistan Atomic Energy Commission (PAEC).",
            },
            {
                name: "🔬 Advanced Research Centres",
                description: "Students conduct research in materials engineering, nanotechnology, medical physics, biotechnology, renewable energy, plasma physics, and applied sciences using state-of-the-art research facilities.",
            },
            {
                name: "💻 High-Performance Computing & AI Labs",
                description: "Modern computing laboratories support Computer & Information Sciences, Artificial Intelligence, machine learning, data analytics, scientific computing, and software development with high-performance systems.",
            },
            {
                name: "⚙️ Engineering Design & Manufacturing Workshops",
                description: "Mechanical and Electrical Engineering students receive practical training through CAD/CAM laboratories, CNC machines, robotics systems, control engineering, electronics, and industrial automation facilities.",
            },
            {
                name: "📚 Scientific Library & Digital Knowledge Centre",
                description: "The university library offers thousands of engineering and scientific books, IEEE Xplore, SpringerLink, ScienceDirect, HEC Digital Library, research journals, and e-learning resources.",
            },
            {
                name: "🧪 PAEC Research Collaboration",
                description: "Students benefit from research opportunities and practical training through collaboration with Pakistan Atomic Energy Commission institutes, national laboratories, and strategic research organizations.",
            },
            {
                name: "🚀 Innovation & Research Support Office",
                description: "Research projects, innovation activities, patents, scientific publications, and technology commercialization are supported through dedicated research and innovation offices.",
            },
            {
                name: "🤝 Career Development & Industrial Linkages",
                description: "PIEAS maintains strong partnerships with PAEC, NESCOM, SUPARCO, KRL, research institutes, and engineering industries for internships, recruitment, and career development.",
            },
            {
                name: "🏠 Residential Hostels",
                description: "Separate hostels for male and female students provide furnished rooms, Wi-Fi, dining facilities, study halls, recreational areas, laundry services, and 24-hour security.",
            },
            {
                name: "🏆 Student Clubs & Technical Activities",
                description: "Students actively participate in engineering competitions, robotics clubs, programming contests, scientific seminars, sports tournaments, debating societies, and community service activities.",
            },
            {
                name: "🍽️ Campus Services",
                description: "The campus includes cafeterias, transport services, prayer areas, banking facilities, stationery shops, photocopying services, and student support offices.",
            },
            {
                name: "🩺 Health & Wellness Centre",
                description: "Students have access to medical services, emergency healthcare, psychological counselling, academic advising, and wellness programs throughout their academic journey.",
            },
        ],

        contact: {
            phone: "+92-51-9248600",
            email: "registrar@pieas.edu.pk",
            website: "https://www.pieas.edu.pk",
            address: "Pakistan Institute of Engineering and Applied Sciences (PIEAS), Lehtrar Road, Nilore, Islamabad, Pakistan",
        },
    },





];

export default UniversityDetails;