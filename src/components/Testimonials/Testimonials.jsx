import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Student",
      review:
        "The platform is very easy to use. Online exams and instant results saved a lot of time.",
    },
    {
      name: "Priya Verma",
      role: "Teacher",
      review:
        "Managing exams and students has become much easier with this system.",
    },
    {
      name: "Aman Khan",
      role: "Institute Admin",
      review:
        "Professional dashboard, excellent performance and detailed analytics.",
    },
  ];

  return (
    <section className="testimonials-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">
            What Our Users Say
          </h2>

          <p className="section-subtitle">
            Trusted by students, teachers and institutes.
          </p>
        </div>

        <div className="row g-4">

          {reviews.map((item, index) => (
            <div className="col-lg-4" key={index}>

              <div className="testimonial-card">

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="review-text">
                  "{item.review}"
                </p>

                <h5>{item.name}</h5>

                <span>{item.role}</span>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;