import React from "react";

const ShowsResult = () => {
  function showsResult(elem) {
    elem.map(({ question, reply }) => (
      <div key={reply}>
        <h2>{question}</h2>
        <p>{reply}</p>
      </div>
    ));
  }
  return <div></div>;
};

export default ShowsResult;
