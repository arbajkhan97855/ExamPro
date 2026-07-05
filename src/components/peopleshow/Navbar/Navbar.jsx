import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        <Link className="navbar-brand logo" to="/">
          ExamPro
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/exams">
                Exams
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>

          <div className="d-flex gap-2">

            <Link
              to="/login"
              className="btn btn-outline-primary login-btn"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="btn signup-btn"
            >
              Sign Up
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;