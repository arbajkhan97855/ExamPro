import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FaEnvelope } from "react-icons/fa";
import "./ForgotPassword.css";
import toast from "react-hot-toast";

function ForgotPassword() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!email) {

            toast("Please fill all fields", {
                icon: "⚠️",
            });
            return;

        }

        setLoading(true);

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

            if (data.success) {

                toast.success(data.message);

                localStorage.setItem("forgot_email", email);

                navigate("/verify-forgot-otp");

            } else {

                toast.error(data.message);

            }

        } catch (error) {

            console.log(error);

            toast.error("Something went wrong");

        }

        setLoading(false);

    };

    return (

        <>

            <Navbar />

            <div className="forgot-wrapper">

                <div className="forgot-card">

                    <h2>

                        Forgot Password

                    </h2>

                    <p>

                        Enter your registered email address.

                    </p>

                    <form onSubmit={handleSubmit}>

                        <div className="input-box">

                            <FaEnvelope className="icon" />

                            <input

                                type="email"

                                placeholder="Enter Email"

                                value={email}

                                onChange={(e) => setEmail(e.target.value)}

                            />

                        </div>

                        <button

                            className="forgot-btn"

                            disabled={loading}

                        >

                            {

                                loading

                                    ?

                                    "Sending..."

                                    :

                                    "Send OTP"

                            }

                        </button>

                    </form>

                </div>

            </div>

        </>

    );

}

export default ForgotPassword;