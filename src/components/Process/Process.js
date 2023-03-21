import { data } from "../../data/processData";
import "./Process.css";
function Process() {
  return (
    <div className="process">
      <div className="container">
        {data.map((item) => (
          <div key={item.id} className="process__item">
            <img src={item.img} alt="" />
            <div className="process__title">{item.title}</div>
            <div className="process__desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Process;
