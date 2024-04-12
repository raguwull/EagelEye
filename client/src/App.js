import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <input type="text" value={userEmail} readOnly />
      <button onClick={getData}>Submit</button>
      {userData && (
        <div>
          <p>{userData}</p>
        </div>
      )}
    </div>
  );
}

export default App;
