import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './workRemotely.css';
import { HorizontallyScrollingImages } from '../components/horizontallyScrollingImages';
import { Header } from '../components/header';
import { createObserver } from '../utils/observer';

export const WorkRemotely = () => {
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

                // createObserver(svgs, '0% 0% 40% 0%', null, lazyImages);
                setSvgsLoaded(true);
            }
        }
    })

    const workRemotely = useSelector(state => state.atlanta?.['things to do'].filter(thingToDo => thingToDo.title === 'Work Remotely')[0]);
    if (!workRemotely) return;

    return (
        <>
            <Header title={workRemotely.title} />

            <div className='section-container'>
                {workRemotely.spots.map((spot) => {
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
