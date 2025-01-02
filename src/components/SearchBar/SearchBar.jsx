import { useState } from "react";
import css from "./SearchBar.module.css";
import { toast } from "react-hot-toast";
import { TbSearch } from "react-icons/tb";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("This didn't work.");
      return;
    }

    onSubmit(query);
    setQuery("");
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit">
          <TbSearch />
        </button>
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
