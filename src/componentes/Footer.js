import { makeStyles } from "@material-ui/core";
import React from "react";

const Footer = () => {
    const classes = useStyles();
    return (
        <div>Footer</div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
    /*backgroundColor:"#111",*/
    minHeight: "100vh",
},
}));

export default Footer;