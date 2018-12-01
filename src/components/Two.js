import React, { useState } from "react";

function Two() {
  const [activeUser, setUser] = useState("Chris");

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2</h2>
      <p>Active User is: {activeUser}</p>
      <button onClick={() => setUser("Bolingo!")}>Change Me!</button>
    </div>
  );
}

export default Two;
