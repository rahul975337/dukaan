import "./Products.css";

import { data } from "../../data/productsData";
function Products() {
  return (
    <div className="products">
      <div className="container">
        <p className="heading">Try our other free products</p>
        <div className="product__list">
          {data.map((item) => {
            return (
              <div key={item.id} className="product">
                <img src={item.img} alt="" />
                <p className="title">{item.title}</p>
                <p className="desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Products;
