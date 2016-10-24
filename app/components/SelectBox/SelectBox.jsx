import React from 'react';
import { qantasSelect} from './styles.css';

const SelectBox = props => (
    <div>
        <select className={qantasSelect} defaultValue="" onChange={props.handleChange}>
            <option value="">{props.type === 'make' ? 'Choose a make' : 'Choose a model'}</option>
            {props.options.map(option=><option value={option.get('value')}
                                               key={option.get('value')}>{option.get('name')}</option>)}
        </select>
    </div>
);

export default SelectBox;
