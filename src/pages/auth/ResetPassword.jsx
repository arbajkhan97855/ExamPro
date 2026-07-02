import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {
    FaLock,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";

import "./ResetPassword.css";
import toast from "react-hot-toast";

function ResetPassword() {

    const navigate = useNavigate();

    const email = localStorage.getItem("forgot_email");

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({

        password: "",

        confirmPassword: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!formData.password || !formData.confirmPassword) {

            toast("All fields are required", {
                icon: "⚠️",
            });

            return;

        }

        if (formData.password !== formData.confirmPassword) {

            toast.error("Passwords do not match");

            return;

        }

        setLoading(true);

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/auth/reset-password`
                ,

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify({

                        email,

                        password: formData.password,

                        confirmPassword: formData.confirmPassword

                    })

                }

            );

            const data = await response.json();

            if (data.success) {

                toast.success(data.message);

                localStorage.removeItem("forgot_email");

                navigate("/login");

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

            <div className="reset-wrapper">

                <div className="reset-card">

                    <h2>Reset Password</h2>

                    <p>Create your new password</p>

                    <form onSubmit={handleSubmit}>

                        <div className="password-box">

                            <FaLock className="icon" />

                            <input

                                type={showPassword ? "text" : "password"}

                                placeholder="New Password"

                                name="password"

                                value={formData.password}

                                onChange={handleChange}

                            />

                            {

                                showPassword ?

                                    <FaEyeSlash

                                        className="eye"

                                        onClick={() => setShowPassword(false)}

                                    />

                                    :

                                    <FaEye

                                        className="eye"

                                        onClick={() => setShowPassword(true)}

                                    />

                            }

                        </div>

                        <div className="password-box">

                            <FaLock className="icon" />

                            <input

                                type={showConfirmPassword ? "text" : "password"}

                                placeholder="Confirm Password"

                                name="confirmPassword"

                                value={formData.confirmPassword}

                                onChange={handleChange}

                            />

                            {

                                showConfirmPassword ?

                                    <FaEyeSlash

                                        className="eye"

                                        onClick={() => setShowConfirmPassword(false)}

                                    />

                                    :

                                    <FaEye

                                        className="eye"

                                        onClick={() => setShowConfirmPassword(true)}

                                    />

                            }

                        </div>

                        <button

                            className="reset-btn"

                            disabled={loading}

                        >

                            {

                                loading ?

                                    "Updating..."

                                    :

                                    "Reset Password"

                            }

                        </button>

                    </form>

                </div>

            </div>

        </>

    );

}

export default ResetPassword;