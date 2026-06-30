function Hero() {
  return (
    <section className="hero-section">

      <div className="container">

        <div className="hero-grid">

          <div className="hero-content">

            <span className="hero-tag">
              🚀 AI Powered Examination Platform
            </span>

            <h1>
              Conduct Online Exams
              With Instant Analytics
              And Smart Scorecards
            </h1>

            <p>
              Create exams, monitor students,
              generate scorecards and analyze
              performance from one dashboard.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                Start Free
              </button>

              <button className="secondary-btn">
                Watch Demo
              </button>

            </div>

            <div className="hero-stats">

              <div>
                <h3>5000+</h3>
                <p>Students</p>
              </div>

              <div>
                <h3>300+</h3>
                <p>Exams</p>
              </div>

              <div>
                <h3>98%</h3>
                <p>Success</p>
              </div>

            </div>

          </div>

          <div className="hero-dashboard">

            <div className="dashboard-card">

              <h4>Exam Analytics</h4>

              <div className="chart-area"></div>

              <div className="dashboard-stats">

                <div>
                  <h5>5200</h5>
                  <span>Students</span>
                </div>

                <div>
                  <h5>320</h5>
                  <span>Exams</span>
                </div>

                <div>
                  <h5>4850</h5>
                  <span>Passed</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;