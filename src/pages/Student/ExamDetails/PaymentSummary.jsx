import {
    FaReact,
    FaCheckCircle
} from "react-icons/fa";

import "./ExamDetails.css";

function PaymentSummary({ exam }) {
        const Icon = exam.icon;

    return (

        <div className="ep-exd-payment-card">

            <div className="ep-exd-payment-header">

                <div className="ep-exd-payment-course">

                    <div className="ep-exd-payment-icon" style={{ color: exam.color }}>

                         <Icon />

                    </div>

                    <div>

                        <h3>

                           {exam.name}

                        </h3>

                        <span>

                            {exam.tier} Exam

                        </span>

                    </div>

                </div>

                <h2>

                   ₹{exam.finalPrice}

                </h2>

            </div>

            <div className="ep-exd-payment-divider"></div>

            <h4 className="ep-exd-payment-title">

                Order Summary

            </h4>

            <div className="ep-exd-payment-row">

                <span>

                    Exam Name

                </span>

                <strong>

                    {exam.name}

                </strong>

            </div>

          <div className="ep-exd-payment-row">

                <span>

                    Original Price

                </span>

                <strong>

                    ₹{exam.price}

                </strong>

            </div>

              <div className="ep-exd-payment-row">

                <span>

                    Discount

                </span>

                <strong>

                    {exam.discount}%

                </strong>

            </div>

          <div className="ep-exd-payment-row ep-exd-payment-total">

                <span>

                    Total

                </span>

                <strong>

                    ₹{exam.finalPrice}

                </strong>

            </div>
           <div className="ep-exd-payment-features">

                {exam.lifetimeAccess && (
                    <div>
                        <FaCheckCircle />
                        Lifetime Access
                    </div>
                )}

                {exam.certificate && (
                    <div>
                        <FaCheckCircle />
                        Verified Certificate
                    </div>
                )}

                <div>
                    <FaCheckCircle />
                    {exam.attempts} Attempt{exam.attempts > 1 ? "s" : ""}
                </div>

                <div>
                    <FaCheckCircle />
                    Download Result
                </div>

            </div>

        </div>

    );

}


export default PaymentSummary;