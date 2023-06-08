import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { CasflixButton } from "../styled/styledcomponents";

const Plans = ({cost, children, color, wide}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Typography className={classes.standard} variant='h5'>
            {children}
        </Typography>
        <CasflixButton color={color} wide={wide}>Suscribirse</CasflixButton>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& button":{
            marginBottom: theme.spacing(3),
        },
},
standard: {
    fontSize: "1.2rem",
},
}));

export default Plans




