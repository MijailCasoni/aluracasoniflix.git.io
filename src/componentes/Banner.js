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
                <Button>Reproducción</Button>
                <Button>Mi lista</Button>
            </div>
                <Typography style={{wordWrap: "break-word"}} variant="h6" className={classes.description}>
                    {
                        truncate("", 160)
                    }
                </Typography>
                <div className={classes.gradiente}/>
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
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#ffff",
},

buttons:{
    "& button": {
        cursor: "pointer",
        color: "white",
        fontWeight: 700,
        borderRadius: "5px",
        padding: theme.spacing(1, 4, 1, 4),
        marginRight: "1rem",
        backgroundColor: "rgba(51,51,51,0.5)",
    },
    "& button:hover": {
        color: "#000",
        backgroundColor: "#e6e6e6",
    }
},

gradiente: {
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
        "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
},
}));

export default Banner;