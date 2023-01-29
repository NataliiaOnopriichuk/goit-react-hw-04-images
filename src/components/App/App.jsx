import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import s from './App.module.css';
import React, { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <div className={s.App}>
      <Searchbar />
      <ImageGallery openModal={toggleModal} />
      {showModal && <Modal closeModal={toggleModal} />}
    </div>
  );
}
