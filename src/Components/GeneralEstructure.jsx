import React from "react";
import { useState } from "react";

const GeneralEstructure = ({ question, options }) => {
  return (
    <section className="generalClass">
      <h1>{question}</h1>
      {options.map((item) => (
        <ul key={item}>
          <li>{item}</li>
        </ul>
      ))}
    </section>
  );
};

export default GeneralEstructure;
