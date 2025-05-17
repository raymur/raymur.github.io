import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes";
import './index.css'
import "@radix-ui/themes/styles.css";
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
      <Theme accentColor="crimson"  appearance="dark" grayColor="sand" radius="large" scaling="95%">

  <StrictMode>
      <App />
  </StrictMode>,
    </Theme>
)
