import {Typography, makeStyles } from '@material-ui/core';
import logo from "../img/Logo.png";
import HeroBanner from "../img/banner.jpg"
import { CasflixButton} from "../styled/styledcomponents"
import { CasflixInput } from '../styled/styledcomponents';
import SignUp from './SignUp';
import {useState} from "react";


const Login = () => {
    const classes = useStyles();
    const[signIn, setSignIn] = useState(false);
    return (
        <div className={classes.root}>
            <img src={logo} alt="logo" className={classes.logo} />
            <CasflixButton radius className={classes.session}>Iniciar sesión</CasflixButton>
            <div className={classes.info}>
                {!signIn ? (
                <SignUp/>
                ): (
                    <>
                        <Typography variant='h4' gutterBottom>
                        Unlimited films, TV programs and more.
                        </Typography>
                        <Typography variant='h5' gutterBottom>
                            Watch anywhere. Cancel at any time.
                        </Typography>
                        <Typography variant='h6' gutterBottom>
                            Ready to watch ? Enter your email to create or restart your memership..
                        </Typography>
                        <div className={classes.inputBlock}>
                            <CasflixInput placeholder= "email addres" id="email" label="Email" />
                            <CasflixButton wide='medium' oneClick={() => setSignIn(true)} radius>GET STARTER</CasflixButton>
                        </div>
                    </>
                    )
                };
            </div>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
    backgroundImage: `url(${HeroBanner})`,
    objectFit: "no-repeat",
    height: "100vh",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    },

    logo: {
        width: "150px",
        position: "fixed",
        top: 20,
        left: 20,
        cursor: "pointer",
    },

    session: {
        position: "fixed",
        zIndex: 15,
        right: 20,
        top: 20,
    },

    info:{
        color: "#ffff",
        zIndex: 15,
        textAlign: "center",
        "& h4":{
            fontWeight:800,
        },
        "& h5":{
            fontWeight: 400,
        },

    }

    }));

export default Login