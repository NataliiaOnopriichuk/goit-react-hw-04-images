import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import css from './App.module.css';
import React, { useContext, useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { DataImagesContext } from 'service/serviceContext';

export function App() {
  const [modalData, setModalData] = useState(null);
  const { dataImages } = useContext(DataImagesContext);

  const toggleModal = (data = null) => {
    setModalData(data);
  };

  return (
    <div className={css.App}>
      <Searchbar />
      {dataImages && <ImageGallery openModal={toggleModal} />}
      {modalData && <Modal modalData={modalData} closeModal={toggleModal} />}
    </div>
  );
}
