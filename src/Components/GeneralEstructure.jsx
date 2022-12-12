import React from "react";

const GeneralEstructure = ({ question, options, value, onChange, id }) => {
  return (
    <fieldset className="container">
      <legend>{question}</legend>
      {options.map((option) => (
        <label key={option} className="children">
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={onChange}
            id={id}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default GeneralEstructure;
