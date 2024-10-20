import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Pagination({ totalRows, setCurrenPage, currenPage }) {
  let pages = [];
  
  
  let totalPages=Math.ceil(totalRows / 10);
  for (let i = 1; i <=totalPages ; i++) {
    pages.push(i);
  }
  
  
  function handleNext() {
    if (currenPage < totalPages) {
      setCurrenPage(currenPage + 1);
    }
  }

  function handlePrevious() {
    if (currenPage > 1) {
      setCurrenPage(currenPage - 1);
    }
  }
  return (
    <>
      <div className="flex justify-center mt-5 gap-3">
        <button
          className="p-2 w-9 h-9 flex justify-center items-center rounded-full border border-gray-200 focus:border-primary"
          onClick={handlePrevious}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {pages.map((page, index) => {
          return (
            <button
              className="p-2 w-9 h-9 flex justify-center items-center rounded-full border border-gray-200 focus:border-primary"
              onClick={() => setCurrenPage(page)}
              key={index}
            >
              {page}
            </button>
          );
        })}
        <button
          className="p-2 w-9 h-9 flex justify-center items-center rounded-full border border-gray-200 focus:border-primary"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
}

export default Pagination;
