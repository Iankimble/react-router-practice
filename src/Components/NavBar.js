import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div>
            <nav>
                <h1> Sneaker Palace</h1>
                <ul>
                
                    <Link to= "/">
                        <li>Home</li>
                    </Link>
                    
                    <Link to= "/shop">
                        <li>Shop</li>
                    </Link>

                    <Link to= "/about">
                        <li>About</li>
                    </Link>
                
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;