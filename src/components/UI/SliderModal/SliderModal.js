import React from "react";

import classes from "./SliderModal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const SliderModal = props => {
    return (
        <React.Fragment>
            {props.show && <Backdrop close={props.close} />}
            <div onClick={props.close} className={[classes.SliderModal, props.show ? classes.Open : classes.Close ].join(" ")}>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default SliderModal;