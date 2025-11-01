import React from "react";
import styles from "../styles/HeroSection.module.css";
import { FaCaretRight } from "react-icons/fa";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Earth's Exhale</h1>
        <p className={styles.description}>
          "Earth Exhale" symbolizes the purity and vitality of the Earth's
          natural
          <br />
          environment and its essential role in sustaining life.
        </p>
        <div className={styles.buttons}>
          <Button>Buy Now</Button>
          <div className="flex">
            <button className={styles.demoButton}>
              <FaCaretRight className={styles.pause} />
            </button>
            <p className={styles.live}>Live Demo...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
