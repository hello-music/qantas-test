import React from 'react';
import { ImageBannerContainer } from 'containers';
import { reviewContainer, imgContainer } from './styles.css';

const HomePage = props => (
    <div>
        <div className={imgContainer}><ImageBannerContainer url={props.model.get('imageUrl')}/></div>
        <div className={reviewContainer}>{props.review}</div>
    </div>
);
export default HomePage;
