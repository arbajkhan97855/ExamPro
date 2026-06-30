import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./VerifyForgotOtp.css";
import toast from "react-hot-toast";

function VerifyForgotOtp() {

    const navigate = useNavigate();

    const [otp, setOtp] = useState("");

    const [loading, setLoading] = useState(false);

    const [resendLoading, setResendLoading] = useState(false);

    const email = localStorage.getItem("forgot_email");

    const handleVerify = async (e) => {

        e.preventDefault();

        if (!otp) {
            return toast("Please enter OTP", {
  icon: "⚠️",
});
        }

        setLoading(true);

        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/verify-forgot-otp",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email,
                        otp
                    })
                }
            );

            const data = await response.json();

            if (data.success) {

                toast.success(data.message);

                navigate("/reset-password");

            } else {

                toast.error(data.message);

            }

        } catch (error) {

            console.log(error);

            toast.error("Something went wrong");

        }

        setLoading(false);

    };

    const handleResend = async () => {

        setResendLoading(true);

        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/forgot-password",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email
                    })
                }
            );

            const data = await response.json();

            toast.success(data.message);

        } catch (error) {

            console.log(error);

        }

        setResendLoading(false);

    };

    return (
        <>
            <Navbar />

            <div className="verify-wrapper">

                <div className="verify-card">

                    <h2>Verify OTP</h2>

                    <p>

                        Enter the OTP sent to your email.

                    </p>

                    <form onSubmit={handleVerify}>

                        <input

                            type="text"

                            maxLength={6}

                            placeholder="Enter OTP"

                            value={otp}

                            onChange={(e) => setOtp(e.target.value)}

                            className="verify-input"

                        />

                        <button

                            className="verify-btn"

                            disabled={loading}

                        >

                            {

                                loading

                                    ?

                                    "Verifying..."

                                    :

                                    "Verify OTP"

                            }

                        </button>

                    </form>

                    <div className="resend">

                        Didn't receive OTP?

                        <span onClick={handleResend}>

                            {

                                resendLoading

                                    ?

                                    " Sending..."

                                    :

                                    " Resend OTP"

                            }

                        </span>

                    </div>

                </div>

            </div>

        </>
    );

}

export default VerifyForgotOtp;