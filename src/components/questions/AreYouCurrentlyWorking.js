import React from "react";
import { updateAnswer } from "../../actions";

export default function (props) {
  const { dispatch } = props;
  const handleClick = (answer) => {
    return (e) => {
      dispatch(updateAnswer("areYouCurrentlyWorking", answer));
    };
  };

  return (
    <div>
      <h1> Welcome. </h1>;<h2> Are you currently working? </h2>
      <form>
        <input
          type="button"
          value="Yes, I am currently working."
          onClick={handleClick("yes")}
        />
        <input
          type="button"
          value="No, I am not currently working."
          onClick={handleClick("no")}
        />
      </form>
    </div>
  );
}
