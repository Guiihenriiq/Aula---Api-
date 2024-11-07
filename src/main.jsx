import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home-pages.jsx';
import { CountryPage } from './pages/country-page.jsx';
const router = createBrowserRouter ([
  { path: "/", element:<><HomePage/></>},
  { path: "/perfil", element:<><CountryPage/></>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);


