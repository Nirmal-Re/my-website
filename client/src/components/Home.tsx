import styles from "./scss/Home.module.scss";
import cv from "../pdf/cv.pdf";
const Home = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={`${styles.homePageSubContainerLeft}`}>
        <div className={`${styles.introContainer}`}>
          <p className={`${styles.intro}`}>
            {" "}
            Hi!<br></br> I'm{" "}
            <span className={`${styles.fontColor}`}>Nirmal</span>, <br></br>A
            programmer
          </p>
        </div>
      </div>
      <div className={`${styles.homePageSubContainerRight}`}>
        <a href={cv} target="_blank" rel="noopener noreferrer">
          <button className={`${styles.cvButton}`}>CV</button>
        </a>
        <p className={`${styles.descriptionText}`}>
          I love coding and learning. <br /> In this website, you will find my
          projects and blogs I have written. Though, there are none currently.
        </p>
      </div>
    </div>
  );
};

export default Home;
