import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { IsDataImagesContext, IsQueryContext, PageContext } from 'index';

export function Searchbar() {
  const [inputValue, setInputValue] = useState('');
  const { setQuery } = useContext(IsQueryContext);
  const { setDataImages } = useContext(IsDataImagesContext);
  const { setPage } = useContext(PageContext);

  const onChangeInputValue = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  const resetInputValue = () => {
    setInputValue('');
  };

  const onSubmit = event => {
    event.preventDefault();
    setQuery(inputValue);
    setPage(1);
    setDataImages([]);
    resetInputValue();
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
}

// Searchbar.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
// };
