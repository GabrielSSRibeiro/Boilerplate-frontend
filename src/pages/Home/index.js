import React from "react";
import { useHistory } from "react-router-dom";
//  import api from "../../services/api";

function Home() {
  const history = useHistory();

  //   useEffect(() => {
  //   api.get("items").then((response) => {
  //     setItems(response.data);
  //   });
  // }, []);

  return (
    <div className="Home-container">
      <h1>Hello World</h1>
    </div>
  );
}

export default Home;
