import { useEffect, useState } from "react";
import "./App.css";
import Videos from "./components/Videos/Vidoes";

function App() {
  const [videos, setVidoes] = useState([]);

  useEffect(() => {
    fetch("/data/mostPopular.json")
      .then((res) => res.json())
      .then((res) => setVidoes(res.items));
  }, []);

  return (
    <>
      <Videos videos={videos} />
    </>
  );
}

export default App;
