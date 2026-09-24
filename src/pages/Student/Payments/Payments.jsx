
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


import {
    FaCreditCard,
    FaCheckCircle,
    FaClock,
    FaTimesCircle,
    FaDownload,
    FaEye,
    FaReceipt
} from "react-icons/fa";

import { getApi } from "../../../services/api";
import jsPDF from "jspdf";
import "./Payments.css";
import PaymentReceipt from "./PaymentReceipt";


function Payments() {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedPayment, setSelectedPayment] = useState(null);

    useEffect(() => {

        const fetchPayments = async () => {

            try {

                setLoading(true);
                setError("");

                const data = await getApi("/api/student/payments");

                if (data.success) {

                    setPayments(data.payments || []);

                } else {

                    setError(
                        data.message || "Unable to load payments"
                    );

                }

            } catch (error) {

                console.error("Payments Error:", error);

                setError(
                    "Unable to connect with server"
                );

            } finally {

                setLoading(false);

            }

        };

        fetchPayments();

    }, []);

    const formatDate = (date) => {
        if (!date) return "N/A";

        return new Date(date).toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
    };
    const downloadReceipt = (payment) => {
        const doc = new jsPDF();

        doc.setFontSize(22);
        doc.text("ExamPro", 20, 25);

        doc.setFontSize(16);
        doc.text("Payment Receipt", 20, 38);

        doc.line(20, 45, 190, 45);

        doc.setFontSize(12);

        doc.text(`Exam: ${payment.exam_name}`, 20, 60);
        doc.text(`Amount: Rs. ${payment.amount}`, 20, 72);
        doc.text(
            `Transaction ID: ${payment.razorpay_payment_id}`,
            20,
            84
        );
        doc.text(
            `Payment Method: ${payment.payment_method}`,
            20,
            96
        );
        doc.text(
            `Payment Date: ${formatDate(
                payment.paid_at || payment.created_at
            )}`,
            20,
            108
        );
        doc.text(`Status: ${payment.status}`, 20, 120);

        doc.line(20, 130, 190, 130);

        doc.setFontSize(10);
        doc.text(
            "Thank you for using ExamPro.",
            20,
            145
        );

        doc.save(
            `ExamPro-Receipt-${payment.razorpay_payment_id}.pdf`
        );
    };
