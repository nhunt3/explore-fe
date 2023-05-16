// import React, {useEffect, useRef, useState} from 'react';
// import './map.css';

// function Map({center, zoom}) {
//     // const ref = React.useRef(null);
//     // const [map, setMap] = React.useState();
//     //
//     // React.useEffect(() => {
//     //     if (ref.current && !map) {
//     //         setMap(new window.google.maps.Map(ref.current, {center, zoom}));
//     //     }
//     // }, [ref, map]);
//
//
//     const ref = useRef();
//
//     useEffect(() => {
//         new window.google.maps.Map(ref.current, {
//             center,
//             zoom,
//         });
//     });
//
//     return <div ref={ref} id="map" className="map"></div>;
// }

// const Map = () => {
//     const ref = React.useRef(null);
//     const [map, setMap] = React.useState();
//
//     React.useEffect(() => {
//         if (ref.current && !map) {
//             console.log('here');
//             setMap(new window.google.maps.Map(ref.current, {}));
//         }
//     }, [ref, map]);
//
//     return <div style={{height: '300px'}} ref={ref}></div>
// };

// export default Map;
