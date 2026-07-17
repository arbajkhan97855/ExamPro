import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Pagination.css";

function Pagination({

    total,
    perPage,
    currentPage,
    setCurrentPage

}) {

    const totalPages = Math.ceil(total / perPage);

    if (totalPages <= 1) return null;

    return (

        <div className="ep-exam-pagination">

            {/* Previous */}

            <button

                className="ep-page-btn"

                disabled={currentPage === 1}

                onClick={() => setCurrentPage(currentPage - 1)}

            >

                <FaAngleLeft />

            </button>

            {/* Page Numbers */}

            {

                [...Array(totalPages)].map((_, index) => (

                    <button

                        key={index}

                        className={
                            currentPage === index + 1
                                ? "ep-page-btn ep-page-active"
                                : "ep-page-btn"
                        }

                        onClick={() => setCurrentPage(index + 1)}

                    >

                        {index + 1}

                    </button>

                ))

            }

            {/* Next */}

            <button

                className="ep-page-btn"

                disabled={currentPage === totalPages}

                onClick={() => setCurrentPage(currentPage + 1)}

            >

                <FaAngleRight />

            </button>

        </div>

    );

}

export default Pagination;