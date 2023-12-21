import React, { useEffect } from 'react';
import css from './modal.module.css';

export function Modal({ onCloseModal, item }) {
  // const handleEsc = e => {
  //   if (e.code === 'Escape') {
  //     onCloseModal();
  //   }
  // };

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    });
  });

  const handleImageClick = e => {
    e.stopPropagation();
  };

  return (
    <div className={css.overlay} onClick={onCloseModal}>
      <div>
        <img src={item} alt="" onClick={handleImageClick} />
      </div>
    </div>
  );
}