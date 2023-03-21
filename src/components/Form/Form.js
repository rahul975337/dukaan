import "./Form.css";
import FormTop from "./FormTop";
import Pagination from "./Pagination";
import Slogans from "./Slogans";

function Form() {
  return (
    <div className="form">
      <div className="container">
        <div className="inner__container">
          <FormTop />
          <Slogans />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
export default Form;
