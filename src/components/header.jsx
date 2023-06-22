import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

export const Header = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <div className='header-container'>
                <div className='page-header'>
                    {props.title}
                </div>
                {/*<div className='house' onClick={() => navigate('/')}>*/}
                <i className='fa-solid fa-house fa-xl' style={{color: '#616161'}} />
                {/*</div>*/}
            </div>
        </>
    );
};
