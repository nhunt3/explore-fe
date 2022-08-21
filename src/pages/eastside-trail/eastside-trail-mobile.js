import React, {useState} from 'react';
import Map, { flyToStore, addMarkersToMap } from '../../components/map';
import './eastside-trail-mobile.css';
import Carousel from '../../components/carousel';
import {config} from '../../config';

const styles = {
    slide: {
        margin: '0 10px 0 10px',
        borderRadius: '15px'
    }
};

const EastsideTrailMobile = (props) => {
    const [selectedVenueId, setSelectedVenueId] = useState(null);
    const {venues} = props;

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

    const translateIdToIndex = (idOfDestination) => {
        const indexOfDestination = venues.features.findIndex(store => store.properties.id === idOfDestination);
        return indexOfDestination !== -1 ? indexOfDestination : 0;
    };

    const translateIndexToId = (index) => {
        let value = -99;
        venues.features.forEach((store, i) => {
            if (i === index) {
                value = store.properties.id;
            }
        });

        return value;
    };

    const onChangeIndex = (index, indexLatest, meta) => {
        const id = translateIndexToId(index);
        highlightMapMarker(id);

    };

    const carouselItems = venues.features.map((store) => {
        const {image_name, id} = store.properties;

        return (
            <>
                <div style={styles.slide}>
                    <img
                        className="destination-image"
                        src={`${config.s3baseUrl}${image_name}.jpg`}
                        onClick={() => highlightMapMarker(id)}
                    />
                </div>
            </>
        );
    });

    return (
        <div className="eastside-trail-mobile-container">
            <Map venues={venues} setSelectedVenue={setSelectedVenue} />
            <Carousel
                carouselItems={carouselItems}
                index={translateIdToIndex(selectedVenueId)}
                onChangeIndex={onChangeIndex}
            />
        </div>
    );
};

export default EastsideTrailMobile;
