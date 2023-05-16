import React from 'react';
import './atlanta.css';
import { useHistory } from 'react-router';
import {config} from '../config';

const Atlanta = () => {
    const history = useHistory();

    return (
        <div>
            <div className="city-categories-header-section">
                <h1 className="city-categories-title">Top Spots in Atlanta</h1>
            </div>
            <div className="city-categories-image-container" onClick={() => history.push('/atlanta/top_spots_in_atlanta')}>
                <img className="city-categories-image" src={`${config.s3baseUrl}Eastside_Trail.jpg`} />
            </div>

            <div className="city-categories-header-section">
                <h1 className="city-categories-title">Coming Soon to ATL</h1>
            </div>
            <div className="city-categories-image-container" onClick={() => history.push('/atlanta/coming_soon_to_atlanta')}>
                <img className="city-categories-image" src={`${config.s3baseUrl}Fourth_Ward_Megaproject_1.jpg`} />
            </div>
        </div>
    );
};

export default Atlanta;
