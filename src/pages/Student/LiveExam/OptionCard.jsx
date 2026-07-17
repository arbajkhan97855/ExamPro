function QuestionCard({ question }) {

    if (!question) {

        return <h2>No Questions Found</h2>;

    }

    return (

        <div className="ep-live-question-card">

            <h4>

                Q{question.id}. {question.question}

            </h4>

            {

                question.options.map((option,index)=>(

                    <label key={index}>

                        <input

                            type="radio"

                            name="option"

                        />

                        {option}

                    </label>

                ))

            }

        </div>

    );

}

export default QuestionCard;