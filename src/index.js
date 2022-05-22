import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';


function MyRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);


