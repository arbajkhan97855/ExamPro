import { useNavigate } from "react-router-dom";

import {
    FaCheckCircle,
    FaTimesCircle,
    FaMinusCircle,
    FaTrophy,
    FaHome,
    FaRedo
} from "react-icons/fa";

import "./Result.css";

function Result() {

    const navigate = useNavigate();

    const data = JSON.parse(

        localStorage.getItem("examResult")

    );
    

    if (!data) {

        return <h2>No Result Found</h2>;

    }

    const {

        exam,

        questions,

        answers,

        reviewQuestions

    } = data;

    let correct = 0;

    let wrong = 0;

    let skipped = 0;

    let obtainedMarks = 0;

    questions.forEach((question) => {

        const ans = answers[question.id];

        if (ans === undefined) {

            skipped++;

            return;

        }

        if (ans === question.correctAnswer) {

            correct++;

            obtainedMarks += question.marks;

        }

        else {

            wrong++;

            obtainedMarks -= question.negativeMarks || 0;

        }

    });

    const totalMarks = questions.reduce(

        (sum, q) => sum + q.marks,

        0

    );

    const percentage =

        ((obtainedMarks / totalMarks) * 100).toFixed(2);

    const pass =

        obtainedMarks >= exam.passingMarks;


        const history = JSON.parse(
    localStorage.getItem("examHistory")
) || [];

history.unshift({

    exam,

    obtainedMarks,

    totalMarks,

    percentage,

    pass,

    date: new Date().toLocaleDateString("en-GB")

});

localStorage.setItem(

    "examHistory",

    JSON.stringify(history)

);
    return (

        <section className="ep-result-page">

            <div className="ep-result-card">

                <h1>{exam.name}</h1>

                <h2>Exam Result</h2>

                <div className="ep-result-score">

                    <FaTrophy />

                    <h3>

                        {obtainedMarks} / {totalMarks}

                    </h3>

                </div>

                <div className="ep-result-grid">

                    <div>

                        <FaCheckCircle />

                        <span>Correct</span>

                        <strong>{correct}</strong>

                    </div>

                    <div>

                        <FaTimesCircle />

                        <span>Wrong</span>

                        <strong>{wrong}</strong>

                    </div>

                    <div>

                        <FaMinusCircle />

                        <span>Skipped</span>

                        <strong>{skipped}</strong>

                    </div>

                    <div>

                        <span>Review</span>

                        <strong>{reviewQuestions.length}</strong>

                    </div>

                    <div>

                        <span>Percentage</span>

                        <strong>{percentage}%</strong>

                    </div>

                    <div>

                        <span>Status</span>

                        <strong>

                            {

                                pass

                                    ? "PASS"

                                    : "FAIL"

                            }

                        </strong>

                    </div>

                </div>

                <div className="ep-result-buttons">

                    <button

                        onClick={() =>

                            navigate("/student/dashboard")

                        }

                    >

                        <FaHome />

                        Dashboard

                    </button>

                    <button

                        onClick={() =>

                            navigate(`/student/result-review/${exam.slug}`)

                        }

                    >

                        <FaRedo />

                        Review Answers

                    </button>

                </div>

            </div>

        </section>

    );

}

export default Result;