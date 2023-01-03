import style from './style.module.css';

const Banner = ({ children, breakpoint }) => {
  return <div className={style.banner}>{children}</div>;
};

export default Banner;
