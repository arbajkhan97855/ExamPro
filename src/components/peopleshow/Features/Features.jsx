import {
  FaLaptopCode,
  FaChartLine,
  FaUserGraduate,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Online Exams",
      desc: "Create and conduct online exams with secure and user-friendly interface.",
    },
    {
      icon: <FaChartLine />,
      title: "Instant Results",
      desc: "Generate exam reports and analytics instantly after submission.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Student Management",
      desc: "Manage students, teachers and exam records from one dashboard.",
    },
  ];

  return (
    <section className="features-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">
            Powerful Features
          </h2>

          <p className="section-subtitle">
            Everything you need to manage examinations efficiently.
          </p>
        </div>

        <div className="row g-4">

          {features.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="feature-card">

                <div className="feature-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;