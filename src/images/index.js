//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
//import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "./index.css";
//import your own components
import App from "./App";

//render your react application
ReactDOM.render(<App />, document.getElementById("root"));
