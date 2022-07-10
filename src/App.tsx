import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import FilterCarPage from './pages/FilterCar';
import NewCarPage from './pages/NewCar';
import VehiclesPage from './pages/Vehicles';


import './index.module.scss';
import { EditCarForm } from "./components";


const App = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VehiclesPage />} />
                <Route path="/filter" element={<FilterCarPage />} />
                <Route path="/add" element={<NewCarPage />} />
                <Route path="/edit/:id" element={<EditCarForm/>} />
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default App