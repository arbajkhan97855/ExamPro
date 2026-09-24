import "./PaymentReceipt.css";

function PaymentReceipt({ payment, formatDate }) {
    return (
        <div className="payment-receipt">

            <h2>ExamPro</h2>

            <p>Payment Receipt</p>

            <hr />

            <div>
                <strong>Exam:</strong>
                <span>{payment.exam_name}</span>
            </div>

            <div>
                <strong>Amount:</strong>
                <span>₹{payment.amount}</span>
            </div>

            <div>
                <strong>Transaction ID:</strong>
                <span>{payment.razorpay_payment_id}</span>
            </div>

            <div>
                <strong>Payment Method:</strong>
                <span>{payment.payment_method}</span>
            </div>

            <div>
                <strong>Payment Date:</strong>
                <span>
                    {formatDate(
                        payment.paid_at || payment.created_at
                    )}
                </span>
            </div>

            <div>
                <strong>Status:</strong>
                <span>{payment.status}</span>
            </div>

        </div>
    );
}

export default PaymentReceipt;