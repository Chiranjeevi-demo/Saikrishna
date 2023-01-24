import React, { useState, useEffect } from 'react';
import Axios from 'axios'

function Grida() {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log('users Data ==>', res.data)
                setUsers(res.data)
            })
    }, [])


    function deletehandler(id) {
        var res = users.filter((e) => {
            if (e.id !== id) {
                return true;
            }
        })
        setUsers(res)
    }

    return (
        <div>
            <h1> Grid Axious </h1>
            <div class="d-flexwrap">
                {users?.map(x => {
                    return <div className="grid-1">
                        <div> {x.name}</div>
                        <div> {x.username}</div>
                        <div> {x.email}</div>
                        <button onClick={() => deletehandler(x.id)}> Delete </button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Grida;