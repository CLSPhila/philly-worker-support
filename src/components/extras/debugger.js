import React from "react";

export const Debugger = (props) => {
  const { state } = props;
  return (
    <div style={{ backgroundColor: "grey", padding: "0.5rem" }}>
      <p>Debugging info for interview state:</p>
      <pre>{JSON.stringify(state, null, 4)}</pre>
    </div>
  );
};
