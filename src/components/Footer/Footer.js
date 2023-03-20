import "./Footer.css";
import FooterLogo from "./../../assets/headerlogo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="logo">
          <img src={FooterLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
