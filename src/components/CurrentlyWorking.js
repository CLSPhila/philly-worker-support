import React, { useState } from "react";
import { updateAnswer } from "../actions";

export default function (props) {
  const { dispatch } = props;

  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAnswer("currentlyWorkingReasonForSeekingHelp", answer));
  };

  return (
    <div>
      <h1> I am currently working. What if I want or need to work less?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="currentlyWorking">I need to work less because:</label>
        <select id="currentlyWorking" onChange={handleChange} value={answer}>
          <option value="IamSick">I need time off because I am sick.</option>
          <option value="careForSick">
            I need time off to care for someone who is sick.
          </option>
          <option value="childCare">
            I need time off to care for a child whose school/daycare is closed.{" "}
          </option>
          <option value="reducedHours">My job reduced my hours.</option>
        </select>
        <input type="submit" value="Next" />
      </form>
    </div>
  );
}
