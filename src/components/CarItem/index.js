import React from "react";
import styles from "./styles.module.css";
export default function CarItem({ img, name, price, id }) {
  return (
    <div className={styles.carItem}>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>{price}</h4>
    </div>
  );
}
