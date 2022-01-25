import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import pokemons from '../../store/pokemons';

import { PokemonDetailsCard } from '../PokemonDetailsCard';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      pokemons.onCloseModal();
    }
  };

  const handleOverlayClick = evt => {
    if (evt.currentTarget === evt.target) {
      pokemons.onCloseModal();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleOverlayClick}>
      <div className={s.Modal}>
        <PokemonDetailsCard />
      </div>
    </div>,
    modalRoot,
  );
};

export { Modal };
