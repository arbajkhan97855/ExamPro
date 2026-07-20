import { motion } from "framer-motion";
import "./QuestionCard.css";

function QuestionCard({

    question,

    answers,

    setAnswers,

    visitedQuestions,
setVisitedQuestions

}) {

    if (!question) {

        return <h2>No Question Found</h2>;

    }

  const handleAnswer = (index) => {

    setAnswers(prev => ({

        ...prev,

        [question.id]: index

    }));

    if (!visitedQuestions.includes(question.id)) {

        setVisitedQuestions(prev => [

            ...prev,

            question.id

        ]);

    }

};

    return (

        <motion.div

            key={question.id}

            className="ep-live-question-card"

            initial={{
                opacity:0,
                x:40
            }}

            animate={{
                opacity:1,
                x:0
            }}

            exit={{
                opacity:0,
                x:-40
            }}

            transition={{
                duration:.35
            }}

        >

            <div className="ep-live-question-top">

                <span>

                    Question {question.id}

                </span>

                <span>

                    {question.marks} Marks

                </span>

            </div>

            <h2>

                {question.question}

            </h2>

            <div className="ep-live-options">

                {

                    question.options.map((option,index)=>(

                        <motion.label

                            whileHover={{
                                scale:1.01
                            }}

                            whileTap={{
                                scale:.98
                            }}

                            key={index}

                            className={

                                answers[question.id]===index

                                ?

                                "ep-live-option active"

                                :

                                "ep-live-option"

                            }

                        >

                            <input

                                type="radio"

                                name={`question-${question.id}`}

                                checked={

                                    answers[question.id]===index

                                }

                                onChange={()=>handleAnswer(index)}

                            />

                            <span className="ep-live-option-letter">

                                {

                                    String.fromCharCode(

                                        65+index

                                    )

                                }

                            </span>

                            <span>

                                {option}

                            </span>

                        </motion.label>

                    ))

                }

            </div>

        </motion.div>

    );

}

export default QuestionCard;