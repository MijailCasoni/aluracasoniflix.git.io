import styled from "styled-components";
import {InputBase} from "@material-ui/core";

export const CasflixInput = styled(InputBase)`
background-color: #FFFFFF;
z-Index: 30;
padding: 25.5px;
height: 30px;
border-radius: 5px;
border: none;
`
const handlewidth = wide => {
    switch (wide){
        case "fullWidth" : return "100%";
        case "medium" : return "260px";
        default : return "160px"
    }
}


export const CasflixButton = styled.button`
z-index: 15;
background-color: ${({color}) => color === "gray" ? "lightgray": "#2A7AE4" };
color: #ffff;
border-radius: ${({radius}) => radius ? "5px" : null};
text-transform: inherit;
padding: 15px;
font-size: 1.1rem;
outline: none;
cursor: pointer;
border: none;
width: ${({wide}) => handlewidth(wide) },
`