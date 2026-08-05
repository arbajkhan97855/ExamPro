
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
    FaPlay,
    FaEye,
    FaClock,
    FaQuestionCircle,
    FaCheckCircle,
    FaBookOpen
} from "react-icons/fa";

import { exams } from "../../../data/mockData";

import "./MyExams.css";


function MyExams() {

    const navigate = useNavigate();


    /*
        TEMPORARY DATA

        Abhi frontend mockData se exams aa rahe hain.

        Future:

        Backend API
             ↓
        Purchased Exams
             ↓
        My Exams
    */

    const myExams = useMemo(() => {

        return exams.filter((exam) => {

            /*
                Temporary condition.

                Abhi Premium exams ko purchased
                maan rahe hain.

                Payment Gateway complete hone ke baad
                ye condition API purchase status se aayegi.
            */

            return exam.tier === "Premium";

        });

    }, []);


    const handleStart = (exam) => {

        navigate(`/student/live-exam/${exam.slug}`);

    };


    const handleView = (exam) => {

        navigate(`/student/exams/${exam.slug}`);

    };


    return (

        <section className="ep-my-exams-page">


            {/* =========================
                HEADER
            ========================= */}

            <div className="ep-my-exams-header">

                <div>

                    <span className="ep-my-exams-eyebrow">

                        <FaBookOpen />

                        MY LEARNING

                    </span>

                    <h1>
                        My Exams
                    </h1>

                    <p>
                        View your purchased and enrolled exams
                        and start your examination anytime.
                    </p>

                </div>


                <div className="ep-my-exams-count">

                    <strong>
                        {myExams.length}
                    </strong>

                    <span>
                        Enrolled Exams
                    </span>

                </div>

            </div>


            {/* =========================
                EMPTY STATE
            ========================= */}

            {myExams.length === 0 ? (

                <div className="ep-my-exams-empty">

                    <div className="ep-my-exams-empty-icon">

                        <FaBookOpen />

                    </div>

                    <h2>
                        No Exams Found
                    </h2>

                    <p>
                        You haven't purchased or enrolled
                        in any exam yet.
                    </p>

                    <button
                        onClick={() =>
                            navigate("/student/exams")
                        }
                    >
                        Explore Exams
                    </button>

                </div>

            ) : (


                /* =========================
                    EXAM GRID
                ========================= */

                <div className="ep-my-exams-grid">

                    {myExams.map((exam) => (

                        <motion.article

                            className="ep-my-exam-card"

                            key={exam.slug}

                            initial={{
                                opacity: 0,
                                y: 20
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            whileHover={{
                                y: -8
                            }}

                            transition={{
                                duration: 0.35
                            }}

                        >


                            {/* IMAGE */}

                            <div className="ep-my-exam-image">

                                <img
                                    src={exam.banner}
                                    alt={exam.name}
                                />

                                <span className="ep-my-exam-status">

                                    <FaCheckCircle />

                                    Enrolled

                                </span>

                            </div>


                            {/* CONTENT */}

                            <div className="ep-my-exam-content">


                                <div className="ep-my-exam-category">

                                    {exam.category}

                                </div>


                                <h2>
                                    {exam.name}
                                </h2>


                                <div className="ep-my-exam-meta">

                                    <span>

                                        <FaClock />

                                        {exam.duration} Min

                                    </span>


                                    <span>

                                        <FaQuestionCircle />

                                        {exam.questions} Questions

                                    </span>

                                </div>


                                <div className="ep-my-exam-divider" />


                                <div className="ep-my-exam-footer">


                                    <button

                                        className="ep-my-exam-start"

                                        onClick={() =>
                                            handleStart(exam)
                                        }

                                    >

                                        <FaPlay />

                                        Start Exam

                                    </button>


                                    <button

                                        className="ep-my-exam-view"

                                        onClick={() =>
                                            handleView(exam)
                                        }

                                    >

                                        <FaEye />

                                        Details

                                    </button>


                                </div>


                            </div>

                        </motion.article>

                    ))}

                </div>

            )}

        </section>

    );

}


export default MyExams;
