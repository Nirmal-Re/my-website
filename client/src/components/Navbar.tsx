import React from "react";
import { Link } from "react-router-dom";
import styles from "./scss/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarContainerLeft}>
        <Link className={styles.link} to="/">
          HOME
        </Link>
        <Link className={styles.link} to="/blogs">
          BLOGS
        </Link>
        <Link className={styles.link} to="/projects">
          PROJECTS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
