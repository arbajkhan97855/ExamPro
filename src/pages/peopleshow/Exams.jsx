import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Exams() {
  const exams = [
    {
      id: 1,
      title: "JavaScript Test",
      duration: "30 Minutes",
    },
    {
      id: 2,
      title: "React Quiz",
      duration: "45 Minutes",
    },
    {
      id: 3,
      title: "Node.js Exam",
      duration: "60 Minutes",
    },
    {
      id: 4,
      title: "Aptitude Test",
      duration: "30 Minutes",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="exam-page">

        <div className="container">

          <h1>Available Exams</h1>

          <div className="exam-grid">

            {exams.map((exam) => (
              <div className="exam-card" key={exam.id}>

                <h3>{exam.title}</h3>

                <p>{exam.duration}</p>

                <button>
                  Start Exam
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Exams;