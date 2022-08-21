import React, {useState} from 'react';
import Map from '../components/map';
import './eastside-trail.css';
import New_Realm from "../images/New_Realm.jpg";
import Ladybird from "../images/Ladybird.jpg";
// import greenMarker from "../mapbox-marker-green.png";
import {flyToStore, addMarkersToMap} from '../components/map';

const images = {
  New_Realm,
  Ladybird
};

const stores = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-84.36196304347493, 33.76900782383692]
            },
            properties: {
                title: 'New Realm',
                description: 'brewery',
                image_name: 'New_Realm',
                id: 1
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-84.36422073173803, 33.75954915304173]
            },
            properties: {
                title: 'Ladybird',
                description: 'daytime bar',
                image_name: 'Ladybird',
                id: 2
            }
        }
    ]
};

const EastsideTrail = () => {
    const [selectedVenueId, setSelectedVenueId] = useState(null);

    const highlightMapMarker = (id) => {
        for (const store of stores.features) {
            if (id === store.properties.id) {
                // flyToStore(store);
                setSelectedVenue(store);
                addMarkersToMap({stores, setSelectedVenue}, id)
            }
        }
    };

    const setSelectedVenue = (clickedPoint) => {
        setSelectedVenueId(clickedPoint.properties.id);
    };

    const htmlOfStores = stores.features.map((store) => {
        const {image_name} = store.properties;
        const border = store.properties.id === selectedVenueId ? {borderBottom: '4px solid blue'} : {};

        return (
            <div className="destination-item">
                <span className="destination-title">{store.properties.title}</span>
                <img className="destination-image" style={border} src={images[image_name]} onClick={() => highlightMapMarker(store.properties.id)}/>
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
                    <Map stores={stores} setSelectedVenue={setSelectedVenue}/>
                </div>
            </div>
        </>
    );
};

export default EastsideTrail;
