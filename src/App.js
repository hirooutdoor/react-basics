import React from "react";

const App = () => {
  function handleClick() {
    alert("You clicked!");
  }

  const headingStyle = {
    color: "blue",
    fontSize: "46px"
  };

  return (
    <>
      <h1 style={headingStyle}>Hello World!</h1>
      <p>You are awesome!</p>
      <button onClick={handleClick}>Button</button>
    </>
  );
};

export default App;
