import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import bag from "../assets/bag.png";
import { FaCaretRight } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={styles.navbar}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.brand}>FloraVision.</span>
      </div>
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="main-menu"
      >
        ☰
      </button>
      <ul
        id="main-menu"
        className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <div className="flex">
          <li>
            <a href="#">Plants Type</a>
          </li>
          <span>
            <FaCaretRight className={styles.drop} />
          </span>
        </div>
        <li>
          <a href="#">More</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className={styles.icons}>
        <img
          src={search}
          alt="#"
          className={styles.search}
          aria-label="Search"
        />
        <img src={bag} alt="#" className={styles.search} aria-label="Search" />
        <div className={styles.line}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
