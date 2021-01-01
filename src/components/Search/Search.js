import React, {useState} from "react";

import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import classes from "./Search.module.css";


const Search = props => {

    const [location, setLocation] = useState("");

    const searchHandler = event => {
        setLocation(event.target.value);
    }

    return (
        <div className={classes.Search}>
            <h1 className={classes.Heading}>Zomato Clone</h1>
            <h3 className={classes.SubHeading}>Discover the best foods & drinks in Mumbai</h3>
            <div className={classes.InputBoxes}>
                <div className={classes.InputBox}>
                    <span className={classes.IconText}>
                        <RoomRoundedIcon className={classes.InputIcon} />
                        <p className={classes.PlaceholderText}>{location.length > 0 ? location : "Enter your location..."}</p>
                    </span>
                    <ArrowDropDownRoundedIcon className={classes.ArrowDown} />
                </div>
                <div className={classes.InputBox}>
                    <span className={classes.IconText}>
                        <SearchRoundedIcon className={classes.InputIcon} />
                        <p className={classes.PlaceholderText}>Search for Restaurant, Cuisine or a Dish</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Search;