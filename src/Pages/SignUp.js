import { Typography, makeStyles } from "@material-ui/core";
import { useState } from 'react';
import { CasflixButton, CasflixInput } from "../styled/styledcomponents";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const SignUp = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((authUser) => history.push("/"))
            .catch((err) => alert(err.message));
    };

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => history.push("/"))
            .catch((err) => alert(err.message));
    };


    return (
        <div className={classes.root}>
            <Typography variant='h5' align='left'>Sign In</Typography>
            <form className={classes.form}>
                <CasflixInput
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className={classes.email}
                />

                <CasflixInput
                    value={password}
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={classes.password}
                />

                <CasflixButton onClick={signIn}
                    type="submit"
                    wide="medium"
                    radius
                >
                    Sign In
                </CasflixButton>

                <Typography variant='subtitle2'>
                    New to Casoniflix? {"  "}
                    <span
                        className={classes.signupLink}
                        onClick={register}
                    >
                        Sign Up now. {" "}
                    </span>
                </Typography>
            </form>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "350px",
        width: "20rem",
        height: "25rem",
        background: "rgba(0,0,0,0.65)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    form: {
        width: "80%",
        display: "flex",
        flexDirection: "column",
    },

    email: {
        marginBottom: theme.spacing(2),
    },

    password: {
        marginBottom: theme.spacing(4),
    },

    signupLink: {
        color: "#fff",
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline",
        },
    },
}));

export default SignUp;