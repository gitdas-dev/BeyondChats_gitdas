import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Hero from './Hero.tsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Hero />} />
      <Route path="/integration" element={<App />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  </BrowserRouter>
</StrictMode>
);
