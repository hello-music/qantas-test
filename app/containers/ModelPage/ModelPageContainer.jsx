import React, { PropTypes }  from 'react';
import { connect } from 'react-redux';
import { ModelPage } from 'components';
import { Map } from 'immutable';

const ModelPageContainer = props => (<ModelPage model={props.model} make={props.make}/>);

ModelPageContainer.propTypes = {
    // connected props
    model: PropTypes.instanceOf(Map).isRequired,
    make: PropTypes.instanceOf(Map).isRequired,
};

ModelPageContainer.defaultProps = {
    model: Map({}),
    make: Map({}),
};

function getModelId (pathname) {
    return pathname.split('/').pop();
}

function mapStateToProps ({ models, makes, routing }) {
    const model = models.find((model)=>model.get('id') === getModelId(routing.locationBeforeTransitions.pathname)) || Map({});
    return {
        model,
        make: makes.find((make)=>make.get('id') === model.get('makeId')),
    };
}

export default connect(mapStateToProps)(ModelPageContainer);
