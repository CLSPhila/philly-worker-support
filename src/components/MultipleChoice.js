import React, { useState } from "react";
import { updateAnswer } from "../actions";

export default function (props) {
  const {
    dispatch,
    questionId,
    question,
    label,
    children,
    defaultAnswer,
  } = props;

  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    console.log("setting answer to: ");
    console.log(e.target.value);
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAnswer(questionId, answer));
  };

  return (
    <div>
      <h1> {question} </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor={questionId}> {label} </label>
        <select id={questionId} onChange={handleChange} value={answer}>
          <option disabled value="">
            -- select an option --
          </option>
          {children}
        </select>
        <input type="submit" value="Next" />
      </form>
    </div>
  );
}
