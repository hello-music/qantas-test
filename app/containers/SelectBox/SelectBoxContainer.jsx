import React, { PropTypes }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as selectionActionCreators from 'redux/modules/selection';
import { SelectBox } from 'components';
import { List } from 'immutable';

class SelectBoxContainer extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    render () {
        return (<SelectBox options={this.props.options} handleChange={this.handleChange}/>);
    }

    handleChange (evt) {
        switch (this.props.type) {
            case 'make':
                this.props.selectMake(evt.target.value);
                break;
            case 'model':
                this.props.selectModel(evt.target.value);
                break;
        }

    }
}

SelectBoxContainer.propTypes = {
    type: PropTypes.string.isRequired,
    // connected props
    options: PropTypes.instanceOf(List).isRequired,
    selectMake: PropTypes.func.isRequired,
    selectModel: PropTypes.func.isRequired,
};

SelectBoxContainer.defaultProps = {
    options: List([]),
};

function mapStateToProps () {
    return {};
}

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(selectionActionCreators,
        dispatch)
)(SelectBoxContainer);

