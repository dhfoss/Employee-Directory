import React from 'react';

const Buttons = ({orderEmployees}) => {
    return (
        <div className="container mb-3">
            <button className="btn btn-primary" id="lastNameButton" onClick={e => orderEmployees(e)}>Sort by Last Name</button>
            <button className="btn btn-primary" id="emailButton" onClick={e => orderEmployees(e)}>Sort By Email</button>
            <button className="btn btn-primary" id="cityButton" onClick={e => orderEmployees(e)}>Sort By City</button>
            <button className="btn btn-primary" id="countryButton" onClick={e => orderEmployees(e)}>Sort By Country</button>
        </div>
    )
}

export default Buttons;