"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const components_1 = require("./components");
const request_js_1 = require("./utils/request.js");
const App = () => {
    // useEffect(() => {
    //   const apihit = "/hello";
    //   getRequest(apihit);
    // });
    return (<react_router_dom_1.BrowserRouter>
      <div className="pageContainer">
        <components_1.Navbar />
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<components_1.Home />}></react_router_dom_1.Route>
          <react_router_dom_1.Route path="/blogs" element={<components_1.Blogs />}></react_router_dom_1.Route>
          <react_router_dom_1.Route path="/blogs/:id" element={<components_1.BlogDetails />}/>
          <react_router_dom_1.Route path="/projects" element={<components_1.Projects />}></react_router_dom_1.Route>
        </react_router_dom_1.Routes>
      </div>
    </react_router_dom_1.BrowserRouter>);
};
exports.default = App;
