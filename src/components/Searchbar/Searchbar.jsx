import css from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';
import { memo, useContext, useState } from 'react';
import {
  DataImagesContext,
  PageContext,
  QueryContext,
} from 'service/serviceContext';

export const Searchbar = memo(() => {
  const [inputValue, setInputValue] = useState('');
  const { setQuery } = useContext(QueryContext);
  const { setDataImages } = useContext(DataImagesContext);
  const { setPage } = useContext(PageContext);

  const onChangeInputValue = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setQuery(inputValue);
    setPage(1);
    setDataImages([]);
    setInputValue('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span>
            <BsSearch className={css.SearchFormButtonLabel} />
          </span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          placeholder="Search images and photos"
          onChange={onChangeInputValue}
        />
      </form>
    </header>
  );
});
