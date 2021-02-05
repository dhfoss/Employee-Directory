import React from 'react';

const SearchBar = ({sortEmployees}) => {
    return (
        <div className="container mb-3">
            <input placeholder="Search by Last Name" onChange={e => sortEmployees(e)} type="text"></input>
        </div>
    )
}

export default SearchBar;