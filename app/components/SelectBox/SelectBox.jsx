import React from 'react';

const SelectBox = props => (
    <select onChange={props.handleChange}>{props.options.map(option=><option value={option.get('value')} key={option.get('value')}>{option.get('name')}</option>)}
    </select>
);
export default SelectBox;
