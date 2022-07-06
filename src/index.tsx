import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import NewCarPage from './pages/NewCar';
import VehiclesPage from './pages/Vehicles';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NewCarPage />
  </React.StrictMode>
);


//<VehiclesPage />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
