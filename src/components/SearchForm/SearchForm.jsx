import { useState } from "react";
import styles from "./SearchForm.module.css";
import { FiSearch } from "react-icons/fi";

export default function SearchForm({ onSearch }) {
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
    <form className={styles.form}>
      <input
        type="text"
        placeholder="search"
        className={styles.input}
        value={text}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button} onClick={handleSubmit}>
        <FiSearch />
      </button>
    </form>
  );
}
