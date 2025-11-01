import React from "react";
import styles from "../styles/OurBest.module.css";
import best from "../assets/best.png";
import Button from "./Button";
import arraw from "../assets/arraw.png";

const OurBest = () => {
  return (
    <>
      <div className={styles.vectors}>
        <div className={styles.vector1}></div>
        <p className={styles.headline}>Our Best o2</p>
        <div className={styles.vector2}></div>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={best}
            alt="Desk Decorations with Greenery"
            className={styles.productImage}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>
            We Have Small And Best O2 Plants Collection’s
          </p>
          <p className={styles.description} style={{ whiteSpace: "pre-line" }}>
            Oxygen-producing plants, often referred to as "O2
            <br /> plants," are those that release oxygen into the atmosphere
            through the process of photosynthesis.
          </p>
          <p className={styles.price}>
            Many plants can help filter out pollutants and toxins from the air,
            such as formaldehyde, benzene, and trichloroethylene. This makes the
            air cleaner and healthier to breathe.
          </p>
          <div className={styles.Buttons}>
            <Button>Explore</Button>
            <div className={styles.explorediv}>
              <img src={arraw} alt="" className={styles.arraw1} />
              <p>01/04</p>
              <img src={arraw} alt="" className={styles.arraw2} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainDots}>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
        <div className={styles.dot3}></div>
      </div>
    </>
  );
};

export default OurBest;
