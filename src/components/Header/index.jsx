import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import headerImage from "../../assets/img/header/headerImage.png";

const Header = ({ isMenuOpened, setIsMenuOpened }) => {
  return (
    <header className={style.header}>
      <button
        className={style.hamburguerButton}
        onClick={() => setIsMenuOpened((prevValue) => !prevValue)}
      >
        {isMenuOpened ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      <img src={headerImage} alt="Logo" />
      <div className={style.search}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </header>
  );
};

export default Header;
