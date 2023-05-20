import React from 'react';
import { useHistory } from 'react-router-dom';
import './atlanta.css';
import { config } from '../config';
import { Header } from "../components/header";

export const Atlanta = () => {
    const history = useHistory();

    return (
        <>
            <Header title='Atlanta' />

            <div className='section-container'>
                <div className='item'>
                    <img
                        loading="lazy"
                        className='image-small'
                        alt='beltline'
                        src={`${config.s3baseUrl}hang out/Eastside_Trail.jpg`}
                    />
                    <div className='section-header'>
                        Hang Out
                    </div>
                </div>
                <div onClick={() => history.push('/work-remotely')}>
                    <img
                        loading="lazy"
                        className='image-small'
                        alt='cold brew bar'
                        src={`${config.s3baseUrl}work remotely/cold brew bar - inside looking outside.jpg`}
                    />
                    <div className='section-header'>
                        Work Remotely
                    </div>
                </div>
                <div className='item'>
                    <img
                        loading="lazy"
                        className='image-small'
                        alt='flight club darts'
                        src={`${config.s3baseUrl}nightlife/flight club darts.jpg`}
                    />
                    <div className='section-header'>
                        Nightlife (coming soon)
                    </div>
                </div>
            </div>
        </>
    );
};
