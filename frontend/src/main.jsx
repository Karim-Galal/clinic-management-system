import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "@/app/router";
import AuthBootstrap from "@/app/router/AuthBootstrap";


import "@/app/i18n";
import useThemeStore from "@/app/store/themeStore";
import useLanguageStore from "@/app/store/languageStore";




import "@/styles/index.css";

useThemeStore.getState().initializeTheme();
useLanguageStore.getState().initializeLanguage();


createRoot(document.getElementById('root')).render(
  
  <AuthBootstrap>
    <RouterProvider router={router} />
  </AuthBootstrap>
)
