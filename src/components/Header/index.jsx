import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import headerImageMobile from "../../assets/header/headerImageMobile.png";

const Header = () => {
  return (
    <header className={style.header}>
      <button className={style.hamburguerButton}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <img src={headerImageMobile} alt="Logo" />
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </header>
  );
};

export default Header;
