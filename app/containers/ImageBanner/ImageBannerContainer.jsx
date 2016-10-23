import React, { PropTypes }  from 'react';
import { ImageBanner } from 'components';

const ImageBannerContainer = props => (<ImageBanner url={props.url}/>);

ImageBannerContainer.propTypes = {
    url: PropTypes.string.isRequired,
};

ImageBannerContainer.defaultProps = {
    url: '',
};

export default ImageBannerContainer;
