import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav id='nav'>
            <div>
            <Link id="link" to="/">Home</Link>{" "}
            <Link id="link" to="/about">About</Link>{" "}
            <Link id="link" to="/test">TEST</Link>
            </div>
        </nav>
    )
}

export default NavBar
