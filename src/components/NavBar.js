import React from 'react';
import './NavBar.css';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="bars" />

                <div className="navMenu">
                    <Link className="navLink" to='/home' activeStyle>
                        Explore Like a Local
                    </Link>
                    <Link className="navLink" to='/about' activeStyle>
                        About
                    </Link>
                    <Link className="navLink" to='/events' activeStyle>
                        Events
                    </Link>
                    <Link className="navLink" to='/annual' activeStyle>
                        Annual Report
                    </Link>
                    <Link className="navLink" to='/team' activeStyle>
                        Teams
                    </Link>
                    <Link className="navLink" to='/blogs' activeStyle>
                        Blogs
                    </Link>
                    <Link className="navLink" to='/sign-up' activeStyle>
                        Sign Up
                    </Link>
                </div>
                <div className="navBtn">
                    <Link className="navBtnLink" to='/signin'>Sign In</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
