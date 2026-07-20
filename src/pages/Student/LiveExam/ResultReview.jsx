import { useNavigate } from "react-router-dom";

import {
    FaCheckCircle,
    FaTimesCircle,
    FaArrowLeft
} from "react-icons/fa";

import "./ResultReview.css";

function ResultReview() {

    const navigate = useNavigate();

    const data = JSON.parse(
        localStorage.getItem("examResult")
    );

    if (!data) {

        return <h2>No Review Available</h2>;

    }

    const {

        exam,

        questions,

        answers

    } = data;

    return (

        <section className="ep-review-page">

            <div className="ep-review-header">

                <button
                    onClick={() => navigate(-1)}
                >

                    <FaArrowLeft />

                    Back

                </button>

                <h1>

                    {exam.name}

                </h1>

                <p>

                    Answer Review

                </p>

            </div>

            {

                questions.map((question,index)=>{

                    const userAnswer =
                        answers[question.id];

                    const isCorrect =
                        userAnswer === question.correctAnswer;

                    const skipped =
                        userAnswer === undefined;

                    return(

                        <div
                            className="ep-review-card"
                            key={question.id}
                        >

                            <div className="ep-review-top">

                                <h3>

                                    Question {index+1}

                                </h3>

                                <span>

                                    {question.marks} Marks

                                </span>

                            </div>

                            <h2>

                                {question.question}

                            </h2>

                            <div className="ep-review-options">

                                {

                                    question.options.map((option,i)=>{

                                        let className="";

                                        if(i===question.correctAnswer){

                                            className="correct";

                                        }

                                        if(

                                            i===userAnswer &&

                                            !isCorrect

                                        ){

                                            className="wrong";

                                        }

                                        return(

                                            <div

                                                key={i}

                                                className={`ep-option ${className}`}

                                            >

                                                {

                                                    i===question.correctAnswer

                                                    &&

                                                    <FaCheckCircle />

                                                }

                                                {

                                                    i===userAnswer &&

                                                    !isCorrect

                                                    &&

                                                    <FaTimesCircle />

                                                }

                                                <span>

                                                    {option}

                                                </span>

                                            </div>

                                        );

                                    })

                                }

                            </div>

                            <div className="ep-review-footer">

                                {

                                    skipped ?

                                    <span className="skip">

                                        Skipped

                                    </span>

                                    :

                                    isCorrect ?

                                    <span className="correct-text">

                                        Correct Answer

                                    </span>

                                    :

                                    <span className="wrong-text">

                                        Wrong Answer

                                    </span>

                                }

                            </div>

                            <div className="ep-review-explanation">

                                <strong>

                                    Explanation

                                </strong>

                                <p>

                                    {question.explanation}

                                </p>

                            </div>

                        </div>

                    );

                })

            }

        </section>

    );

}

export default ResultReview;