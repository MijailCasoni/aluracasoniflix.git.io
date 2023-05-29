import { makeStyles } from "@material-ui/core";
import React from "react";

const Plans = (cost, children) => {
    const classes = useStyles();
    return (
        <div>
            {children}
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
    /*backgroundColor:"#111",*/
    minHeight: "100vh",
},
}));

export default Plans




