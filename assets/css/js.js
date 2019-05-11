import purify from "purify-css";
const purify = require("purify-css");

let content = "../../index.html";
let css = "screen.css";
let options = {
  output: "output.css"
};
purify(content, css, options);
