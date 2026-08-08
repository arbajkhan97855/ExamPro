import { useContext, useState } from "react";
import {
    FaBars,
    FaBell,
    FaMoon,
    FaSun,
    FaSearch,
    FaChevronDown,
    FaSignOutAlt,
    FaUser
} from "react-icons/fa";

import { ThemeContext } from "../../../context/ThemeContext";

import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar({ setSidebarOpen }) {
    const navigate = useNavigate()

    const { theme, toggleTheme } = useContext(ThemeContext);

    const [openProfile, setOpenProfile] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "/login";

    };

    return (

        <header className="navbar">

           

            {/* Right */}

            <div className="navbar-right">

                <button
                    className="theme-btn"
                    onClick={toggleTheme}
                >

                    {

                        theme === "dark"

                            ?

                            <FaSun />

                            :

                            <FaMoon />

                    }

                </button>

                <div className="notification" onClick={()=>{navigate("/student/notifications")}}>

                    <FaBell />

                    <span>3</span>

                </div>

                <div
                    className="profile-box"
                    onClick={() => setOpenProfile(!openProfile)}
                >

                    <img
                        src={`https://ui-avatars.com/api/?name=${user?.fullname || "Student"}&background=4f46e5&color=fff`}
                        alt=""
                    />

                    <div className="profile-text">

                        <h4>{user?.fullname}</h4>

                        <small>{user?.role}</small>

                    </div>

                    <FaChevronDown />

                    {

                        openProfile &&

                        <div className="profile-dropdown">

                            <button onClick={()=>{navigate("/student/profile")}}>

                                <FaUser />

                                Profile

                            </button>

                            <button onClick={logout}>

                                <FaSignOutAlt />

                                Logout

                            </button>

                        </div>

                    }

                </div>

            </div>

        </header>

    );

}

export default Navbar;