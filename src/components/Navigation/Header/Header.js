import React from "react";

import classes from "./Header.module.css";
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = props => {

    return (
        <div className={classes.Header}>
            <span className={classes.GetApp}><MobileScreenShareIcon style={{ fontSize: 15 }} />Get the app</span>
            <span className={classes.Profile}><AccountCircleIcon style={{ fontSize: 35, fill: "white" }} /></span>
        </div>
    );
}

export default Header;