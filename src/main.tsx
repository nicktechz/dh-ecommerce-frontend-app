import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Providers from './config/providers/Providers';
import './assets/css/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
);
