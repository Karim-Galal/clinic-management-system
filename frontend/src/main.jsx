import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "@/app/router";

import "@/app/i18n";

import "@/styles/index.css";
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //   <App />
  <RouterProvider router={router} />
)
