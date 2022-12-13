import React from "react";
import { Link, Outlet } from "react-router-dom";

function Nav() {

    return (
        <>
          <header className="header">
            <nav>
              <Link to="/" className="mainLink">SHARETRADE</Link>
            </nav>
          </header>  
          <Outlet />
        </>
    )
}

export default Nav