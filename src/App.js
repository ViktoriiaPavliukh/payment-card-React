import React from "react";
import bgMobile from "./images/bg-main-mobile.png";
import bgDesktop from "./images/bg-main-desktop.png";

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
          <div>
            <article>Front credit card</article>
            <article>Back credit card</article>
          </div>
          <div>form</div>
        </div>
      </section>
    </>
  );
}

export default App;
