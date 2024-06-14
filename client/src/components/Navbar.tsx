import React from "react";
import { Link } from "react-router-dom";
import styles from "./scss/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarContainerLeft}>
        <Link className={styles.link} to="/">
          nb.
        </Link>
      </div>
      <div className={styles.navbarContainerRight}>
        <Link className={styles.link} to="/blogs">
          Blogs
        </Link>
        <Link className={styles.link} to="/projects">
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
