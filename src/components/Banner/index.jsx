import style from './style.module.css';

const Banner = ({ children }) => {
  return <div className={style.banner}>{children}</div>;
};

export default Banner;
