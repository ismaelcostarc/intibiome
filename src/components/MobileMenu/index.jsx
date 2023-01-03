import style from "./style.module.scss";

const MobileMenu = () => {
  return (
    <div className={style.container}>
      <ul className="text text-6">
        <li>brand philosophy</li>
        <li>product technology</li>
        <li>all products</li>
        <li>intibiome wellness</li>
        <li>intibiome active</li>
        <li>intibiome agecare</li>
        <li>article 1</li>
        <li>article 2</li>
        <li>article 3</li>
        <li>faq</li>
        <li>contact us</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
