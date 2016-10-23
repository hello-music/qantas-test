import React, { PropTypes }  from 'react';
import { connect } from 'react-redux';
import { HomePage } from 'components';
import { Map } from 'immutable';

const HomePageContainer = props => (<HomePage review={props.review} model={props.model}/>);

HomePageContainer.propTypes = {
    // connected props
    review: PropTypes.string.isRequired,
    model: PropTypes.instanceOf(Map).isRequired,
};

HomePageContainer.defaultProps = {
    review: '',
    model: Map({})
};

function mapStateToProps ({ carOfTheWeek, models }) {
    return {
        review: carOfTheWeek.get('review'),
        model: models.find((model)=>model.get('id') === carOfTheWeek.get('modelId')),
    };
}

export default connect(mapStateToProps)(HomePageContainer);
