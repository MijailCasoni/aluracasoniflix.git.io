import { makeStyles } from "@material-ui/core";
import React from "react";

const Button = () => {
    const classes = useStyles();
    return (
        <div>Button</div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
    /*backgroundColor:"#111",*/
    minHeight: "100vh",
},
}));

export default Button