import { FaEye, FaDownload, FaCertificate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ResultHistory.css";
import { exams } from "../../../data/mockData";

function ResultHistory() {

    const navigate = useNavigate();

    const history = JSON.parse(
        localStorage.getItem("examHistory")
    ) || [];

    return (

        <section className="ep-history-page">

            <div className="ep-history-header">

                <h1>

                    Result History

                </h1>

                <p>

                    View all your completed examinations.

                </p>

            </div>

            {

                history.length === 0 ?

                    (

                        <div className="ep-history-empty">

                            <h2>

                                No Exams Attempted Yet

                            </h2>

                        </div>

                    )

                    :

                    (

                        <table className="ep-history-table">

                            <thead>

                                <tr>

                                    <th>Exam</th>

                                    <th>Date</th>

                                    <th>Score</th>

                                    <th>Percentage</th>

                                    <th>Status</th>

                                    <th>Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    history.map((item, index) => (

                                        <tr key={index}>

                                            <td>

                                                {item.exam.name}

                                            </td>

                                            <td>

                                                {item.date}

                                            </td>

                                            <td>

                                                {item.obtainedMarks}

                                                /

                                                {item.totalMarks}

                                            </td>

                                            <td>

                                                {item.percentage}%

                                            </td>

                                            <td>

                                                <span

                                                    className={

                                                        item.pass

                                                            ?

                                                            "pass"

                                                            :

                                                            "fail"

                                                    }

                                                >

                                                    {

                                                        item.pass

                                                            ?

                                                            "PASS"

                                                            :

                                                            "FAIL"

                                                    }

                                                </span>

                                            </td>

                                            <td className="ep-actions">

                                                <button
                                                    onClick={() =>
                                                        navigate(
                                                            `/student/result-review/${item.exam.slug}`,
                                                            {
                                                                state: item
                                                            }
                                                        )
                                                    }
                                                >
                                                    <FaEye />
                                                </button>

                                                <button>

                                                    <FaDownload />

                                                </button>

                                                {

                                                    item.pass &&

                                                    <button>

                                                        <FaCertificate />

                                                    </button>

                                                }

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    )

            }

        </section>

    );

}

export default ResultHistory;