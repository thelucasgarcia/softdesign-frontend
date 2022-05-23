import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from '../pages/home';
import NotFound from '../pages/NotFound';
// import { Container } from './styles';

const Navigation: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default Navigation;