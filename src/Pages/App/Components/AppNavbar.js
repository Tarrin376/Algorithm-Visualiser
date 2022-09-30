import React, { useState, useRef, useContext } from 'react';
import '../Styles/AppNavbar.css';
import '../../../Navbar.css';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../index';
import { speeds } from '../services/Speeds';

function AppNavbar() {
    const [mobileNav, setMobileNav] = useState(false);
    const context = useContext(ContextProvider);
    const mobileNavbar = useRef();
    const cover = useRef();

    const toggleMobileNav = () => {
        setMobileNav((curState) => !curState);
        if (mobileNav) {
            mobileNavbar.current.style.left = '';
            cover.current.style.left = '';
        }
        else {
            mobileNavbar.current.style.left = '0';
            cover.current.style.left = '310px';
        }
    };

    return (
        <React.Fragment>
            <MobileAppNavbar mobileNavbar={mobileNavbar} cover={cover} toggleMobileNav={toggleMobileNav} context={context} />
            <div id="appNav" className={context.darkMode ? 'nav-dark' : ''}>
                <h1 id="appTitle">Algorithmic</h1>
                <div className="mobileNavButton" style={{display: 'none'}} onClick={toggleMobileNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul>
                    <li className="hoverItem" style={{color: 'black'}}><Link to="/"><button disabled={context.disable}>Home</button></Link></li>
                    <li className="hoverItem"><Link to="/about"><button disabled={context.disable}>About</button></Link></li>
                    <li className="hoverItem"><Link to="/support"><button disabled={context.disable}>Support</button></Link></li>
                    <li className="rightSide">
                        <button id="lightTheme" onClick={() => context.toggleTheme(false)} disabled={context.disable} className={context.disable ? 'disabled' : ''}>Light</button>
                        <button id="darkTheme" onClick={() => context.toggleTheme(true)} disabled={context.disable} className={context.disable ? 'disabled' : ''}>Dark</button>
                        <p style={{color: 'rgb(20, 20, 20)'}}>Speed:</p>
                        <select className={context.disable ? 'disabled speed' : ' speed'} value={context.speed} 
                        onChange={(e) => context.setSpeed(e.target.value)} disabled={context.disable}>
                            {Object.keys(speeds).map((speed) => <option value={speeds[speed]} key={speed}>{speed}</option>)}
                        </select>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

function MobileAppNavbar({ mobileNavbar, cover, toggleMobileNav, context }) {
    return (
        <div className="mobileContainer">
            <div ref={mobileNavbar} className="mobileNav">
                <div id="exit" onClick={toggleMobileNav}><p>X</p></div>
                <h1 id="appTitle" style={{color: 'white', display: 'block', textAlign: 'center'}}>Algorithmic</h1>
                <ul className="mobileList">
                    <li className="hoverItem"><Link to="/"><button disabled={context.disable}>Home</button></Link></li>
                    <li className="hoverItem"><Link to="/about"><button disabled={context.disable}>About</button></Link></li>
                    <li className="hoverItem"><Link to="/support"><button disabled={context.disable}>Support</button></Link></li>
                </ul>
                <div className="colourThemes">
                    <button id="lightTheme" onClick={() => context.toggleTheme(false)} disabled={context.disable}>Light</button>
                    <button id="darkTheme" onClick={() => context.toggleTheme(true)} disabled={context.disable}>Dark</button>
                </div>
                <div className="editorOrientation">
                    <p style={{color: 'white'}}>Speed:</p>
                    <select className="speed" value={context.speed} 
                    onChange={(e) => context.setSpeed(e.target.value)} disabled={context.disable}>
                        {Object.keys(speeds).map((speed) => <option value={speeds[speed]} key={speed}>{speed}</option>)}
                    </select>
                </div>
            </div>
            <div ref={cover} className="cover">
            </div>
        </div>
    );
}

export default AppNavbar;