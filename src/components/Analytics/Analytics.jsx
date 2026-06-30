import {
  FaUserGraduate,
  FaClipboardCheck,
  FaChartLine,
  FaAward,
} from "react-icons/fa";

function Analytics() {
  const analytics = [
    {
      icon: <FaUserGraduate />,
      number: "10,000+",
      title: "Students",
    },
    {
      icon: <FaClipboardCheck />,
      number: "500+",
      title: "Exams",
    },
    {
      icon: <FaChartLine />,
      number: "95%",
      title: "Pass Rate",
    },
    {
      icon: <FaAward />,
      number: "100+",
      title: "Institutes",
    },
  ];

  return (
    <section className="analytics-section py-5">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <span className="analytics-badge">
              Analytics Dashboard
            </span>

            <h2 className="analytics-title mt-3">
              Track Performance
              <span> In Real Time</span>
            </h2>

            <p className="analytics-text">
              Monitor exam results, student performance,
              attendance and analytics through a modern dashboard.
            </p>

          </div>

          <div className="col-lg-6">

            <div className="row g-4">

              {analytics.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="analytics-card">

                    <div className="analytics-icon">
                      {item.icon}
                    </div>

                    <h3>{item.number}</h3>

                    <p>{item.title}</p>

                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Analytics;