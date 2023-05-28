import { makeStyles } from "@material-ui/core";
import React from "react";

const Paypal = () => {
    const classes = useStyles();
    return (
        <div>
            <h1>Paypal</h1>
        </div>  
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
    /*backgroundColor:"#111",*/
    minHeight: "100vh",
    }}));

export default Paypal;