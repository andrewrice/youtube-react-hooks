import React, { useState, useEffect } from 'react';

const SearchBar = ({ onFormSubmit, defaultValue }) => {

    const [term,  setTerm] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        onFormSubmit(term);
    };

    useEffect(() => {
        if(defaultValue){
            setTerm(defaultValue);
        }
    }, [defaultValue]);

    return (
        <div className="search-bar ui segment" style={{marginTop:'15px'}}>
                <form className="ui form" onSubmit={ onSubmit }>
                    <div className="field">
                        <label>Search Youtube</label>
                        <div className="ui action input">
                            <input 
                                type="text" 
                                value={ term } 
                                onChange={ (event) => setTerm(event.target.value) }
                                />
                            <button className="ui button">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
}

export default SearchBar;