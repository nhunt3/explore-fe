import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './hangOut.css';
import { HorizontallyScrollingImages } from '../components/horizontallyScrollingImages';
import { Header } from '../components/header';
import { createObserver } from '../utils/observer';

export const HangOut = () => {
    const [svgsLoaded, setSvgsLoaded] = useState(false);

    useEffect(() => {
        if (svgsLoaded === false) {
            const svgs = document.querySelectorAll('.mySvg');
            if (svgs.length > 0) {
                const lazyImages = document.querySelectorAll('.image-scrollshow');
                lazyImages.forEach(function (image) {
                    image.onload = function () {
                        image.classList.remove('hidden');
                        image.nextElementSibling.classList.add('gone');
                    };
                });

                createObserver(svgs, '0% 0% 40% 0%', null, lazyImages);
                setSvgsLoaded(true);
            }
        }
    })

    const thingToDo = useSelector(state => state.atlanta?.['things to do'].filter(thingToDo => thingToDo.title === 'Hang Out')[0]);
    if (!thingToDo) return;

    return (
        <>
            <Header title={thingToDo.title} />

            <div className='section-container'>
                {thingToDo.spots.map((spot) => {
                    return (
                        <div key={spot.title}>
                            <HorizontallyScrollingImages arrayOfImages={spot.images} />
                            <div className='section-header'>
                                {spot.title}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};
