"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Blogs = () => {
    const blogs = [{ date: "Sep 2018", name: "a" }, { date: "Nov 2019", name: "b" }, { date: " Dec 2020", name: "c" }];
    return (<material_1.TableContainer component={material_1.Paper} sx={{ position: "relative", width: "80%", margin: "25px auto" }}>
      <material_1.Table sx={{ minWidth: 650, backgroundColor: "#011E22", borderCollapse: "separate", borderSpacing: "15px" }} aria-label="simple table">
        <material_1.TableHead>
          <material_1.TableRow>
            <material_1.TableCell align="center" sx={{ color: "white", width: "20%", border: "0px" }}></material_1.TableCell>
            <material_1.TableCell align="center" sx={{ color: "white", border: "0px" }}></material_1.TableCell>
          </material_1.TableRow>
        </material_1.TableHead>
        <material_1.TableBody>
          {blogs.map(element => {
            return (<material_1.TableRow key={element.name} sx={{ border: "0px", padding: "0px" }}>
                <material_1.TableCell sx={{ color: "white", borderBottom: "1px solid rgba(224, 224, 224, 0.1)", borderRight: "1px solid rgba(224, 224, 224, 0.1)" }} component="th" scope="row">
                  {element.date}
                </material_1.TableCell>
                <material_1.TableCell sx={{ color: "white", borderBottom: "1px solid rgba(224, 224, 224, 0.1)" }} align="center">{element.name}</material_1.TableCell>
              </material_1.TableRow>);
        })}

        </material_1.TableBody>
      </material_1.Table>
    </material_1.TableContainer>);
};
exports.default = Blogs;
