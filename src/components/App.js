// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogs, setDogs] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogs(data.message);

        setFetched(true);
      });
  }, []);

  if (!fetched) return <p>Loading ...</p>;

  return <div>{<img src={dogs} key={dogs} alt="A Random Dog" />}</div>;
}

export default App;
