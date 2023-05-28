import { makeStyles } from "@material-ui/core";
import React from "react";

const Home = () => {
    const classes = useStyles();
    return (
        <div>Rows</div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
    /*backgroundColor:"#111",*/
    minHeight: "100vh",
},
}));

export default Rows;




