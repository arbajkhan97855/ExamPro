import { useMemo, useState } from "react";
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

import { exams } from "../../../data/mockData";

import "./Payments.css";


function Payments() {

 
    const payments = useMemo(() => {

        return exams
            .filter(exam => exam.tier === "Premium")
            .map((exam, index) => ({

                id: `EXM-PAY-${1001 + index}`,

                exam,

                amount: exam.finalPrice,

                status: "Success",

                method: "UPI",

                date: new Date().toLocaleDateString("en-GB"),

                transactionId:
                    `TXN${Date.now()}${index}`

            }));

    }, []);


    const totalPaid = payments.reduce(
        (total, payment) =>
            total + payment.amount,
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
                                    p => p.status === "Success"
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
                                                    src={
                                                        payment
                                                            .exam
                                                            .banner
                                                    }

                                                    alt={
                                                        payment
                                                            .exam
                                                            .name
                                                    }
                                                />

                                                <div>

                                                    <strong>
                                                        {
                                                            payment
                                                                .exam
                                                                .name
                                                        }
                                                    </strong>

                                                    <span>
                                                        {
                                                            payment
                                                                .exam
                                                                .category
                                                        }
                                                    </span>

                                                </div>

                                            </div>

                                        </td>


                                        <td>

                                            <span className="ep-transaction-id">

                                                {
                                                    payment
                                                        .transactionId
                                                }

                                            </span>

                                        </td>


                                        <td>

                                            {payment.date}

                                        </td>


                                        <td>

                                            <span className="ep-payment-method">

                                                {payment.method}

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
                                                    `ep-payment-status ${
                                                        payment.status
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
                                                >

                                                    <FaEye />

                                                </button>


                                                <button
                                                    title="Download Receipt"
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

        </section>

    );

}


export default Payments;
