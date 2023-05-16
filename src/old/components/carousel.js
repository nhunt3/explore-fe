import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    root: {
        padding: '0 20px 0 20px',
    },
    divOnMap: {
        width: '100%',
        position: 'absolute',
        bottom: '30px',
        textAlign: 'center'
    }
};

const Carousel = (props) => {
    return (
        <div className="div-on-map" style={styles.divOnMap}>
            <SwipeableViews style={styles.root} onChangeIndex={props.onChangeIndex} index={props.index}>
                {props.carouselItems}
            </SwipeableViews>
        </div>
    );
};

export default Carousel;
