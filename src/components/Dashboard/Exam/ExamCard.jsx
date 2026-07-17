import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
    FaClock,
    FaQuestionCircle,
    FaUsers,
    FaStar,
    FaHeart,
    FaPlay,
    FaEye,
    FaSignal
} from "react-icons/fa";

import "./ExamCard.css";

function ExamCard({ exam }) {

    const navigate = useNavigate();

    const [wishlist, setWishlist] = useState(false);

    const handleDetails = () => {

        navigate(`/student/exams/${exam.slug}`);

    };

    const handleStart = () => {

        navigate(`/student/exams/${exam.slug}`);

    };

    return (

        <motion.div

            className="ep-std-ex-card"

            initial={{
                opacity: 0,
                scale: 0.98
            }}

            animate={{
                opacity: 1,
                scale: 1
            }}

            transition={{
                duration: 0.4
            }}

            whileHover={{
                y: -10,
                scale: 1.02
            }}

            viewport={{
                once: true
            }}

            transition={{
                duration: .45
            }}

        >

            {/* IMAGE */}

            <div className="ep-std-ex-card-image">

                <img
                    src={exam.banner}
                    alt={exam.name}
                />



                <span
    className={
        exam.tier === "Free"
            ? "ep-std-ex-card-badge ep-free"
            : "ep-std-ex-card-badge ep-premium"
    }
>
    {
        exam.tier === "Free"
            ? "FREE"
            : `₹${exam.finalPrice}`
    }
</span>

                <button

                    className={`ep-std-ex-card-favorite ${wishlist ? "active" : ""}`}

                    onClick={() => setWishlist(!wishlist)}

                >

                    <FaHeart />

                </button>

            </div>

            {/* BODY */}

            <div className="ep-std-ex-card-content">

                {/* HEADER */}

                <div className="ep-std-ex-card-header">

                    <span className="ep-std-ex-card-category">

                        {exam.category}

                    </span>

                    <div className="ep-std-ex-card-rating">

                        <FaStar />

                        {exam.rating}

                    </div>

                </div>

                {/* TITLE */}

                <h3 className="ep-std-ex-card-title">

                      {exam.name}

                </h3>

                {/* INFO */}

                <div className="ep-std-ex-card-meta">

                    <span>

                        <FaClock />

                        {exam.duration} Min

                    </span>

                    <span>

                        <FaQuestionCircle />

                       {exam.questions} Questions

                    </span>

                </div>

                <div className="ep-std-ex-card-meta">

                    <span>

                        <FaUsers />

                        {exam.enrolledStudents.toLocaleString()} Students

                    </span>

                  <span
    className={`ep-level ${exam.difficulty.toLowerCase()}`}
>

    <FaSignal />

    {exam.difficulty}

</span>

                </div>

                {/* BUTTONS */}

                <div className="ep-std-ex-card-actions">

                    <motion.button

                        whileHover={{
                            scale: 1.05
                        }}

                        whileTap={{
                            scale: .95
                        }}

                        className="ep-std-ex-card-start"

                        onClick={handleStart}

                    >

                        <FaPlay />

                        Start Exam

                    </motion.button>

                    <motion.button

                        whileHover={{
                            scale: 1.05
                        }}

                        whileTap={{
                            scale: .95
                        }}

                        className="ep-std-ex-card-details"

                        onClick={handleDetails}

                    >

                        <FaEye />

                        View Details

                    </motion.button>

                </div>

            </div>

        </motion.div>

    );

}

export default ExamCard;