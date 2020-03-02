import React from 'react';
import logo from '../netflixlogo.png';


const Header = () => {
    return (
        <div>
            <div className="topbar"></div>
            <img className="logoimg" src={logo} alt={"netflixlogo"} />
            
        </div>
    );
};

export default Header;