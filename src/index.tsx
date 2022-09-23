import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css"
import './index.css';
import Filmes from './pages/Filmes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Filmes />
  </React.StrictMode>
);
