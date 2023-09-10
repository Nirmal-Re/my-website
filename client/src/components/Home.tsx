import styles from "./scss/Home.module.scss";
import meCutOut from "../images/me-no-background-reduced.png";
import meCutOut0 from "../images/me-removebg.png";
import { ImageCard } from "./subComponents/index.js";


const Home = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={`${styles.homePageSubContainerLeft}`}>
       <img src={meCutOut} alt="" className={styles.photo}/>
       <h1 className={`${styles.intro}`}> Hi! I'm Nirmal <br></br>
        A programmer
        </h1>
      </div>
      <div className={`${styles.homePageSubContainerRight}`}>
        <button>CV</button>
        <p className="descriptionText"> I love coding and self-improvement. <br/> In this website, you will find my projects and blogs I have written</p>
      </div>
      
    </div>
  );
};

export default Home;
