
import { useState } from "react";
import { motion } from "framer-motion";

import {
    FaCog,
    FaUser,
    FaLock,
    FaBell,
    FaPalette,
    FaSave
} from "react-icons/fa";

import "./Settings.css";

function Settings() {

    const [activeTab, setActiveTab] = useState("account");

    const [settings, setSettings] = useState({
        fullname: "",
        email: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        emailNotifications: true,
        examNotifications: true,
        resultNotifications: true
    });

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setSettings(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

    };

    const handleSave = (e) => {

        e.preventDefault();

        console.log("Settings:", settings);

        alert("Settings saved successfully!");

    };

    return (

        <section className="ep-settings-page">

            {/* HEADER */}

            <motion.div
                className="ep-settings-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >

                <div>

                    <span className="ep-settings-eyebrow">

                        <FaCog />

                        ACCOUNT SETTINGS

                    </span>

                    <h1>Settings</h1>

                    <p>
                        Manage your account, security and notification preferences.
                    </p>

                </div>

            </motion.div>


            <div className="ep-settings-layout">

                {/* SIDEBAR */}

                <div className="ep-settings-sidebar">

                    <button
                        className={activeTab === "account" ? "active" : ""}
                        onClick={() => setActiveTab("account")}
                    >
                        <FaUser />
                        Account
                    </button>

                    <button
                        className={activeTab === "security" ? "active" : ""}
                        onClick={() => setActiveTab("security")}
                    >
                        <FaLock />
                        Security
                    </button>

                    <button
                        className={activeTab === "notifications" ? "active" : ""}
                        onClick={() => setActiveTab("notifications")}
                    >
                        <FaBell />
                        Notifications
                    </button>

                    <button
                        className={activeTab === "appearance" ? "active" : ""}
                        onClick={() => setActiveTab("appearance")}
                    >
                        <FaPalette />
                        Appearance
                    </button>

                </div>


                {/* CONTENT */}

                <motion.div
                    className="ep-settings-content"
                    key={activeTab}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                >

                    {/* ACCOUNT */}

                    {activeTab === "account" && (

                        <form onSubmit={handleSave}>

                            <div className="ep-settings-section-title">

                                <FaUser />

                                <div>
                                    <h2>Account Information</h2>
                                    <p>Update your personal information.</p>
                                </div>

                            </div>

                            <div className="ep-settings-form-grid">

                                <div className="ep-settings-field">

                                    <label>Full Name</label>

                                    <input
                                        type="text"
                                        name="fullname"
                                        value={settings.fullname}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                    />

                                </div>

                                <div className="ep-settings-field">

                                    <label>Email Address</label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={settings.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                    />

                                </div>

                            </div>

                            <button className="ep-settings-save">

                                <FaSave />

                                Save Changes

                            </button>

                        </form>

                    )}


                    {/* SECURITY */}

                    {activeTab === "security" && (

                        <form onSubmit={handleSave}>

                            <div className="ep-settings-section-title">

                                <FaLock />

                                <div>
                                    <h2>Password & Security</h2>
                                    <p>Keep your ExamPro account secure.</p>
                                </div>

                            </div>

                            <div className="ep-settings-field">

                                <label>Current Password</label>

                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={settings.currentPassword}
                                    onChange={handleChange}
                                    placeholder="Enter current password"
                                />

                            </div>

                            <div className="ep-settings-form-grid">

                                <div className="ep-settings-field">

                                    <label>New Password</label>

                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={settings.newPassword}
                                        onChange={handleChange}
                                        placeholder="Enter new password"
                                    />

                                </div>

                                <div className="ep-settings-field">

                                    <label>Confirm Password</label>

                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={settings.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm new password"
                                    />

                                </div>

                            </div>

                            <button className="ep-settings-save">

                                <FaSave />

                                Update Password

                            </button>

                        </form>

                    )}


                    {/* NOTIFICATIONS */}

                    {activeTab === "notifications" && (

                        <div>

                            <div className="ep-settings-section-title">

                                <FaBell />

                                <div>
                                    <h2>Notification Preferences</h2>
                                    <p>Choose which notifications you want to receive.</p>
                                </div>

                            </div>

                            <div className="ep-settings-toggle-list">

                                <label>

                                    <div>
                                        <strong>Email Notifications</strong>
                                        <small>Receive important updates by email.</small>
                                    </div>

                                    <input
                                        type="checkbox"
                                        name="emailNotifications"
                                        checked={settings.emailNotifications}
                                        onChange={handleChange}
                                    />

                                </label>

                                <label>

                                    <div>
                                        <strong>Exam Notifications</strong>
                                        <small>Get reminders about upcoming exams.</small>
                                    </div>

                                    <input
                                        type="checkbox"
                                        name="examNotifications"
                                        checked={settings.examNotifications}
                                        onChange={handleChange}
                                    />

                                </label>

                                <label>

                                    <div>
                                        <strong>Result Notifications</strong>
                                        <small>Get notified when your results are available.</small>
                                    </div>

                                    <input
                                        type="checkbox"
                                        name="resultNotifications"
                                        checked={settings.resultNotifications}
                                        onChange={handleChange}
                                    />

                                </label>

                            </div>

                        </div>

                    )}


                    {/* APPEARANCE */}

                    {activeTab === "appearance" && (

                        <div>

                            <div className="ep-settings-section-title">

                                <FaPalette />

                                <div>
                                    <h2>Appearance</h2>
                                    <p>Customize your dashboard experience.</p>
                                </div>

                            </div>

                            <div className="ep-settings-appearance-card">

                                <div>
                                    <strong>Theme</strong>
                                    <p>
                                        Use the theme button in the navbar
                                        to switch between light and dark mode.
                                    </p>
                                </div>

                                <span className="ep-settings-theme-badge">
                                    Light / Dark
                                </span>

                            </div>

                        </div>

                    )}

                </motion.div>

            </div>

        </section>

    );

}

export default Settings;

