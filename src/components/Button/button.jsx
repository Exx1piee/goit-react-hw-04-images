import React from 'react';
import css from './button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={css.loadBtn} onClick={onClick}>
      Load more{' '}
    </button>
  );
};