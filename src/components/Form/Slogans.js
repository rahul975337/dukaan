import { data } from "../../data/formData";

function Slogans() {
  return (
    <div className="list">
      <div className="list__heading">
        <p>We have generated 1,023 slogans for “cozy”</p>
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
  );
}
export default Slogans;
