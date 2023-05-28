import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './atlanta.css';
import { Header } from '../components/header';
import { config } from '../config';

const navigateSafe = (navigate, route) => {
    if (route) {
        navigate(route)
    }
};

export const Atlanta = () => {
    const navigate = useNavigate();
    const atlanta = useSelector(state => state.atlanta);
    if (!atlanta) return;

    return (
        <>
            <Header title={atlanta.city} />

            <div className='section-container'>
                {atlanta['things to do'].map((thingToDo) => {
                    return (
                        <div key={thingToDo.title} onClick={() => navigateSafe(navigate, thingToDo.route)}>
                            <img
                                // loading="lazy"
                                className='image-small'
                                alt='cold brew bar'
                                src={`${config.s3baseUrl}${thingToDo.image}`}
                            />
                            <div className='section-header'>
                                {thingToDo.title}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
