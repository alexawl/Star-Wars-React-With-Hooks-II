import React from "react";
import "./App.css";

import Characters from "./components/Characters";

import Header from "./components/Header";

import Footer from "./components/Footer";
//create your first component
function App() {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
 return (
    <React.Fragment>
      <Header />
      <Characters />
      <Footer />
    </React.Fragment>
  );
}

export default App;
