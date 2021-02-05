import React from 'react';

const Buttons = ({orderEmployees}) => {
    return (
        <div className="container mb-3">
            <button className="btn btn-primary mx-3" id="lastNameButton" onClick={e => orderEmployees(e)}>Sort by Last Name</button>
            <button className="btn btn-primary mx-3" id="emailButton" onClick={e => orderEmployees(e)}>Sort By Email</button>
            <button className="btn btn-primary mx-3" id="cityButton" onClick={e => orderEmployees(e)}>Sort By City</button>
            <button className="btn btn-primary mx-3" id="countryButton" onClick={e => orderEmployees(e)}>Sort By Country</button>
        </div>
    )
}

export default Buttons;