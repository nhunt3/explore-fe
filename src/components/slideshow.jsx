import {config} from '../config';
import React from "react";
import './slideshow.css';

export class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayOfImages: this.props.arrayOfImages,
            currentSlide: 0
        };
    }

    goBack = () => {
        if (this.state.currentSlide > 0) {
            this.setState({
                currentSlide: this.state.currentSlide - 1
            });
        }
    }

    goForward = () => {
        if (this.state.currentSlide < this.state.arrayOfImages.length - 1) {
            this.setState({
                currentSlide: this.state.currentSlide + 1
            });
        }
    }

    render() {
        return (
            <>
                <div className='slideshow-container'>
                    <div className='arrow-section' onClick={this.goBack}>&#10094;</div>
                    <img className='image-slideshow' src={`${config.s3baseUrl}${this.state.arrayOfImages[this.state.currentSlide]}`} />
                    <div className='arrow-section' onClick={this.goForward}>&#10095;</div>
                </div>
                <div className='counter'>{this.state.currentSlide + 1} / {this.state.arrayOfImages.length}</div>
            </>
        );
    }
};
