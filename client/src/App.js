import React, { useEffect, useState } from "react";
import axios from "axios";
import Welcome from "./Welcome";

function App() {
  const userEmail = "ragul123";
  const [userData, setUserData] = useState(null);

  const getData = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/home/${userEmail}`);
      setUserData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Welcome/>
    </div>
  );
}

export default App;
