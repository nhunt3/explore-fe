import React, {useState} from 'react';
import Map from '../../components/map';
import './eastside-trail.css';
// import greenMarker from "../mapbox-marker-green.png";
import {flyToStore, addMarkersToMap} from '../../components/map';
import {config} from '../../config';

const EastsideTrail = (props) => {
    const {venues} = props;
    const [selectedVenueId, setSelectedVenueId] = useState(null);

    const highlightMapMarker = (id) => {
        for (const store of venues.features) {
            if (id === store.properties.id) {
                // flyToStore(store);
                setSelectedVenue(store);
                addMarkersToMap({venues, setSelectedVenue}, id)
            }
        }
    };

    const setSelectedVenue = (clickedPoint) => {
        setSelectedVenueId(clickedPoint.properties.id);
    };

    const htmlOfStores = venues.features.map((store) => {
        const {image_name} = store.properties;
        const border = store.properties.id === selectedVenueId ? {borderBottom: '4px solid blue'} : {};

        return (
            <div className="destination-item">
                <span className="destination-title">{store.properties.title}</span>
                <img
                    className="destination-image"
                    style={border} src={`${config.s3baseUrl}${image_name}.jpg`}
                    onClick={() => highlightMapMarker(store.properties.id)}
                />
            </div>
        );
    });

    return (
        <>
            {/*<img src={greenMarker} />*/}
            <div className="destination-page">
                <div className="walkable-area-container">
                    {htmlOfStores}
                </div>
                <div className="map-container">
                    <Map venues={venues} setSelectedVenue={setSelectedVenue}/>
                </div>
            </div>
        </>
    );
};

export default EastsideTrail;
