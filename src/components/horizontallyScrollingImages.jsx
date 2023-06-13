import React from 'react';

import { config } from '../config';
import './horizontallyScrollingImages.css';

export class HorizontallyScrollingImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayOfImages: this.props.arrayOfImages
        };
    }

    render() {
        return (
            <>
                <div className='scroll-container'>
                    {this.state.arrayOfImages.map((_image, i) => {
                        return (
                            <>
                                <img
                                    className='image-scrollshow hidden'
                                    // data-src={`${config.s3baseUrl}${this.state.arrayOfImages[i]}`}
                                    src={`${config.s3baseUrl}${this.state.arrayOfImages[i]}`}
                                />
                                <svg width='4032' height='3024' className='mySvg'>
                                    <rect x="0" y="0" width='4032' height="3024" fill="none" />
                                </svg>
                            </>
                        );
                    })}
                </div>
            </>
        );
    }
};
