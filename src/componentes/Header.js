import { makeStyles,AppBar, Toolbar, Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import logo from "../img/Logo.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Header = () => {

    const classes = useStyles();
    const history = useHistory();
    const [show, setShow] = useState(false);

    const hideHeader = () => {
        if (window.scrollY > 100){
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", hideHeader);
        return ()=>window.removeEventListener("scroll", hideHeader);
    }, [])

    return (
        <AppBar position="sticky" elevation={0} className={`${classes.root} ${show ? classes.transparent: ''}`}>
            <Toolbar className={classes.toolbar}>
                <IconButton oneClick={()=>history.push("/")}>
                    <img src={logo} alt="logo" className={classes.logo} />
                </IconButton>

                    <Avatar variant="square" style={{cursor:"pointer"}}  className={classes.avatar}
                    oneClick={()=>history.push("/profile")}/>

            </Toolbar>
        </AppBar>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#111",
        top: 0,
        left: 0,
        right: 0,
    },

    transparent: {
        backgroundColor: "transparent",
    },

    toolbar:{
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    logo: {
        width: "150px",
        cursor: "pointer",
    },

    avatar: {
        width: "60px",
        height: "60px",
        margin: "2px",
    },
}));

export default Header