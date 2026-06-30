import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { auth } from "../../firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import authImage from "../../assets/images/auth-image.png";

import "./Login.css";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({

    email: "",

    password: "",

    remember: false

  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({

      ...formData,

      [name]: type === "checkbox" ? checked : value

    });

  };


  const googleLogin = async () => {

    try {

      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const response = await fetch(
        "http://localhost:5000/api/auth/google-login",
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
        "http://localhost:5000/api/auth/login",
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
         toast.success("Login successfull")
        // Token Save
        localStorage.setItem("token", data.token);

        // User Save
        localStorage.setItem("user", JSON.stringify(data.user));

        // Role Wise Redirect
        if (data.user.role === "admin") {

          navigate("/admin/dashboard");

        } else {

          navigate("/student/dashboard");

        }
      }
      else {

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

      <section className="login-section">

        <div className="container">

          <div className="row align-items-center gy-5">

            {/* Left */}

            <div className="col-lg-6">

              <div className="login-image">

                <img
                  src={authImage}
                  className="img-fluid"
                  alt=""
                />

                <h2>

                  Welcome Back 👋

                </h2>

                <p>

                  Login to continue your online examination,
                  view results, certificates and dashboard.

                </p>

              </div>

            </div>

            {/* Right */}

            <div className="col-lg-6">

              <div className="login-card">

                <h2>Login</h2>

                <p>

                  Enter your credentials

                </p>

                <form onSubmit={handleSubmit}>

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

                  <div className="login-options">

                    <div className="form-check">

                      <input

                        type="checkbox"

                        className="form-check-input"

                        name="remember"

                        onChange={handleChange}

                      />

                      <label>

                        Remember Me

                      </label>

                    </div>

                    <Link to="/forgot-password">

                      Forgot Password?

                    </Link>

                  </div>

                  <button
                    className="login-btn-custom"
                  >

                    Login

                  </button>

                </form>

                <div className="divider">

                  <span>OR</span>

                </div>

                <button
                  type="button"
                  className="google-login"
                  onClick={googleLogin}
                >
                  <FaGoogle />
                  Continue with Google
                </button>

                <div className="text-center mt-4">

                  Don't have an account?

                  <Link to="/signup">

                    Signup

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

export default Login;