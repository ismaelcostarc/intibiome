import style from "./style.module.scss";
import icon from "../../assets/img/footer/icon.png";

const Footer = () => {
  return (
    <footer className={style.container}>
      <ul className="text text-6">
        <li>contact us</li>
        <li className={style.separator}>|</li>
        <li>faq</li>
        <li className={style.separator}>|</li>
        <li>site map</li>
        <li className={style.separator}>|</li>
        <li>privacy policy</li>
        <li className={style.separator}>|</li>
        <li>cookies policy</li>
        <li className={style.separator}>|</li>
        <li>legal notice</li>
      </ul>

      <img src={icon} alt="Icon" />

      <div className="text text-7">U●labs</div>
    </footer>
  );
};

export default Footer;
