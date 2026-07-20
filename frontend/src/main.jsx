import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "@/app/router";

import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //   <App />
  <RouterProvider router={router} />
)
