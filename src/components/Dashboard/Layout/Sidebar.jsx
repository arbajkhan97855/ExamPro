import {
    FaHome,
    FaBookOpen,
    FaClipboardList,
    FaChartLine,
    FaCreditCard,
    FaBell,
    FaUserGraduate,
    FaCog,
    FaLifeRing,
    FaSignOutAlt,
    FaHistory
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import "./Sidebar.css";
// import Logo from "../../../../public/examPro.svg";

function Sidebar({

    sidebarOpen,

    setSidebarOpen

}) {

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href="/login";
    };

    return (

        <aside className={`sidebar ${sidebarOpen ? "show" : ""}`}>

            {/* Logo */}

            <div className="sidebar-logo">

                <div className="logo-circle">

                     <img
            src="/examPro.svg"
            alt="ExamPro Logo"
            className="logo-img"
        />

                </div>

                <div>

                    <h2>ExamPro</h2>

                    <span>Online Examination System</span>

                </div>

            </div>

            {/* User */}
{/* 
            <div className="sidebar-user">

                <img
                    src={`https://ui-avatars.com/api/?name=${user?.fullname || "Student"}&background=4F46E5&color=fff`}
                    alt=""
                />

                <h4>{user?.fullname}</h4>

                <p>{user?.email}</p>

            </div> */}

            {/* Menu */}

            <ul className="sidebar-menu">

                <li>

                    <NavLink to="/student/dashboard"  onClick={()=>setSidebarOpen(false)}>

                        <FaHome />

                        <span>Dashboard</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/exams"  onClick={()=>setSidebarOpen(false)}>

                        <FaBookOpen />

                        <span>Available Exams</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/my-exams" onClick={()=>setSidebarOpen(false)}>

                        <FaClipboardList />

                        <span>My Exams</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/result-history" onClick={()=>setSidebarOpen(false)}>

                         <FaHistory />

                        <span>Result History</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/payments" onClick={()=>setSidebarOpen(false)}>

                        <FaCreditCard />

                        <span>Payments</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/notifications" onClick={()=>setSidebarOpen(false)}>

                        <FaBell />

                        <span>Notifications</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/profile" onClick={()=>setSidebarOpen(false)}>

                        <FaUserGraduate />

                        <span>Profile</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/settings" onClick={()=>setSidebarOpen(false)}>

                        <FaCog />

                        <span>Settings</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/support" onClick={()=>setSidebarOpen(false)}>

                        <FaLifeRing />

                        <span>Support</span>

                    </NavLink>

                </li>

            </ul>

 {/* Logout */}

            <button
                className="logout-btn"
                onClick={logout}
            >

                <FaSignOutAlt />

                Logout

            </button>

            {/* Premium Card */}

            <div className="premium-card">

                <h3>Premium Plan</h3>

                <p>

                    Unlock Paid Exams & Certificates

                </p>

                <button>

                    Upgrade

                </button>

            </div>

           
        </aside>

    );

}

export default Sidebar;