import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { auth } from "../../firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import authImage from "../../assets/images/auth-image.png";

import "./Signup.css";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({

    fullname: "",

    email: "",

    mobile: "",

    password: "",

    confirmPassword: "",

    terms: false

  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({

      ...formData,

      [name]: type === "checkbox" ? checked : value

    });

  };


  const googleSignup = async () => {

    try {

        const provider = new GoogleAuthProvider();

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/auth/google-login`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    fullname: user.displayName,

                    email: user.email,

                    google_id: user.uid,

                    profile_image: user.photoURL

                })

            }
        );

        const data = await response.json();

        if (data.success) {

            toast.success(data.message);

            localStorage.setItem("token", data.token);

            localStorage.setItem("user", JSON.stringify(data.user));

            if (data.user.role === "admin") {

                navigate("/admin/dashboard");

            } else {

                navigate("/student/dashboard");

            }

        } else {

            toast.error(data.message);

        }

    } catch (error) {

        console.log(error);

        toast.error("Google Login Failed");

    }

};


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (data.success) {

        toast.success(data.message);
        localStorage.setItem("otp_mobile", formData.mobile);
        navigate("/verify-otp");

      } else {

        toast.error(data.message);


      }

    } catch (error) {

      console.log(error);

      toast.error("Something Went Wrong");

    }

  };

  return (

    <>

      <Navbar />

      <section className="signup-section">

        <div className="container">

          <div className="row align-items-center gy-5">

            {/* Left */}

            <div className="col-lg-6">

              <div className="signup-image">

                <img
                  src={authImage}
                  className="img-fluid"
                  alt=""
                />

                <h2>

                  Start Your Journey With ExamPro

                </h2>

                <p>

                  Create your account and access online exams,
                  practice tests, certificates, analytics,
                  and much more.

                </p>

              </div>

            </div>

            {/* Right */}

            <div className="col-lg-6">

              <div className="signup-card">

                <h2>Create Account</h2>

                <p>

                  Fill in your details to continue

                </p>

                <form onSubmit={handleSubmit}>

                  <div className="mb-3 input-box">

                    <FaUser className="input-icon" />

                    <input

                      type="text"

                      className="form-control"

                      placeholder="Full Name"

                      name="fullname"

                      value={formData.fullname}

                      onChange={handleChange}

                    />

                  </div>

                  <div className="mb-3 input-box">

                    <FaEnvelope className="input-icon" />

                    <input

                      type="email"

                      className="form-control"

                      placeholder="Email Address"

                      name="email"

                      value={formData.email}

                      onChange={handleChange}

                    />

                  </div>

                  <div className="mb-3 input-box">

                    <FaPhoneAlt className="input-icon" />

                    <input

                      type="tel"

                      className="form-control"

                      placeholder="Mobile Number"

                      name="mobile"

                      value={formData.mobile}

                      onChange={handleChange}

                    />

                  </div>

                  <div className="mb-3 input-box">

                    <FaLock className="input-icon" />

                    <input

                      type={showPassword ? "text" : "password"}

                      className="form-control"

                      placeholder="Password"

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

                  <div className="mb-3 input-box">

                    <FaLock className="input-icon" />

                    <input

                      type={showConfirmPassword ? "text" : "password"}

                      className="form-control"

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

                  <div className="form-check mb-4">

                    <input

                      className="form-check-input"

                      type="checkbox"

                      name="terms"

                      onChange={handleChange}

                    />

                    <label className="form-check-label">

                      I agree to the Terms &
                      Conditions

                    </label>

                  </div>

                  <button
                    className="create-btn"
                  >

                    Create Account

                  </button>

                </form>

                <div className="divider">

                  <span>OR</span>

                </div>

                <button
                  type="button"
                  className="google-login"
                  onClick={googleSignup}
                >
                  <FaGoogle />
                  Continue with Google
                </button>

                <div className="text-center mt-4">

                  Already have an account?

                  <Link to="/login">

                    Login

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>

  );

}

export default Signup;