import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Main from "../components/pages/Main";
import BestDetail from "../components/pages/BestDetail";
import Create from "../components/pages/Create";
import ContestDetail from "../components/pages/ContestDetail";
import NotFound from "../components/pages/NotFound";

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/Main' element={<Main/>}/>
                <Route path='/BestDetail/:postId' element={<BestDetail/>}/>
                <Route path='/Create' element={<Create/>}/>
                <Route path='/ContestDetail/:postId' element={<ContestDetail/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;