const totalPaid = payments
    .filter(payment => payment.status === "paid")
    .reduce(
        (total, payment) => total + Number(payment.amount),
        0
    );

    const [currentPage, setCurrentPage] = useState(1);

    const paymentsPerPage = 5;

    const totalPages = Math.ceil(
        payments.length / paymentsPerPage
    );

    const startIndex =
        (currentPage - 1) * paymentsPerPage;

    const currentPayments =
        payments.slice(
            startIndex,
            startIndex + paymentsPerPage
        );


    if (loading) {
        return (
            <section className="ep-payments-page">
                <div className="ep-payment-empty">
                    <FaCreditCard />
                    <h3>Loading Payments...</h3>
                    <p>Please wait while we fetch your payment history.</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="ep-payments-page">
                <div className="ep-payment-empty">
                    <FaTimesCircle />
                    <h3>Unable to Load Payments</h3>
                    <p>{error}</p>
                </div>
            </section>
        );
    }
    return (



        <section className="ep-payments-page">


            {/* =========================
                HEADER
            ========================= */}

            <div className="ep-payments-header">

                <div>

                    <span className="ep-payments-eyebrow">

                        <FaCreditCard />

                        PAYMENT CENTER

                    </span>

                    <h1>
                        Payments
                    </h1>

                    <p>
                        View your payment history,
                        transactions and exam purchases.
                    </p>

                </div>


                <div className="ep-payment-total">

                    <span>
                        Total Paid
                    </span>

                    <strong>
                        ₹{totalPaid}
                    </strong>

                </div>

            </div>


            {/* =========================
                STATS
            ========================= */}

            <div className="ep-payment-stats">


                <div className="ep-payment-stat">

                    <div className="ep-payment-stat-icon">

                        <FaReceipt />

                    </div>

                    <div>

                        <span>
                            Transactions
                        </span>

                        <strong>
                            {payments.length}
                        </strong>

                    </div>

                </div>


                <div className="ep-payment-stat">

                    <div className="ep-payment-stat-icon success">

                        <FaCheckCircle />

                    </div>

                    <div>

                        <span>
                            Successful
                        </span>

                        <strong>
                            {
                                payments.filter(
                                    p => p.status === "paid"
                                ).length
                            }
                        </strong>

                    </div>

                </div>


                <div className="ep-payment-stat">

                    <div className="ep-payment-stat-icon pending">

                        <FaClock />

                    </div>

                    <div>

                        <span>
                            Pending
                        </span>

                        <strong>
                            {
                                payments.filter(
                                    p => p.status === "Pending"
                                ).length
                            }
                        </strong>

                    </div>

                </div>


                <div className="ep-payment-stat">

                    <div className="ep-payment-stat-icon failed">

                        <FaTimesCircle />

                    </div>

                    <div>

                        <span>
                            Failed
                        </span>

                        <strong>
                            {
                                payments.filter(
                                    p => p.status === "Failed"
                                ).length
                            }
                        </strong>

                    </div>

                </div>


            </div>


            {/* =========================
                PAYMENT HISTORY
            ========================= */}

            <div className="ep-payment-history">

                <div className="ep-payment-history-header">

                    <div>

                        <h2>
                            Payment History
                        </h2>

                        <p>
                            Your recent exam transactions
                        </p>

                    </div>

                </div>


                {payments.length === 0 ? (

                    <div className="ep-payment-empty">

                        <FaCreditCard />

                        <h3>
                            No Payments Yet
                        </h3>

                        <p>
                            Your successful exam purchases
                            will appear here.
                        </p>

                    </div>

                ) : (

                    <div className="ep-payment-table-wrapper">

                        <table className="ep-payment-table">

                            <thead>

                                <tr>

                                    <th>
                                        Exam
                                    </th>

                                    <th>
                                        Transaction ID
                                    </th>

                                    <th>
                                        Date
                                    </th>

                                    <th>
                                        Method
                                    </th>

                                    <th>
                                        Amount
                                    </th>

                                    <th>
                                        Status
                                    </th>

                                    <th>
                                        Action
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {currentPayments.map(
                                    (payment, index) => (

                                        <motion.tr

                                            key={payment.id}

                                            initial={{
                                                opacity: 0,
                                                y: 10
                                            }}

                                            animate={{
                                                opacity: 1,
                                                y: 0
                                            }}

                                            transition={{
                                                delay:
                                                    index * 0.05
                                            }}

                                        >

                                            <td>

                                                <div className="ep-payment-exam">
                                                    <img
                                                        src="https://via.placeholder.com/60"
                                                        alt={payment.exam_name}
                                                    />
                                                    <div>

                                                        <strong>
                                                            {payment.exam_name}
                                                        </strong>

                                                        <span>
                                                            {payment.exam_slug}
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>


                                            <td>
                                                <span className="ep-transaction-id">
                                                    {payment.razorpay_payment_id}
                                                </span>

                                            </td>


                                            <td>

                                                {formatDate(payment.paid_at || payment.created_at)}
                                            </td>


                                            <td>

                                                <span className="ep-payment-method">
                                                    {payment.payment_method}
                                                </span>

                                            </td>


                                            <td>

                                                <strong className="ep-payment-amount">

                                                    ₹{payment.amount}

                                                </strong>

                                            </td>


                                            <td>

                                                <span
                                                    className={
                                                        `ep-payment-status ${payment.status
                                                            .toLowerCase()
                                                        }`
                                                    }
                                                >

                                                    <FaCheckCircle />

                                                    {payment.status}

                                                </span>

                                            </td>


                                            <td>

                                                <div className="ep-payment-actions">

                                                    <button
                                                        title="View Receipt"
                                                        onClick={() => setSelectedPayment(payment)}
                                                    >
                                                        <FaEye />
                                                    </button>

                                                    <button
                                                        title="Download Receipt"
                                                        onClick={() => downloadReceipt(payment)}
                                                    >
                                                        <FaDownload />
                                                    </button>

                                                </div>

                                            </td>

                                        </motion.tr>

                                    ))}

                            </tbody>

                        </table>
                        <div className="ep-payment-pagination">

                            <button
                                disabled={currentPage === 1}
                                onClick={() =>
                                    setCurrentPage(prev => prev - 1)
                                }
                            >
                                Previous
                            </button>


                            <div className="ep-payment-pages">

                                {Array.from(
                                    { length: totalPages },
                                    (_, index) => index + 1
                                ).map(page => (

                                    <button
                                        key={page}
                                        className={
                                            currentPage === page
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() =>
                                            setCurrentPage(page)
                                        }
                                    >
                                        {page}
                                    </button>

                                ))}

                            </div>


                            <button
                                disabled={currentPage === totalPages}
                                onClick={() =>
                                    setCurrentPage(prev => prev + 1)
                                }
                            >
                                Next
                            </button>

                        </div>
                    </div>

                )}

            </div>

            {selectedPayment && (
                <PaymentReceipt
                    payment={selectedPayment}
                    formatDate={formatDate}
                    onClose={() => setSelectedPayment(null)}
                />
            )}

        </section>

    );

}


export default Payments;
