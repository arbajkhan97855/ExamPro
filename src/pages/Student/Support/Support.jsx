
import { useState } from "react";
import {
    FaLifeRing,
    FaSearch,
    FaQuestionCircle,
    FaEnvelope,
    FaPhoneAlt,
    FaTicketAlt,
    FaPaperPlane,
    FaChevronDown
} from "react-icons/fa";

import "./Support.css";

function Support() {

    const [openFaq, setOpenFaq] = useState(null);

    const [formData, setFormData] = useState({
        category: "Exam Issue",
        priority: "Medium",
        subject: "",
        message: ""
    });

    const faqs = [
        {
            question: "How can I start an exam?",
            answer:
                "Go to Available Exams, open the exam details and click Start Exam. Purchased exams will also appear inside My Exams."
        },
        {
            question: "How can I purchase a premium exam?",
            answer:
                "Open the premium exam from Available Exams and continue to the secure payment section. After successful payment, the exam will be added to My Exams."
        },
        {
            question: "Where can I see my exam result?",
            answer:
                "After completing an examination, your result can be viewed from the Result page and later from Result History."
        },
        {
            question: "What should I do if my payment was successful but the exam is locked?",
            answer:
                "Please wait a few moments and refresh your My Exams page. If the issue continues, create a support ticket with your payment details."
        },
        {
            question: "Can I retake an exam?",
            answer:
                "Retake availability depends on the attempt limit configured for that particular exam."
        },
        {
            question: "How can I update my profile?",
            answer:
                "Open your Profile section and use the Edit Profile option to update your personal information."
        }
    ];

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Support Ticket:", formData);

        alert("Support request submitted successfully!");

        setFormData({
            category: "Exam Issue",
            priority: "Medium",
            subject: "",
            message: ""
        });

    };

    const toggleFaq = (index) => {

        setOpenFaq(
            openFaq === index ? null : index
        );

    };

    return (

        <section className="ep-support-page">

            {/* =========================
                HERO
            ========================= */}

            <div className="ep-support-hero">

                <div className="ep-support-hero-content">

                    <span className="ep-support-eyebrow">

                        <FaLifeRing />

                        HELP CENTER

                    </span>

                    <h1>
                        How can we help you?
                    </h1>

                    <p>
                        Find answers, report an issue or contact
                        our support team whenever you need help.
                    </p>

                    <div className="ep-support-search">

                        <FaSearch />

                        <input
                            type="text"
                            placeholder="Search your question..."
                        />

                    </div>

                </div>

                <div className="ep-support-hero-icon">

                    <FaLifeRing />

                </div>

            </div>


            {/* =========================
                QUICK CONTACT
            ========================= */}

            <div className="ep-support-contact-grid">

                <div className="ep-support-contact-card">

                    <div className="ep-support-contact-icon">

                        <FaEnvelope />

                    </div>

                    <div>

                        <span>Email Support</span>

                        <strong>
                            support@exampro.com
                        </strong>

                        <small>
                            Usually replies within 24 hours
                        </small>

                    </div>

                </div>


                <div className="ep-support-contact-card">

                    <div className="ep-support-contact-icon">

                        <FaPhoneAlt />

                    </div>

                    <div>

                        <span>Phone Support</span>

                        <strong>
                            +91 98765 43210
                        </strong>

                        <small>
                            Mon - Sat • 10 AM - 6 PM
                        </small>

                    </div>

                </div>


                <div className="ep-support-contact-card">

                    <div className="ep-support-contact-icon">

                        <FaTicketAlt />

                    </div>

                    <div>

                        <span>Support Tickets</span>

                        <strong>
                            Create a Ticket
                        </strong>

                        <small>
                            Track your support requests
                        </small>

                    </div>

                </div>

            </div>


            {/* =========================
                MAIN CONTENT
            ========================= */}

            <div className="ep-support-main-grid">


                {/* =========================
                    FAQ
                ========================= */}

                <div className="ep-support-faq-section">

                    <div className="ep-support-section-heading">

                        <div>

                            <span>
                                KNOWLEDGE BASE
                            </span>

                            <h2>
                                Frequently Asked Questions
                            </h2>

                        </div>

                        <FaQuestionCircle />

                    </div>


                    <div className="ep-support-faq-list">

                        {faqs.map((faq, index) => (

                            <div
                                className={`ep-support-faq-item ${
                                    openFaq === index
                                        ? "ep-support-faq-open"
                                        : ""
                                }`}
                                key={index}
                            >

                                <button
                                    className="ep-support-faq-question"
                                    onClick={() =>
                                        toggleFaq(index)
                                    }
                                >

                                    <span>

                                        <FaQuestionCircle />

                                        {faq.question}

                                    </span>

                                    <FaChevronDown />

                                </button>


                                {openFaq === index && (

                                    <div className="ep-support-faq-answer">

                                        <p>
                                            {faq.answer}
                                        </p>

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>

                </div>


                {/* =========================
                    SUPPORT FORM
                ========================= */}

                <div className="ep-support-ticket-card">

                    <div className="ep-support-ticket-heading">

                        <div className="ep-support-ticket-icon">

                            <FaTicketAlt />

                        </div>

                        <div>

                            <span>
                                NEED MORE HELP?
                            </span>

                            <h2>
                                Create Support Ticket
                            </h2>

                        </div>

                    </div>


                    <form
                        className="ep-support-ticket-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="ep-support-form-group">

                            <label>
                                Issue Category
                            </label>

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >

                                <option>
                                    Exam Issue
                                </option>

                                <option>
                                    Payment Issue
                                </option>

                                <option>
                                    Account Issue
                                </option>

                                <option>
                                    Technical Issue
                                </option>

                                <option>
                                    Result Issue
                                </option>

                                <option>
                                    Other
                                </option>

                            </select>

                        </div>


                        <div className="ep-support-form-row">

                            <div className="ep-support-form-group">

                                <label>
                                    Priority
                                </label>

                                <select
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleChange}
                                >

                                    <option>
                                        Low
                                    </option>

                                    <option>
                                        Medium
                                    </option>

                                    <option>
                                        High
                                    </option>

                                </select>

                            </div>


                            <div className="ep-support-form-group">

                                <label>
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter issue subject"
                                    required
                                />

                            </div>

                        </div>


                        <div className="ep-support-form-group">

                            <label>
                                Describe your issue
                            </label>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Explain your problem in detail..."
                                rows="6"
                                required
                            />

                        </div>


                        <button
                            type="submit"
                            className="ep-support-submit-btn"
                        >

                            <FaPaperPlane />

                            Submit Support Request

                        </button>


                        <p className="ep-support-form-note">

                            Our support team will review your request
                            and get back to you as soon as possible.

                        </p>

                    </form>

                </div>

            </div>

        </section>

    );

}

export default Support;

