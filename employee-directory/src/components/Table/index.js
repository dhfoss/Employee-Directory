import React, { useEffect, useState } from 'react';
import getUsers from '../../utils/api';

function Table() {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getUsers()
        .then(res => {
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
                            <tr>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.location.city}, {employee.location.country}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>  

      );
    }

export default Table;







// class Table2 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             employees: []
//         };
//     }

//     componentDidMount() {

//         axios.get('https://randomuser.me/api/')
//         // .then(res => res.json())
//         .then(res => console.log(res.data.results[0].name))


//     }

//     render() {
//         // const {employees} = this.state;
//         // console.log(employees[0].results);
//         return (
//             <div>

//             </div>
//         )
//     }

// }


