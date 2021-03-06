import React from 'react';

function Header(props) {
    return (
        <nav className='green darken-1'>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/KonstantinOkhorzin/React_movies" target="_blank">Repo</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;