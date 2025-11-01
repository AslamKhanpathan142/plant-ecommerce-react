import React from "react";
import styles from "../styles/ProductSection.module.css";
import flower from "../assets/flower.png";
import Button from "./Button";
import arraw from "../assets/arraw.png";

const ProductSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={flower} className={styles.plantImage} alt="Aglaonema plant" />
        <div className={styles.backgroundElement}></div>
        <div className={styles.contentSection}>
          <div className={styles.category}>Indoor Plant</div>
          <div className={styles.plantName}>Aglaonema plant</div>
          <div className={styles.addToCart}>
            <Button children="Buy Now" />
            <img src={arraw} alt="" className={styles.arraw2} />
          </div>
          <div className={styles.mainDots}>
            <div className={styles.dot1}></div>
            <div className={styles.dot2}></div>
            <div className={styles.dot3}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
