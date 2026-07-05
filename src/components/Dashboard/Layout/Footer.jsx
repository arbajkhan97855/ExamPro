import {
    FaHeart,
    FaGithub,
    FaLinkedin,
    FaGlobe
} from "react-icons/fa";

import "./Footer.css";

function Footer() {

    return (

        <footer className="dashboard-footer">

            <div className="footer-left">

                © 2026 <span>ExamPro</span> | All Rights Reserved

            </div>

            <div className="footer-center">

                Made with

                <FaHeart className="heart"/>

                by ExamPro Team

            </div>

            <div className="footer-right">

                <a href="#">
                    <FaGlobe />
                </a>

                <a href="#">
                    <FaGithub />
                </a>

                <a href="#">
                    <FaLinkedin />
                </a>

            </div>

        </footer>

    );

}

export default Footer;