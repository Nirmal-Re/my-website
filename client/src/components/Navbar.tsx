import React from "react";
import { Link } from "react-router-dom";
import styles from "./scss/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarContainerLeft}>
        <Link to="/">HOME</Link>
        <Link to="/blogs">BLOGS</Link>
        <Link to="/projects">PROJECTS</Link>
      </div>
      <div className={styles.navbarContainerRight}>
       
      </div>
    </nav>
  );
};

export default Navbar;
