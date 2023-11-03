import React from "react";
import { useState } from "react";
import Success from "./components/succes";
import bgMobile from "./images/bg-main-mobile.png";
import bgDesktop from "./images/bg-main-desktop.png";
import logo from "./images/card-logo.svg";

function App() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      <section>
        <div className="absolute -z-10 max-h-80">
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
                  <li>Paul Smith</li>
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
          <div>
            {!confirmed && (
              <form className="flex flex-col justify-center h-screen gap-8 max-w-lg">
                <div>
                  <label htmlFor="cardholder_name">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardholder_name"
                    id="cardholder_name"
                    placeholder="e.g. Paul Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="card_number">Card Number</label>
                  <input
                    type="text"
                    name="card_number"
                    id="card_number"
                    placeholder="e.g. 1234 5678 9012 3456"
                    maxLength={19}
                    required
                  />
                </div>
                <article className="flex item-center justify-between gap-8">
                  <div className="flex-1">
                    <label htmlFor="expiry_date">Exp.Date (MM/YY)</label>
                    <input
                      type="month"
                      name="expiry_date"
                      id="expiry_date"
                      placeholder="MM YY"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="cvc">CVC</label>
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      placeholder="e.g. 123"
                      maxLength={3}
                      required
                    />
                  </div>
                </article>
                <button onClick={() => setConfirmed(true)} className="btn">
                  Confirm
                </button>
              </form>
            )}
            {confirmed && <Success setConfirmed={setConfirmed} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
