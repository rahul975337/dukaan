import "./Form.css";
import { FiChevronRight } from "react-icons/fi";
import Search from "./Seach";
function Form() {
  let total = 21;
  const data = [
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
  ];
  return (
    <div className="form">
      <div className="container">
        <div className="inner__container">
          <p className="title">Free Slogan Maker</p>
          <p className="desc">
            Simply enter a term that describes your business or service, and
            generate catchy slogans.
          </p>
          <p className="desc">Word for your slogan</p>
          <Search />
          <button className="generate__button">Generate Slogans</button>
          {/* list with top and bottom border */}
          <div className="list">
            <div className="list__heading">
              <p>We have generated 1,023 slogans for “cozy”</p>{" "}
              <button>Download All</button>
            </div>
            <div className="list__items">
              {data.map((ele) => {
                return (
                  <div className="item">
                    <p>{ele}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pagination">
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
        </div>
      </div>
    </div>
  );
}
export default Form;
