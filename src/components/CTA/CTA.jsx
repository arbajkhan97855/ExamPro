import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">

        <div className="cta-box">

          <h2>
            Ready To Start Your Online Exam Journey?
          </h2>

          <p>
            Join thousands of students and teachers using
            our smart online examination platform.
          </p>

          <div className="cta-buttons">

            <Link
              to="/signup"
              className="btn cta-btn-primary"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="btn cta-btn-secondary"
            >
              Login
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;