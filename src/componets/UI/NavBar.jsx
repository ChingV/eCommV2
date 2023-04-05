import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import classes from './NavBar.module.css';


function NavBar(){
    return(
        <header>
            <nav>
                    <div><img src="/images/logo.jpg"/></div>
                <section className={classes['nav-links']}>
                    <ul>
                        <li>
                            <Link to="/"><p>Home</p></Link>
                        </li>
                        <li>
                            <Link to="/products"><p>Products</p></Link>
                        </li>
                        <li>
                            <Link to="/contacts"><p>Contact</p></Link>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
    )
}

export default NavBar;