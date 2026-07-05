import {
    FaCheckCircle,
    FaClock,
    FaTimesCircle
} from "react-icons/fa";

import "./RecentResults.css";

function RecentResults() {

    const results = [

        {
            subject: "JavaScript",
            score: "92%",
            status: "Passed",
            icon: <FaCheckCircle />,
            color: "success"
        },

        {
            subject: "Python",
            score: "84%",
            status: "Passed",
            icon: <FaCheckCircle />,
            color: "success"
        },

        {
            subject: "React JS",
            score: "--",
            status: "Pending",
            icon: <FaClock />,
            color: "warning"
        },

        {
            subject: "Node JS",
            score: "42%",
            status: "Failed",
            icon: <FaTimesCircle />,
            color: "danger"
        }

    ];

    return (

        <div className="recent-card">

            <div className="recent-header">

                <h3>

                    Recent Results

                </h3>

            </div>

            {

                results.map((item,index)=>(

                    <div
                        className="recent-item"
                        key={index}
                    >

                        <div className={`recent-icon ${item.color}`}>

                            {item.icon}

                        </div>

                        <div className="recent-info">

                            <h4>

                                {item.subject}

                            </h4>

                            <small>

                                {item.status}

                            </small>

                        </div>

                        <div className="recent-score">

                            {item.score}

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default RecentResults;