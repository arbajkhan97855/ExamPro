import {
    FaReact,
    FaClock,
    FaQuestionCircle,
    FaTrophy,
    FaRedo,
    FaGlobe,
    FaLayerGroup,
    FaHeart,
    FaSignal,
    FaStar,
    FaCertificate
} from "react-icons/fa";

import { motion } from "framer-motion";

import "./ExamDetails.css";
import { useNavigate } from "react-router-dom";

function ExamInfoCard({ exam }) {
    const navigate = useNavigate();
    const Icon = exam.icon;
    return (

        <motion.div

            className="ep-exd-info-card"

            initial={{
                opacity: 0,
                y: 20
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: .45
            }}

        >

            {/* Back */}

            <button className="ep-exd-back-btn" onClick={() => navigate(-1)}>

                ← Back To Exams

            </button>

            {/* Header */}

            <div className="ep-exd-course-header">

                <div
                    className="ep-exd-course-icon"
                    // style={{
                    //     background: exam.color
                    // }}
                    style={{ color: exam.color }}
                >

                    <Icon />

                </div>

                <div>

                    <h2>

                        {exam.name}

                    </h2>

                    <span
                        className={
                            exam.tier === "Free"
                                ? "ep-exd-free"
                                : "ep-exd-premium"
                        }
                    >

                        {exam.tier} Exam

                    </span>

                </div>

            </div>

            {/* Information */}

            <div className="ep-exd-info-list">

                <div className="ep-exd-info-item">

                    <FaClock />

                    <span>Duration</span>

                    <strong> {exam.duration} Minutes</strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaQuestionCircle />

                    <span>Questions</span>

                    <strong>  {exam.questions}</strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaTrophy />

                    <span>Total Marks</span>

                    <strong>{exam.totalMarks}</strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaRedo />

                    <span>Attempts</span>

                    <strong>{exam.attempts}</strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaGlobe />

                    <span>Language</span>

                    <strong>{exam.language}</strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaLayerGroup />

                    <span>Category</span>

                    <strong>{exam.category}</strong>

                </div>


                <div className="ep-exd-info-item">

                    <FaSignal />

                    <span>

                        Difficulty

                    </span>

                    <strong>

                        {exam.difficulty}

                    </strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaStar />

                    <span>

                        Rating

                    </span>

                    <strong>

                        {exam.rating}

                    </strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaCertificate />

                    <span>

                        Certificate

                    </span>

                    <strong>

                        {

                            exam.certificate

                                ?

                                "Included"

                                :

                                "No"

                        }

                    </strong>

                </div>
            </div>

            {/* Button */}

            {

                exam.tier === "Free"

                    ?

                    <button className="ep-exd-start-btn" onClick={() =>
            navigate(`/student/live-exam/${exam.slug}`)
        }>Start Exam</button>
                    :
                    <button className="ep-exd-buy-btn"  onClick={() =>
            navigate(`/student/payment/${exam.slug}`)
        }>
                        Buy Now ₹{exam.finalPrice}
                    </button>

            }

            <button className="ep-exd-wishlist-btn">

                <FaHeart />

                Add To Wishlist

            </button>

        </motion.div>

    );

}

export default ExamInfoCard;