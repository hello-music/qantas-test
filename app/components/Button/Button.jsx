import React, { PropTypes } from 'react';
import { reviewContainer, imgContainer } from './styles.css';

const Button = props => (
    <button onClick={props.handleClick} disabled={props.disabled}>
        {props.text}
    </button>
);

Button.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func,
};

Button.defaultProps = {
    disabled: false,
};
export default Button;
