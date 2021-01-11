import React from "react";

import "./Home.scss";

const Home = () => {
  return (
    <React.Fragment>
      <main className="page-main">
        <div className="page-main__home home">
          <h1 className="home__title">Hello i'm Anastasia Titova</h1>
          <p className="home__content">frontend developer</p>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
