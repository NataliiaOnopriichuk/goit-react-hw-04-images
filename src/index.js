import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';


export const IsDataImagesContext = createContext();
export const IsQueryContext = createContext();
export const PageContext = createContext();


const IsDataImagesContextProvider = ({ children }) => {
  const [dataImages, setDataImages] = useState([]);
  return (
    <IsDataImagesContext.Provider
      value={{ dataImages, setDataImages}}
    >
      {children}
    </IsDataImagesContext.Provider>
  );
}

const IsQueryContextProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  return (
    <IsQueryContext.Provider
      value={{ query, setQuery}}
    >
      {children}
    </IsQueryContext.Provider>
  );
}

const PageContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  return (
    <PageContext.Provider
      value={{ page, setPage}}
    >
      {children}
    </PageContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsDataImagesContextProvider>
      <IsQueryContextProvider>
        <PageContextProvider>
           <App />
        </PageContextProvider>
        </IsQueryContextProvider>
    </IsDataImagesContextProvider>
  </React.StrictMode>
);