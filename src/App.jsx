import React from "react";
import { useState } from "react";
import "./App.css";
import GeneralEstructure from "./Components/GeneralEstructure";
import ShowsCorrectsResult from "./Components/ShowsCorrectsResult";
import ShowsIncorrectsResult from "./Components/ShowsIncorrectsResult";
const questions = [
  {
    question: "Qual método é utilizado para criar componentes? ",
    options: [
      "React.makeComponent",
      "React.createComponent",
      "React.createElement",
    ],
    reply: "React.createElement",
    id: "p1",
  },
  {
    question: "Como importamos um componente externo?",
    options: [
      "import Component from './Components'",
      " requere('./Component')",
      "import 'Component'",
    ],
    reply: "import Component from './Components'",
    id: "p2",
  },
  {
    question: "Qual Hook não é nativo? ",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    reply: "useFetch()",
    id: "p3",
  },
  {
    question: "Qual palavra deve ser utiliza para criarmos um Hook? ",
    options: ["set", "get", "use"],
    reply: "use",
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
  const corrects = questions.filter(({ reply, id }) => replys[id] === reply);
  const incorrects = questions.filter(({ reply, id }) => replys[id] !== reply);

  function handleChange({ target }) {
    SetReplys({ ...replys, [target.id]: target.value });
  }
  function EndResult() {
    setResult(`Você acertou: ${corrects.length} de ${questions.length}`);
    console.log(corrects);
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
          corrects={corrects}
          active={slides === index}
          key={question.id}
          onChange={handleChange}
          value={replys[question.id]}
        />
      ))}
      {result ? (
        <>
          <p className="totalCorrects">{result}</p>

          {corrects.length !== questions.length && (
            <>
              {corrects.length > 0 && (
                <ShowsCorrectsResult corrects={corrects} />
              )}
              <ShowsIncorrectsResult incorrects={incorrects} />
            </>
          )}
        </>
      ) : (
        <button onClick={handleClick}>Próximo</button>
      )}
    </form>
  );
}

export default App;
