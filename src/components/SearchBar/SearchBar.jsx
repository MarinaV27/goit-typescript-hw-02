import { useState } from 'react';
import css from "./SearchBar.module.css";


export default function SearchBar({ onSubmit }) {
   const [query, setQuery] = useState ("");

   const handleSubmit = event => {
    event.preventDefault();
    
      onSubmit(query);
      setQuery('');
    };
    return (
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button className={css.btn} type="submit">
           
          </button>
          <input
            className={css.input}
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}

  
