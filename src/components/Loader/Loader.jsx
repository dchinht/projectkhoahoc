/* eslint-disable no-unused-vars */
import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center fixed z-50">
      <section className="container mt-[-100px]">
      <h1 style={{ marginTop:'150px' }}>L I A M . A C A D E M Y </h1>
        <div>
          <div>
            <span className="one h6" />
            <span className="two h3" />
          </div>
        </div>
        <div>
          <div>
            <span className="one h1" />
            <span className="two h4" />
          </div>
        </div>
        <div>
          <div>
            <span className="one h5" />
            <span className="two h2" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loader;
