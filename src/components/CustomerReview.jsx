import React from "react";
import styles from "../styles/CostomerReview.module.css";
const CustomerReview = ({ image, title, description }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <img src={image} alt="Ronnie Hamill" className={styles.avatar} />
            <div className={styles.namerate}>
              <div className={styles.name}>{title}</div>
              <div className={styles.stars}>
                <span className={styles.star}>★</span>
                <span className={styles.star}>★</span>
                <span className={styles.star}>★</span>
                <span className={styles.star}>★</span>
                <span className={styles.halfStar}>★</span>
              </div>
            </div>
          </div>
          <div className={styles.testimonial}>{description}</div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
