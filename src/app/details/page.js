import React from 'react';
import Navbar from '@/components/Navbar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PublicIcon from '@mui/icons-material/Public';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Button from '@mui/material/Button';
import Testimonials from '@/components/Testimonials';
import LearnerReviews from '@/components/Reviews';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const CoursesDetails = () => {
    const allTeachers = [
        {
            image: "https://ugc.futurelearn.com/uploads/images/e9/f2/profile_image_e9f25c50-6129-4ab2-abdc-3c5f3e5bd491.jpg",
            teacherName: "Abigail Whiteman",
            description: "Abigail is a consultant in anaesthesia at University College Hospital, London and an honorary associate professor at UCL. Her main specialist interests are perioperative medicine and medical education"
        },
        {
            image: "https://ugc.futurelearn.com/uploads/images/b0/fc/profile_image_b0fcc8d8-89e7-4892-8308-a2beee4bde1f.jpg",
            teacherName: "Mo Khaku",
            description: "I am a consultant in anaesthesia and perioperative medicine at UCLH. My interests include perioperative medicine, major general surgery, transfer medicine & medical education.",
        },

        {
            image: "https://ugc.futurelearn.com/uploads/images/f5/1b/profile_image_f51b1b51-f21d-415c-b33e-c5c82f58237d.jpg",
            teacherName: "Daniel Bendel",
            description: "Dan is an anaesthetist in training in London, UK. His clinical interests lie in the perioperative management of the high-risk patient, regional anaesthesia and digital healthcare.",
        },
    ];


    const allCourses = [
        {
            image: "https://ugc.futurelearn.com/uploads/images/dd/f6/thumbnail_ddf6b560-c986-42d7-af3b-04d3dc0b272e.jpg",
            title: "Perioperative Medicine in Action",
            university: "UCL (University College London)",
            rating: "4.7 (224 reviews)",
            weeks: "4 weeks",
            hours: "3 hrs per week",
            description: "Perioperative medicine is an emerging, multi-disciplinary...",
            subject: "Business & Management",
            subscription: "Included in Unlimited",
            startDate: "Start now"
        },
        {
            image: "https://ugc.futurelearn.com/uploads/images/dd/f6/thumbnail_ddf6b560-c986-42d7-af3b-04d3dc0b272e.jpg",
            title: "Animal Feed Production: Feed Safety",
            university: "EIT Food & Queen's University Belfast",
            rating: "4.3 (7 reviews)",
            weeks: "5 weeks",
            hours: "4 hrs per week",
            description: "Perioperative medicine is an emerging, multi-disciplinary...",
            subject: "Nature & Environment",
            subscription: "Premium courses",
            startDate: "Start later"
        },
        {
            image: "https://ugc.futurelearn.com/uploads/images/dd/f6/thumbnail_ddf6b560-c986-42d7-af3b-04d3dc0b272e.jpg",
            title: "Introduction to Cyber Security",
            university: "The Open University",
            rating: "4.7 (520 reviews)",
            weeks: "8 weeks",
            hours: "3 hrs per week",
            description: "Perioperative medicine is an emerging, multi-disciplinary...",
            subject: "Creative Arts & Media",
            subscription: "Included in Unlimited",
            startDate: "Start now"
        },
        {
            image: "https://ugc.futurelearn.com/uploads/images/dd/f6/thumbnail_ddf6b560-c986-42d7-af3b-04d3dc0b272e.jpg",
            title: "Introduction to Cyber Security",
            university: "The Open University",
            rating: "4.7 (520 reviews)",
            weeks: "8 weeks",
            hours: "3 hrs per week",
            description: "Perioperative medicine is an emerging, multi-disciplinary...",
            subject: "Creative Arts & Media",
            subscription: "Included in Unlimited",
            startDate: "Start now"
        }
    ];



    return (
        <>
            <Navbar />

            {/* Course Section Start */}
            <section className="bg-gradient-to-r from-slate-50 px-4">
                <div className="container mx-auto">
                    <div className="w-[80%] w-full flex flex-col items-start py-20">
                        <h1 className="text-[36px] lg:text-[2.4rem] md:text-[2rem] font-bold leading-tight">
                            Short online courses
                        </h1>
                        <p className="text-[2xl] sm:text-[2xl] leading-tight">
                            Choose from thousands of online courses from top universities and specialist organisations.
                        </p>
                    </div>
                </div>
            </section>

            <section className="courses container mx-auto my-6">
                <div className="flex flex-row gap-6 px-4">
                    {/* Left Section - Big Box */}
                    <div className="w-full md:w-3/4">
                        <h2 className="text-[30px] lg:text-[2rem] md:text-[2rem] font-bold leading-tight">
                            Perioperative Medicine in Action
                        </h2>
                        <p className="text-lg font-medium mb-4">Explore perioperative medicine and how you can improve care for the high risk surgical patient. Join this RCoA endorsed course.</p>
                        <div className="flex items-center"><p className="text-yellow-500 font-semibold mt-2 text-sm line-height">
                            ⭐ rating
                        </p>
                            <p className="mt-3 ml-2 text-sm line-height"> <span className='font-semibold'>43,133</span> enrolled on this course</p>
                        </div>
                        <div className="img w-full h-[500px] sm:h-[300px] my-4">
                            <img
                                src="https://ugc.futurelearn.com/uploads/images/42/83/header_4283e6ec-7adb-48a0-b7df-5327551c1988.jpg"
                                alt="Course Image"
                                className="w-full h-full object-cover"
                            />
                        </div>


                        {/* First Section - Duration, Weekly Study, Online, Subscription */}
                        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-gray-200 pb-4">
                            {/* Duration */}
                            <div className="flex items-start gap-2 w-full sm:w-auto">
                                <HourglassEmptyIcon className="text-gray-500" />
                                <div>
                                    <p className="text-sm text-gray-500">Duration</p>
                                    <p className="text-lg font-bold">4 weeks</p>
                                </div>
                            </div>

                            {/* Weekly Study */}
                            <div className="flex items-start gap-2 w-full sm:w-auto">
                                <AccessTimeIcon className="text-gray-500" />
                                <div>
                                    <p className="text-sm text-gray-500">Weekly study</p>
                                    <p className="text-lg font-bold">3 hours</p>
                                </div>
                            </div>

                            {/* Online */}
                            <div className="flex items-start gap-2 w-full sm:w-auto">
                                <PublicIcon className="text-gray-500" />
                                <div>
                                    <p className="text-sm text-gray-500">100% online</p>
                                    <p className="text-sm text-[#1565c0] cursor-pointer">How it works</p>
                                </div>
                            </div>

                            {/* Subscription */}
                            <div className="flex items-start gap-2 w-full sm:w-auto">
                                <SyncAltIcon className="text-gray-500" />
                                <div>
                                    <p className="text-sm text-gray-500">Unlimited subscription</p>
                                    <p className="text-lg font-bold text-[#1565c0]">
                                        <span className="line-through text-gray-500">₹1,399.99</span> ₹1,119.99/month
                                    </p>
                                    <p className="text-sm text-[#1565c0] cursor-pointer">Learn more</p>
                                </div>
                            </div>
                        </div>

                        {/* Second Section - Links */}
                        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-gray-200 p-4 bg-gray-100">
                            <div className="flex items-center gap-1 sm:w-[100px]">
                                <a href="#overview" className="text-md hover:text-[#1565c0] font-bold">Overview</a>
                            </div>
                            <div className="flex items-center gap-1 sm:w-[100px]">
                                <a href="#startDate" className="text-md hover:text-[#1565c0] font-bold">Start dates</a>
                            </div>
                            <div className="flex items-center gap-1 sm:w-[100px]">
                                <a href="#requirements" className="text-md hover:text-[#1565c0] font-bold">Requirements</a>
                            </div>
                            <div className="flex items-center gap-1 sm:w-[100px]">
                                <a href="#educators" className="text-md hover:text-[#1565c0] font-bold">Educators</a>
                            </div>
                            <div className="flex items-center gap-1 sm:w-[100px]">
                                <a href="#reviews" className="text-md hover:text-[#1565c0] font-bold"> Reviews</a>
                            </div>
                        </div>


                        <div className='course-desp pt-10' id='overview'>
                            <h3 className="font-bold mb-4">Make a difference: Improve patient outcomes with perioperative medicine</h3>
                            <p className='py-4'>Too many patients die or suffer prolonged complications following surgery.

                                Perioperative medicine is an emerging, multi-disciplinary approach which seeks to optimise the care of high-risk surgical patients. It encompasses disciplines such as anaesthetics, surgery, nursing, elderly care, physiotherapy and healthcare management.

                                In this RCoA-endorsed course, developed by anaesthetists at University College London (UCL) Hospitals, you’ll learn the key concepts you need to improve patient safety and reduce healthcare costs.</p>

                            <div className="img w-full h-[500px] sm:h-[300px] my-4">
                                <img
                                    src="https://ugc.futurelearn.com/uploads/images/42/83/header_4283e6ec-7adb-48a0-b7df-5327551c1988.jpg"
                                    alt="Course Image"
                                    className="w-full h-full object-cover"
                                />
                            </div>



                            <div className="container mx-auto py-6">
                                <h3 className="font-bold mb-4">What topics will you cover?</h3>
                                {/* Week 1 */}
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className="font-semibold">Week 1: The surgical epidemic</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul className="list-disc ml-6">
                                            <li>Defining the high-risk surgical patient and the need to change the way we care for them</li>
                                            <li>An introduction to perioperative medicine and the Royal College of Anaesthetists vision for improved perioperative care</li>
                                            <li>New perioperative care pathways</li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>

                                {/* Week 2 */}
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className="font-semibold">Week 2: Risk assessment and shared decision-making</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul className="list-disc ml-6">
                                            <li>The role of risk assessment and risk assessment tools including cardiopulmonary exercise testing and risk scoring systems</li>
                                            <li>Shared decision-making: what it is, why it is so important and how to achieve it</li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>

                                {/* Week 3 */}
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography className="font-semibold">Week 3: Protocols in surgical care</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul className="list-disc ml-6">
                                            <li>The principles of enhanced recovery</li>
                                            <li>How healthcare professionals and patients can engage with protocols</li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            </div>


                            <div id='startDate'>
                                <h3 className="font-bold mb-4">When would you like to start?</h3>
                                <p className="text-lg font-medium mb-4">Start straight away and join a global classroom of learners. If the course hasn’t started yet you’ll see the future date listed below.</p>

                                <div className="flex items-center border border-gray-300 rounded-lg p-4 shadow-sm my-9">
                                    {/* Left Section */}
                                    <div className="flex items-center w-full">
                                        <div className="border-l-4 border-[#f0bd6c] h-full mr-4"></div>
                                        <div className="flex items-center space-x-2">
                                            <CalendarTodayIcon className="text-gray-700" />
                                            <span className="font-semibold text-gray-700 text-lg">Available now</span>
                                        </div>
                                    </div>

                                    {/* Right Section */}
                                    <div className='w-60'>
                                        <Button variant="contained" color="primary" className="bg-[#f0bd6c] text-white w-full font-semibold px-6 py-2 rounded-lg hover:bg-[#1976d2]">
                                            Join today
                                        </Button>
                                    </div>
                                </div>

                            </div>
                            <h3 className="font-bold mb-4">Learning on this course</h3>
                            <p className="text-lg font-medium mb-4">On every step of the course you can meet other learners, share your ideas and join in with active discussions in the comments.</p>
                            <div className="my-6">
                                <h3 className="font-bold text-2xl mb-4">What will you achieve?</h3>
                                <ul className="list-disc pl-5 space-y-3">
                                    <li className="text-lg font-medium mb-4">
                                        Justify the need for better, more holistic care for the high-risk surgical patient, to improve outcomes and reduce healthcare costs.
                                    </li>
                                    <li className="text-lg font-medium mb-4">
                                        Justify the need for better, more holistic care for the high-risk surgical patient, to improve outcomes and reduce healthcare costs.
                                    </li>
                                    <li className="text-lg font-medium mb-4">
                                        Justify the need for better, more holistic care for the high-risk surgical patient, to improve outcomes and reduce healthcare costs.
                                    </li>
                                    <li className="text-lg font-medium mb-4">
                                        Justify the need for better, more holistic care for the high-risk surgical patient, to improve outcomes and reduce healthcare costs.
                                    </li>
                                    <li className="text-lg font-medium mb-4">
                                        Justify the need for better, more holistic care for the high-risk surgical patient, to improve outcomes and reduce healthcare costs.
                                    </li>
                                </ul>
                            </div>

                        </div>


                        <div id='requirements'>
                            <h3 className="font-bold text-2xl mb-4">Who is the course for?</h3>
                            <p className="text-lg font-medium mb-4">This RCoA endorsed course is aimed at all interested healthcare professionals, both medical and allied health professionals. This would include anaesthetists, surgeons, care-of-the-elderly physicians, pre-assessment nurses, surgical ward nurses, operating department staff, physiotherapists and medical managers, emphasising that enhanced care and improved outcomes depend on a multidisciplinary approach.</p>
                            <p className="text-lg font-medium mb-4">Healthcare professionals might find the the Certificate of Achievement for this course useful for providing evidence of Continuing Professional Development (CPD), or commitment to their career.</p>
                            <p className="text-lg font-medium mb-4">Healthcare professionals might find the the Certificate of Achievement for this course useful for providing evidence of Continuing Professional Development (CPD), or commitment to their career.</p>

                        </div>
                        {/* testimonials */}
                        <Testimonials />

                        {/* Teacher details */}
                        <div id='educators'>
                            <h3 className="font-bold mb-5">Who will you learn with?</h3>
                            <div className="w-full md:w-3/4 lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {allTeachers.map((teacher, index) => (
                                    <div
                                        key={index}
                                        className="border rounded-lg shadow-sm overflow-hidden bg-white hover:bg-[#f9f9f9]"
                                    >
                                        <img
                                            src={teacher.image}
                                            alt={teacher.teacherName}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="p-5">
                                            <h2 className="text-lg font-bold mt-2">{teacher.teacherName}</h2>
                                            <div className="text-sm text-gray-500 mt-2">
                                                <p>{teacher.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Section - Small Box */}
                    <div className="w-full md:w-1/3 hidden md:block sticky top-4 self-start">
                        <div className="border-t-4 border-[#f0bd6c] p-6 bg-white shadow-lg">
                            <h2 className="text-xl font-bold">
                                Perioperative Medicine in Action
                            </h2>
                            <div className="flex items-center">
                                <p className="my-3 text-sm line-height text-[16px]">
                                    <span className="font-semibold text-[17px]">43,133</span> enrolled on this course
                                </p>
                            </div>

                            {/* Duration */}
                            <div className="flex items-start gap-2 my-2">
                                <HourglassEmptyIcon />
                                <div>
                                    <p className="text-[16px]">4 weeks</p>
                                </div>
                            </div>

                            {/* Weekly Study */}
                            <div className="flex items-start gap-2 my-2">
                                <AccessTimeIcon />
                                <div>
                                    <p className="text-[16px]">3 hours per week</p>
                                </div>
                            </div>

                            {/* Certificate */}
                            <div className="flex items-start gap-2 my-2">
                                <WorkspacePremiumIcon />
                                <div>
                                    <p className="text-[16px]">Digital certificate when eligible</p>
                                </div>
                            </div>

                            {/* Level */}
                            <div className="flex items-start gap-2 my-2">
                                <TrendingUpIcon />
                                <div>
                                    <p className="text-[15px]">Intermediate level</p>
                                </div>
                            </div>
                            <button
                                className="w-full mt-6 text-white font-semibold py-2 rounded-md hover:opacity-90"
                                style={{ backgroundColor: "#f0bd6c" }}
                            >
                                Join Course
                            </button>
                        </div>
                    </div>

                    {/* Join Course Button for Small Screens */}
                    <div className="block md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%]">
                        <button
                            className="w-full text-white font-semibold py-3 rounded-md hover:opacity-90"
                            style={{ backgroundColor: "#f0bd6c" }}
                        >
                            Join Course
                        </button>
                    </div>

                </div>
            </section >


            <section className='bottom' id='reviews'>
                {/* Learner Reviews */}
                <LearnerReviews />


                {/* More Courses */}

                <div className="container mx-auto mt-10 px-4">
                    <div className="w-full flex flex-col items-center justify-center py-10 text-center">
                        <h2 className="text-[36px] lg:text-[2.4rem] md:text-[2rem] font-bold leading-tight pb-4">
                            More courses you might like
                        </h2>
                        <p className="text-[2xl] sm:text-[2xl] leading-tight">
                            Learners who joined this course have also enjoyed these courses.
                        </p>
                    </div>

                    <div className="w-full md:w-3/4 lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {allCourses.length > 0 ? (
                            allCourses.map((course, index) => (
                                <div
                                    key={index}
                                    className="border rounded-lg shadow-sm overflow-hidden bg-white hover:bg-[#f9f9f9]"
                                    style={{ maxHeight: "490px" }}
                                >
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-5">
                                        <h2 className="text-lg font-bold mt-2">{course.title}</h2>
                                        <div className="text-sm text-gray-500 mt-2">
                                            <p>
                                                {course.description.split(' ').slice(0, 10).join(' ')}{course.description.split(' ').length > 10 ? '...' : ''}
                                            </p>
                                        </div>
                                        <p className="text-yellow-500 font-semibold mt-2 text-sm line-height">
                                            ⭐ {course.rating}
                                        </p>
                                        <div className="text-xsm text-gray-500 mt-2">
                                            <span className='text-md mr-2'>⏳ {course.weeks}</span>
                                            <span className='text-md'>🕒 {course.hours}</span>
                                        </div>
                                        <button
                                            className="w-full mt-6 text-white font-semibold py-2 rounded-md hover:opacity-90"
                                            style={{ backgroundColor: "#f0bd6c" }}
                                        >
                                            Find out more
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-3 text-center text-lg text-gray-500">No courses found</div>
                        )}
                    </div>
                </div>


                <div className="w-full flex flex-col items-center justify-center py-10 text-center">
                    <Button
                        variant="outlined"
                        sx={{
                            color: "#f0bd6c",
                            fontSize: "1rem",
                            fontWeight: "500",
                            border: "2px solid #f0bd6c",
                            "&:hover": {
                                backgroundColor: "rgb(59 130 246)",
                                color: "#fff",
                                border: "2px solid rgb(59 130 246)",
                            },
                        }}
                    >
                        View All Courses
                    </Button>

                </div>



            </section>




        </>
    );
}

export default CoursesDetails;
