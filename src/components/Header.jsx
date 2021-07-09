import React from 'react'
import  './header.css'
function Header() {
    return (
        <div className="header">

          <nav>
          <ul className="left">
              <li className="logo">Logo</li>
          </ul>
              <ul className="right">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
                        </nav>
        </div>
    )
}

export default Header;
