import React from 'react';
import { SelectBoxContainer } from 'containers';
import { Map } from 'immutable';

const SearchPage = props => (
    <div>
        search page
        <SelectBoxContainer options={props.makes.map((make)=>Map({name: make.get('name'), value: make.get('id')}))}
                            type='make'/>
        <SelectBoxContainer options={props.models.map((model)=>Map({name: model.get('name'), value: model.get('id')}))}
                            type="model"/>
    </div>
);
export default SearchPage;
