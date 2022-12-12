import React from "react";
import { useState } from "react";
import "./App.css";
import GeneralEstructure from "./Components/GeneralEstructure";
const questions = [
  {
    question: "Quem fez este aplicativo? ",
    options: [
      "Pascoal Kahamba",
      "Francisco Fetapi",
      "Adriano Ngunga",
      "Feliciano Ndumbo",
    ],
    reply: "Pascoal Kahamba",
    id: "p1",
  },
  {
    question: "Quantas provincias tem Angola? ",
    options: [20, 16, 18, 11],
    reply: 18,
    id: "p2",
  },
  {
    question: "Qual é o animal favorito do Pascoal? ",
    options: ["Gato", "Cachorro", "Galinha", "Leão"],
    reply: "Cachorro",
    id: "p3",
  },
  {
    question: "Quantas faculdades tem a provincia de Benguela? ",
    options: [5, 3, 12, 1],
    reply: 1,
    id: "p4",
  },
];
function App() {
  const [replys, SetReplys] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  return (
    <section className="App">
      {questions.map((question) => (
        <GeneralEstructure {...question} key={question.id} />
      ))}
    </section>
  );
}

export default App;
