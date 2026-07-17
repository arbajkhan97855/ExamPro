import {
    FaCheckCircle,
    FaRegCircle,
    FaFlag
} from "react-icons/fa";

import "./QuestionPalette.css";

function QuestionPalette({

    questions,

    currentQuestion,

    setCurrentQuestion,

    answers = {},

    reviewQuestions = []

}) {

    return (

        <aside className="ep-live-palette">

            <h3>

                Question Palette

            </h3>

            {/* Legend */}

            <div className="ep-live-palette-legend">

                <span>

                    <i className="ep-current"></i>

                    Current

                </span>

                <span>

                    <i className="ep-answered"></i>

                    Answered

                </span>

                <span>

                    <i className="ep-review"></i>

                    Review

                </span>

                <span>

                    <i className="ep-notanswered"></i>

                    Not Answered

                </span>

            </div>

            {/* Questions */}

            <div className="ep-live-palette-grid">

                {

                    questions.map((question, index) => {

                        let className = "ep-notanswered";

                        if (answers[question.id]) {

                            className = "ep-answered";

                        }

                        if (reviewQuestions.includes(question.id)) {

                            className = "ep-review";

                        }

                        if (currentQuestion === index) {

                            className = "ep-current";

                        }

                        return (

                            <button

                                key={question.id}

                                className={`ep-live-palette-btn ${className}`}

                                onClick={() =>

                                    setCurrentQuestion(index)

                                }

                            >

                                {index + 1}

                            </button>

                        );

                    })

                }

            </div>

        </aside>

    );

}

export default QuestionPalette;