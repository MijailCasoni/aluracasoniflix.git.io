import { Button, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import HeroBanner from "../img/banner.jpg"

const Banner = () => {
    const classes = useStyles();

    const truncate = (string, n)=> string?.length > n ? `${string.substring(0, n-1)}...` : string

    return (
        <div className={classes.root}>
            <div className={classes.banner}>
                <Typography variant="h2" component="h1">
                    MoveTitle
                </Typography>
            <div className={classes.buttons}>
                <Button>Play</Button>
                <Button>My List</Button>
            </div>
            <Typography variant="h6" className={classes.description}>
                {
                    truncate("")
                }
            </Typography>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    backgroundImage: `url(${HeroBanner})`,
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgruondSize: "cover",
    backgroundPosition: "center",
    color: "#ffff"
},
buttons:{
    "& button": {
        cursor: "pointer",
        color: "white",
        fontWeight: 700,
        borderRadius: "5px",
        padding: theme.spacing(1, 4, 1, 4),
        marginRight: "1rem",
        backgroundColor: "rgba(51,51,51,9.5)",
    },
    "& button:hover": {
        color: "#000",
        backgroundColor: "#e6e6e6",
    },
}
}));

export default Banner;