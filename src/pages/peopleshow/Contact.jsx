
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import toast from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  const form = new FormData();

  form.append("name", formData.name);
  form.append("email", formData.email);
  form.append("phone", formData.phone);
  form.append("subject", formData.subject);
  form.append("service", formData.service);
  form.append("message", formData.message);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbymg2X9fJJ-jWn1D77DT041KVbgD4NKhGrN0R8LAmgkn05LuGYT4YgSmvVYTtXIeqlA/exec",
      {
        method: "POST",
        body: form,
      }
    );

    console.log("Response:", response);

    const result = await response.text();

    console.log("Result:", result);

    toast.success("Inquiry Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      message: "",
    });

  } catch (error) {
    console.log("Error:", error);
    toast.error("Something Went Wrong!");
  }
};

  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="container">
          <h1>Contact Us</h1>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Inquiry Type</option>
              <option value="Course">Course Inquiry</option>
              <option value="Admission">Admission Inquiry</option>
              <option value="Technical Support">Technical Support</option>
              <option value="General">General Inquiry</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write Your Inquiry"
              required
            ></textarea>

            <button type="submit">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
