import React, { useEffect, useState, useRef } from "react";
import arrow from './Images/arrow.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [showMobileButton, setShowMobileButton] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false);
    const mobileButton = useRef(null);

    const toggleMobileButton = () => {
        const screenSize = window.innerWidth;
        if (screenSize <= 1100) {
            setShowMobileButton(true);
            return;
        }

        setShowMobileButton(false);
        setShowMobileNav(false);
    };

    useEffect(() => {
        window.addEventListener('resize', toggleMobileButton);
        toggleMobileButton();
    }, []);

    return (
        <nav>
            <h1>Algorithmic</h1>
            {showMobileNav ? <MobileNavBar showNav={(show) => setShowMobileNav(show)} mobileButton={mobileButton} /> : <DesktopNavBar />}
            {showMobileButton && <NavButton showNav={(show) => setShowMobileNav(show)} mobileButton={mobileButton} />}
        </nav>
    );
}

const NavButton = ({ showNav, mobileButton }) => {
    const rotateButton = () => {
        showNav(true);
        mobileButton.current.classList.remove('reverse');
        mobileButton.current.classList.add('rotate');
    };

    return (
        <div className='mobileButton' ref={mobileButton} onClick={rotateButton}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

const DesktopNavBar = () => {
    return (
        <ul id="desktopNav">
            <li className="hoverItem">
                <Link to="/">
                    <button style={{color: 'white'}}>
                        Home
                    </button>
                </Link>
            </li>
            <li id="question">New to this platform?</li>
            <li style={{'marginRight': '0', 'marginLeft': '10px'}}>
                <Link to="/dashboard" style={{textDecoration: 'none', color: 'white'}}>
                    <button id="getStarted" className="titleButton"><img src={arrow} alt="arrow"/>Get Started</button>
                </Link>
            </li>
        </ul>
    );
};

const MobileNavBar = ({ showNav, mobileButton }) => {
    const rotateButton = () => {
        showNav(false);
        mobileButton.current.classList.remove('rotate');
        mobileButton.current.classList.add('reverse');
    };

    return (
        <div className="mobile">
            <ul id="mobileNav">
                <div id="exit" onClick={rotateButton}><p>X</p></div>
                <li><h1 style={{'visibility': 'visible'}}>Algorithmic</h1></li>
                <li className="hoverItem">
                    <Link to="/">
                        <button style={{color: 'white'}}>
                            Home
                        </button>
                    </Link>
                </li>
                <li id="question">New to this platform?</li>
                <li>
                    <Link to="/app" style={{textDecoration: 'none', color: 'white'}}>
                        <button id="getStarted" className="titleButton"><img src={arrow} alt="arrow"/>Get Started</button>
                    </Link>
                </li>
            </ul>
            <div id="spanPage">
            </div>
        </div>
    );
};

export default Navbar;