import React, { PropTypes }  from 'react';
import { connect } from 'react-redux';
import { SearchPage } from 'components';
import { List } from 'immutable';

const SearchPageContainer = props => (<SearchPage makes={props.makes} models={props.models} modelEmpty={props.modelEmpty}/>);

SearchPageContainer.propTypes = {
    // connected props
    makes: PropTypes.instanceOf(List).isRequired,
    models: PropTypes.instanceOf(List).isRequired,
};

SearchPageContainer.defaultProps = {
    makes: List([]),
    models: List([])
};

function mapStateToProps ({ makes, models, selection }) {
    return {
        makes,
        models: models.filter((model)=>model.get('makeId') === selection.get('makeId')),
        modelEmpty: selection.get('modelId') === "",
    };
}

export default connect(mapStateToProps)(SearchPageContainer);
