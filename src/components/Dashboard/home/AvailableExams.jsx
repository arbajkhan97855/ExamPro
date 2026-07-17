import {
    FaClock,
    FaBookOpen,
    FaAward
} from "react-icons/fa";

import "./AvailableExams.css";

import { exams } from "../../../data/mockData"
import { useNavigate } from "react-router-dom";

function AvailableExams() {
     const navigate = useNavigate();
    return (

      <div className="available-card">
            <div className="available-header">

                <h3>Upcoming / Available Exams</h3>

                <button onClick={() => navigate("/student/exams")}>
                    View All
                </button>

            </div>

            {

                exams.slice(0,5).map((exam)=>(

                    <div
                        className="exam-row"
                        key={exam.id}
                    >

                        <div className="exam-left">

                            <img
                                src={exam.image}
                                alt=""
                            />

                            <div>

                                <h4>

                                    {exam.name}

                                </h4>

                                <p>

                                    {exam.shortDescription}

                                </p>

                                <div className="exam-info">

                                    <span>

                                        <FaClock />

                                        {exam.duration}

                                    </span>

                                    <span>

                                        <FaBookOpen />

                                        {exam.questions}

                                    </span>

                                    <span>

                                        <FaAward />

                                        {exam.totalMarks}

                                    </span>

                                </div>

                            </div>

                        </div>

                        <div className="exam-right">

                            <span
                                className={
                                    exam.tier ==="Free"
                                    ?
                                    "badge free"
                                    :
                                    "badge premium"
                                }
                            >

                                {exam.tier}

                            </span>

                            {

                                exam.tier ==="Free"

                                ?

                                <button>

                                    Start Now

                                </button>

                                :

                                <>

                                    <h3>

                                        {exam.price}

                                    </h3>

                                    <button>

                                        View Details

                                    </button>

                                </>

                            }

                        </div>

                    </div>

                ))

            }

         <button
                className="all-exams"
                onClick={() => navigate("/student/exams")}
            >

                View All Exams

            </button>

        </div>

    );

}

export default AvailableExams;