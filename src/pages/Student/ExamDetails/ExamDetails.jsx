import { useParams } from "react-router-dom";
import { exams } from "../../../data/mockData";

import ExamInfoCard from "./ExamInfoCard";
import PaymentSummary from "./PaymentSummary";
import PaymentMethods from "./PaymentMethods";
import ExamTabs from "./ExamTabs";

import "./ExamDetails.css";

function ExamDetails() {

    const { slug } = useParams();

    const exam = exams.find(item => item.slug === slug);

    if (!exam) {

        return <h2>Exam Not Found</h2>;

    }

    return (

        <section className="ep-exd-page">

            <div
                className={`ep-exd-top ${
                    exam.tier === "Free"
                        ? "ep-free-layout"
                        : ""
                }`}
            >

                <ExamInfoCard exam={exam} />

                {

                    exam.tier === "Premium" && (

                        <div className="ep-exd-payment-area">

                            <PaymentSummary exam={exam} />

                            <PaymentMethods exam={exam} />

                        </div>

                    )

                }

            </div>

            <ExamTabs exam={exam} />

        </section>

    );

}

export default ExamDetails;