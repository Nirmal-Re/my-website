import React from "react";
import { Link } from "react-router-dom";
import styles from "./scss/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarContainerLeft}>
        <Link to="/">HOME</Link>
      </div>
      <div className={styles.navbarContainerRight}>
        <Link to="/blogs">BLOGS</Link>
        <Link to="/projects">PROJECTS</Link>
      </div>
    </nav>
  );
};

export default Navbar;
