import style from "./style.module.scss";
import iconsMobile from '../../assets/icons/iconsMobile.png'

const Presentation = () => (
  <section className={style.container}>
    <h1 className="text text-1">we're here to help</h1>

    <p className="text text-2">
      When it comes to caring for our most intimate areas, we’ve lost our
      connection.
      <br />
      <br />
      Embarrassed, unwilling, or unable to communicate with others, we’re
      needlessly neglecting the parts of our bodies that need it most.
      <br />
      <br />
      We’re here to help. Providing you with the expertise, knowledge and
      products you need to feel confident in your personal care.
    </p>

    <div className={style.icons}>
      <img src={iconsMobile} alt="icons" />
    </div>

    <h1 className="text text-1">
      whatever your age. whatever your lifestyle. whatever your interests.
    </h1>

    <p className="text text-2">
      Co-created with gynaecologists, our revolutionary products have been
      expertly developed to support your intimate microbiome and pH balance, and
      strengthen overall natural health.
      <br />
      <br />
      As the experts in intimate hygiene, we want to bring discussion about
      intimate wellness care out of the dark and demystify the taboos that
      surround it.
    </p>
  </section>
);
export default Presentation;
