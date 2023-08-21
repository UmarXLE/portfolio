import React , {Suspense} from 'react';

import {Navigate , Routes , Route} from 'react-router-dom'
import MainLayout from "../layout/MainLayout";

import HomePage from "../pages/HomePage";

const Allroutes = () => {
    return (
        <Suspense fallback=''>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route path='/' element={<Navigate to='home' replace />} />
                    <Route path='home' element={<HomePage/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
};

export default Allroutes;