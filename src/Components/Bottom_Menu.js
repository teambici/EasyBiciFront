import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import TimelineIcon from '@material-ui/icons/Timeline';
import "./Bottom_menu.css";

const useStyles = makeStyles({
    root: {
        width: "100vw",
        position: "fixed",
        bottom: 0
    },
});


export default function SimpleBottomNavigation() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    return (

        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}

        >
            <BottomNavigationAction label="Search" icon={<SearchIcon />} component={Link} to="/Services" />
            <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} component={Link} to="/favorites" />
            <BottomNavigationAction label="Services" icon={<DirectionsBikeIcon />} />
            <BottomNavigationAction label="Recents" icon={<TimelineIcon />} component={Link} to="/recents" />
            <BottomNavigationAction label="Profile" icon={<PersonIcon />} component={Link} to="/profile" />
        </BottomNavigation>



    );
}