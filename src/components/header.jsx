import React from 'react';
import './header.css';
import {useHistory} from "react-router-dom";

export const Header = (props) => {
    const history = useHistory();

    return (
        <>
            <div className='header-container'>
                <div className='page-header'>
                    {props.title}
                </div>
                <div className='house' onClick={() => history.push('/')}>
                    <i className='fa-solid fa-house fa-xl' style={{color: '#616161'}} />
                </div>
            </div>
        </>
    );
};
