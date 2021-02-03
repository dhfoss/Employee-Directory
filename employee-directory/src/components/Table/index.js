import React, { useEffect, useState } from 'react';
import getUsers from '../../utils/api';
import TableRow from '../TableRow';
import Buttons from '../Buttons';
import * as order from '../../utils/order'

function Table() {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [lastButtonClicked, setLastButtonClicked] = useState('lastNameButton')

    useEffect(() => {
        getUsers()
        .then(res => {
            setEmployees(order.orderByLastName(res));
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    useEffect(() => {
        console.log('Render');
    }, [lastButtonClicked]);

    const orderEmployees = e => {
        if (e.target.id === lastButtonClicked) {
            return;
        }
        setLastButtonClicked(e.target.id)
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
            <Buttons orderEmployees={orderEmployees} />
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