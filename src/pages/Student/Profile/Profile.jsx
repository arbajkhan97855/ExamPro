
import { useEffect, useState } from "react";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaCalendarAlt,
    FaVenusMars,
    FaEdit,
    FaSave,
    FaTimes,
    FaShieldAlt,
    FaCheckCircle,
    FaIdCard
} from "react-icons/fa";

import "./Profile.css";

function Profile() {

    const [isEditing, setIsEditing] = useState(false);

    const [profile, setProfile] = useState({
        fullname: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        role: "Student"
    });

    const [editData, setEditData] = useState(profile);

    useEffect(() => {

        const storedUser = JSON.parse(
            localStorage.getItem("user")
        );

        if (storedUser) {

            const userData = {
                fullname: storedUser.fullname || "",
                email: storedUser.email || "",
                phone: storedUser.phone || "",
                dob: storedUser.dob || "",
                gender: storedUser.gender || "",
                role: storedUser.role || "Student"
            };

            setProfile(userData);
            setEditData(userData);

        }

    }, []);


    const handleChange = (e) => {

        const { name, value } = e.target;

        setEditData((prev) => ({
            ...prev,
            [name]: value
        }));

    };


    const handleEdit = () => {

        setEditData(profile);
        setIsEditing(true);

    };


    const handleCancel = () => {

        setEditData(profile);
        setIsEditing(false);

    };


    const handleSave = () => {

        const oldUser =
            JSON.parse(localStorage.getItem("user")) || {};

        const updatedUser = {
            ...oldUser,
            ...editData
        };

        localStorage.setItem(
            "user",
            JSON.stringify(updatedUser)
        );

        setProfile(editData);
        setIsEditing(false);

    };


    const avatarName =
        profile.fullname || "Student";


    return (

        <section className="ep-profile-page">

            {/* =========================
                PROFILE HERO
            ========================= */}

            <div className="ep-profile-hero">

                <div className="ep-profile-hero-left">

                    <div className="ep-profile-avatar">

                        <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                avatarName
                            )}&background=4f46e5&color=fff&size=160`}
                            alt={avatarName}
                        />

                        <span className="ep-profile-online">
                            <FaCheckCircle />
                        </span>

                    </div>


                    <div className="ep-profile-heading">

                        <span className="ep-profile-eyebrow">
                            <FaUser />
                            STUDENT PROFILE
                        </span>

                        <h1>
                            {profile.fullname || "Student"}
                        </h1>

                        <p>
                            {profile.email || "No email available"}
                        </p>

                        <div className="ep-profile-status">

                            <span>
                                <FaCheckCircle />
                                Active Account
                            </span>

                            <span>
                                <FaShieldAlt />
                                Verified Student
                            </span>

                        </div>

                    </div>

                </div>


                {!isEditing ? (

                    <button
                        className="ep-profile-edit-btn"
                        onClick={handleEdit}
                    >
                        <FaEdit />
                        Edit Profile
                    </button>

                ) : (

                    <div className="ep-profile-action-group">

                        <button
                            className="ep-profile-cancel-btn"
                            onClick={handleCancel}
                        >
                            <FaTimes />
                            Cancel
                        </button>

                        <button
                            className="ep-profile-save-btn"
                            onClick={handleSave}
                        >
                            <FaSave />
                            Save Changes
                        </button>

                    </div>

                )}

            </div>


            {/* =========================
                CONTENT
            ========================= */}

            <div className="ep-profile-layout">


                {/* =========================
                    PERSONAL INFORMATION
                ========================= */}

                <div className="ep-profile-card">

                    <div className="ep-profile-card-heading">

                        <div className="ep-profile-card-icon">
                            <FaUser />
                        </div>

                        <div>
                            <h2>
                                Personal Information
                            </h2>

                            <p>
                                Manage your personal details
                            </p>
                        </div>

                    </div>


                    <div className="ep-profile-fields">


                        {/* Full Name */}

                        <div className="ep-profile-field">

                            <label>
                                Full Name
                            </label>

                            {isEditing ? (

                                <div className="ep-profile-input-wrap">

                                    <FaUser />

                                    <input
                                        type="text"
                                        name="fullname"
                                        value={editData.fullname}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                    />

                                </div>

                            ) : (

                                <div className="ep-profile-value">
                                    <FaUser />
                                    <span>
                                        {profile.fullname || "Not provided"}
                                    </span>
                                </div>

                            )}

                        </div>


                        {/* Email */}

                        <div className="ep-profile-field">

                            <label>
                                Email Address
                            </label>

                            {isEditing ? (

                                <div className="ep-profile-input-wrap">

                                    <FaEnvelope />

                                    <input
                                        type="email"
                                        name="email"
                                        value={editData.email}
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                    />

                                </div>

                            ) : (

                                <div className="ep-profile-value">

                                    <FaEnvelope />

                                    <span>
                                        {profile.email || "Not provided"}
                                    </span>

                                </div>

                            )}

                        </div>


                        {/* Phone */}

                        <div className="ep-profile-field">

                            <label>
                                Phone Number
                            </label>

                            {isEditing ? (

                                <div className="ep-profile-input-wrap">

                                    <FaPhone />

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={editData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                    />

                                </div>

                            ) : (

                                <div className="ep-profile-value">

                                    <FaPhone />

                                    <span>
                                        {profile.phone || "Not provided"}
                                    </span>

                                </div>

                            )}

                        </div>


                        {/* DOB */}

                        <div className="ep-profile-field">

                            <label>
                                Date of Birth
                            </label>

                            {isEditing ? (

                                <div className="ep-profile-input-wrap">

                                    <FaCalendarAlt />

                                    <input
                                        type="date"
                                        name="dob"
                                        value={editData.dob}
                                        onChange={handleChange}
                                    />

                                </div>

                            ) : (

                                <div className="ep-profile-value">

                                    <FaCalendarAlt />

                                    <span>
                                        {profile.dob || "Not provided"}
                                    </span>

                                </div>

                            )}

                        </div>


                        {/* Gender */}

                        <div className="ep-profile-field">

                            <label>
                                Gender
                            </label>

                            {isEditing ? (

                                <div className="ep-profile-input-wrap">

                                    <FaVenusMars />

                                    <select
                                        name="gender"
                                        value={editData.gender}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select Gender
                                        </option>

                                        <option value="Male">
                                            Male
                                        </option>

                                        <option value="Female">
                                            Female
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>

                                    </select>

                                </div>

                            ) : (

                                <div className="ep-profile-value">

                                    <FaVenusMars />

                                    <span>
                                        {profile.gender || "Not provided"}
                                    </span>

                                </div>

                            )}

                        </div>

                    </div>

                </div>


                {/* =========================
                    ACCOUNT DETAILS
                ========================= */}

                <div className="ep-profile-card">

                    <div className="ep-profile-card-heading">

                        <div className="ep-profile-card-icon">
                            <FaIdCard />
                        </div>

                        <div>
                            <h2>
                                Account Details
                            </h2>

                            <p>
                                Information about your ExamPro account
                            </p>
                        </div>

                    </div>


                    <div className="ep-profile-account-list">

                        <div className="ep-profile-account-item">

                            <div className="ep-profile-account-icon">
                                <FaUser />
                            </div>

                            <div>

                                <span>
                                    Account Role
                                </span>

                                <strong>
                                    {profile.role}
                                </strong>

                            </div>

                        </div>


                        <div className="ep-profile-account-item">

                            <div className="ep-profile-account-icon">
                                <FaShieldAlt />
                            </div>

                            <div>

                                <span>
                                    Account Status
                                </span>

                                <strong className="ep-profile-active">
                                    <FaCheckCircle />
                                    Active
                                </strong>

                            </div>

                        </div>


                        <div className="ep-profile-account-item">

                            <div className="ep-profile-account-icon">
                                <FaEnvelope />
                            </div>

                            <div>

                                <span>
                                    Email Verification
                                </span>

                                <strong className="ep-profile-active">
                                    <FaCheckCircle />
                                    Verified
                                </strong>

                            </div>

                        </div>


                        <div className="ep-profile-account-item">

                            <div className="ep-profile-account-icon">
                                <FaIdCard />
                            </div>

                            <div>

                                <span>
                                    Account Type
                                </span>

                                <strong>
                                    Student Account
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Profile;

