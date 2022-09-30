import React from "react";
import '../Styles/Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <h2 id="footerTitle">Algorithmic</h2>
                <div className="footerContent">
                    <div>
                        <h3>Pricing</h3>
                        <a href="#"><p>Overview</p></a>
                        <a href="#"><p>Premium Plans</p></a>
                        <a href="#"><p>Affiliate Program</p></a>
                        <a href="#"><p style={{'marginBottom': '0px'}}>Promotions</p></a>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <a href="#"><p>About Us</p></a>
                        <a href="#"><p>Blog</p></a>
                        <a href="#"><p>Partnerships</p></a>
                        <a href="#"><p>Press</p></a>
                        <a href="#"><p style={{'marginBottom': '0px'}}>Careers</p></a>
                    </div>
                    <div>
                        <h3>Resources</h3>
                        <a href="#"><p>Application</p></a>
                        <a href="#"><p>Documentation</p></a>
                        <a href="#"><p>API</p></a>
                        <a href="#"><p>Systems</p></a>
                        <a href="#"><p style={{'marginBottom': '0px'}}>FAQ</p></a>
                    </div>
                    <div>
                        <h3>Social</h3>
                        <a href="#"><p>Facebook</p></a>
                        <a href="#"><p>Twitter</p></a>
                        <a href="#"><p>Instagram</p></a>
                        <a href="#"><p style={{'marginBottom': '0px'}}>LinkedIn</p></a>
                    </div>
                </div>
            </div>
            <section>
                <div className="copyright">
                    <p>Algorithmic @Copyright 2022</p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;