import "./Header.css";
import HeaderLogo from "./../../assets/headerlogo.svg";
function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="logo">
          <img src={HeaderLogo} alt="" />
        </div>
        <div className="buttons">
          <p className="signin">Sign in</p>
          <button className="pc__button">Dukaan for PC</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
