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
    question: "Quais destes países faz parte do continente Africano? ",
    options: ["Argentina", "Angola", "Rússia", "Canada"],
    reply: "Angola",
    id: "p2",
  },
  {
    question: "Qual é o animal favorito do Pascoal? ",
    options: ["Gato", "Cachorro", "Galinha", "Leão"],
    reply: "Cachorro",
    id: "p3",
  },
  {
    question: "Qual é a provincia de Angola? ",
    options: ["Luanda", "Lubango", "Huambo", "Bie"],
    reply: "Luanda",
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
  function handleClick({ target }) {
    SetReplys({ ...replys, [target.id]: target.value });
  }
  return (
    <form className="App">
      {questions.map((question) => (
        <GeneralEstructure
          {...question}
          key={question.id}
          onChange={handleClick}
          value={replys[question.id]}
        />
      ))}
      <button>Proximo</button>
    </form>
  );
}

export default App;
