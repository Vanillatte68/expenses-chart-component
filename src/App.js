import logo from "./images/logo.svg";
import "./App.css";
import React from "react";
import Graph from "./component/chart";

function App() {
  return (
    <main>
      <section className="container max-w-sm flex flex-col gap-4">
        <div className="flex flex-row bg-soft-red rounded-lg p-7 justify-between">
          <div className="flex flex-col text-white">
            <p className="text-sm">My Balance</p>
            <p className="text-2xl font-bold">$921.48</p>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="bg-white rounded-lg p-7">
          <div className="flex flex-col gap-6 pb-7 border-b">
            <h1 className="font-bold text-2xl">Spending - Last 7 days</h1>
            <Graph />
          </div>
          <div className="pt-6 grid grid-cols-2 content-end align-between">
            <p className="text-medium-brown text-sm">Total this month</p>
            <p className="text-dark-brown self-end row-span-2 font-bold text-sm text-end">
              +2.4%
              <br />
              <span className="text-medium-brown font-normal text-sm text-end">
                from last month
              </span>
            </p>
            <p className="text-dark-brown font-bold text-3xl">$478.33</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
