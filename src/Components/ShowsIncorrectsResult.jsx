import React from "react";

const ShowsResult = ({ incorrects }) => {
  return (
    <div className="container">
      <h2>Você errou as seguintes questões.</h2>
      {incorrects.map(({ question, reply }) => (
        <div key={reply}>
          <h4>{question}</h4>
          <p>{`Resposta certa: ${reply}`}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowsResult;
