import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../img/logo.jpg'
const Header = () => {
    return (
        <header className={styles.Container}>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/task'>task</Link>
                    </li>
                </ul>
            </nav>
            <img src={logo} alt="" />
        </header>
    );
};

export default Header;