import React, { useEffect, useState } from "react";
import Axios from 'axios'

function Form() {

    const [data, setData] = useState({ name: '', password: '', email: '', city: '', gender: '' });

    const [table, setTable] = useState([])

    const datachange = (e) => {
        setData((prestate) => {
            return {
                ...prestate,
                [e.target.name]: e.target.value
            }
        })
    }

    useEffect(() => {
        Axios.get('https://62a14506cc8c0118ef486ee5.mockapi.io/form')
            .then(res => {
                console.log('users Data ==>', res.data)
                setTable(res.data)
            })
    }, [])



    const handleSubmitForm = (e) => {
        e.preventDefault();
        Axios.post('https://62a14506cc8c0118ef486ee5.mockapi.io/form', data)
            .then(res => {
                Axios.get('https://62a14506cc8c0118ef486ee5.mockapi.io/form')
                    .then(res => {
                        console.log('users Data ==>', res.data)
                        setTable(res.data)
                    })
                alert("data posted")
            })
            .catch(error => {
                console.log("error==>", error)
            })

    }

    const deleteHandler = (e) => {
        const url = `https://62a14506cc8c0118ef486ee5.mockapi.io/form/${e.id}`
        Axios.delete(url)
            .then(res => {
                //console.log('users Data ==>', res.data)
                Axios.get('https://62a14506cc8c0118ef486ee5.mockapi.io/form')
                    .then(res => {
                        setTable(res.data)
                    })

            })
    }


    return (
        <div>
            <h1> Form</h1>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label> Name</label>
                    <input type="text" name="name" value={data.name} onChange={datachange} />
                </div>
                <div>
                    <label> password</label>
                    <input type="password" name="password" value={data.password} onChange={datachange} />
                </div>
                <div>
                    <label> email</label>
                    <input type="email" name="email" value={data.email} onChange={datachange} />
                </div>
                <div>
                    <label> city</label>
                    <select name="city" value={data.city} onChange={datachange} >
                        <option> Select city</option>
                        <option> Hyderabad</option>
                        <option> Banglore</option>
                        <option> Chennai</option>
                    </select>
                </div>
                <div>
                    <label> Gender </label>
                    <input type="radio" name="gender" value="male" onChange={datachange} /> Male
                    <input type="radio" name="gender" value="female" onChange={datachange} /> Female
                </div>
                <div>
                    <button type="submit">Submit</button>

                </div>
            </form>
            <br />
            <br />
            <br />
            <div>
                <table border="1">
                    <tr>
                        <th> S.No</th>
                        <th> Name</th>
                        <th> Password</th>
                        <th> city</th>
                        <th> Gender</th>
                        <th> Actions</th>
                    </tr>
                    {table.map((e) => (
                        <tr key={e.id}>
                            <td> {e.id}</td>
                            <td> {e.name}</td>
                            <td> {e.password}</td>
                            <td> {e.city}</td>
                            <td> {e.gender}</td>
                            <td> <button onClick={() => deleteHandler(e)}> Delete</button></td>

                        </tr>
                    ))}

                </table>

            </div>
        </div>
    )
}

export default Form;