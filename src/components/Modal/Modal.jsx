import s from './Modal.module.css';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ closeModal, modalData }) {
  useEffect(() => {
    window.addEventListener('keydown', closeModalOnEscape);

    return () => {
      window.removeEventListener('keydown', closeModalOnEscape);
    };
  });

  const closeModalOnEscape = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const closeModalOnBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={closeModalOnBackdropClick}>
      <div className={s.Modal}>
        <img src={modalData} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalData: PropTypes.string.isRequired,
};
