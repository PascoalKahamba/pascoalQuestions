import React from "react";

const ShowsResult = ({ corrects, incorrects, questions }) => {
  return (
    <>
      <div className="container">
        <h2>Você acertou as seguintes questões.</h2>
        {corrects.map(({ question, reply }) => (
          <div key={reply}>
            <h4>{question}</h4>
            <p>{reply}</p>
          </div>
        ))}
      </div>

      <div className="container">
        <h2>Você errou as seguintes questões.</h2>
        {incorrects.map(({ question, reply }) => (
          <div key={reply}>
            <h4>{question}</h4>
            <p>{`Resposta certa: ${reply}`}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowsResult;
