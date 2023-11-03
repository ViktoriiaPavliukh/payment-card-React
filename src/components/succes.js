import tick from "../images/icon-complete.svg";

export default function Success({ setConfirmed }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen max-w-lg mx-auto">
        <img src={tick} alt="success" className="block mx-auto" />
        <h1 className="text-slate-800 text-3xl my-6 uppercase text-center">
          Thank you
        </h1>
        <p className="text-slate-400 text-center ">
          We've added your card details
        </p>{" "}
        <button
          onClick={() => setConfirmed(false)}
          className="btn block mx-auto mt-10 w-full"
        >
          Continue
        </button>
      </div>
    </>
  );
}
