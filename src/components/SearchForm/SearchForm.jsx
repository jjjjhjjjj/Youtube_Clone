import { useState } from "react";

export default function SearchForm({ search, onSearch }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }

    onSearch(text);
    //setText("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="search"
        value={text}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}
