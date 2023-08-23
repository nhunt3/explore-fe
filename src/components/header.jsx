import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './header.css';

export const Header = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentRoute = location.pathname;

    return (
        <>
            <div className='header-container'>
                <div className='page-header'>
                    {props.title}
                </div>
                <div>
                    {/*{*/}
                    {/*    currentRoute === '/work-remotely' &&*/}
                    {/*    <div className='icon map' onClick={() => navigate('/map')}>*/}
                    {/*        <i className='fa-solid fa-map fa-xl icon-image' style={{color: '#616161'}} />*/}
                    {/*    </div>*/}
                    {/*}*/}
                    <div className='icon' onClick={() => navigate('/')}>
                        <i className='fa-solid fa-house fa-xl icon-image' style={{color: '#616161'}} />
                    </div>
                </div>
            </div>
        </>
    );
};
