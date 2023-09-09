"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Home_module_scss_1 = __importDefault(require("./scss/Home.module.scss"));
// import meCutOut from "../images/me-removebg.png";
const index_js_1 = require("./subComponents/index.js");
const Home = () => {
    return (<div className={Home_module_scss_1.default.homePageContainer}>
      <div className={`${Home_module_scss_1.default.hopePageSubContainer} descriptionText`}>
        I am Monkey D. Luffy. And I am going to be the king of pirates{" "}
      </div>
      <div className={`${Home_module_scss_1.default.hopePageSubContainer} descriptionText`}>
        <index_js_1.ImageCard />
      </div>
    </div>);
};
exports.default = Home;
