import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

// import './Navbar.css';
function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const user = useSelector((store) => store.user);
    const history = useHistory();

    const toHome = () => {
      setIsNavExpanded(false)
      history.push(`/user`)
    }
    
    const toSearch = () => {
      setIsNavExpanded(false)
      history.push(`/searchRecipe`)
    }
    const addRecipe = () => {
      setIsNavExpanded(false)
      history.push(`/addRecipe`)
    }
    const toAbout = () => {
        setIsNavExpanded(false)
        history.push('/about')
    }
    const toLanding = () => {
      setIsNavExpanded(false)
      history.push(`/landing`)
    }


    // This will be handling the links that a guest can access which will be the 
    // about, landing and search pages
    const renderLinks = () => {
      if (user.id || user.isGuest) {
          return (
              <ul>
                  {!user.id ? 
                      <li className="nav" onClick={toLanding}>
                          Login/Register Page
                      </li>
                      : null
                  }
                  {user.id ? 
                      <>
                          <li className="nav" onClick={toHome}>
                              Home
                          </li>
                          <li className="nav" onClick={addRecipe}>
                              Add Recipe
                          </li>
                      </>
                      : null
                  }
                  <li className="nav" onClick={toSearch}>
                       Search Recipes
                  </li>
                 
                  <li className="nav" onClick={toAbout}>
                      About
                  </li>
                  {user.id &&
                      <LogOutButton className="navLink" />
                  }
              </ul>
          );
      }
      return <ul><li className="nav" onClick={toLanding}>Login/Register Page</li></ul>;
    };

    return (
        <nav className="navigation">
            <h2 className="navHeader">Cooking With Confidence</h2>
            <p className='navPtag'>An app to save all of your favorite recipes!</p>
            
            <button
                className="hamburger"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <center>
                    {renderLinks()}
                </center>
              </div>
        </nav>
    );
}




            /* <center>
            <ul>
            <li className="nav" onClick={toLanding}>
                Login/Register Page
              </li>
              <li className="nav" onClick={toHome}>
                Home
              </li>
              <li className="nav" onClick={addRecipe}>
                Add Recipe
              </li>
              <li className="nav" onClick={toSearch}>
                Search Recipes
              </li>
              <li className="nav" onClick={toInfo}>
                Info Page
              </li>
              <li className="nav" onClick={toAbout}>
                 About
            </li>
                <LogOutButton className="navLink" />
            </ul>
            </center> */
          /* </div> */
          
          /* </> */
          /* : null */
           /* } */
        /* </nav> */
      /* ) */
// }
export default Navbar;







