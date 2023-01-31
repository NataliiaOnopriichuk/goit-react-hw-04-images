import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import { getSearchedNewsApi } from 'service/api.js';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import {
  DataImagesContext,
  PageContext,
  QueryContext,
} from 'service/serviceContext';

export function ImageGallery({ openModal }) {
  const { dataImages, setDataImages } = useContext(DataImagesContext);
  const { query } = useContext(QueryContext);
  const { page, setPage } = useContext(PageContext);
  const [setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getSearchedImages = async () => {
      setIsLoading(true);
      const data = await getSearchedNewsApi(query, page);
      setDataImages(prev => [...prev, ...data.hits]);
    };
    getSearchedImages()
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [query, page, setDataImages, setError]);

  const changePageOnClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <ul className={css.ImageGallery}>
        {dataImages.map(el => (
          <ImageGalleryItem key={el.id} {...el} openModal={openModal} />
        ))}
      </ul>
      <div style={{ textAlign: 'center' }}>
        {!isLoading && dataImages.length >= 12 && (
          <Button onClick={changePageOnClick} />
        )}
        {isLoading && <Loader />}
      </div>
    </>
  );
}

ImageGallery.protoTypes = {
  openModal: PropTypes.func.isRequired,
};
