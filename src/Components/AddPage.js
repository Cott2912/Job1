import React from "react";
import '../Style/AddPage.css';
import { useState } from "react";
const AddPage = ({ totalPages = 8 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const lastPage = () => {
        setCurrentPage(totalPages);
    };

    return (
        <div className="pagination-container">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    className={`page-button ${currentPage === i + 1 ? "active" : ""}`}
                    onClick={() => goToPage(i + 1)}
                >
                    {i + 1}
                </button>
            ))}
            <button className="arrow-button" onClick={nextPage}>›</button>
            <button className="double-arrow-button" onClick={lastPage}>»</button>
        </div>
    );
};

export default AddPage;