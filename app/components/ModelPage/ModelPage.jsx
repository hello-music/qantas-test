import React, { PropTypes } from 'react';
import { ImageBannerContainer } from 'containers';
import { Map } from 'immutable';
import { formattedMoney } from 'helpers/formatters';
import { details } from './styles.css';

const ModelPage = props => (
    <div>
        <div className={details}>
            <p>{`${props.model.get('name')} (${props.make.get('name')})`}</p>
            <p>{`$ ${formattedMoney(`${props.model.get('price')}`)}`}</p>
        </div>
        <ImageBannerContainer url={props.model.get('imageUrl')}/>
    </div>
);

ModelPage.propTypes = {
    model: PropTypes.instanceOf(Map).isRequired,
    make: PropTypes.instanceOf(Map).isRequired,
};

export default ModelPage;
