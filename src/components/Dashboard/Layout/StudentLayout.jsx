import { useState } from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./StudentLayout.css";

function StudentLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="student-layout">

            <Sidebar

                sidebarOpen={sidebarOpen}

                setSidebarOpen={setSidebarOpen}

            />

            <div className="layout-right">

                <Navbar

                    setSidebarOpen={setSidebarOpen}

                />

                <main className="layout-content">

                    <Outlet />

                </main>

                <Footer />

            </div>

        </div>

    );

}

export default StudentLayout;