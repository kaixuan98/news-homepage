import React from 'react'
import '../styles/styles.scss';
import Logo from './Logo';
import Menu from './Menu';

type windowSize = {
  width: number;
  height: number;
}
type NavBarProps = {
  windowSize: windowSize; 
  isMenuActive: boolean; 
  handleMenuActive: React.Dispatch<React.SetStateAction<boolean>>; 

}

const NavBar = ({windowSize, isMenuActive, handleMenuActive}: NavBarProps): JSX.Element => {
  
  return (
    <header className="navbar">
        <div className="navbar__logo">
            <Logo/>
        </div>
        {
          windowSize.width >= 600? (
            <div className="navbar__links-container">
                <ul className="navbar__links">
                    <li className="navbar__link">Home</li>
                    <li className="navbar__link">New</li>
                    <li className="navbar__link">Popular</li>
                    <li className="navbar__link">Trending</li>
                    <li className="navbar__link">Categories</li>
                </ul>
            </div>
          ):(
            <div className="navbar__icon-btn" onClick={() => handleMenuActive(!isMenuActive)}>
              <Menu/>
              </div>
            )
        }   
    </header>
  )
}

export default NavBar