"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar_module_scss_1 = __importDefault(require("./scss/Navbar.module.scss"));
const Navbar = () => {
    return (<nav className={Navbar_module_scss_1.default.navbarContainer}>
      <div className={Navbar_module_scss_1.default.navbarContainerLeft}>
        <react_router_dom_1.Link to="/">HOME</react_router_dom_1.Link>
      </div>
      <div className={Navbar_module_scss_1.default.navbarContainerRight}>
        <react_router_dom_1.Link to="/blogs">BLOGS</react_router_dom_1.Link>
        <react_router_dom_1.Link to="/projects">PROJECTS</react_router_dom_1.Link>
      </div>
    </nav>);
};
exports.default = Navbar;
