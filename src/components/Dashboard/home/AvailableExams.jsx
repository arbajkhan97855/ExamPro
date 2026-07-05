import {
    FaClock,
    FaBookOpen,
    FaAward
} from "react-icons/fa";

import "./AvailableExams.css";

const exams = [

    {
        id:1,
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        title:"JavaScript Fundamentals",
        desc:"Test your JavaScript basics and fundamentals.",
        duration:"60 Min",
        questions:"50 Questions",
        marks:"100 Marks",
        type:"Free"
    },

    {
        id:2,
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        title:"Python Programming",
        desc:"Basic to intermediate Python Programming.",
        duration:"60 Min",
        questions:"50 Questions",
        marks:"100 Marks",
        type:"Free"
    },

    {
        id:3,
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        title:"HTML CSS & JavaScript",
        desc:"Web Development Fundamentals.",
        duration:"45 Min",
        questions:"40 Questions",
        marks:"80 Marks",
        type:"Free"
    },

    {
        id:4,
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        title:"React JS Advanced",
        desc:"Advanced React JS Concepts.",
        duration:"90 Min",
        questions:"60 Questions",
        marks:"120 Marks",
        type:"Premium",
        price:"₹299"
    },

    {
        id:5,
        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        title:"Node JS Backend",
        desc:"Backend Development with Node JS.",
        duration:"90 Min",
        questions:"60 Questions",
        marks:"120 Marks",
        type:"Premium",
        price:"₹399"
    }

];

function AvailableExams() {

    return (

        <div className="available-card">

            <div className="available-header">

                <h3>Upcoming / Available Exams</h3>

                <button>View All</button>

            </div>

            {

                exams.map((exam)=>(

                    <div
                        className="exam-row"
                        key={exam.id}
                    >

                        <div className="exam-left">

                            <img
                                src={exam.logo}
                                alt=""
                            />

                            <div>

                                <h4>

                                    {exam.title}

                                </h4>

                                <p>

                                    {exam.desc}

                                </p>

                                <div className="exam-info">

                                    <span>

                                        <FaClock />

                                        {exam.duration}

                                    </span>

                                    <span>

                                        <FaBookOpen />

                                        {exam.questions}

                                    </span>

                                    <span>

                                        <FaAward />

                                        {exam.marks}

                                    </span>

                                </div>

                            </div>

                        </div>

                        <div className="exam-right">

                            <span
                                className={
                                    exam.type==="Free"
                                    ?
                                    "badge free"
                                    :
                                    "badge premium"
                                }
                            >

                                {exam.type}

                            </span>

                            {

                                exam.type==="Free"

                                ?

                                <button>

                                    Start Now

                                </button>

                                :

                                <>

                                    <h3>

                                        {exam.price}

                                    </h3>

                                    <button>

                                        View Details

                                    </button>

                                </>

                            }

                        </div>

                    </div>

                ))

            }

            <button className="all-exams">

                View All Exams

            </button>

        </div>

    );

}

export default AvailableExams;