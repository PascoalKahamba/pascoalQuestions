import React from "react";

const GeneralEstructure = ({
  question,
  options,
  value,
  onChange,
  id,
  active,
}) => {
  console.log(active);
  return (
    <section className="container">
      <h1>{question}</h1>
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
          <br />
        </label>
      ))}
    </section>
  );
};

export default GeneralEstructure;
