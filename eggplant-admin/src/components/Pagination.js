import React from "react";

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }
      return (
        <div className="pagination">
          <nav>
            <ul >
              {pageNumbers.map((number) => 
                currentPage == number ?
                <li key={number} onClick={() => paginate(number)} className="current-page">
                    {number}
                </li>
                :
                <li key={number} onClick={() => paginate(number)} className="page-item">
                    {number}
                </li>
              )}
            </ul>
          </nav>
        </div>
      );
}

export default Pagination;