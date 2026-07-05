import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./StudentLayout.css";

function StudentLayout() {

    return (

        <div className="student-layout">

            <Sidebar />

            <div className="layout-right">

                <Navbar />

                <main className="layout-content">

                    <Outlet />

                </main>

                <Footer />

            </div>

        </div>

    );

}

export default StudentLayout;