import {
    FaSearch,
    FaFilter
} from "react-icons/fa";

import "./ExamFilter.css";

function ExamFilter({

    search,
    setSearch,

    category,
    setCategory,

    tier,
    setTier,

    categories

}) {

    return (

        <div className="exam-filter">

            {/* Search */}

            <div className="filter-search">

                <FaSearch />

                <input
                    type="text"
                    placeholder="Search exams..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            {/* Category */}

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >

                {categories.map((item) => (

                    <option
                        key={item}
                        value={item}
                    >

                        {item}

                    </option>

                ))}

            </select>

            {/* Exam Type */}

            <select
                value={tier}
                onChange={(e) => setTier(e.target.value)}
            >

                <option value="All">

                    All Types

                </option>

                <option value="Free">

                    Free

                </option>

                <option value="Premium">

                    Premium

                </option>

            </select>

            <button>

                <FaFilter />

                Filters Applied

            </button>

        </div>

    );

}

export default ExamFilter;