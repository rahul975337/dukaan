import "./Footer.css";
import FooterLogo from "./../../assets/logos/logoWhite.svg";
import { data } from "./../../data/footerData";
function Footer() {
  return (
    <div className="footer">
      <div className="top_container">
        <div className="logo">
          <img src={FooterLogo} alt="" />
        </div>
        {data.map((item, idx1) => (
          <div key={idx1} className="column">
            {item.map((inner, idx2) => (
              <p key={idx2}>{inner}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="bottom_container">
        <p>Dukaan 2020, All rights reserved.</p>
        <p>Made in 🇮🇳</p>
      </div>
    </div>
  );
}
export default Footer;
