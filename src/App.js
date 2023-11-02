import React from "react";
import bgMobile from "./images/bg-main-mobile.png";
import bgDesktop from "./images/bg-main-desktop.png";
import logo from "./images/card-logo.svg";

function App() {
  return (
    <>
      <section>
        <div className="absolute -z-10">
          <picture>
            <source media="(min-width: 1024px)" srcSet={bgDesktop} />
            <img src={bgMobile} alt="bg-mobile" />
          </picture>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="mt-10 mx-5">
            <article className="front-card p-5">
              <img src={logo} alt="logo" />
            </article>
            <article className="back-card"></article>
          </div>
          <div>form</div>
        </div>
      </section>
    </>
  );
}

export default App;
