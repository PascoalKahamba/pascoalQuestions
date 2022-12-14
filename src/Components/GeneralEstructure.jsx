import React from "react";

const GeneralEstructure = ({
  question,
  options,
  value,
  onChange,
  id,
  active,
  reply,
}) => {
  const isChoosed = value !== "";

  if (active === true)
    return (
      <section className="container">
        <h1>{question}</h1>
        {options.map((option) => {
          const thisIsCorrect = isChoosed && reply === option;
          const thisIsInCorrect =
            isChoosed && reply !== option && option === value;
          const labelStyles = {};
          if (thisIsCorrect) labelStyles.color = "green";
          if (thisIsInCorrect) labelStyles.color = "red";
          return (
            <label key={option} className="children" style={labelStyles}>
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
          );
        })}
      </section>
    );
  else return null;
};

export default GeneralEstructure;
