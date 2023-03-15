import React from 'react'
import '../styles/styles.scss';
import Logo from './Logo'

const NavBar: React.FC<{}> = (): JSX.Element => {
  return (
    <header className="navbar">
        <div className="navbar__logo">
            <Logo/>
        </div>
        <div className="navbar__links-container">
            <ul className="navbar__links">
                <li className="navbar__link">Home</li>
                <li className="navbar__link">New</li>
                <li className="navbar__link">Popular</li>
                <li className="navbar__link">Trending</li>
                <li className="navbar__link">Categories</li>
            </ul>
        </div>
    </header>
  )
}

export default NavBar