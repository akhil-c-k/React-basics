import React from 'react';
import {Link} from 'react-router-dom'

const navStyles = {  color:'white'}

function Nav() {
  return (
   <nav>
     <h3>Logo</h3>
     <ul className="nav-links">
       <Link to="/about" style={navStyles} ><li>About</li></Link>
       <Link to="/shop"  style={navStyles}><li>Shop</li></Link>
     </ul>
   </nav>
  );
}

export default Nav;
