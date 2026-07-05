import AvailableExams from "./AvailableExams";
import Performance from "./Performance";
import RecentResults from "./RecentResults";
import Announcement from "./Announcement";

import "./DashboardBody.css";
import StatsCard from "./StatsCard";

function DashboardBody() {

    return (

        <div className="dashboard-body">

            <div className="dashboard-left">
               <StatsCard />
                <AvailableExams />

            </div>

            <div className="dashboard-right">

                <Performance />

                <RecentResults />

                <Announcement />

            </div>

        </div>

    );

}

export default DashboardBody;