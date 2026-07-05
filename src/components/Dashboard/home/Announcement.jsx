import {
    FaBullhorn,
    FaCalendarAlt
} from "react-icons/fa";

import "./Announcement.css";

function Announcement() {

    const notices = [

        {
            title:"JavaScript Mock Test",
            date:"15 July 2026"
        },

        {
            title:"React JS New Exam Added",
            date:"17 July 2026"
        },

        {
            title:"Python Result Published",
            date:"20 July 2026"
        }

    ];

    return (

        <div className="announcement-card">

            <div className="announcement-header">

                <h3>

                    Announcements

                </h3>

            </div>

            {

                notices.map((item,index)=>(

                    <div
                        className="notice-item"
                        key={index}
                    >

                        <div className="notice-icon">

                            <FaBullhorn />

                        </div>

                        <div className="notice-content">

                            <h4>

                                {item.title}

                            </h4>

                            <span>

                                <FaCalendarAlt />

                                {item.date}

                            </span>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default Announcement;