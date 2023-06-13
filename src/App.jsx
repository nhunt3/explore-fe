import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAtlantaData } from './store/index';
import { Atlanta } from './pages/atlanta';
import { WorkRemotely } from './pages/workRemotely';
import { Test } from './pages/test';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './app.css';

const router = createBrowserRouter([
    {path: '/', element: <Atlanta />},
    {path: '/work-remotely', element: <WorkRemotely />},
    {path: '/test', element: <Test />}
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
