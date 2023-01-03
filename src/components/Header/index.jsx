import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import headerImage from "../../assets/img/header/headerImage.png";

const Header = () => {
  return (
    <header className={style.header}>
      <button className={style.hamburguerButton}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <img src={headerImage} alt="Logo" />
      <div className={style.search}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </header>
  );
};

export default Header;
