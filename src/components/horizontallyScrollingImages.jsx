import {config} from '../config';
import React from "react";
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
                            <img
                                // loading="lazy"
                                className='image-scrollshow'
                                src={`${config.s3baseUrl}${this.state.arrayOfImages[i]}`}
                            />
                        );
                    })}
                </div>
            </>
        );
    }
};
