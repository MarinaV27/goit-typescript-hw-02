import { useState, FormEvent } from "react";
import css from "./SearchBar.module.css";
import { toast } from "react-hot-toast";
import { TbSearch } from "react-icons/tb";
import { F, S } from "vite/dist/node/types.d-aGj9QkWt";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
