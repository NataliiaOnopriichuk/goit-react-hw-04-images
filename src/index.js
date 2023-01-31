import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { DataImagesContextProvider, PageContextProvider, QueryContextProvider } from 'service/serviceContext';
import React from 'react';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataImagesContextProvider>
      <QueryContextProvider>
        <PageContextProvider>
           <App />
        </PageContextProvider>
        </QueryContextProvider>
    </DataImagesContextProvider>
  </React.StrictMode>
);