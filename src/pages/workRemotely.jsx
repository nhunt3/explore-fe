import React from 'react';
import './workRemotely.css';
import { HorizontallyScrollingImages } from '../components/horizontallyScrollingImages';
import { Header } from '../components/header';

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

const dancingGoatsImages = [
    'work remotely/dancing goats - pcm - outside - 1.jpg',
    'work remotely/dancing goats - pcm - inside - 1.jpg'
];

const costaCoffeeImages = [
    'work remotely/costa coffee - 1.jpg',
    'work remotely/costa coffee - 2.jpg',
    'work remotely/costa coffee - 3.jpg'
];

const spillerParkImages = [
    'work remotely/spiller park - 1.jpg',
    'work remotely/spiller park - 2.jpg',
    'work remotely/spiller park - 3.jpg',
    'work remotely/spiller park - 4.jpg',
    'work remotely/spiller park - 5.jpg',
    'work remotely/spiller park - 6.jpg'
];

export const WorkRemotely = () => {
    return (
        <>
            <Header title='Work Remotely' />

            <div className='section-container'>
                <div>
                    <HorizontallyScrollingImages arrayOfImages={coldBrewBarImages} />
                    <div className='section-header'>
                        Cold Brew Bar
                    </div>
                </div>
                <div>
                    <HorizontallyScrollingImages arrayOfImages={eastPoleImages} />
                    <div className='section-header'>
                        East Pole - Armour Yards
                    </div>
                </div>
                <div>
                    <HorizontallyScrollingImages arrayOfImages={littleTartImages} />
                    <div className='section-header'>
                        Little Tart Bakery - Memorial Drive
                    </div>
                </div>
                <div>
                    <HorizontallyScrollingImages arrayOfImages={dancingGoatsImages} />
                    <div className='section-header'>
                        Dancing Goats - Ponce City Market
                    </div>
                </div>
                <div>
                    <HorizontallyScrollingImages arrayOfImages={costaCoffeeImages} />
                    <div className='section-header'>
                        Costa Coffee - Midtown
                    </div>
                </div>
                <div>
                    <HorizontallyScrollingImages arrayOfImages={spillerParkImages} />
                    <div className='section-header'>
                        Spiller Park - Toco Hills
                    </div>
                </div>
            </div>
        </>
    );
};
