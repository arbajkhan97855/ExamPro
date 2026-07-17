import "./ExamDetails.css";

function OverviewTab({ exam }) {

    return (

        <div className="ep-exd-overview">

            <h2>

                About This Examination

            </h2>

            <p>

                {exam.description}

            </p>

            <div className="ep-exd-overview-grid">

                <div className="ep-exd-overview-item">

                    <span>Category</span>

                    <strong>{exam.category}</strong>

                </div>

                <div className="ep-exd-overview-item">

                    <span>Difficulty</span>

                    <strong>{exam.difficulty}</strong>

                </div>

                <div className="ep-exd-overview-item">

                    <span>Language</span>

                    <strong>{exam.language}</strong>

                </div>

                <div className="ep-exd-overview-item">

                    <span>Duration</span>

                    <strong>{exam.duration} Minutes</strong>

                </div>

                <div className="ep-exd-overview-item">

                    <span>Questions</span>

                    <strong>{exam.questions}</strong>

                </div>

                <div className="ep-exd-overview-item">

                    <span>Total Marks</span>

                    <strong>{exam.totalMarks}</strong>

                </div>

                <div className="ep-exd-overview-item">

                    <span>Passing Marks</span>

                    <strong>{exam.passingMarks}</strong>

                </div>

                <div className="ep-exd-overview-item">

                    <span>Attempts</span>

                    <strong>{exam.attempts}</strong>

                </div>

                <div className="ep-exd-overview-item">

                    <span>Rating</span>

                    <strong>⭐ {exam.rating}</strong>

                </div>

                <div className="ep-exd-overview-item">

                    <span>Students</span>

                    <strong>{exam.enrolledStudents}</strong>

                </div>

            </div>

        </div>

    );

}

export default OverviewTab;