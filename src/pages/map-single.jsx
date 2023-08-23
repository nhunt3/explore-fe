import React from 'react';
import './map-single.css';
import { connect } from 'react-redux';
import { config } from '../config';
import { Link } from 'react-router-dom';

let touchStartX = 0;
let touchEndX = 0;

let map = null;

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.spots !== this.props.spots) {
            this.initMap();
        }
    }

    renderMarkers = () => {
        this.props.spots.filter(spot => spot.hasOwnProperty('coordinates')).forEach((spot, i) => {
            const { lat, lng } = spot.coordinates;

            const color = i === this.state.currentSlide ? 'blue' : 'red';

            const svgMarker = {
                path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
                fillColor: color,
                fillOpacity: 1,
                strokeWeight: 0,
                rotation: 0,
                scale: 1.8
            };

            const marker = new google.maps.Marker({
                position: { lat, lng },
                map,
                icon: svgMarker
            });

            marker.addListener('click', () => {
                const index = this.props.spots.findIndex(propsSpot => propsSpot.title === spot.title);
                this.setState({
                    currentSlide: index
                }, () => this.renderMarkers());
            });
        });
    };

    initMap = async () => {
        const { Map } = await google.maps.importLibrary('maps');

        map = new Map(document.getElementById('map'), {
            center: { lat: 33.78, lng: -84.37 },
            zoom: 11,
            mapTypeControl: false,
            fullscreenControl: false
        });

        this.renderMarkers();
    };

    checkDirection = () => {
        if (touchEndX < touchStartX - window.innerWidth / 8) {
            if (this.state.currentSlide < this.props.spots.length - 1) {
                this.setState({
                    currentSlide: this.state.currentSlide + 1
                }, () => this.renderMarkers());
            }
        }
        if (touchEndX > touchStartX + window.innerWidth / 8) {
            if (this.state.currentSlide > 0) {
                this.setState({
                    currentSlide: this.state.currentSlide - 1
                }, () => this.renderMarkers());
            }
        }
    }

    handleTouchStart = e => {
        touchStartX = e.changedTouches[0].screenX;
    };

    handleTouchEnd = e => {
        touchEndX = e.changedTouches[0].screenX;
        this.checkDirection();
    };

    render() {
        const url = this.props.spots ? `${config.s3baseUrl}${this.props.spots[this.state.currentSlide].images[0]}` : '';
        const title = this.props.spots ? `${this.props.spots[this.state.currentSlide].title.split('-')[0].trim()}` : '';

        // bad idea. oh well.
        this.initMap();

        return (
            <>
                <div className='close-x'>
                    <Link to='/work-remotely' >
                        <i className='fa-solid fa-xmark fa-2xl' style={{color: '#616161'}} />
                    </Link>
                </div>
                <div id="map"></div>
                <div className="image-swiper-container">
                    <img
                        onTouchStart={this.handleTouchStart}
                        onTouchEnd={this.handleTouchEnd}
                        className='image-swiper'
                        src={url}
                    />
                    <div className="image-swiper-title">{title}</div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        spots: state.atlanta?.['things to do'].filter(thingToDo => thingToDo.title === 'Work Remotely')[0].spots
    };
};

export default connect(mapStateToProps)(Map);
