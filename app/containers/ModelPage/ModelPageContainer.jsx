import React, { PropTypes }  from 'react';
import { connect } from 'react-redux';
import { ModelPage } from 'components';
import { Map } from 'immutable';

const ModelPageContainer = props => (<ModelPage model={props.model}/>);

ModelPageContainer.propTypes = {
    // connected props
    model: PropTypes.instanceOf(Map).isRequired,
};

ModelPageContainer.defaultProps = {
    model: Map({})
};

function getModelId (pathname) {
    return pathname.split('/').pop();
}

function mapStateToProps ({ models, routing }) {
    return {
        model: models.find((model)=>model.get('id') === getModelId(routing.locationBeforeTransitions.pathname)),
    };
}

export default connect(mapStateToProps)(ModelPageContainer);
