import React, { PropTypes }  from 'react';
import { imgBanner, imgContainer } from './styles.css';

const ImageBanner = props => (
    <div className={imgBanner}>
        <div className={imgContainer}><img src={props.url}/></div>
    </div>
);

ImageBanner.propTypes = {
    url: PropTypes.string,
};

export default ImageBanner;
