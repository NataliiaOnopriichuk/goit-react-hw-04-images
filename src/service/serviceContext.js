import { createContext, useState } from "react";

export const DataImagesContext = createContext();
export const QueryContext = createContext();
export const PageContext = createContext();


export const DataImagesContextProvider = ({ children }) => {
  const [dataImages, setDataImages] = useState([]);
  return (
    <DataImagesContext.Provider
      value={{ dataImages, setDataImages}}
    >
      {children}
    </DataImagesContext.Provider>
  );
}

export const QueryContextProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  return (
    <QueryContext.Provider
      value={{ query, setQuery}}
    >
      {children}
    </QueryContext.Provider>
  );
}

export const PageContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  return (
    <PageContext.Provider
      value={{ page, setPage}}
    >
      {children}
    </PageContext.Provider>
  );
}