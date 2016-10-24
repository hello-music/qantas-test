import React, { PropTypes }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as selectionActionCreators from 'redux/modules/selection';
import { SearchPage } from 'components';
import { List } from 'immutable';

class SearchPageContainer extends React.Component {
    constructor (props) {
        super(props);
        this.handleGoButtonClick = this.handleGoButtonClick.bind(this);
    }

    render () {
        return (<SearchPage makes={this.props.makes} models={this.props.models} modelEmpty={this.props.modelEmpty}
                            selectedModelId={this.props.selectedModelId}
                            handleGoButtonClick={this.handleGoButtonClick}/>
        );
    }

    handleGoButtonClick () {
        this.props.clearSelection();
        this.context.router.push(`/make/model/${this.props.selectedModelId}`);
    }
}

SearchPageContainer.contextTypes = {
    router: PropTypes.object.isRequired
};

SearchPageContainer.propTypes = {
    // connected props
    makes: PropTypes.instanceOf(List).isRequired,
    models: PropTypes.instanceOf(List).isRequired,
    clearSelection: PropTypes.func.isRequired,
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
        selectedModelId: selection.get('modelId'),
    };
}

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(selectionActionCreators,
        dispatch)
)(SearchPageContainer);
