import React  from 'react';
import { Link } from 'react-router';
import { navBar, home} from './styles.css';

const NavBar = () => (
    <div className={navBar}>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
    </div>
);
export default NavBar;
