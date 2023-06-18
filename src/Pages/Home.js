import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../componentes/Header";
import Banner from "../componentes/Banner";
import Row from "../componentes/Row";
import requests from "../Requests";

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <Banner/>
            <Row title="NETFLIX ORIGINAL" fetchUrel={requests.fetchNetflixOiriginals}/>
            <Row title="TOP RATED" fetchUrel={requests.fetchTopRated}/>
            <Row title="ACTION MOVIES" fetchUrel={requests.fetchActionMovie}/>
            <Row title="HORROR MOVIES" fetchUrel={requests.fetchHorrorMovies}/>
            <Row title="COMEDY MOVIES" fetchUrel={requests.fetchComedyMovies}/>
            <Row title="ROMANCE MOVIES" fetchUrel={requests.fetchRomanceMovies}/>
            <Row title="DOCUMENTARIES" fetchUrel={requests.fetchDocumentaries}/>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
    backgroundColor:"#F1F1F1",
    minHeight: "100vh",
}}))
export default Home;