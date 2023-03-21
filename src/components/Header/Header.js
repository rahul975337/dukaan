import "./Header.css";
import HeaderLogoWhite from "./../../assets/logos/logoWhite.svg";
import HeaderLogoBlack from "./../../assets/logos/logoBlack.svg";
import { useEffect, useState } from "react";
function Header() {
  const [isTop, setIsTop] = useState(true);
  const changeNav = () => {
    if (window.scrollY >= 150) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener("scroll", changeNav);
  });
  return (
    <div
      className="header"
      style={{ backgroundColor: isTop ? "var(--highlight)" : "var(--white)" }}
    >
      <div className="header__container">
        <div className="logo">
          <img src={isTop ? HeaderLogoWhite : HeaderLogoBlack} alt="" />
        </div>
        <div className="buttons">
          <p
            className="signin"
            style={{
              color: isTop ? "var(--white)" : "var(--black)",
            }}
          >
            Sign in
          </p>
          <button
            className="pc__button"
            style={{
              backgroundColor: isTop ? "var(--white)" : "var(--highlight)",
              color: isTop ? "var(--highlight)" : "var(--white)",
            }}
          >
            Dukaan for PC
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
//button blue
//text black
