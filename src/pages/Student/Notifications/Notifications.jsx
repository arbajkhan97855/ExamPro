
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    FaBell,
    FaCheckCircle,
    FaInfoCircle,
    FaCreditCard,
    FaBookOpen,
    FaTrophy,
    FaExclamationTriangle,
    FaTrash,
    FaCheckDouble
} from "react-icons/fa";

import "./Notifications.css";


function Notifications() {

    const initialNotifications = useMemo(() => [

        {
            id: 1,
            type: "success",
            title: "Exam Completed",
            message:
                "Your JavaScript Fundamentals exam has been completed successfully.",
            time: "10 minutes ago",
            unread: true,
            icon: FaCheckCircle
        },

        {
            id: 2,
            type: "payment",
            title: "Payment Successful",
            message:
                "Your payment for React Advanced has been successfully verified.",
            time: "2 hours ago",
            unread: true,
            icon: FaCreditCard
        },

        {
            id: 3,
            type: "exam",
            title: "New Exam Available",
            message:
                "A new Full Stack Development exam is now available.",
            time: "Yesterday",
            unread: true,
            icon: FaBookOpen
        },

        {
            id: 4,
            type: "result",
            title: "Result Published",
            message:
                "Your React Fundamentals result has been published.",
            time: "2 days ago",
            unread: false,
            icon: FaTrophy
        },

        {
            id: 5,
            type: "info",
            title: "Exam Reminder",
            message:
                "You have an upcoming examination. Make sure you are ready before starting.",
            time: "3 days ago",
            unread: false,
            icon: FaInfoCircle
        },

        {
            id: 6,
            type: "warning",
            title: "Attempt Reminder",
            message:
                "You have one remaining attempt for your purchased examination.",
            time: "5 days ago",
            unread: false,
            icon: FaExclamationTriangle
        }

    ], []);


    const [notifications, setNotifications] =
        useState(initialNotifications);


    const [filter, setFilter] =
        useState("all");


    const unreadCount =
        notifications.filter(
            notification => notification.unread
        ).length;


    const filteredNotifications =
        notifications.filter(notification => {

            if (filter === "unread") {

                return notification.unread;

            }

            return true;

        });


    /* =========================
       MARK SINGLE READ
    ========================= */

    const markAsRead = (id) => {

        setNotifications(prev =>

            prev.map(notification =>

                notification.id === id

                    ? {
                        ...notification,
                        unread: false
                    }

                    : notification

            )

        );

    };


    /* =========================
       MARK ALL READ
    ========================= */

    const markAllAsRead = () => {

        setNotifications(prev =>

            prev.map(notification => ({

                ...notification,

                unread: false

            }))

        );

    };


    /* =========================
       DELETE
    ========================= */

    const deleteNotification = (id) => {

        setNotifications(prev =>

            prev.filter(
                notification =>
                    notification.id !== id
            )

        );

    };


    /* =========================
       CLEAR ALL
    ========================= */

    const clearAll = () => {

        setNotifications([]);

    };


    return (

        <section className="ep-notification-page">


            {/* =========================
                HEADER
            ========================= */}

            <div className="ep-notification-header">

                <div>

                    <span className="ep-notification-eyebrow">

                        <FaBell />

                        NOTIFICATION CENTER

                    </span>

                    <h1>
                        Notifications
                    </h1>

                    <p>
                        Stay updated with your exams,
                        payments and results.
                    </p>

                </div>


                <div className="ep-notification-header-actions">

                    {unreadCount > 0 && (

                        <button
                            className="ep-mark-all-btn"
                            onClick={markAllAsRead}
                        >

                            <FaCheckDouble />

                            Mark All Read

                        </button>

                    )}

                    {notifications.length > 0 && (

                        <button
                            className="ep-clear-btn"
                            onClick={clearAll}
                        >

                            <FaTrash />

                            Clear All

                        </button>

                    )}

                </div>

            </div>


            {/* =========================
                SUMMARY
            ========================= */}

            <div className="ep-notification-summary">

                <div className="ep-notification-count-card">

                    <div className="ep-notification-count-icon">

                        <FaBell />

                    </div>

                    <div>

                        <span>
                            Total Notifications
                        </span>

                        <strong>
                            {notifications.length}
                        </strong>

                    </div>

                </div>


                <div className="ep-notification-count-card">

                    <div className="ep-notification-count-icon unread">

                        <FaInfoCircle />

                    </div>

                    <div>

                        <span>
                            Unread
                        </span>

                        <strong>
                            {unreadCount}
                        </strong>

                    </div>

                </div>

            </div>


            {/* =========================
                FILTER
            ========================= */}

            <div className="ep-notification-toolbar">

                <div>

                    <button
                        className={
                            filter === "all"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setFilter("all")
                        }
                    >
                        All
                    </button>

                    <button
                        className={
                            filter === "unread"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setFilter("unread")
                        }
                    >
                        Unread

                        {unreadCount > 0 && (

                            <span>
                                {unreadCount}
                            </span>

                        )}

                    </button>

                </div>

            </div>


            {/* =========================
                NOTIFICATIONS
            ========================= */}

            <div className="ep-notification-list">

                <AnimatePresence>

                    {filteredNotifications.length === 0 ? (

                        <motion.div

                            className="ep-notification-empty"

                            initial={{
                                opacity: 0,
                                scale: .95
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1
                            }}

                        >

                            <div className="ep-notification-empty-icon">

                                <FaBell />

                            </div>

                            <h2>
                                No Notifications
                            </h2>

                            <p>
                                You're all caught up.
                                New notifications will appear here.
                            </p>

                        </motion.div>

                    ) : (

                        filteredNotifications.map(
                            notification => {

                                const Icon =
                                    notification.icon;

                                return (

                                    <motion.article

                                        key={
                                            notification.id
                                        }

                                        className={
                                            `ep-notification-item ${
                                                notification.unread
                                                    ? "unread"
                                                    : ""
                                            }`
                                        }

                                        initial={{
                                            opacity: 0,
                                            y: 15
                                        }}

                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}

                                        exit={{
                                            opacity: 0,
                                            x: 30
                                        }}

                                        layout

                                    >

                                        {/* ICON */}

                                        <div
                                            className={
                                                `ep-notification-icon ${
                                                    notification.type
                                                }`
                                            }
                                        >

                                            <Icon />

                                        </div>


                                        {/* CONTENT */}

                                        <div className="ep-notification-content">

                                            <div className="ep-notification-title-row">

                                                <h3>
                                                    {
                                                        notification.title
                                                    }
                                                </h3>

                                                {notification.unread && (

                                                    <span className="ep-unread-dot" />

                                                )}

                                            </div>

                                            <p>
                                                {
                                                    notification.message
                                                }
                                            </p>

                                            <span className="ep-notification-time">

                                                {
                                                    notification.time
                                                }

                                            </span>

                                        </div>


                                        {/* ACTIONS */}

                                        <div className="ep-notification-actions">

                                            {notification.unread && (

                                                <button

                                                    title="Mark as read"

                                                    onClick={() =>
                                                        markAsRead(
                                                            notification.id
                                                        )
                                                    }

                                                >

                                                    <FaCheckCircle />

                                                </button>

                                            )}

                                            <button

                                                title="Delete"

                                                onClick={() =>
                                                    deleteNotification(
                                                        notification.id
                                                    )
                                                }

                                            >

                                                <FaTrash />

                                            </button>

                                        </div>

                                    </motion.article>

                                );

                            }

                        )

                    )}

                </AnimatePresence>

            </div>

        </section>

    );

}


export default Notifications;
