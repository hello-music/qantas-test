import React, { PropTypes }  from 'react';
import { Button } from 'components';
import { List } from 'immutable';

const ButtonContainer = props=>(<Button handleClick={props.handleClick} disabled={props.disabled} text={props.text}/>);

ButtonContainer.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func,
};

ButtonContainer.defaultProps = {
    disabled: false,
};

export default ButtonContainer;

