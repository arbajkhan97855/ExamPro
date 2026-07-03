import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./varifyotp.css";
import toast from "react-hot-toast";

function VerifyOtp() {
    const navigate = useNavigate();

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

   const handleVerify = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("otp_email");

    if (!email) {
        toast.error("Email not found. Please signup again.");
        navigate("/signup");
        return;
    }

    if (!otp) {
        toast.error("Please enter OTP");
        return;
    }

    setLoading(true);

    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/auth/verify-otp`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    otp: otp
                })
            }
        );

        const data = await response.json();

        if (data.success) {
            toast.success(data.message);

            localStorage.removeItem("otp_email");
            navigate("/login");
        } else {
            toast.error(data.message);
        }

    } catch (error) {
        console.log(error);
        toast.error("OTP verification failed");
    }

    setLoading(false);
};

    return (
        <>
            <Navbar />

            <div className="otp-wrapper">

                <div className="otp-card">

                    <h3>Verify OTP</h3>

                    <p>Enter the OTP sent to your mobile</p>

                    <form onSubmit={handleVerify}>

                        <input
                            type="text"
                            className="otp-input"
                            placeholder="Enter 6 digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            maxLength={6}
                        />

                        <button
                            className="otp-btn"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Verifying..." : "Verify OTP"}
                        </button>

                    </form>



                </div>

            </div>
        </>
    );
}

export default VerifyOtp;