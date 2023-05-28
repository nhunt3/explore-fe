import React from 'react';
import {useSelector} from "react-redux";

import './workRemotely.css';
import { HorizontallyScrollingImages } from '../components/horizontallyScrollingImages';
import { Header } from '../components/header';

export const WorkRemotely = () => {
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
