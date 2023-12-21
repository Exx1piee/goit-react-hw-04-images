import React from 'react';
import { useState } from 'react';
import css from './searchbar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [inputData, setInputData] = useState('');

  const onChangeInput = e => {
    setInputData(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputData === '') {
      alert('Please, fill input');
      return;
    }
    onSubmit(inputData);

    setInputData('');
  };

  return (
    <header className={css.search}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.searchBtn} type="submit">
          <span>Search</span>
        </button>

        <input
          name="inputData"
          value={inputData}
          onChange={onChangeInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
      </form>
    </header>
  );
};

export default SearchBar;