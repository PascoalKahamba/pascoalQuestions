import React from "react";

const ShowsCorrectsResult = ({ corrects }) => {
  return (
    <div className="container">
      <h2>Você acertou as seguintes questões.</h2>
      {corrects.map(({ question, reply }) => (
        <div key={reply}>
          <h4>{question}</h4>
          <p>{reply}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowsCorrectsResult;
