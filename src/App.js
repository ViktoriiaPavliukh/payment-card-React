import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import Success from "./components/succes";
import bgMobile from "./images/bg-main-mobile.png";
import bgDesktop from "./images/bg-main-desktop.png";
import logo from "./images/card-logo.svg";

function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("01/24");
  const [cvc, setCvc] = useState("");

  return (
    <>
      <section>
        <div className="absolute -z-10 w-full">
          <picture>
            <source media="(min-width: 768px)" srcSet={bgDesktop} />
            <img src={bgMobile} alt="bg-mobile" className="w-full md:w-1/3" />
          </picture>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="mt-10 mx-5 grid grid-cols-1">
            <article className="front-card p-5 flex flex-col justify-between">
              <img src={logo} alt="logo" className="w-20 lg:w-28" />
              <div className="text-white">
                <h2 className="text-xl mb-6  tracking-widest lg:text-4xl">
                  {number}
                </h2>
                <ul className="flex items-center justify-between uppercase text-xl tracking-widest text-base lg:text-xl">
                  <li>{name}</li>
                  <li>{format(new Date(date), "MM / yy")}</li>
                </ul>
              </div>
            </article>
            <article className="back-card relative lg:ml-20">
              <p className="absolute right-10 text-lg lg:text-xl text-white tracking-widest">
                {cvc}
              </p>
            </article>
          </div>
          <div className="pt-8 px-5 pb-20">
            {!confirmed && (
              <form className="flex flex-col justify-center lg:h-screen gap-8 max-w-lg md:ml-6">
                <div>
                  <label htmlFor="cardholder_name">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardholder_name"
                    id="cardholder_name"
                    placeholder="e.g. Paul Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setNumber(e.target.value)}
                    value={number
                      .replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()}
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
                      onChange={(e) => setDate(e.target.value)}
                      value={date}
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
                      onChange={(e) => setCvc(e.target.value)}
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
