import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'

import App from './App.jsx'
import DashLayout from './pages/DashLayout/DashLayout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashLayout/>}>
          <Route index element={<App/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
