import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { DiaryProvider } from './contexts/DiaryContext'
import App from './components/App/App.lazy'


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <DiaryProvider>
      <App />
    </DiaryProvider>
  </React.StrictMode>
);
