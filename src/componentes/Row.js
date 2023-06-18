import { Typography, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Row = ({title, fetchUrl, islaLargeRow}) => {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);

    const base_urel = "https://image.tmdb.org/t/p/original";
    
    useEffect(()=>{
        const fetchData= async () => {
            const request = await axios.get(fetchUrl)
        }

    },[fetchUrl])
    
    return (
        <div className= {classees.root} >
            <Typography variant='h4'>{title}</Typography>
            <div className= {classes.posters}>

            </div>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
    color: "#fff",
    minHeight: theme.spacing(4),
},
}));

export default Rows;




