import React from "react";
import styles from "../styles/Footer.module.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainFooter}>
        <div className={styles.brandSection}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="FloraVision" className={styles.logo} />
            <h1 className={styles.brandName}>FloraVision.</h1>
          </div>
          <p className={styles.brandDescription}>
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>
        </div>

        <div className={styles.guideSection}>
          <h3 className={styles.sectionTitle}>Guide</h3>
          <ul className={styles.guideList}>
            <li className={styles.guideItem}>Home</li>
            <li className={styles.guideItem}>Type's Of plant's</li>
            <li className={styles.guideItem}>Contact</li>
            <li className={styles.guideItem}>Privacy</li>
          </ul>
        </div>

        <div className={styles.subscribeSection}>
          <h3 className={styles.sectionTitle}>For Every Update.</h3>
          <div className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter Email"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeButton}>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <div className={styles.socialLinks}>
          <span className={styles.socialIcon}>FB</span>
          <span className={styles.socialIcon}>TW</span>
          <span className={styles.socialIcon}>LI</span>
        </div>
        <div className={styles.copyright}>FloraVision © all right reserve</div>
      </div>
    </footer>
  );
};

export default Footer;
