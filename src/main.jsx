import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import App2 from './App2.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/2" element={<App2/>} />
        {/* <Route path="/corpo" element={<CorpoPage />} /> */}
      </Routes>
    </Router>
  </StrictMode>,
)
