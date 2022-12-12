import React from "react";
import "./App.css";
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
  return (
    <div className="App generalClass">
      {questions.map(({ question, options, reply, id }) => (
        <div key={id}>
          <h1>{question}</h1>
          {options.map((item) => (
            <ul key={item}>
              <li>{item}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
