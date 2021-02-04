import React, { useEffect, useState } from 'react';
import getUsers from '../../utils/api';
import TableRow from '../TableRow';
import Buttons from '../Buttons';
import SearchBar from '../SearchBar';
import * as order from '../../utils/order'


const Table = () => {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [lastButtonClicked, setLastButtonClicked] = useState('lastNameButton');
    const [permanentEmployees, setPermanentEmployees] = useState([]);

    useEffect(() => {
        getUsers()
        .then(res => {
            setEmployees(order.orderByLastName(res));
            setPermanentEmployees(order.orderByLastName(res));
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    useEffect(() => {
        console.log(employees)
    }, [employees])


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

    const sortEmployees = e => {
         if (!e.target.value) {
            const employeeArray = [...permanentEmployees];
            setEmployees(employeeArray);
        } else {
            const employeeArray = [...permanentEmployees];
            const query = e.target.value.toLowerCase();
    
            const filterEmployees = (arr, query) => {
                return arr.filter(e => {
                    return (
                        e.name.last.toLowerCase().indexOf(query) !== -1
                    )
                }) 
            }
            setEmployees(filterEmployees(employeeArray, query));
        }
    }

    return (
        <div className="container" >
            <SearchBar sortEmployees={sortEmployees}/>
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
                    {

                    
                        employees.map(employee => {
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
                        })
                    
                    }
                </tbody>
            </table>
        </div>  
    );
}

export default Table;