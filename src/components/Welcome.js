import React from "react";

export default function () {
  console.log("Welcomer");
  return (
    <div>
      <h1> Welcome. </h1>;<h2> Are you currently working? </h2>
      <form>
        <input type="button" value="Yes, I am currently working." />
        <input type="button" value="No, I am not currently working." />
      </form>
    </div>
  );
}
