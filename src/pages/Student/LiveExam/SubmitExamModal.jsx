import { motion } from "framer-motion";

import {
    FaCheckCircle,
    FaTimesCircle,
    FaBookmark,
    FaPaperPlane,
    FaTimes
} from "react-icons/fa";

import "./SubmitExamModal.css";

function SubmitExamModal({

    show,

    onClose,

    onConfirm,

    totalQuestions,

    answeredQuestions,

    reviewQuestions,

    visitedQuestions

}) {

    if (!show) return null;

    const notAnswered =
        totalQuestions - answeredQuestions;

    const notVisited =
        totalQuestions - visitedQuestions.length;

    return (

        <div className="ep-submit-overlay">

            <motion.div

                className="ep-submit-modal"

                initial={{
                    opacity:0,
                    scale:.8
                }}

                animate={{
                    opacity:1,
                    scale:1
                }}

                transition={{
                    duration:.3
                }}

            >

                <button

                    className="ep-submit-close"

                    onClick={onClose}

                >

                    <FaTimes />

                </button>

                <h2>

                    Submit Examination

                </h2>

                <p>

                    Please review your exam summary before submitting.

                </p>

                <div className="ep-submit-summary">

                    <div>

                        <FaCheckCircle />

                        <span>Total Questions</span>

                        <strong>{totalQuestions}</strong>

                    </div>

                    <div>

                        <FaCheckCircle />

                        <span>Answered</span>

                        <strong>{answeredQuestions}</strong>

                    </div>

                    <div>

                        <FaTimesCircle />

                        <span>Not Answered</span>

                        <strong>{notAnswered}</strong>

                    </div>

                    <div>

                        <FaBookmark />

                        <span>Marked Review</span>

                        <strong>{reviewQuestions.length}</strong>

                    </div>

                    <div>

                        <FaTimesCircle />

                        <span>Not Visited</span>

                        <strong>{notVisited}</strong>

                    </div>

                </div>

                <div className="ep-submit-buttons">

                    <button

                        className="ep-submit-cancel"

                        onClick={onClose}

                    >

                        Continue Exam

                    </button>

                    <button

                        className="ep-submit-confirm"

                        onClick={onConfirm}

                    >

                        <FaPaperPlane />

                        Submit Exam

                    </button>

                </div>

            </motion.div>

        </div>

    );

}

export default SubmitExamModal;