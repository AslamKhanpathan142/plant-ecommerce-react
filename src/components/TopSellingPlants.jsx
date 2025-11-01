// TopSellingPlants.jsx
import React from "react";
import styles from "../styles/TopSellingPlants.module.css";

const TopSellingPlants = ({ children }) => {
  return (
    <div className={styles.vectors}>
      <div className={styles.vector1}></div>
      <p className={styles.headline}>{children}</p>
      <div className={styles.vector2}></div>
    </div>
  );
};

export default TopSellingPlants;
