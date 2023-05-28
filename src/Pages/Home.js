import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../componentes/Header";
import Banner from "../componentes/Banner";

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <Banner/>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
    backgroundColor:"#F1F1F1",
    minHeight: "100vh",
}}))
export default Home;