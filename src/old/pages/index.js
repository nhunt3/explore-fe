import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to='/atlanta'>Atlanta</Link>
            <Link to='/tampa'><div>Tampa / St. Pete</div></Link>
        </div>
    );
};

export default Home;
