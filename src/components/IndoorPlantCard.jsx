import React from "react";
import styles from "../styles/IndoorPlantCard.module.css";
import bag from "../assets/bag.png";

const IndoorPlantCard = ({ image, name, description, price }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img src={image} className={styles.plantImage} alt={name} />
          <div className={styles.backgroundElement}></div>
          <div className={styles.contentSection}>
            <div className={styles.category}>{name}</div>
            <div className={styles.plantName}>{description}</div>
            <div className={styles.addToCart}>
              <div className={styles.price}>Rs. {price}/-</div>
              <button className={styles.exploreBtn}>
                <img src={bag} alt="Add to cart" className={styles.bag} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndoorPlantCard;
