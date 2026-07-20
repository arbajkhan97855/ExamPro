import { motion } from "framer-motion";

import {
    FaArrowLeft,
    FaArrowRight,
    FaBookmark,
    FaPaperPlane,
    FaEraser
} from "react-icons/fa";

import "./NavigationButtons.css";

function NavigationButtons({

    question,

    currentQuestion,

    totalQuestions,

    setCurrentQuestion,

    answers,

    setAnswers,

    reviewQuestions,

    setReviewQuestions,

    visitedQuestions,

    setVisitedQuestions,

    onSubmit

}) {

 const markVisited=()=>{

if(

!visitedQuestions.includes(question.id)

){

setVisitedQuestions(prev=>

[

...prev,

question.id

]);

}

}

    const handlePrevious = () => {

        if (currentQuestion > 0) {

            setCurrentQuestion(currentQuestion - 1);

        }

    };

    const handleNext = () => {

        markVisited(currentQuestion);

        if (currentQuestion < totalQuestions - 1) {

            setCurrentQuestion(currentQuestion + 1);

        }

    };

const handleClearResponse = () => {

    setAnswers(prev => {

        const updated = { ...prev };

        delete updated[question.id];

        return updated;

    });

    setReviewQuestions(prev =>

        prev.filter(id => id !== question.id)

    );

};

    const handleReview = () => {

        if (!reviewQuestions.includes(question.id)) {

            setReviewQuestions(prev => [...prev, question.id]);

        }

        markVisited(currentQuestion);

        if (currentQuestion < totalQuestions - 1) {

            setCurrentQuestion(currentQuestion + 1);

        }

    };

    return (

        <div className="ep-live-nav">

            <motion.button

                whileHover={{ scale: 1.03 }}

                whileTap={{ scale: .95 }}

                disabled={currentQuestion === 0}

                className="ep-live-btn ep-prev-btn"

                onClick={handlePrevious}

            >

                <FaArrowLeft />

                Previous

            </motion.button>

            <motion.button

                whileHover={{ scale: 1.03 }}

                whileTap={{ scale: .95 }}

                className="ep-live-btn ep-clear-btn"

                onClick={handleClearResponse}

            >

                <FaEraser />

                Clear Response

            </motion.button>

            <motion.button

                whileHover={{ scale: 1.03 }}

                whileTap={{ scale: .95 }}

                className="ep-live-btn ep-review-btn"

                onClick={handleReview}

            >

                <FaBookmark />

                Mark Review & Next

            </motion.button>

            {

                currentQuestion === totalQuestions - 1

                    ?

                    <motion.button

                        whileHover={{ scale: 1.03 }}

                        whileTap={{ scale: .95 }}

                        className="ep-live-btn ep-submit-btn"

                        onClick={onSubmit}

                    >

                        <FaPaperPlane />

                        Submit Exam

                    </motion.button>

                    :

                    <motion.button

                        whileHover={{ scale: 1.03 }}

                        whileTap={{ scale: .95 }}

                        className="ep-live-btn ep-next-btn"

                        onClick={handleNext}

                    >

                        Save & Next

                        <FaArrowRight />

                    </motion.button>

            }

        </div>

    );

}

export default NavigationButtons;