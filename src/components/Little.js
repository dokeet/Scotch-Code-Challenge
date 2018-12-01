import React, { useEffect } from "react";

function Little() {
  useEffect(() => {
    return () => alert("Goodbye!!");
  });
  return (
    <div style={{ marginBottom: "50px", border: "1px solid black" }}>
      <h5> Hi I'm Little and its nice to meet you!!!</h5>
    </div>
  );
}
export default Little;
