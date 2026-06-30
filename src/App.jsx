import { Routes, Route } from "react-router-dom";
import Home from "./pages/peopleshow/Home";
import About from "./pages/peopleshow/About";
import Exams from "./pages/peopleshow/Exams";
import Contact from "./pages/peopleshow/Contact";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import VerifyOtp from "./pages/auth/varifyotp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyForgotOtp from "./pages/auth/VerifyForgotOtp";
import ResetPassword from "./pages/auth/ResetPassword";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-forgot-otp" element={<VerifyForgotOtp />} />
      <Route path="/reset-password" element={<ResetPassword />} />


    </Routes>
  );
}

export default App;