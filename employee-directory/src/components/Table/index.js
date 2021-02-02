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

    return (
        <div className="container" >
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