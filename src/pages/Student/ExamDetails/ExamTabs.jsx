import { useState } from "react";

import {
    FaBookOpen,
    FaListAlt,
    FaClipboardList
} from "react-icons/fa";

import OverviewTab from "./OverviewTab";
import SyllabusTab from "./SyllabusTab";
import PatternTab from "./PatternTab";

import "./ExamDetails.css";

function ExamTabs({ exam }) {

    const [activeTab, setActiveTab] = useState("overview");

    return (

        <div className="ep-exd-tabs-wrapper">

            {/* Tabs */}

            <div className="ep-exd-tabs-header">

                <button

                    className={
                        activeTab === "overview"
                            ? "ep-exd-tab-btn active"
                            : "ep-exd-tab-btn"
                    }

                    onClick={() => setActiveTab("overview")}

                >

                    <FaBookOpen />

                    Overview

                </button>

                <button

                    className={
                        activeTab === "syllabus"
                            ? "ep-exd-tab-btn active"
                            : "ep-exd-tab-btn"
                    }

                    onClick={() => setActiveTab("syllabus")}

                >

                    <FaListAlt />

                    Syllabus

                </button>

                <button

                    className={
                        activeTab === "pattern"
                            ? "ep-exd-tab-btn active"
                            : "ep-exd-tab-btn"
                    }

                    onClick={() => setActiveTab("pattern")}

                >

                    <FaClipboardList />

                    Exam Pattern

                </button>

            </div>

            {/* Content */}

            <div className="ep-exd-tab-content">

                {

                    activeTab === "overview" &&

                    <OverviewTab exam={exam} />

                }

                {

                    activeTab === "syllabus" &&

                    <SyllabusTab exam={exam} />

                }

                {

                    activeTab === "pattern" &&

                    <PatternTab exam={exam}/>

                }

            </div>

        </div>

    );

}

export default ExamTabs;