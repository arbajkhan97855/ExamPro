import { motion } from "framer-motion";

import {
    FaClipboardList,
    FaCheckCircle,
    FaSignal
} from "react-icons/fa";

import Timer from "./Timer";
import ProgressBar from "./ProgressBar";

import "./ExamHeader.css";

function ExamHeader({

    exam,

    currentQuestion,

    totalQuestions,

    answeredQuestions

}) {

    const progress = Math.round(

        (answeredQuestions / totalQuestions) * 100

    );

    return (

        <motion.header

            className="ep-live-header"

            initial={{
                opacity:0,
                y:-20
            }}

            animate={{
                opacity:1,
                y:0
            }}

            transition={{
                duration:.4
            }}

        >

            {/* LEFT */}

            <div className="ep-live-header-left">

                <h2>

                    {exam.name}

                </h2>

                <p>

                    {exam.category}

                    •

                    {exam.difficulty}

                    •

                    {exam.language}

                </p>

            </div>

            {/* CENTER */}

            <div className="ep-live-header-center">

                <div className="ep-live-progress-top">

                    <span>

                        <FaClipboardList />

                        Question

                        <strong>

                            {currentQuestion}

                            /

                            {totalQuestions}

                        </strong>

                    </span>

                    <span>

                        <FaCheckCircle />

                        Answered

                        <strong>

                            {answeredQuestions}

                        </strong>

                    </span>

                </div>

                <ProgressBar

                    progress={progress}

                />

            </div>

            {/* RIGHT */}

            <div className="ep-live-header-right">

                <Timer

                    duration={exam.duration}

                />

                <div className="ep-live-level">

                    <FaSignal />

                    {exam.difficulty}

                </div>

            </div>

        </motion.header>

    );

}

export default ExamHeader;