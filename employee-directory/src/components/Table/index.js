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


