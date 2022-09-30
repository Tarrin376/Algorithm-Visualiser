import React, { useEffect } from "react";
import arrow from '../../../Images/arrow.png';
import codeVideo from '../../../Images/vid.mp4';
import '../../../Navbar.css';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const letters = new Array(10);
    for (let i = 0; i < letters.length; i++) {
        letters[i] = React.createRef();
    }

    useEffect(() => {
        let index = 0;
        let left = true;

        setInterval(() => {
            if (letters[0].current == null) return;
            if (index === letters.length / 2) {
                for (let part of letters) part.current.style.color = '#FFEAB4';
                left = true;
                index = 0;
                return;
            }

            letters[index].current.style.color = '#da2cff';
            index = (letters.length - 1) - index;
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
                            <span ref={letters[0]}> A</span><span ref={letters[1]}>l</span><span ref={letters[2]}>g</span>
                            <span ref={letters[3]}>o</span><span ref={letters[4]}>r</span><span ref={letters[5]}>i</span>
                            <span ref={letters[6]}>t</span><span ref={letters[7]}>h</span><span ref={letters[8]}>m</span>
                            <span ref={letters[9]}>s</span>
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