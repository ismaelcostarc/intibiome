import React from "react";
import Card from "../Card";
import style from "./style.module.scss";
import picture1 from '../../assets/img/discoveries/picture1.png'
import picture2 from '../../assets/img/discoveries/picture2.png'
import picture3 from '../../assets/img/discoveries/picture3.png'

const Discoveries = () => {
  return (
    <section className={style.container}>
      <h1 className="text text-1">keep up to date with our discoveries</h1>

      <div className={style.itemsWrapper}>
        <div className={style.items}>
          <Card
            cover={picture1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            cover={picture2}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Card
            cover={picture3}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>

      <button className={`${style.button} text text-5`}>see more</button>
    </section>
  );
};

export default Discoveries;
