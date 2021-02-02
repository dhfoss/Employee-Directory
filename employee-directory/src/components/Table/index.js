import React, { useEffect, useState } from 'react';
import getUsers from '../../utils/api';
import TableRow from '../TableRow';
import * as order from '../../utils/order'

function Table() {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getUsers()
        .then(res => {
            setEmployees(order.orderByLastName(res));
        })
    }, []);

    // useEffect(() => {
    //     console.log('Render');
    // }, [employees]);


    const orderEmployees = e => {
        const employeeArray = [...employees];
        switch (e.target.id) {
            case "lastNameButton":
                setEmployees(order.orderByLastName(employeeArray));
                break;
            case "emailButton":
                setEmployees(order.orderByEmail(employeeArray));
                break;
            case "cityButton":
                setEmployees(order.orderByCity(employeeArray));
                break;
            case "countryButton":
                setEmployees(order.orderByCountry(employeeArray));
                break;
            default: 
                break;
        }
    }


    return (
        <div className="container" >

            <div className="container">
                <button className="btn btn-primary" id="lastNameButton" onClick={e => orderEmployees(e)}>Sort by Last Name</button>
                <button className="btn btn-primary" id="emailButton" onClick={e => orderEmployees(e)}>Sort By Email</button>
                <button className="btn btn-primary" id="cityButton" onClick={e => orderEmployees(e)}>Sort By City</button>
                <button className="btn btn-primary" id="countryButton" onClick={e => orderEmployees(e)}>Sort By Country</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => {
                        return (
                            <TableRow 
                            lastName={employee.name.last}
                            firstName={employee.name.first}
                            email={employee.email}
                            city={employee.location.city}
                            country={employee.location.country}
                            key={employees.indexOf(employee)}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>  
    );
}

export default Table;