import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { ThemeConfig } from './config/theme.config.tsx'
import './index.css'
import App from './App.tsx'


  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(

  <StrictMode>
    <ThemeConfig>
    <App />
    </ThemeConfig>
  </StrictMode>,
) 
