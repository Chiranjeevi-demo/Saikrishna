import React from 'react'

import {   Link } from "react-router-dom";

 function Header() {
  return (
    <div>
<ul className="menu"> 
        <li><Link to="/">Home</Link></li>
              <li><Link to="Page1">Page 1</Link></li>
              <li><Link to="Page2">Page 2</Link></li>
              <li><Link to="Page3">Page 3</Link></li>
              <li><Link to="Page4">Page 4</Link></li>
              <li><Link to="Product">Product </Link></li>
              <li><Link to="Pagination1">Pagination1 </Link></li>
              <li><Link to="Login">Login </Link></li>
        </ul>
    </div>
  )
}
export default Header;
