import "./ExamDetails.css";

function PatternTab({ exam }) {

    return (

        <div className="ep-exd-pattern">

            <div className="ep-exd-pattern-row">

                <span>Total Questions</span>

                <strong>{exam.questions}</strong>

            </div>

            <div className="ep-exd-pattern-row">

                <span>Duration</span>

                <strong>{exam.duration} Minutes</strong>

            </div>

            <div className="ep-exd-pattern-row">

                <span>Total Marks</span>

                <strong>{exam.totalMarks}</strong>

            </div>

            <div className="ep-exd-pattern-row">

                <span>Passing Marks</span>

                <strong>{exam.passingMarks}</strong>

            </div>

            <div className="ep-exd-pattern-row">

                <span>Attempts Allowed</span>

                <strong>{exam.attempts}</strong>

            </div>

            <div className="ep-exd-pattern-row">

                <span>Language</span>

                <strong>{exam.language}</strong>

            </div>

            <div className="ep-exd-pattern-row">

                <span>Certificate</span>

                <strong>
                    {exam.certificate ? "Available" : "Not Available"}
                </strong>

            </div>


            <div className="ep-exd-pattern-row">

                <span>Negative Marking</span>

                <strong>{exam.negativeMarking ? "Yes" : "No"}</strong>

            </div>

        </div>

    );

}

export default PatternTab;