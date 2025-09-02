import React, { StrictMode } from 'react'; // Add this line
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Authprovider from './Context/Authprovider.jsx';


const root = document.getElementById('root');
createRoot(root).render(
  <StrictMode>
   <Authprovider>
      <App />
    </Authprovider>
 </StrictMode>
);