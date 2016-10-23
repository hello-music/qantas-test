import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';
import { Loading, NavBar } from 'components';
import apis from 'helpers/api';
import * as makesActionCreators from 'redux/modules/makes';
import * as modelsActionCreators from 'redux/modules/models';
import * as carOfTheWeekActionCreators from 'redux/modules/carOfTheWeek';
import * as ajaxActionCreators from 'redux/modules/ajax';
import { content, footer } from './styles.css';

const {fetchInitData} = apis;

class MainContainer extends React.Component {
    componentDidMount () {
        this.props.fetchAndHandleAjax(fetchInitData).then((data)=> {
            this.props.fetchingMakesSuccess(data.data.makes);
            this.props.fetchingModelsSuccess(data.data.models);
            this.props.fetchingCarOfTheWeekSuccess(data.data.carOfTheWeek);
        });
    }

    render () {
        return this.props.isFetching ? (<Loading />) :
            (<div>
                {this.props.error && <p>error: {this.props.error}</p>}
                <NavBar />
                <div className={content}>
                    {this.props.children}
                </div>
            </div>);
    }
}

MainContainer.propTypes = {
    children: PropTypes.element.isRequired,
    // connected props
    fetchingMakesSuccess: PropTypes.func.isRequired,
    fetchingModelsSuccess: PropTypes.func.isRequired,
    fetchingCarOfTheWeekSuccess: PropTypes.func.isRequired,
    fetchAndHandleAjax: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

function mapStateToProps ({ ajax }) {
    return {
        isFetching: ajax.get('isFetching'),
        error: ajax.get('error'),
    };
}

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators({ ...makesActionCreators, ...modelsActionCreators, ...carOfTheWeekActionCreators, ...ajaxActionCreators },
        dispatch)
)(MainContainer);

