import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import headerImageMobile from "../../assets/img/header/headerImageMobile.png";
import headerImageDesktop from "../../assets/img/header/headerImageDesktop.png";

const Header = ({ isMenuOpened, setIsMenuOpened, isMobile }) => {
  return (
    <header className={style.header}>
      {isMobile ? (
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
      ) : (
        <>
          <div></div>
          <div></div>
        </>
      )}

      <img src={isMobile ? headerImageMobile : headerImageDesktop} alt="Logo" />
      <div className={style.search}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>

      {isMobile || <div></div>}
    </header>
  );
};

export default Header;
