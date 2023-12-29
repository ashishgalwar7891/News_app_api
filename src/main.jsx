import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import { NewsAppProvider } from "./Context/NewsAppProvider.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewsAppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NewsAppProvider>
  </React.StrictMode>
);
