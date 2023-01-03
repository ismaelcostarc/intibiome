import React from "react";
import Card from "../Card";
import product1 from "../../assets/img/products/product1.png";
import product2 from "../../assets/img/products/product2.png";
import product3 from "../../assets/img/products/product3.png";
import style from "./style.module.scss";

const Products = () => {
  return (
    <div className={style.container}>
      <h1 className="text text-1">our products</h1>
      <div className={style.itemsWrapper}>
        <div className={style.items}>
          <Card
            title="wellness"
            cover={product1}
            color="var(--blue)"
            description="intibiome wellness daily intimate wash"
          />
          <Card
            title="wellness"
            cover={product2}
            color="var(--green)"
            description="intibiome active extre protection intimate wash"
          />
          <Card
            title="wellness"
            cover={product3}
            color="var(--red)"
            description="intibiome agecare dryness relief intimate wash"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
