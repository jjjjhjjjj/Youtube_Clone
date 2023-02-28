import { useEffect, useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";
import Videos from "./components/Videos/Vidoes";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyAT021ns2lO1JbJz7hxBIIjxMBvgQdVTPs";

function App() {
  const [videos, setVidoes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      getSearchVideos();
    } else {
      getMostPopularVideos();
    }
  }, [search]);

  const getMostPopularVideos = () => {
    fetch("/data/mostPopular.json")
      .then((res) => res.json())
      .then((res) => setVidoes(res.items));
  };

  const getSearchVideos = () => {
    // fetch("/data/search.json")
    fetch(
      `${BASE_URL}/search?key=${API_KEY}&part=snippet&q=${search}&maxResults=30`
    )
      .then((res) => res.json())
      .then((data) =>
        data.items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      )
      .then((items) => setVidoes(items));
  };

  return (
    <>
      <SearchForm search={search} onSearch={setSearch} />
      <Videos videos={videos} />
    </>
  );
}

export default App;
