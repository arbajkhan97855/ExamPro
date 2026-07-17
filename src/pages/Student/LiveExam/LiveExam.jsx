import { useParams } from "react-router-dom";
import { useState } from "react";
import { exams } from "../../../data/mockData";

import {
    reactQuestions,
    javascriptQuestions,
    pythonQuestions,
    htmlCssQuestions,
    nodeQuestions
} from "../../../data/questions";

import ExamHeader from "./ExamHeader";
import QuestionCard from "./QuestionCard";
import QuestionPalette from "./QuestionPalette";
import NavigationButtons from "./NavigationButtons";

import "./LiveExam.css";

function LiveExam() {

    const { slug } = useParams();


    const examQuestions = {

        "react-js-advanced": reactQuestions,

        "javascript-fundamentals": javascriptQuestions,

        "python-programming": pythonQuestions,

        "html-css-javascript": htmlCssQuestions,

        "node-js-backend": nodeQuestions

    };

    const questions = examQuestions[slug] || [];

    const exam = exams.find(item => item.slug === slug);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});

    const [reviewQuestions, setReviewQuestions] = useState([]);
    const [showSubmitModal, setShowSubmitModal] = useState(false);

const handleSubmit = () => {

    setShowSubmitModal(true);

};
  
const answeredQuestions = Object.keys(answers).length;
const [visitedQuestions, setVisitedQuestions] = useState([0]);

if (!exam) {

    return <h2>Exam Not Found</h2>;

}

if (questions.length === 0) {

    return <h2>No Questions Available</h2>;

}

    return (

        <section className="ep-live-page">

       <ExamHeader

    exam={exam}

    currentQuestion={currentQuestion + 1}

    totalQuestions={questions.length}

    answeredQuestions={answeredQuestions}

/>

            <div className="ep-live-wrapper">

                <div className="ep-live-left">

                    <QuestionCard

                        question={questions[currentQuestion]}

                        answers={answers}

                        setAnswers={setAnswers}

                    />

                  <NavigationButtons

    currentQuestion={currentQuestion}

    totalQuestions={questions.length}

    setCurrentQuestion={setCurrentQuestion}

    answers={answers}

    reviewQuestions={reviewQuestions}

    setReviewQuestions={setReviewQuestions}

    visitedQuestions={visitedQuestions}

    setVisitedQuestions={setVisitedQuestions}

    onSubmit={handleSubmit}

/>

                </div>

                <div className="ep-live-right">

                   <QuestionPalette

    questions={questions}

    currentQuestion={currentQuestion}

    setCurrentQuestion={setCurrentQuestion}

    answers={answers}

    reviewQuestions={reviewQuestions}

    visitedQuestions={visitedQuestions}

/>

                </div>

            </div>

        </section>

    );

}

export default LiveExam;