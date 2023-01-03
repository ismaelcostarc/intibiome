import style from "./style.module.scss";

const Card = ({ title, color, description, cover }) => {
  return (
    <div className={style.container}>
      <img src={cover} alt="Cover" />
      <div className={`${style.description} text text-3`}>{description}</div>
      {title && (
        <div
          style={{ backgroundColor: color }}
          className={`${style.footer} text text-4`}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default Card;
