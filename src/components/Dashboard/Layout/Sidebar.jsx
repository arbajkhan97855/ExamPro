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

function Sidebar() {

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href="/login";
    };

    return (

        <aside className="sidebar">

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

                    <NavLink to="/student/dashboard">

                        <FaHome />

                        <span>Dashboard</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/exams">

                        <FaBookOpen />

                        <span>Available Exams</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/my-exams">

                        <FaClipboardList />

                        <span>My Exams</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/result-history">

                         <FaHistory />

                        <span>Result History</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/payments">

                        <FaCreditCard />

                        <span>Payments</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/notifications">

                        <FaBell />

                        <span>Notifications</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/profile">

                        <FaUserGraduate />

                        <span>Profile</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/settings">

                        <FaCog />

                        <span>Settings</span>

                    </NavLink>

                </li>

                <li>

                    <NavLink to="/student/support">

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