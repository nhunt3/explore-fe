import React from 'react';
import './topSpotsInAtlanta.css';
import { useHistory } from 'react-router';
import {config} from '../config';

const Atlanta = () => {
    const history = useHistory();

    return (
        <div>
            <h1 className="header">Top Spots in Atlanta</h1>
            <div className="city-grid-container">
                <div className="walkable-area-item">
                    <span className="walkable-area-title">Atlanta Dairies / Madison Yards</span>
                    <div className="walkable-area-image-container">
                        <img className="walkable-area-image" src={`${config.s3baseUrl}Atlanta_Dairies.jpg`} />
                    </div>
                </div>
                <div className="walkable-area-item">
                    <span className="walkable-area-title">Eastside Trail</span>
                    <div className="walkable-area-image-container" onClick={() => history.push('/atlanta/top_spots_in_atlanta/eastside_trail')}>
                        <img className="walkable-area-image" src={`${config.s3baseUrl}Eastside_Trail.jpg`} />
                    </div>
                </div>
                <div className="walkable-area-item">
                    <span className="walkable-area-title">West Midtown</span>
                    <div className="walkable-area-image-container">
                        <img className="walkable-area-image" src={`${config.s3baseUrl}West_Midtown.jpg`} />
                    </div>
                </div>
                <div className="walkable-area-item">
                    <span className="walkable-area-title">Colony Square</span>
                    <div className="walkable-area-image-container">
                        <img className="walkable-area-image" src={`${config.s3baseUrl}Colony_Square.jpg`} />
                    </div>
                </div>
                <div className="walkable-area-item">
                    <span className="walkable-area-title">The Battery</span>
                    <div className="walkable-area-image-container">
                        <img className="walkable-area-image" src={`${config.s3baseUrl}The_Battery.jpg`} />
                    </div>
                </div>
                <div className="walkable-area-item">
                    <span className="walkable-area-title">The Works</span>
                    <div className="walkable-area-image-container">
                        <img className="walkable-area-image" src="src/old/pages" />
                    </div>
                </div>
                <div className="walkable-area-image-container">Buckhead Village</div>
                <div className="walkable-area-image-container">Lee + White</div>
                <div className="walkable-area-image-container">Summerhill</div>
                <div className="walkable-area-image-container">Echo Street West</div>
                <div className="walkable-area-image-container">Westside Paper</div>
                <div className="walkable-area-image-container">o4w park / beltline</div>
                <div className="walkable-area-image-container">Downtown Inman Park</div>
                <div className="walkable-area-image-container">Krog District / StudioPlex Alley</div>

            </div>
        </div>
    );
};

export default Atlanta;
