import React from 'react';
import './atlanta.css';
import {config} from "../old/config";

export const Atlanta = () => {
    return (
        <>
            <div className='page-header'>
                Atlanta
            </div>
            <div className='section-container'>
            {/*    <div className='item1'>*/}
            {/*    </div>*/}
                <div className='item'>
                    <img className='image-small' alt='beltline' src={`${config.s3baseUrl}hang out/Eastside_Trail.jpg`} />
                    <div className='section-header'>
                        Hang Out
                    </div>
                </div>
                <div>
                    <img className='image-small' alt='cold brew bar' src={`${config.s3baseUrl}work remotely/cold brew bar - inside looking outside.jpg`} />
                    <div className='section-header'>
                        Work Remotely
                    </div>
                </div>
            <div className='item'>
                    <img className='image-small' alt='flight club darts' src={`${config.s3baseUrl}nightlife/flight club darts.jpg`} />
                    <div className='section-header'>
                        Nightlife
                    </div>
                </div>
            </div>
        </>
    );
};
