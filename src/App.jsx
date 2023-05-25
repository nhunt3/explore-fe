import React from 'react';
import { Atlanta } from './pages/atlanta';
import { WorkRemotely } from './pages/workRemotely';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './app.css';

const router = createBrowserRouter([
    {path: '/', element: <Atlanta />},
    {path: '/work-remotely', element: <WorkRemotely />}
]);

function App() {
    return (
        <div className='app'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
