import React from 'react';

const TableRow = props => {
    return (
        <tr>
            <th>{props.num}</th>
            <td>{props.lastName}</td>
            <td>{props.firstName}</td>
            <td>{props.email}</td>
            <td>{props.city}, {props.country}</td>
        </tr>
    )
}

export default TableRow;