/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from "react";
import '../css/main.css';
const currentUrl = window.location.href;

const NotFound = () => {
    return(
        <div className="content">
            <div className='notfound'>
                <h1>There seems to be an error.</h1>
                <br />
                <p>The page <strong>{currentUrl}</strong> doesn't exist or is unavailable for construction purposes.</p>
                <br /><br /><br />
                <strong>You can refer to the pages below to get to the right page.</strong>
            </div>
            <br />
            <hr className='contentSep' />
            <br />
            <footer className="footer">
                <div className='mml-brands'>
                    <h3>Our Brands</h3>
                    <br />
                    <a href="" className='footerLink'>MML+</a>
                    <a href="" className='footerLink'>MML Games</a>
                </div>
                <div className='mml-links'>
                    <h3>Site Links</h3>
                    <br />
                    <a href='/' className="footerLink">Home</a>
                    <a href='/projects' className="footerLink">Projects</a>
                    <a href='/contact' className='footerLink'>Contact</a>
                    <a href='/about' className='footerLink'>About</a>
                </div>
                <div className='mml-legal'>
                    <h3>Legal</h3>
                    <br />
                    <a href='/privacy' className="footerLink">Privacy Policy</a>
                    <a href='/cookies' className="footerLink">Cookie Policy</a>
                    <a href='/terms' className="footerLink">Terms of Service</a>
                </div>
                <div className="mml-social"></div>
            </footer>
        </div>
    ); 
}

export default NotFound;