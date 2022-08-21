import React, {useState, useEffect} from 'react';
import EastsideTrail from './eastside-trail';
import EastsideTrailMobile from './eastside-trail-mobile';


const EastsideTrailContainer = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 850;

    return (
        isMobile ? <EastsideTrailMobile/> : <EastsideTrail/>
    );
};

export default EastsideTrailContainer;
