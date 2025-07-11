export default Pagination = ({ noOfPages, currentPage, setCurrentPage }) => {
  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 0}
        className="page-number"
        onClick={() => goToPrevPage}
      >
        Prev
      </button>
      {[...Array(noOfPages).keys()].map((n) => (
        <button
          className={"page-number" + (n === currentPage ? "active" : "")}
          key={n}
          onClick={() => handlePageChange(n)}
        >
          {n}
        </button>
      ))}
      <button
        disabled={currentPage === noOfPages - 1}
        className="page-number"
        onClick={() => goToNextPage()}
      >
        Next
      </button>
    </div>
  );
};
