import React, { PropTypes } from 'react';
import { qantasBtn } from './styles.css';

const Button = props => (
    <button className={qantasBtn} onClick={props.handleClick} disabled={props.disabled}>
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
