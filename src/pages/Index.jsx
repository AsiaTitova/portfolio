import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Home from "../components/Home/Home";
import About from "../components/About/About";

const Index = () => {
  return (
    <React.Fragment>
      <Header/>
      <Home/>
      <About/>
      <Footer/>
    </React.Fragment>
  );
};

export default Index;
