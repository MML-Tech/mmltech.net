/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from "react";
import '../css/main.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faReddit, faMastodon } from "@fortawesome/free-brands-svg-icons";
const heroVid = require('../assets/herovid.mp4');
const banner = require('../assets/mmltech_banner.png')
library.add(faFacebook, faTwitter, faMastodon, faReddit);

const Index = () => {
    return(
        <div className="content">
            <div className="newSite">
                <br />
                <br />
                <img src={banner} className="banner" alt='' />
                <br />
                <h1>Welcome to the <em>NEW</em> MML Tech LLC</h1>
                <br />
                <p>We've remade all of mmltech.net, in React, for the most modular site we could make.</p>
                <br />
                <div className="socials-head">
                <h2>While you're here, follow us on social media!</h2>
                <br />
                <div className="mediaIcons">
                        <a href='https://facebook.com/MMLtechLLC' rel='noreferrer' className="brandLink" target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-facebook" className='brandIcon facebook' />
                        </a>
                        <a href='https://reddit.com/r/mmltech' rel='noreferrer' className="brandLink" target="_blank">
                            <FontAwesomeIcon icon='fa-brands fa-reddit' className='brandIcon reddit' />
                        </a>
                        <a href='https://mastodon.social/@mmltech' rel='noreferrer' className="brandLink" target="_blank">
                            <FontAwesomeIcon icon='fa-brands fa-mastodon' className='brandIcon mastodon' />
                        </a>
                        <a href='https://twitter.com/MMLtechLLC' rel='noreferrer' className="brandLink" target='_blank'>
                            <FontAwesomeIcon icon='fa-brands fa-twitter' className='brandIcon twitter' />
                        </a>
                    </div>
                </div>
                <br />
                <strong className="bigDownArrow">⬇️</strong>
            </div>
            <br />
            <hr className="contentSep" />
            <br />
            <div className="hero">
                <video id='mmlcdncontent-490843058439058903485' src={heroVid} className="" autoPlay={true} muted={true} loop={true} onContextMenu={
                    function(e) {e.preventDefault();}
                }/>
                <span id='mmltextbox-859405'>Introducing MML+</span>
                <a href='projects'>Click here for more info</a>
            </div>
            <br />
            <hr className="contentSep" />
            <br />
            <div className="socialMedia">
                <h2>Follow Us On Social Media!</h2>
                <br />
                <div className="mediaIcons">
                    <a href='https://facebook.com/MMLtechLLC' rel='noreferrer' className="brandLink" target="_blank">
                        <FontAwesomeIcon icon="fa-brands fa-facebook" className='brandIcon facebook' />
                    </a>
                    <a href='https://reddit.com/r/mmltech' rel='noreferrer' className="brandLink" target="_blank">
                        <FontAwesomeIcon icon='fa-brands fa-reddit' className='brandIcon reddit' />
                    </a>
                    <a href='https://mastodon.social/@mmltech' rel='noreferrer' className="brandLink" target="_blank">
                        <FontAwesomeIcon icon='fa-brands fa-mastodon' className='brandIcon mastodon' />
                    </a>
                    <a href='https://twitter.com/MMLtechLLC' rel='noreferrer' className="brandLink" target='_blank'>
                        <FontAwesomeIcon icon='fa-brands fa-twitter' className='brandIcon twitter' />
                    </a>
                    <p>Don't see your preferred platform here? Email <a href="mailto:info@mmltech.net" rel="noreferrer" className="bodyLink" target="_blank">info@mmltech.net</a> to get your platform here!*</p>
                    <br />
                    <p className="asteriskText">*Note that we don't use video or image-based platforms yet, but soon we will!</p>
                </div>
            </div>
            <br />
            <hr className="contentSep" />
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

export default Index;