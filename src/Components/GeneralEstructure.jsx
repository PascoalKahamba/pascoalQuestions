import React from "react";

const questions = [
  {
    question: "Quem fez este aplicativo? ",
    reply: "Pascoal Kahamba",
    reply: "Francisco Fetapi",
    reply: "Adriano Ngunga",
    reply: "Feliciano Ndumbo",
  },
];
const GeneralEstructure = () => {
  return (
    <div className="generalClass">
      {questions.map(({ question, reply }) => (
        <div key={question}>
          <h1>{question}</h1>
          <p>{reply}</p>
        </div>
      ))}
    </div>
  );
};

export default GeneralEstructure;
