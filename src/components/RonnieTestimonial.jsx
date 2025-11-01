import React from "react";
import styles from "../styles/RonnieTestimonial.module.css";
import feedback1 from "../assets/feedback1.png";

const RonnieTestimonial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <img src={feedback1} alt="Ronnie Hamill" className={styles.avatar} />
          <div className={styles.namerate}>
            <div className={styles.name}>Ronnie Hamill</div>
            <div className={styles.stars}>
              <span className={styles.star}>★</span>
              <span className={styles.star}>★</span>
              <span className={styles.star}>★</span>
              <span className={styles.star}>★</span>
              <span className={styles.halfStar}>★</span>
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          I can't express how thrilled I am with my
          <br />
          new natural plants! They bring such a
          <br />
          fresh and vibrant energy to my home.
        </div>
      </div>
    </div>
  );
};

export default RonnieTestimonial;
