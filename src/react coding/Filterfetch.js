import React, { useState, useEffect } from 'react';


export default function Filterfetch() {
  
  const [data, setData] = useState([]);

  const [searchkey, setSearchkey] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handlesearch = (e) => {
    let search = e.target.value.toLowerCase();
    setSearchkey(search);

    //console.log('data===>', data);
  };
  
  let filtereddata = searchkey !== '' ? data.filter((e) => e.username.toLowerCase().includes(searchkey)): data;


  return (
    <div>
     <br/>
      <div>
        <input type="text" onChange={handlesearch} />
      </div>
      <br/>
      <table>
        <tr>
          <th> User Id </th>
          <th> Name </th>
          <th> User Name </th>
          <th> Email</th>
        </tr>
        {filtereddata.map((e) => (
          <tr>
            <td>{e.id} </td>
            <td>{e.name} </td>
            <td>{e.username} </td>
            <td>{e.email} </td>
          </tr>
        ))}
      </table>
    </div>
  );
}