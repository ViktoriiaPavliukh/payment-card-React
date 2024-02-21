import React from "react";
import { useState } from "react";
import Success from "./components/succes";
import bgMobile from "./images/bg-main-mobile.png";
import bgDesktop from "./images/bg-main-desktop.png";
import logo from "./images/card-logo.svg";

function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("01/25");
  const [cvc, setCvc] = useState("");

  // function formatDate(dateString) {
  //   if (!dateString) return ""; // If dateString is null or undefined, return an empty string

  //   // Split dateString into month and year
  //   const [month, year] = dateString.split("/");
  //   if (!month || !year) return ""; // If month or year is empty, return an empty string

  //   // Ensure month and year are two digits
  //   const formattedMonth = month.padStart(2, "0");
  //   const formattedYear = year.length === 2 ? `${year}` : year; // If year is in YY format, convert it to YYYY format

  //   // Return formatted date
  //   return `${formattedMonth} / ${formattedYear}`;
  // }

  function formatDate(dateString) {
    if (!dateString) return ""; // If dateString is null or undefined, return an empty string

    // Split dateString into year and month
    const [year, month] = dateString.split("-");
    if (!month || !year) return ""; // If month or year is empty, return an empty string

    // Return formatted date
    return `${month.padStart(2, "0")} / ${year.slice(-2)}`;
  }
  const handleConfirm = () => {
    setConfirmed(true);
    setName("");
    setNumber("");
    setDate("01/25");
    setCvc("");
  };
  console.log("Selected Date:", date);
  return (
    <>
      <section className="flex justify-center md:justify-end">
        <div className="absolute -z-10 w-full">
          <picture className="lg:block md:hidden">
            <source media="(min-width: 768px)" srcSet={bgDesktop} />
            <img
              src={bgMobile}
              alt="bg-mobile"
              className="w-full md:w-1/2 hidden md:block"
            />
          </picture>
        </div>
        <div className="grid grid-cols-1 sm:gap-8 lg:gap-40 lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="mt-10 mx-5 grid grid-cols-1">
            <article className="front-card md:mb-14 p-5 flex flex-col justify-between">
              <img src={logo} alt="logo" className="w-20 lg:w-28" />
              <div className="text-white">
                <h2 className="text-xl mb-6  tracking-widest lg:text-4xl">
                  {number}
                </h2>
                <ul className="flex items-center justify-between uppercase text-xl tracking-widest text-base lg:text-xl">
                  <li>{name}</li>
                  <li>{formatDate(date)}</li>
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
                    maxLength={19}
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
                <button type="button" onClick={handleConfirm} className="btn">
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
