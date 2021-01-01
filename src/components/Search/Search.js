import React, {useState} from "react";

import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import classes from "./Search.module.css";
import SliderModal from "../UI/SliderModal/SliderModal";


const Search = props => {

    const [location, setLocation] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const searchHandler = event => {
        setLocation(event.target.value);
    }

    const locationSetHandler = () => {
        setOpenModal(true);
    }

    const foodSearchHandler = () => {
        setOpenModal(true);
    }

    const closeModalHandler = () => {
        setOpenModal(false);
    }

    return (
        <React.Fragment>
            <SliderModal show={openModal} close={closeModalHandler} ><h1>Hello</h1><h1>Hello</h1></SliderModal>
            <div className={classes.Search}>
                <h1 className={classes.Heading}>Zomato Clone</h1>
                <h3 className={classes.SubHeading}>Discover the best foods & drinks in Mumbai</h3>
                <div className={classes.InputBoxes}>
                    <div onClick={locationSetHandler} className={classes.InputBox}>
                        <span className={classes.IconText}>
                            <RoomRoundedIcon className={classes.InputIcon} />
                            <p className={classes.PlaceholderText}>{location.length > 0 ? location : "Enter your location..."}</p>
                        </span>
                        <ArrowDropDownRoundedIcon className={classes.ArrowDown} />
                    </div>
                    <div onClick={foodSearchHandler} className={classes.InputBox}>
                        <span className={classes.IconText}>
                            <SearchRoundedIcon className={classes.InputIcon} />
                            <p className={classes.PlaceholderText}>Search for Restaurant, Cuisine or a Dish</p>
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Search;