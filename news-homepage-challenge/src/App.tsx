import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import PageBody from './components/PageBody';
import './App.scss'; 
import Close from './components/Close';

type windowSize = {
  width: number;
  height: number;
}

function App() {
  // prop the state up so I can create an overlay on the pageBody
  const [windowSize, setWindowSize] = useState<windowSize>({width: window.innerWidth, height: window.innerHeight});
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  useEffect(() => {
    const handleWindowResize = () => {
        setWindowSize({width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])

  return (
    <div className="App">
      <NavBar windowSize={windowSize} isMenuActive={isMenuActive} handleMenuActive={setIsMenuActive}/>
      <PageBody windowSize={windowSize}/>
        {
          isMenuActive? 
          (
            <div className={`${"navbar__overlay-container"} ${isMenuActive? "navbar__overlay-container--active": ""}`} onClick={ () => setIsMenuActive(!isMenuActive)}>
              <div className="navbar__overlay-content">
                <div className="navbar__icon-btn--side" onClick={ () => setIsMenuActive(!isMenuActive)}>
                  <Close />
                </div>
                <ul className={`${"navbar__links"} ${"navbar__links--stack"}`}>
                  <li className="navbar__link">Home</li>
                  <li className="navbar__link">New</li>
                  <li className="navbar__link">Popular</li>
                  <li className="navbar__link">Trending</li>
                  <li className="navbar__link">Categories</li>
                </ul>
              </div>
            </div>
          ): ('')
        }
    </div>
  );
}

export default App;
