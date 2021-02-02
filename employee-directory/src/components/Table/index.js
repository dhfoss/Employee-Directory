import React, { useEffect, useState } from 'react';
import getUsers from '../../utils/api';
import TableRow from '../TableRow';

function Table() {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getUsers()
        .then(res => {
            res.sort((a, b) => {
                const nameA = (a.name.last).toUpperCase();
                const nameB = (b.name.last).toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
                });

            setEmployees(res)
        })
    }, [])

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