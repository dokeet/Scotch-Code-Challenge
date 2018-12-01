import React, { useState, useEffect } from "react";

function Four() {
  const [message, setMessage] = useState("What's happening this week?");
  
  useEffect(() => {
    setTimeout(() => {
      setMessage("I only know it's gon be lit!!");
    }, 5000);
  })
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 4</h2>
      <p>Status: {message}</p>
    </div>
  );
}

export default Four;
