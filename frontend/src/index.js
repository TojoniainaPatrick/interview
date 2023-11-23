import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Modal from './components/modal/Modal'
import { CustomeContextProvider } from './context/CustomeContext'
import ChartExample from './components/chart/ChartExample'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CustomeContextProvider>
      <Modal />
      <BrowserRouter>
        <Routes>
          <Route index element = { <Login /> } />
          <Route path = "/*" element = { <App /> } />
        </Routes>
      </BrowserRouter>
    </CustomeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
