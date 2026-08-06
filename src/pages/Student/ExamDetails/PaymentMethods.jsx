
import {
    FaGooglePay,
    FaCcVisa,
    FaUniversity,
    FaWallet,
    FaLock
} from "react-icons/fa";

import { useState } from "react";
import { useNavigate } from "react-router-dom"

import "./ExamDetails.css";

function PaymentMethods({ exam }) {

    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState("upi");

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


           console.log("Status:", orderResponse.status);
console.log(
  "Content-Type:",
  orderResponse.headers.get("content-type")
);

const responseText = await orderResponse.text();

console.log(responseText);

return;


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

                    examName: exam.name,

                    paymentMethod: paymentMethod

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

        <div className="ep-exd-pay-method-card">

            <h3 className="ep-exd-pay-title">

                Payment Method

            </h3>


            <div className="ep-exd-pay-list">

                <label className="ep-exd-pay-option">

                    <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={paymentMethod === "upi"}
                        onChange={(e) =>
                            setPaymentMethod(e.target.value)
                        }
                    />

                    <FaGooglePay />

                    <span>
                        Google Pay / UPI
                    </span>

                </label>


                <label className="ep-exd-pay-option">

                    <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) =>
                            setPaymentMethod(e.target.value)
                        }
                    />

                    <FaCcVisa />

                    <span>
                        Credit / Debit Card
                    </span>

                </label>


                <label className="ep-exd-pay-option">

                    <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={(e) =>
                            setPaymentMethod(e.target.value)
                        }
                    />

                    <FaUniversity />

                    <span>
                        Net Banking
                    </span>

                </label>


                <label className="ep-exd-pay-option">

                    <input
                        type="radio"
                        name="payment"
                        value="wallet"
                        checked={paymentMethod === "wallet"}
                        onChange={(e) =>
                            setPaymentMethod(e.target.value)
                        }
                    />

                    <FaWallet />

                    <span>
                        Wallet
                    </span>

                </label>

            </div>


            <button
                className="ep-exd-pay-btn"
                onClick={handlePayment}
                disabled={loading}
            >

                {loading
                    ? "Processing Payment..."
                    : `Pay ₹${exam.finalPrice} Securely`
                }

            </button>


            <div className="ep-exd-pay-footer">

                <FaLock />

                <span>

                    100% Secure Payment • SSL Encrypted

                </span>

            </div>

        </div>

    );

}

export default PaymentMethods;

