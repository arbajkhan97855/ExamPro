import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row gy-4">

          {/* Company */}

          <div className="col-lg-4">

            <h3 className="footer-logo">
              ExamPro
            </h3>

            <p className="footer-text">
              A modern online examination platform
              designed for students, teachers and
              educational institutions.
            </p>

          </div>

          {/* Links */}

          <div className="col-lg-2">

            <h5>Quick Links</h5>

            <ul className="footer-links">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/signup">Signup</Link>
              </li>

            </ul>

          </div>

          {/* Features */}

          <div className="col-lg-3">

            <h5>Features</h5>

            <ul className="footer-links">

              <li>Online Exams</li>
              <li>Analytics</li>
              <li>Instant Results</li>
              <li>Student Management</li>

            </ul>

          </div>

          {/* Social */}

          <div className="col-lg-3">

            <h5>Follow Us</h5>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

            </div>

          </div>

        </div>

        <hr />

        <div className="copyright">

          © 2026 ExamPro.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;