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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="mt-10 mx-5 lg:grid lg:grid-cols lg:gap-8">
            <article className="front-card p-5 flex flex-col justify-between">
              <img src={logo} alt="logo" className="w-20 lg:w-28" />
              <div className="text-white">
                <h2 className="text-xl mb-6  tracking-widest lg:text-4xl">
                  1234 5678 9012 3456
                </h2>
                <ul className="flex items-center justify-between uppercase text-xl tracking-widest text-base lg:text-xl">
                  <li>Thomas Sankara</li>
                  <li>00/00</li>
                </ul>
              </div>
            </article>
            <article className="back-card relative lg:ml-20">
              <p className="absolute right-10 text-xl text-white tracking-widest">
                123
              </p>
            </article>
          </div>
          <div>form</div>
        </div>
      </section>
    </>
  );
}

export default App;
