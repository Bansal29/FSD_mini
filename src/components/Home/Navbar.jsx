import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles["nav-link"]}>
        Home
      </Link>
      <Link to="/about" className={styles["nav-link"]}>
        About
      </Link>
      <Link to="/products" className={styles["nav-link"]}>
        Products
      </Link>
      <div className={styles["search-container"]}>
        <input
          type="text"
          placeholder="Search..."
          className={styles["search-input"]}
        />
        <button type="submit" className={styles["search-button"]}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
