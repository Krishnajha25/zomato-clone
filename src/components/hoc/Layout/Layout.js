import React from "react";

import classes from "./Layout.module.css";
import foodImage from "../../../assets/image/ZomatoBackground.jpg";
import Header from "../../Navigation/Header/Header";
import Hero from '../../Hero/Hero'


//style={{backgroundImage: `url(${foodImage})`}}
const Layout = props => {
    return (
        <React.Fragment>
            <div className={classes.Layout}>
                <Hero />
                {/* <div className={classes.BackgroundImage}>
                    <img src={foodImage} alt="" />
                </div>
                <div className={classes.Backdrop}></div> */}
                {/* <Header /> */}
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Layout;