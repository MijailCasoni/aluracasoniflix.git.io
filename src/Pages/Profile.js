import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Header from "../componentes/Header";
import avatarflix from "../img/avatar-yellow.png"
import Plans from "../componentes/Plans";
import { CasflixButton} from "../styled/styledcomponents";


const Profile = () => {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <Header/>
            <Typography variant="h3">Configuración de cuenta</Typography>
            <div className = {classes.body}>
                <div className={classes.info}>  
                    <img src={avatarflix} alt="avatar"/>
                    <div className={classes.details}>
                        <div className={classes.plans}>
                            <Typography variant="h6">email usuario</Typography>
                            <Typography className={classes.plansText} variant="h5" gutterBottom>Planes</Typography>
                            <Plans cost={7.95}> Casoniflix Standar</Plans>
                            <Plans cost={11.95}> Casoniflix Básico</Plans>
                            <Plans wide="medium"  color="gray" cost={12.95}>Casoniflix Premium</Plans>
                            <CasflixButton wide="fullWidth" >Cerrar Sesión</CasflixButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fff",
        minHeight: "100vh",
        maxwidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        /*backgroundColor: "",*/
        "& h3":{
            padding: "10px",
        }
    },

    info: {
        widht: "100%",
        display: "flex",
        "& img": {
            height: "100px",
            [theme.breakpoints.down("sm")]:{
                display: "none",
            }
        }
    },

    details: {
        width: "100%",
        marginLeft: theme.spacing(3),
        "& h6": {
            backgroundColor: "#aaa",
            padding: theme.spacing(1),
            color: "#fff",
            marginBottom: theme.spacing(1),
            fontSize: "18px",
        },
    },

    plans:{
        width: "100%",
    },

    plansText: {
        borderBottom: "1px solid lightgray",
    },


}));


export default Profile;