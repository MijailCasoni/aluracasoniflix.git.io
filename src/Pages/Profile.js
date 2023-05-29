import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Header from "../componentes/Header";
import netflixavatar from "../img/avatar-yellow.png"
import Plans from "../componentes/Plans";
import { CasflixButton } from "../styled/styledcomponents";


const Profile = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Typography variant="h3">Edit Profile</Typography>
            <div className={classes.info}>
                <img src={netflixavatar} alt="avatar"/>
                <div className={classes.details}>
                    <div className={classes.plans}>
                        <Typography variant="h6">email usuario</Typography>
                        <Typography variant="h5" gutterBottom>Plans</Typography>
                        <Plans cost={7.99}> Netflix Standar</Plans>
                        <Plans cost={11.99}> Netflix Basic</Plans>
                        <Plans cost={15.99}> Netflix Premium</Plans>
                        <CasflixButton>Sign Out</CasflixButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
    backgroundColor:"#111",
    minHeight: "100vh",
}}));


export default Profile;