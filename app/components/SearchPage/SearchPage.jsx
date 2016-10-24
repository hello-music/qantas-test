import React from 'react';
import { SelectBoxContainer,ButtonContainer } from 'containers';
import { Map } from 'immutable';
import { Link } from 'react-router';

const SearchPage = props => (
    <div>
        <SelectBoxContainer options={props.makes.map((make)=>Map({name: make.get('name'), value: make.get('id')}))}
                            type='make'/>
        <SelectBoxContainer options={props.models.map((model)=>Map({name: model.get('name'), value: model.get('id')}))}
                            type="model"/>
        <ButtonContainer handleClick={props.handleGoButtonClick} disabled={props.modelEmpty} text="Go"/>
    </div>
);
export default SearchPage;
