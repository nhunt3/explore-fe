import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAtlantaData } from './store/index';
import { Atlanta } from './pages/atlanta';
import { WorkRemotely } from './pages/workRemotely';
import { HangOut } from './pages/hangOut';
import { Test } from './pages/test';
import Map from './pages/map-single';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './app.css';

const router = createBrowserRouter([
    {path: '/', element: <Atlanta />},
    {path: '/work-remotely', element: <WorkRemotely />},
    {path: '/hang-out', element: <HangOut />},
    {path: '/test', element: <Test />},
    {path: '/map', element: <Map />}
]);

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAtlantaData());
    }, [])

    return (
        <div className='app'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
