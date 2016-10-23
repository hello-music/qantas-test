import React from 'react';
import { ImageBannerContainer } from 'containers';

const HomePage = props => (
    <div>
        <div><ImageBannerContainer url={props.model.get('imageUrl')}/></div>
        <div>{props.review}</div>
    </div>
);
export default HomePage;
