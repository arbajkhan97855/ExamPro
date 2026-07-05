import Footer from "../../components/peopleshow/Footer/Footer";
import Navbar from "../../components/peopleshow/Navbar/Navbar";



function About() {
  return (
    <>
      <Navbar />

      <section className="about-page">
        <div className="container">

          <h1>About Us</h1>

          <p>
            Welcome to our Online Examination System.
            This platform helps students and teachers
            conduct exams efficiently and securely.
          </p>

          <p>
            We provide real-time results, performance
            analytics, secure authentication, and a
            user-friendly experience.
          </p>

        </div>
      </section>

       <Footer />
    </>
  );
}

export default About;