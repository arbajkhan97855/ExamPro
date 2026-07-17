import {
    FaGooglePay,
    FaCcVisa,
    FaUniversity,
    FaWallet,
    FaLock
} from "react-icons/fa";

import { useState } from "react";

import "./ExamDetails.css";

function PaymentMethods({ exam }) {

    const [paymentMethod, setPaymentMethod] = useState("upi");

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
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />

                    <FaGooglePay />

                    <span>Google Pay / UPI</span>

                </label>

                <label className="ep-exd-pay-option">

                    <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />

                    <FaCcVisa />

                    <span>Credit / Debit Card</span>

                </label>

                <label className="ep-exd-pay-option">

                    <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />

                    <FaUniversity />

                    <span>Net Banking</span>

                </label>

                <label className="ep-exd-pay-option">

                    <input
                        type="radio"
                        name="payment"
                        value="wallet"
                        checked={paymentMethod === "wallet"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />

                    <FaWallet />

                    <span>Wallet</span>

                </label>

            </div>

            <button
                className="ep-exd-pay-btn"
                onClick={() => {
                    console.log("Selected Payment:", paymentMethod);
                    console.log("Exam:", exam);
                }}
            >

                Pay ₹{exam.finalPrice} Securely

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