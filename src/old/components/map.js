import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './map.css';
import {config} from '../config';
mapboxgl.accessToken = config.mapBoxGlAccessToken;

let map = {
    current: undefined
};

export const flyToStore = (currentFeature) => {
    map.current.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 14
    });
};

export const addMarkersToMap = (props, selectedItemId) => {
    /* For each feature in the GeoJSON object above: */
    for (const marker of props.venues.features) {
        /* Create a div element for the marker. */
        const el = document.createElement('div');
        /* Assign a unique `id` to the marker. */
        el.id = `marker-${marker.properties.id}`;
        /* Assign the `marker` class to each marker for styling. */

        if (selectedItemId === marker.properties.id) {
            el.className = 'marker highlight';
        } else {
            el.className = 'marker';
        }

        /**
         * Create a marker using the div element
         * defined above and add it to the map.
         **/
        new mapboxgl.Marker(el, { offset: [0, -23] }) //default: 0, -23
            .setLngLat(marker.geometry.coordinates)
            .addTo(map.current);

        el.addEventListener('click', (e) => {
            // flyToStore(marker);
            props.setSelectedVenue(marker);
            addMarkersToMap(props, marker.properties.id);
            /* Close all other popups and display popup for clicked store */
            // createPopUp(marker);
        });
    }
};

const Map = (props) => {
    const {latitude, longitude} = props.venues;
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width <= 850;
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(longitude);
    const [lat, setLat] = useState(latitude);
    const [zoom, setZoom] = useState(props.venues.zoom);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        if (isMobile) {
            // map.current.setPadding({bottom: 475});
        }

        map.current.on('load', () => {
            map.current.addSource('places', {
                type: 'geojson',
                data: props.venues
            });

            addMarkersToMap(props);
        });

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (
        <div ref={mapContainer} className="map"/>
    );
};

export default Map;
