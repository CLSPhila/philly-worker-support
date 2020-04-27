import React from "react";
import MultipleChoice from "../MultipleChoice";

export default function (props) {
  return (
    <MultipleChoice
      {...props}
      question="I am currently working. What if I want or need to work less?"
      label="I am currently working. What if I want or need to work less?"
    >
      <option value="IamSick">I need time off because I am sick.</option>
      <option value="careForSick">
        I need time off to care for someone who is sick.
      </option>
      <option value="childCare">
        I need time off to care for a child whose school/daycare is closed.{" "}
      </option>
      <option value="reducedHours">My job reduced my hours.</option>
    </MultipleChoice>
  );
}
