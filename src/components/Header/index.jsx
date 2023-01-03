import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return <header className={style.header}>
    <button>...</button>
    <div>imagem</div>
    <div><FontAwesomeIcon icon="fa-light fa-magnifying-glass" /></div>
  </header>;
};

export default Header;
