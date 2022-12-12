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
  const [slides, setSlides] = useState(0);
  const [result, setResult] = useState(null);

  function handleChange({ target }) {
    SetReplys({ ...replys, [target.id]: target.value });
  }
  function EndResult() {
    const currects = questions.filter(({ reply, id }) => replys[id] === reply);
    setResult(`Você acertou: ${currects.length} de ${questions.length}`);
  }
  function handleClick(event) {
    event.preventDefault();
    if (slides < questions.length - 1) {
      setSlides(slides + 1);
    } else {
      setSlides(slides + 1);
      EndResult();
    }
  }

  return (
    <form className="App">
      {questions.map((question, index) => (
        <GeneralEstructure
          {...question}
          active={slides === index}
          key={question.id}
          onChange={handleChange}
          value={replys[question.id]}
        />
      ))}
      {result ? (
        <p>{result}</p>
      ) : (
        <button onClick={handleClick}>Proximo</button>
      )}
    </form>
  );
}

export default App;
