import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../pages/Home';
import ComicModal from '../pages/ComicModal';
import NotFound from '../pages/NotFound';

const Navigation: React.FC = () => {
    const location = useLocation();
    const state = location.state as { backgroundLocation?: Location };
    return (
        <React.Fragment>
            <Routes location={state?.backgroundLocation || location}>
                <Route path='/' element={<Home />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            {state?.backgroundLocation && (
                <Routes>
                    <Route path="/comic/:id" element={<ComicModal />} />
                </Routes>
            )}
        </React.Fragment>
    );
}

export default Navigation;