import React from 'react';
import { ImageBannerContainer } from 'containers';
import { reviewContainer, imgContainer } from './styles.css';

const HomePage = props => (
    <div>
        <ImageBannerContainer url={props.model.get('imageUrl')}/>
        <blockquote className={reviewContainer}><q>{props.review}</q></blockquote>
    </div>
);
export default HomePage;
