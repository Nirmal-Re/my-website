import styles from "./scss/Home.module.scss";
// import meCutOut from "../images/me-removebg.png";
import { ImageCard } from "./subComponents";

const Home = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={`${styles.hopePageSubContainer} descriptionText`}>
        I am Monkey D. Luffy. And I am going to be the king of pirates{" "}
      </div>
      <div className={`${styles.hopePageSubContainer} descriptionText`}>
        <ImageCard />
      </div>
    </div>
  );
};

export default Home;
