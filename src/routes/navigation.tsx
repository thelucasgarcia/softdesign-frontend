import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ComicModal from "../pages/ComicModal";
import NotFound from "../pages/NotFound";

const Navigation: React.FC = () => {
    const location = useLocation();
    const state = location.state as { background?: Location };
    
    return (
        <React.Fragment>
            <Routes location={state?.background || location}>
                <Route index element={<Home />} />
                <Route path="404" element={<NotFound />} />
                <Route path="*" element={<Navigate to='/404'/>}/>
            </Routes>
            {state?.background && (
                <Routes>
                    <Route path="/comic/:id" element={<ComicModal />} />
                </Routes>
            )}
        </React.Fragment>
    );
};

export default Navigation;