import style from "./style.module.scss";
import icon from "../../assets/img/footer/icon.png";

const Footer = ({ isMobile }) => {
  return (
    <footer className={style.container}>
      <ul
        className="text text-6"
        style={{ flexDirection: isMobile ? "column" : "row" }}
      >
        <li>contact us</li>
        <li className={isMobile && style.separator}>|</li>
        <li>faq</li>
        <li className={isMobile && style.separator}>|</li>
        <li>site map</li>
        <li className={isMobile && style.separator}>|</li>
        <li>privacy policy</li>
        <li className={isMobile && style.separator}>|</li>
        <li>cookies policy</li>
        <li className={isMobile && style.separator}>|</li>
        <li>legal notice</li>
      </ul>

      <div
        className={[
          style.icons,
          isMobile ? style.iconsMobile : style.iconsDesktop,
        ].join(' ')}
      >
        <img src={icon} alt="Icon" />

        <div className="text text-7">U●labs</div>
      </div>
    </footer>
  );
};

export default Footer;
