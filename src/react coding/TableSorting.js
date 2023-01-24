import React, { useState } from 'react';



function TableSorting() {

    let tableData = [
        { id: 1, name: 'Siva Sankar', mobile: 9434343431 },
        { id: 4, name: 'Balaji', mobile: 7333232765 },
        { id: 3, name: 'Aravind', mobile: 8333232123 },
        { id: 2, name: 'Ravi Kumar', mobile: 9334323232 },
    ]


    const [sortKeys, setSortKeys] = useState({})


    const handleSorting = (selectedKey) => {
        let sortInfo = sortKeys[selectedKey];
        setSortKeys((pre) => {
            return {
                [selectedKey]: sortInfo ? pre[selectedKey] === '' ? 'asc' : (pre[selectedKey] === 'asc' ? 'desc' : "") : 'asc'
            }
        });
    }

    tableData = tableData?.sort((a, b) => {
        let sortKey = Object.keys(sortKeys)?.[0];
        if (sortKey === 'name') {
            if (sortKeys[sortKey] === 'asc') return a[sortKey]?.localeCompare(b[sortKey])
            else if (sortKeys[sortKey] === 'desc') return b[sortKey]?.localeCompare(a[sortKey])
            else if (sortKeys[sortKey] === '') return 0
        }
        else {
            if (sortKeys[sortKey] === 'asc') return a[sortKey] - b[sortKey];
            else if (sortKeys[sortKey] === 'desc') return b[sortKey] - a[sortKey]
            return 0
        }
        return 0

    });
    console.log('tableData==>', tableData)

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='pointer' onClick={() => handleSorting('id')}>S.No</th>
                        <th className='pointer' onClick={() => handleSorting('name')}>Name</th>
                        <th className='pointer' onClick={() => handleSorting('mobile')}>Mobile No</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tableData?.map(x => {
                            return <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.name}</td>
                                <td>{x.mobile}</td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default TableSorting