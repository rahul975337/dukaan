import "./Products.css";
import PrivacyGenerator from "./../../assets/products/privacyGenerator.svg";
import TnCGenerator from "./../../assets/products/tncGenerator.svg";
import DomainGenerator from "./../../assets/products/domainGenerator.svg";
import InvoiceGenerator from "./../../assets/products/invoiceGenerator.svg";
function Products() {
  const data = [
    {
      id: 1,
      img: PrivacyGenerator,
      title: "Privacy Policy Generator",
      desc: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
    },
    {
      id: 2,
      img: TnCGenerator,
      title: "Terms & Conditions Generator",
      desc: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
    },
    {
      id: 3,
      img: DomainGenerator,
      title: "Domain Name Generator",
      desc: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
    },
    {
      id: 4,
      img: InvoiceGenerator,
      title: "Invoice Generator",
      desc: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
    },
  ];
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
