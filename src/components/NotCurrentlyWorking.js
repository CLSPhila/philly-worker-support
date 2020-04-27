import React from "react";
import MultipleChoice from "./MultipleChoice";

export default function (props) {
  return (
    <multiplechoice
      {...props}
      question="i am not currently working, and i'm looking for help because:"
      label=""
    >
      <option value="sickleave">
        fired for taking sick leave or trying to take sick leave.
      </option>
      <option value="sickcare">
        fired because i couldn’t work, had to care for someone who was sick.
      </option>
      <option value="childcare">
        fired because i couldn’t work due to childcare
      </option>
      <option value="workingconditions">
        fired because i complained about working conditions or refused to work
        under bad conditions
      </option>
      <option value="other">not working for any other reason</option>
    </multiplechoice>
  );
}
