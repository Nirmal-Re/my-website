"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Home_module_scss_1 = __importDefault(require("./scss/Home.module.scss"));
const me_no_background_reduced_png_1 = __importDefault(require("../images/me-no-background-reduced.png"));
const Home = () => {
    return (<div className={Home_module_scss_1.default.homePageContainer}>
      <div className={`${Home_module_scss_1.default.homePageSubContainerLeft}`}>
       <img src={me_no_background_reduced_png_1.default} alt="" className={Home_module_scss_1.default.photo}/>
       <h1 className={`${Home_module_scss_1.default.intro}`}> Hi! I'm Nirmal <br></br>
        A programmer
        </h1>
      </div>
      <div className={`${Home_module_scss_1.default.homePageSubContainerRight}`}>
        <button>CV</button>
        <p className="descriptionText"> I love coding and self-improvement. <br /> In this website, you will find my projects and blogs I have written</p>
      </div>
      
    </div>);
};
exports.default = Home;
