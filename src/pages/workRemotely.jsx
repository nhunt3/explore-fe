import React from 'react';
import './workRemotely.css';
import { HorizontallyScrollingImages } from '../components/horizontallyScrollingImages';

const coldBrewBarImages = [
    'work remotely/cold brew bar - inside looking outside.jpg',
    'work remotely/cold brew bar - inside down the line.jpg',
    'work remotely/Cold Brew Bar - outside - 1.jpg',
    'work remotely/Cold Brew Bar - outside - 2.jpg'
];

const eastPoleImages = [
    'work remotely/East Pole - stadium seating - 1.jpg',
    'work remotely/East Pole - inside - 1.jpg',
    'work remotely/East Pole - stadium seating - 2.jpg',
    'work remotely/East Pole - stadium seating - 3.jpg'
];

const littleTartImages = [
    'work remotely/Little Tart Bakery - 1.jpg',
    'work remotely/Little Tart Bakery - 2.jpg',
    'work remotely/Little Tart Bakery - 3.jpg',
    'work remotely/Little Tart Bakery - food - 1.jpg'
];

export const WorkRemotely = () => {
    return (
        <>
            <div className='page-header'>
                Work Remotely
            </div>

            <div className='section-container'>
                <div className='item'>
                    <HorizontallyScrollingImages arrayOfImages={coldBrewBarImages} />
                    <div className='section-header'>
                        Cold Brew Bar
                    </div>
                </div>
                <div>
                    <HorizontallyScrollingImages arrayOfImages={eastPoleImages} />
                    <div className='section-header'>
                        East Pole (Armour Yards)
                    </div>
                </div>
                <div className='item'>
                    <HorizontallyScrollingImages arrayOfImages={littleTartImages} />
                    <div className='section-header'>
                        Little Tart Bakery (Memorial Drive)
                    </div>
                </div>
            </div>
        </>
    );
};
