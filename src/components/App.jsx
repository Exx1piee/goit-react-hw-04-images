import React, { useEffect, useState, useCallback } from 'react';
import { SearchBar } from './SearchBar/searchbar';
import { ImageGallery } from './ImageGallery/imagegallery';
import { fetchImage } from 'FetchApi';
import { Loader } from './Loader/loader';
import { Button } from './Button/button';
import { Modal } from './Modal/modal';

export const App = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [error, setError] = useState('');
  const [totalHits, setTotalHits] = useState(0);

  const getImages = useCallback(async () => {
    if (!inputData) {
      return;
    }
    setIsLoading(true);
    try {
      const { hits, total } = await fetchImage(inputData, page);
      setTotalHits(total); 
      if (total) {
        setItems(prevState => [...prevState, ...hits]);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [inputData, page]);


  const formSubmit = newInputData => {
    if (newInputData !== inputData) {
      setInputData(newInputData);
      setPage(1);
      setItems([]);
    }
  };

  useEffect(() => {
    if (inputData) {
      getImages();
    }
  }, [inputData, page, getImages]);

  const handleClick = () => {
    setPage(prev => prev + 1);
  };

  const handleImageClick = imageUrl => {
    setModalImage(imageUrl);
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
    setModalImage('');
  };

  return (
    <>
      <SearchBar onSubmit={formSubmit} />
      <ImageGallery items={items} onImageClick={handleImageClick} />

      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
      {items.length > 0 && items.length < totalHits && !isLoading && <Button onClick={handleClick} />}
      {isShowModal && (
        <Modal
          isOpenModal={isShowModal}
          item={modalImage}
          onCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};
