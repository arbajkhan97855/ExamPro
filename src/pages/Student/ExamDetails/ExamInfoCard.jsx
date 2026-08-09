import {
    FaReact,
    FaClock,
    FaQuestionCircle,
    FaTrophy,
    FaRedo,
    FaGlobe,
    FaLayerGroup,
    FaHeart,
    FaSignal,
    FaStar,
    FaCertificate
} from "react-icons/fa";

import { motion } from "framer-motion";

import "./ExamDetails.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function ExamInfoCard({ exam }) {

    const Icon = exam.icon;


    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();


    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {

        if (loading) return;

        try {

            setLoading(true);

            const token = localStorage.getItem("token");

            if (!token) {

                alert("Please login first");
                navigate("/login");


                return;

            }



            const orderResponse = await fetch(
                `${API_URL}/api/payment/create-order`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },

                    body: JSON.stringify({

                        examSlug: exam.slug,

                        examName: exam.name,

                        amount: exam.finalPrice

                    })

                }
            );



            const orderData = await orderResponse.json();

            if (!orderResponse.ok || !orderData.success) {
                throw new Error(
                    orderData.message ||
                    "Unable to create payment order"
                );
            }


            // =====================================
            // RAZORPAY OPTIONS
            // =====================================

            const options = {

                key: import.meta.env.VITE_RAZORPAY_KEY_ID,

                amount: orderData.order.amount,

                currency: orderData.order.currency,

                name: "ExamPro",

                description: exam.name,

                order_id: orderData.order.id,


                handler: async function (response) {

                    try {

                        // =====================================
                        // VERIFY PAYMENT
                        // =====================================

                        const verifyResponse = await fetch(
                            `${API_URL}/api/payment/verify`,
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": `Bearer ${token}`
                                },

                                body: JSON.stringify({

                                    examSlug: exam.slug,

                                    examName: exam.name,

                                    amount: exam.finalPrice,

                                    razorpay_order_id:
                                        response.razorpay_order_id,

                                    razorpay_payment_id:
                                        response.razorpay_payment_id,

                                    razorpay_signature:
                                        response.razorpay_signature

                                })

                            }
                        );


                        const verifyData =
                            await verifyResponse.json();


                        if (!verifyResponse.ok || !verifyData.success) {

                            throw new Error(
                                verifyData.message ||
                                "Payment verification failed"
                            );

                        }


                        alert(
                            "Payment successful! Your exam has been purchased."
                        );


                        navigate("/student/my-exams");


                    } catch (error) {

                        console.error(
                            "Payment Verification Error:",
                            error
                        );

                        alert(
                            error.message ||
                            "Payment verification failed"
                        );

                    } finally {

                        setLoading(false);

                    }

                },


                prefill: {

                    name:
                        JSON.parse(
                            localStorage.getItem("user")
                        )?.fullname || "",

                    email:
                        JSON.parse(
                            localStorage.getItem("user")
                        )?.email || ""

                },


                notes: {

                    examSlug: exam.slug,

                    examName: exam.name

                },


                theme: {

                    color: "#4F46E5"

                },


                modal: {

                    ondismiss: function () {

                        setLoading(false);

                    }

                }

            };


            // =====================================
            // OPEN RAZORPAY
            // =====================================

            const razorpay =
                new window.Razorpay(options);


            razorpay.on(
                "payment.failed",
                function (response) {

                    console.error(
                        "Payment Failed:",
                        response.error
                    );

                    alert(
                        response.error?.description ||
                        "Payment failed"
                    );

                    setLoading(false);

                }
            );


            razorpay.open();


        } catch (error) {

            console.error(
                "Payment Error:",
                error
            );

            alert(
                error.message ||
                "Something went wrong while starting payment"
            );

            setLoading(false);

        }

    };





    return (

        <motion.div

            className="ep-exd-info-card"

            initial={{
                opacity: 0,
                y: 20
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: .45
            }}

        >

            {/* Back */}

            <button className="ep-exd-back-btn" onClick={() => navigate(-1)}>

                ← Back To Exams

            </button>

            {/* Header */}

            <div className="ep-exd-course-header">

                <div
                    className="ep-exd-course-icon"
                    // style={{
                    //     background: exam.color
                    // }}
                    style={{ color: exam.color }}
                >

                    <Icon />

                </div>

                <div>

                    <h2>

                        {exam.name}

                    </h2>

                    <span
                        className={
                            exam.tier === "Free"
                                ? "ep-exd-free"
                                : "ep-exd-premium"
                        }
                    >

                        {exam.tier} Exam

                    </span>

                </div>

            </div>

            {/* Information */}

            <div className="ep-exd-info-list">

                <div className="ep-exd-info-item">

                    <FaClock />

                    <span>Duration</span>

                    <strong> {exam.duration} Minutes</strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaQuestionCircle />

                    <span>Questions</span>

                    <strong>  {exam.questions}</strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaTrophy />

                    <span>Total Marks</span>

                    <strong>{exam.totalMarks}</strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaRedo />

                    <span>Attempts</span>

                    <strong>{exam.attempts}</strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaGlobe />

                    <span>Language</span>

                    <strong>{exam.language}</strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaLayerGroup />

                    <span>Category</span>

                    <strong>{exam.category}</strong>

                </div>


                <div className="ep-exd-info-item">

                    <FaSignal />

                    <span>

                        Difficulty

                    </span>

                    <strong>

                        {exam.difficulty}

                    </strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaStar />

                    <span>

                        Rating

                    </span>

                    <strong>

                        {exam.rating}

                    </strong>

                </div>

                <div className="ep-exd-info-item">

                    <FaCertificate />

                    <span>

                        Certificate

                    </span>

                    <strong>

                        {

                            exam.certificate

                                ?

                                "Included"

                                :

                                "No"

                        }

                    </strong>

                </div>
            </div>

            {/* Button */}

            {

                exam.tier === "Free"

                    ?

                    <button className="ep-exd-start-btn" onClick={() =>
                        navigate(`/student/live-exam/${exam.slug}`)
                    }>Start Exam</button>
                    :
                    <button
                        className="ep-exd-buy-btn"
                        onClick={handlePayment}
                        disabled={loading}
                    >
                        {loading
                            ? "Processing Payment..."
                            : `Buy Now ₹${exam.finalPrice}`
                        }
                    </button>

            }

            <button className="ep-exd-wishlist-btn">

                <FaHeart />

                Add To Wishlist

            </button>

        </motion.div>

    );

}

export default ExamInfoCard;