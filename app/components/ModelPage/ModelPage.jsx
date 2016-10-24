import React, { PropTypes } from 'react';
import { ImageBannerContainer } from 'containers';
import { Map } from 'immutable';
import { formattedMoney } from 'helpers/formatters';
import { reviewContainer, imgContainer } from './styles.css';

const ModelPage = props => (
    <div>
        <div>
            <ImageBannerContainer url={props.model.get('imageUrl')}/>
        </div>
        <div>{props.model.get('name')}</div>
        <div>{`$ ${formattedMoney(`${props.model.get('price')}`)}`}</div>
    </div>
);

ModelPage.propTypes = {
    model: PropTypes.instanceOf(Map).isRequired,
};

export default ModelPage;
