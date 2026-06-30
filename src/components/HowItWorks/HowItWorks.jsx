import {
  FaFileAlt,
  FaLaptop,
  FaTrophy,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaFileAlt />,
      title: "Create Exam",
      desc: "Admin or teacher creates exams and uploads questions."
    },
    {
      icon: <FaLaptop />,
      title: "Attend Exam",
      desc: "Students log in and attempt exams online securely."
    },
    {
      icon: <FaTrophy />,
      title: "Get Results",
      desc: "Instant evaluation and performance reports."
    }
  ];

  return (
    <section className="how-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">
            How It Works
          </h2>

          <p className="section-subtitle">
            Complete your examination journey in three simple steps.
          </p>
        </div>

        <div className="row g-4">

          {steps.map((item, index) => (
            <div className="col-lg-4" key={index}>

              <div className="how-card">

                <div className="step-number">
                  {index + 1}
                </div>

                <div className="how-icon">
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

export default HowItWorks;