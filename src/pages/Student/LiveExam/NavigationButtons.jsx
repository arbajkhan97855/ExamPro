import { motion } from "framer-motion";

import {
    FaArrowLeft,
    FaArrowRight,
    FaBookmark,
    FaPaperPlane
} from "react-icons/fa";

import "./NavigationButtons.css";

function NavigationButtons({

    currentQuestion,

    totalQuestions,

    setCurrentQuestion,

    answers,

    reviewQuestions,

    setReviewQuestions,

    onSubmit

}) {

    const handleReview = () => {

        if (reviewQuestions.includes(currentQuestion)) {

            setReviewQuestions(

                reviewQuestions.filter(

                    item => item !== currentQuestion

                )

            );

        }

        else {

            setReviewQuestions([

                ...reviewQuestions,

                currentQuestion

            ]);

        }

    };

    return (

        <div className="ep-live-nav">

            <motion.button

                whileHover={{ scale:1.03 }}

                whileTap={{ scale:.95 }}

                disabled={currentQuestion===0}

                className="ep-live-btn ep-prev-btn"

                onClick={()=>

                    setCurrentQuestion(currentQuestion-1)

                }

            >

                <FaArrowLeft />

                Previous

            </motion.button>

            <motion.button

                whileHover={{ scale:1.03 }}

                whileTap={{ scale:.95 }}

                className="ep-live-btn ep-review-btn"

                onClick={handleReview}

            >

                <FaBookmark />

                {

                    reviewQuestions.includes(currentQuestion)

                    ?

                    "Reviewed"

                    :

                    "Mark Review"

                }

            </motion.button>

            {

                currentQuestion===totalQuestions-1

                ?

                <motion.button

                    whileHover={{ scale:1.03 }}

                    whileTap={{ scale:.95 }}

                    className="ep-live-btn ep-submit-btn"

                    onClick={onSubmit}

                >

                    <FaPaperPlane />

                    Submit Exam

                </motion.button>

                :

                <motion.button

                    whileHover={{ scale:1.03 }}

                    whileTap={{ scale:.95 }}

                    className="ep-live-btn ep-next-btn"

                    onClick={()=>

                        setCurrentQuestion(currentQuestion+1)

                    }

                >

                    Save & Next

                    <FaArrowRight />

                </motion.button>

            }

        </div>

    );

}

export default NavigationButtons;