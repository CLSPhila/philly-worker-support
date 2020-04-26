import React from "react";
import MultipleChoice from "./MultipleChoice";

export default function (props) {
  const { dispatch, questionId } = props;
  console.log("here!");
  return (
    <MultipleChoice
      {...props}
      question="I am not currently working, and I'm looking for help because:"
      label=""
    >
      <option value="sickLeave">
        Fired for taking sick leave or trying to take sick leave.
      </option>
      <option value="sickCare">
        Fired because I couldn’t work, had to care for someone who was sick.
      </option>
      <option value="childcare">
        Fired because I couldn’t work due to childcare
      </option>
      <option value="workingConditions">
        Fired because I complained about working conditions or refused to work
        under bad conditions
      </option>
      <option value="other">Not working for any other reason</option>
    </MultipleChoice>
  );
}
