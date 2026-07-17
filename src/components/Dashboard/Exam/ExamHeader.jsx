import {
    FaBookOpen,
    FaArrowRight,
    FaCrown
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import "./ExamHeader.css";

function ExamHeader({

    total,
    free,
    premium

}) {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    // Demo Data
    const totalFreeExams = 3;
    const usedFreeExams = user?.usedFreeExams || 0;

    const remaining = Math.max(
        totalFreeExams - usedFreeExams,
        0
    );

    const progress =
        (usedFreeExams / totalFreeExams) * 100;

    return (

        <section className="exam-header">

            <div className="exam-header-left">

                <span className="exam-badge">

                    <FaBookOpen />

                    Available Exams

                </span>

                <h2>

                    Welcome,

                    <span>

                        {" "}
                        {user?.fullname || "Student"}

                    </span>

                </h2>

                <p>

                    Explore our certification exams and improve
                    your technical skills with real industry-level
                    assessments.

                </p>

                <div className="exam-header-btns">

                    <button
                        className="explore-btn"
                        onClick={() => navigate("/dashboard/exams")}
                    >

                        Explore Exams

                        <FaArrowRight />

                    </button>

                 

                </div>

            </div>

            <div className="exam-header-right">

                <div className="free-card">

                    <h3>

                        {remaining} Free Exams

                    </h3>

                    <span>

                        Remaining

                    </span>

                    <div className="progress-box">

                        <div
                            className="progress-fill"
                            style={{
                                width: `${progress}%`
                            }}
                        ></div>

                    </div>

                    <small>

                        {
                            remaining > 0
                                ? `${remaining} Free Exams Left`
                                : "Upgrade to Premium"
                        }

                    </small>

                </div>


            </div>

        </section>

    );

}

export default ExamHeader;