import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import FilterCarPage from './pages/FilterCar';
import NewCarPage from './pages/NewCar';
import VehiclesPage from './pages/Vehicles';


import './index.module.scss';


const App = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VehiclesPage />} />
                <Route path="/filter" element={<FilterCarPage />} />
                <Route path="/add" element={<NewCarPage />} />
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default App