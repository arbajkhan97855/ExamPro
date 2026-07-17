
import { exams } from "../../data/mockData"
import ExamFilter from "../../components/Dashboard/Exam/ExamFilter";
import ExamGrid from "../../components/Dashboard/Exam/ExamGrid";
import ExamHeader from "../../components/Dashboard/Exam/ExamHeader";
import Pagination from "../../components/Dashboard/Exam/Pagination";
import { useEffect, useState } from "react";


function AvailableExams() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [tier, setTier] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const categories = [
    "All",
    ...new Set(exams.map((exam) => exam.category))
];


    const examPerPage = 6;
    useEffect(() => {

    setCurrentPage(1);

}, [search, category, tier]);

    const filteredExams = exams.filter((exam) => {

        const matchSearch =
            exam.name.toLowerCase().includes(search.toLowerCase());

        const matchCategory =
            category === "All" || exam.category === category;

        const matchTier =
            tier === "All" || exam.tier === tier;

        return matchSearch && matchCategory && matchTier;

    });

    const start = (currentPage - 1) * examPerPage;
    const end = start + examPerPage;

    const currentExams = filteredExams.slice(start, end);
    return (
        <>
            <ExamHeader total={filteredExams.length} />
          <ExamFilter

    search={search}
    setSearch={setSearch}

    category={category}
    setCategory={setCategory}

    tier={tier}
    setTier={setTier}

    categories={categories}

/>
            <ExamGrid exams={currentExams} />
            <Pagination  total={filteredExams.length}
    perPage={examPerPage}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage} />

        </>

    );

}

export default AvailableExams;