import styles from "./scss/Home.module.scss";
import cv from "../resources/pdf/cv.pdf";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homePageContainer}>
        <div className={`${styles.homePageSubContainerLeft}`}>
          <div className={`${styles.introContainer}`}>
            <p className={`${styles.intro}`}>
              Hi! I'm Nirmal, <br></br>a programmer
            </p>
          </div>
          <div className={styles.descriptionText}>
            <p className={`${styles.descriptionText}`}>
              I am a Computer Science student at the University of Surrey. I am
              passionate about programming and learning new technologies. I have
              done multiple projects in different languages and frameworks,
              which you can find in the projects section.
            </p>
            <p>
              <br></br>I am always looking for new opportunities to learn and
              grow.
            </p>
          </div>
          <table className={styles.tableForAddInfo}>
            <tr className={styles.tableElement}>
              <td className={styles.tableLeft}>Programming Languages</td>
              <td className={styles.tableRight}>
                Nodejs, Typescript, React, Python, Elixir, Java, HTML, CSS
              </td>
            </tr>
            <tr className={styles.tableElement}>
              <td className={styles.tableLeft}>Cloud Platform</td>
              <td className={styles.tableRight}>Azure</td>
            </tr>
            <tr className={styles.tableElement}>
              <td className={styles.tableLeft}>Main Skills</td>
              <td className={styles.tableRight}>Programming, Deploying</td>
            </tr>
          </table>
        </div>
        <div className={`${styles.homePageSubContainerRight}`}></div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.contact}>
        <p
          style={{ padding: "0px", margin: "0px" }}
          className={styles.descriptionText}
        >
          I am thrilled to answer any question you might have about my project
          {"->"}
        </p>
        <span></span>
        <div className={styles.cvAndEmail}>
          <p className={styles.email}>bhdnirmal99+mywebsite@gmail.com</p>
          <a href={cv} target="_blank" rel="noopener noreferrer">
            View CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
