import { useParams } from "react-router-dom";
import { exams } from "../../../data/mockData";

import ExamInfoCard from "./ExamInfoCard";

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
                className={`ep-exd-top ep-free-layout }`}
            >

                <ExamInfoCard exam={exam} />

               =

            </div>

            <ExamTabs exam={exam} />

        </section>

    );

}

export default ExamDetails;