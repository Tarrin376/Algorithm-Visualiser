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
                        <p>Overview</p>
                        <p>Premium Plans</p>
                        <p>Affiliate Program</p>
                        <p style={{'marginBottom': '0px'}}>Promotions</p>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Partnerships</p>
                        <p>Press</p>
                        <p style={{'marginBottom': '0px'}}>Careers</p>
                    </div>
                    <div>
                        <h3>Resources</h3>
                        <p>Application</p>
                        <p>Documentation</p>
                        <p>API</p>
                        <p>Systems</p>
                        <p style={{'marginBottom': '0px'}}>FAQ</p>
                    </div>
                    <div>
                        <h3>Social</h3>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p style={{'marginBottom': '0px'}}>LinkedIn</p>
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