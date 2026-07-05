import {
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

import "./StatsCard.css";

function StatsCard() {
  return (
    <div className="dashboard-stats">

      <div className="stat-card">

        <div className="stat-icon blue">
          <FaBookOpen />
        </div>

        <div>
          <h4>Total Exams</h4>
          <h2>24</h2>
          <p>All Available</p>
        </div>

      </div>

      <div className="stat-card">

        <div className="stat-icon green">
          <FaCheckCircle />
        </div>

        <div>
          <h4>Attempted Exams</h4>
          <h2>8</h2>
          <p>Completed</p>
        </div>

      </div>
      

      <div className="stat-card">

        <div className="stat-icon orange">
          <FaClock />
        </div>

        <div>
          <h4>Pending Exams</h4>
          <h2>16</h2>
          <p>Remaining</p>
        </div>

      </div>

     

    </div>
  );
}


export default StatsCard;