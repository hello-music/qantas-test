import React from 'react';

const SelectBox = props => (
    <select defaultValue="" onChange={props.handleChange}>
        <option value="">{props.type === 'make' ? 'Choose a make' : 'Choose a model'}</option>
        {props.options.map(option=><option value={option.get('value')}
                                           key={option.get('value')}>{option.get('name')}</option>)}
    </select>
);
export default SelectBox;
