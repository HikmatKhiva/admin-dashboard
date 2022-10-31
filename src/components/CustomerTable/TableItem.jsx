import React from 'react'

const TableItem = ({ id, name, jenis, kuantitas, peng }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{jenis}</td>
            <td>{kuantitas}</td>
            <td>{peng}</td>
        </tr>
    )
}

export default TableItem