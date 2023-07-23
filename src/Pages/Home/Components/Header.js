import React, { useEffect, useRef } from "react";
import arrow from '../../../Images/arrow.png';
import codeVideo from '../../../Images/vid.mp4';
import '../../../Navbar.css';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const letters = useRef(new Array(10).fill(0).map((_) => React.createRef()));

    useEffect(() => {
        let index = 0;
        let left = true;

        setInterval(() => {
            if (letters.current[0].current == null) return;
            if (index === letters.current.length / 2) {
                for (let part of letters.current) part.current.style.color = '#FFEAB4';
                left = true;
                index = 0;
                return;
            }

            letters.current[index].current.style.color = '#da2cff';
            index = (letters.current.length - 1) - index;
            left = !left;
            
            if (left) {
                index++;
            }
        }, 600);
    }, []);

    return (
        <React.Fragment>
            <div className="header">
                <div className="heading">
                    <div>
                        <h1>Learn
                            <span ref={letters.current[0]}> A</span><span ref={letters.current[1]}>l</span><span ref={letters.current[2]}>g</span>
                            <span ref={letters.current[3]}>o</span><span ref={letters.current[4]}>r</span><span ref={letters.current[5]}>i</span>
                            <span ref={letters.current[6]}>t</span><span ref={letters.current[7]}>h</span><span ref={letters.current[8]}>m</span>
                            <span ref={letters.current[9]}>s</span>
                        , problem solve, become a better developer</h1>
                        <Link to="/dashboard" style={{textDecoration: 'none', color: 'white'}}>
                            <button id="getStarted" className="titleButton"><img src={arrow} alt="arrow"/>Get Started</button>
                        </Link>
                    </div>
                </div>
                <div className="video">
                    <video id="codeVideo" autoPlay loop muted>
                        <source src={codeVideo} type="video/mp4"></source>
                    </video>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;