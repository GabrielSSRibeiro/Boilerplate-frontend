import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  return (
    <div className="Home-container">
      <h1>Hello World</h1>
    </div>
  );
}

export default Home;
