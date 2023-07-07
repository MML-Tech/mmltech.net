import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faList } from "@fortawesome/free-solid-svg-icons";
import "../css/topnav.css"
library.add(faHouse, faList);
const topIcon = require('../assets/logo512.png');

const Topnav = () => {
    return(
        <div className="topnav">
            <div className="icon">
                <img src={topIcon} alt="" />
            </div>
            <hr className="navsep" />
            <a className="navIcon" href="index" title='Home'>
                <FontAwesomeIcon icon='fa-solid fa-house' />
                <span>Home</span>
            </a>
            <a className="navIcon" href="projects" title='Projects'>
                <FontAwesomeIcon icon="fa-solid fa-list" />
                <span>Projects</span>
            </a>
        </div>
    );
}

export default Topnav;