import { FiChevronRight } from "react-icons/fi";

function Pagination() {
  let total = 21;

  return (
    <div className="pagination">
      {/* dummy container to make space-between */}
      <div className="container"></div>
      <div className="container">
        <div className="number__container">
          <p className="number">1</p>
        </div>
        <div className="number__container">
          <p className="number">2</p>
        </div>
        <div className="number__container">
          <p className="number">3</p>
        </div>
        <div className="number__container">
          <p className="number">...</p>
        </div>
        <div className="number__container">
          <p className="number">{total}</p>
        </div>
      </div>
      <div className="next__button">
        <p>Next</p>
        <FiChevronRight />
      </div>
    </div>
  );
}
export default Pagination;
