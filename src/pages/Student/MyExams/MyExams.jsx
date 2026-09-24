import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getApi } from "../../../services/api"

import {
    FaPlay,
    FaEye,
    FaClock,
    FaQuestionCircle,
    FaCheckCircle,
    FaBookOpen
} from "react-icons/fa";


import "./MyExams.css";


function MyExams() {

    const navigate = useNavigate();

   const [myExams, setMyExams] = useState([]);

const [loading, setLoading] = useState(true);

const [error, setError] = useState("");
useEffect(() => {

    const fetchMyExams = async () => {

        try {

            setLoading(true);
            setError("");

            const data = await getApi("/api/student/my-exams");

            if (data.success) {

                setMyExams(data.exams || []);

            } else {

                setError(
                    data.message || "Unable to load your exams"
                );

            }

        } catch (error) {

            console.error("My Exams Error:", error);

            setError(
                "Unable to connect with server"
            );

        } finally {

            setLoading(false);

        }

    };

    fetchMyExams();

}, []);



const handleStart = (exam) => {
    navigate(`/student/live-exam/${exam.exam_slug}`);
};


 const handleView = (exam) => {
    navigate(`/student/exams/${exam.exam_slug}`);
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

{loading ? (
    <div className="ep-my-exams-empty">

        <div className="ep-my-exams-empty-icon">
            <FaBookOpen />
        </div>

        <h2>
            Loading Your Exams...
        </h2>

        <p>
            Please wait while we load your purchased exams.
        </p>

    </div>

) : error ? (

    <div className="ep-my-exams-empty">

        <div className="ep-my-exams-empty-icon">
            <FaBookOpen />
        </div>

        <h2>
            Something went wrong
        </h2>

        <p>
            {error}
        </p>

    </div>

) : myExams.length === 0 ? (

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

    <div className="ep-my-exams-grid">

                    {myExams.map((exam) => (

                        <motion.article

                            className="ep-my-exam-card"

                            key={exam.id}

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

                         <div className="ep-my-exam-image-placeholder">

    <FaBookOpen />

</div>


                            {/* CONTENT */}

                            <div className="ep-my-exam-content">


                             <div className="ep-my-exam-category">
    Premium Exam
</div>

<h2>
    {exam.exam_name}
</h2>

<div className="ep-my-exam-meta">

    <span>
        <FaClock />
        Exam
    </span>

    <span>
        <FaQuestionCircle />
        Purchased
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
