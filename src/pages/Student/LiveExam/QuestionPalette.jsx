import "./QuestionPalette.css";

function QuestionPalette({

    questions,

    currentQuestion,

    setCurrentQuestion,

    answers = {},

    reviewQuestions = [],

    visitedQuestions = [],

    setVisitedQuestions

}) {

const handleQuestionClick=(index)=>{

setCurrentQuestion(index);

const id=questions[index].id;

if(!visitedQuestions.includes(id)){

setVisitedQuestions(prev=>[

...prev,

id

]);

}

}

    const getQuestionStatus = (question, index) => {

        const isCurrent = currentQuestion === index;

        const isVisited = visitedQuestions.includes(question.id);

        const isAnswered = question.id in answers;

        const isReview = reviewQuestions.includes(question.id);

        // Highest Priority
        if (isCurrent) {

            return "ep-current";

        }

        if (isAnswered && isReview) {

            return "ep-answer-review";

        }

        if (isReview) {

            return "ep-review";

        }

        if (isAnswered) {

            return "ep-answered";

        }

        if (isVisited) {

            return "ep-notanswered";

        }

        return "ep-notvisited";

    };

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

                    <i className="ep-answer-review"></i>

                    Ans + Review

                </span>

                <span>

                    <i className="ep-notanswered"></i>

                    Not Answered

                </span>

                <span>

                    <i className="ep-notvisited"></i>

                    Not Visited

                </span>

            </div>

            {/* Question Buttons */}

            <div className="ep-live-palette-grid">

                {

                    questions.map((question, index) => (

                        <button

                            key={question.id}

                            className={`ep-live-palette-btn ${getQuestionStatus(question, index)}`}

                            onClick={() => handleQuestionClick(index)}

                        >

                            {index + 1}

                        </button>

                    ))

                }

            </div>

           

        </aside>

    );

}

export default QuestionPalette;